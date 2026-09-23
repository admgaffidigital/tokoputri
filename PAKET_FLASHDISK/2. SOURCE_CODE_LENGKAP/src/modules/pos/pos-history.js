/**
 * ============================================================
 * MODUL POS KASIR: RIWAYAT TRANSAKSI TERPADU
 * Menampilkan riwayat & rekap transaksi kasir harian.
 * Terhubung ke koleksi pesanan toko (freshmart_orders) & pos_transactions.
 * Filter tanggal lokal (timezone-aware), breakdown metode bayar, void transaksi.
 * ============================================================
 */

import { db, auth, firebase } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { el, setH, setIn, esc, fCur, showToast, showConfirm, sLoad, hLoad } from '../../core/utils.js';

const fRp = (n) => fCur(n);
const fDate = (ms) => new Date(ms).toLocaleString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

// ─── Format Tanggal Lokal (YYYY-MM-DD) Sesuai Zona Waktu Lokal ──
const getLocalDateStr = (d = new Date()) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
};

let histDateFilter = getLocalDateStr();
let histTxList = [];
let histUnsubscribe = null;

// ─── Detach Listener Saat Keluar/Logout ───────────────────────
export const detachPOSHistoryListener = () => {
    if (histUnsubscribe) {
        try { histUnsubscribe(); } catch (_) {}
        histUnsubscribe = null;
    }
};
window.detachPOSHistoryListener = detachPOSHistoryListener;

// ─── Load Transaksi POS dari Firestore ───────────────────────
const loadPOSHistory = () => {
    const loadEl = el('pos-hist-list');
    if (loadEl) setH('pos-hist-list', `<div class="flex justify-center py-12"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);

    detachPOSHistoryListener();

    // Verifikasi sesi: Admin CMS, sesi kasir aktif, atau auth Firebase diizinkan
    const isAdminView = !!el('view-admin');
    const isStaffOrAdmin = isAdminView || !!auth.currentUser || window.isAdm || window.__localIsAdm || !!window.getCashierSession?.();
    if (!isStaffOrAdmin) {
        if (loadEl) {
            setH('pos-hist-list', `
                <div class="flex flex-col items-center justify-center py-16 text-slate-400">
                    <i class="fa-solid fa-lock text-3xl mb-2 text-slate-300 dark:text-slate-600"></i>
                    <p class="font-bold text-xs">Akses Riwayat Memerlukan Login</p>
                    <p class="text-[11px] text-slate-400 mt-1">Silakan masuk sebagai Admin atau Kasir untuk melihat riwayat transaksi.</p>
                </div>
            `);
        }
        setH('pos-hist-rekap', '');
        return;
    }

    // 1. Hubungkan ke data pesanan toko terpadu (freshmart_orders)
    try {
        histUnsubscribe = db.collection('freshmart_orders')
            .where('source', '==', 'pos')
            .onSnapshot(async snap => {
                let orders = snap.docs.map(d => {
                    const data = d.data();
                    const tMs = data.dateMs || (data.timestamp?.toMillis ? data.timestamp.toMillis() : (data.dateString ? new Date(data.dateString).getTime() : 0));
                    return {
                        ...data,
                        txId: data.orderId || data.txId || d.id,
                        dateMs: tMs,
                        total: data.payment?.grandTotal ?? data.total ?? 0
                    };
                });

                // Gabungkan jika terdapat transaksi dari sub-koleksi pos_transactions (backward compatibility)
                try {
                    const legacySnap = await db.collection('freshmart').doc('cms_data').collection('pos_transactions').get();
                    if (!legacySnap.empty) {
                        const existingIds = new Set(orders.map(o => o.txId));
                        legacySnap.docs.forEach(ld => {
                            const lData = ld.data();
                            const lId = lData.txId || lData.orderId || ld.id;
                            if (!existingIds.has(lId)) {
                                orders.push({
                                    ...lData,
                                    txId: lId,
                                    dateMs: lData.dateMs || (lData.timestamp?.toMillis ? lData.timestamp.toMillis() : Date.now()),
                                    total: lData.total || lData.payment?.grandTotal || 0
                                });
                            }
                        });
                    }
                } catch(e) {}

                // Filter transaksi berdasarkan tanggal lokal yang dipilih
                histTxList = orders.filter(t => {
                    if (!t.dateMs) return false;
                    return getLocalDateStr(new Date(t.dateMs)) === histDateFilter;
                }).sort((a, b) => (b.dateMs || 0) - (a.dateMs || 0));

                renderHistList();
            }, (err) => {
                console.warn('[POS History] onSnapshot freshmart_orders gagal, fallback ke pos_transactions:', err);
                loadFallbackFromPosTx();
            });
    } catch(err) {
        console.warn('[POS History] Listener gagal inisialisasi, fallback:', err);
        loadFallbackFromPosTx();
    }
};

// ─── Fallback Loader dari pos_transactions ────────────────────
const loadFallbackFromPosTx = () => {
    db.collection('freshmart').doc('cms_data').collection('pos_transactions').get().then(snap => {
        const legacy = snap.docs.map(d => {
            const data = d.data();
            return {
                ...data,
                txId: data.txId || data.orderId || d.id,
                dateMs: data.dateMs || (data.timestamp?.toMillis ? data.timestamp.toMillis() : Date.now()),
                total: data.total || data.payment?.grandTotal || 0
            };
        });
        histTxList = legacy.filter(t => getLocalDateStr(new Date(t.dateMs)) === histDateFilter)
            .sort((a, b) => (b.dateMs || 0) - (a.dateMs || 0));
        renderHistList();
    }).catch(fallbackErr => {
        console.error('[POS History] Gagal memuat data fallback:', fallbackErr);
        histTxList = [];
        renderHistList();
    });
};

// ─── Render List & Rekap ──────────────────────────────────────
const renderHistList = () => {
    const isTxActive = (t) => t.status !== 'void' && t.status !== 'Dibatalkan';
    const totalOmset = histTxList.reduce((s, t) => s + (isTxActive(t) ? (t.total || 0) : 0), 0);
    const paidCount  = histTxList.filter(isTxActive).length;
    const voidCount  = histTxList.filter(t => !isTxActive(t)).length;
    const byMethod   = {};
    histTxList.filter(isTxActive).forEach(t => {
        const m = t.payment?.method || 'other';
        byMethod[m] = (byMethod[m] || 0) + (t.total || 0);
    });

    const methodLabels = { cash: 'Tunai', qris: 'QRIS', transfer: 'Transfer', tempo: 'Tempo' };
    const methodBreakdown = Object.entries(byMethod).map(([m, amt]) =>
        `<div class="flex justify-between text-xs"><span class="text-slate-500">${methodLabels[m] || m}</span><span class="font-bold text-slate-700 dark:text-slate-200">${fRp(amt)}</span></div>`
    ).join('');

    const rekapHTML = `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Total Omset</p>
            <p class="text-base font-black" style="color:var(--color-primary)">${fRp(totalOmset)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Transaksi</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${paidCount}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Produk Terjual</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${histTxList.filter(isTxActive).reduce((s,t)=>s+(t.items||[]).reduce((a,i)=>a+(parseFloat(i.qty)||0),0),0)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Void / Batal</p>
            <p class="text-base font-black text-red-500">${voidCount}</p>
        </div>
    </div>
    ${methodBreakdown ? `<div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 mb-4 space-y-1.5">${methodBreakdown}</div>` : ''}`;

    const listHTML = histTxList.length === 0
        ? `<div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600"><i class="fa-solid fa-receipt text-4xl mb-3"></i><p class="font-semibold text-sm">Belum ada transaksi</p><p class="text-xs mt-1">${histDateFilter}</p></div>`
        : histTxList.map(tx => {
            const isVoid = !isTxActive(tx);
            const methodKey = tx.payment?.method || 'cash';
            const methodColor = { cash: 'emerald', qris: 'purple', transfer: 'blue', tempo: 'amber' }[methodKey] || 'slate';
            const methodLabel = methodLabels[methodKey] || methodKey.toUpperCase();
            return `<div class="bg-white dark:bg-slate-800 border ${isVoid ? 'border-red-200 dark:border-red-800 opacity-60' : 'border-slate-200 dark:border-slate-700'} rounded-2xl p-3 space-y-2 ${isVoid ? '' : 'hover:shadow-sm'} transition-all">
                <div class="flex items-start justify-between gap-2">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[10px] font-bold text-slate-500">${esc(tx.txId)}</span>
                            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-${methodColor}-100 dark:bg-${methodColor}-900/30 text-${methodColor}-700 dark:text-${methodColor}-400">${methodLabel}</span>
                            ${isVoid ? `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600">VOID / BATAL</span>` : ''}
                        </div>
                        <p class="text-[10px] text-slate-400 mt-0.5">${fDate(tx.dateMs)} · ${esc(tx.customer?.name || tx.customerName || 'Pelanggan Umum')}</p>
                    </div>
                    <div class="text-right shrink-0">
                        <p class="font-black text-sm ${isVoid ? 'line-through text-slate-400' : ''}" style="${isVoid ? '' : 'color:var(--color-primary)'}">${fRp(tx.total)}</p>
                        ${tx.payment?.method === 'cash' ? `<p class="text-[10px] text-slate-400">Kembalian ${fRp(tx.payment.change||0)}</p>` : ''}
                    </div>
                </div>
                <div class="text-[10px] text-slate-400 flex flex-wrap gap-1">
                    ${(tx.items||[]).map(i => `<span class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded-md">${esc(i.name)} ×${i.qty}</span>`).join('')}
                </div>
                ${!isVoid ? `<div class="flex justify-end gap-2 pt-1">
                    <button onclick="window.printPOSReceiptFromHist(${JSON.stringify(tx).replace(/"/g,'&quot;')})" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer"><i class="fa-solid fa-print"></i>Cetak</button>
                    <button onclick="window.voidPOSTx('${esc(tx.txId)}')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-red-200 dark:border-red-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all cursor-pointer"><i class="fa-solid fa-ban"></i>Void</button>
                </div>` : ''}
            </div>`;
        }).join('');

    setH('pos-hist-rekap', rekapHTML);
    setH('pos-hist-list', listHTML);
};

// ─── Void Transaksi ──────────────────────────────────────────
export const voidPOSTx = (txId) => {
    showConfirm(
        'Void Transaksi',
        `Batalkan transaksi ${txId}?\nTransaksi akan ditandai batal dan tidak dihitung dalam laporan penjualan toko.`,
        async () => {
            try {
                sLoad('Memproses Void...');
                // 1. Update status di freshmart_orders
                try {
                    await db.collection('freshmart_orders').doc(txId).update({
                        status: 'Dibatalkan',
                        'payment.paymentStatus': 'batal'
                    });
                } catch(e) {}

                // 2. Update status di pos_transactions
                try {
                    await db.collection('freshmart').doc('cms_data').collection('pos_transactions').doc(txId).update({
                        status: 'void'
                    });
                } catch(e) {}

                // 3. Kembalikan stok jika useStock aktif
                const txObj = histTxList.find(t => t.txId === txId);
                const useStk = appData.store?.useStock === true || appData.store?.useStock === 'true';
                if (useStk && txObj && txObj.items) {
                    for (const ci of txObj.items) {
                        const pId = String(ci.id);
                        const prod = (appData.products || []).find(p => String(p.id) === pId);
                        if (!prod) continue;
                        const qty = parseFloat(ci.qty) || 0;
                        const updatePayload = {};
                        if (ci.variantName && prod.variants) {
                            const vIdx = prod.variants.findIndex(v => v.name === ci.variantName);
                            if (vIdx > -1) {
                                prod.variants[vIdx].stock = (parseFloat(prod.variants[vIdx].stock) || 0) + qty;
                                prod.variants[vIdx].totalSold = Math.max(0, (parseFloat(prod.variants[vIdx].totalSold) || 0) - qty);
                                updatePayload.variants = prod.variants;
                            }
                        } else {
                            prod.stock = (parseFloat(prod.stock) || 0) + qty;
                            prod.totalSold = Math.max(0, (parseFloat(prod.totalSold) || 0) - qty);
                            updatePayload.stock = prod.stock;
                        }
                        try {
                            await db.collection("freshmart").doc("cms_data").collection("products").doc(pId).update(updatePayload);
                        } catch(e) {}
                    }
                }

                hLoad();
                showToast('Transaksi berhasil dibatalkan (void)', 'success');
            } catch (e) {
                hLoad();
                showToast('Gagal membatalkan transaksi', 'error');
            }
        },
        'Ya, Batalkan'
    );
};

// ─── Render Halaman Riwayat ───────────────────────────────────
export const renderPOSHistory = () => {
    const mountId = el('admin-content') && !el('view-pos-cashier')?.classList.contains('active')
        ? 'admin-content'
        : (el('view-pos-cashier') ? 'view-pos-cashier' : 'admin-content');

    setH(mountId, `
    <div class="max-w-full h-full flex flex-col overflow-y-auto p-4 sm:p-6 pb-24 fade-in-scale">
        <!-- Back + Title -->
        <div class="flex items-center gap-3 mb-5">
            <button onclick="window.__openPOSMain?.()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all text-sm cursor-pointer flex items-center justify-center"><i class="fa-solid fa-arrow-left"></i></button>
            <div>
                <h2 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Riwayat Transaksi Kasir</h2>
                <p class="text-[10px] text-slate-400">Rekap & detail transaksi kasir toko harian</p>
            </div>
        </div>

        <!-- Filter Tanggal -->
        <div class="flex items-center gap-3 mb-4">
            <div class="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-xs">
                <i class="fa-solid fa-calendar-days text-slate-400 text-xs"></i>
                <input type="date" id="pos-hist-date" value="${histDateFilter}"
                    class="text-sm font-bold text-slate-800 dark:text-white bg-transparent focus:outline-none"
                    onchange="window.posHistChangDate(this.value)">
            </div>
            <button onclick="window.posHistChangDate('${getLocalDateStr()}')" class="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">Hari Ini</button>
        </div>

        <!-- Rekap -->
        <div id="pos-hist-rekap"></div>

        <!-- List Transaksi -->
        <div id="pos-hist-list" class="space-y-3"></div>
    </div>`);

    window.posHistChangDate = (val) => {
        histDateFilter = val || getLocalDateStr();
        const inp = el('pos-hist-date');
        if (inp) inp.value = histDateFilter;
        loadPOSHistory();
    };
    window.voidPOSTx = voidPOSTx;
    window.printPOSReceiptFromHist = (tx) => {
        import('./pos.js').then(m => m.printPOSReceipt(tx));
    };
    window.__openPOSMain = () => {
        detachPOSHistoryListener();
        if (el('view-pos-cashier')?.style.display !== 'none' && !el('view-admin')?.classList.contains('active')) {
            import('./pos.js').then(m => m.renderPOSStorefront());
        } else {
            import('./pos.js').then(m => m.renderPOS());
        }
    };

    loadPOSHistory();
};
