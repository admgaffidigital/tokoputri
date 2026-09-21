/**
 * ============================================================
 * MODUL POS KASIR: RIWAYAT TRANSAKSI
 * Menampilkan riwayat & rekap transaksi kasir harian.
 * Filter tanggal, breakdown metode bayar, void transaksi.
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { el, setH, setIn, esc, fCur, showToast, showConfirm, sLoad, hLoad } from '../../core/utils.js';

const fRp  = (n) => fCur(n);
const fDate = (ms) => new Date(ms).toLocaleString('id-ID', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });

let histDateFilter = new Date().toISOString().slice(0, 10); // default: hari ini
let histTxList     = [];
let histUnsubscribe = null;

// ─── Load Transaksi POS dari Firestore ───────────────────────
const loadPOSHistory = () => {
    const loadEl = el('pos-hist-list');
    if (loadEl) setH('pos-hist-list', `<div class="flex justify-center py-12"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);

    if (histUnsubscribe) { histUnsubscribe(); histUnsubscribe = null; }

    const start = new Date(histDateFilter); start.setHours(0, 0, 0, 0);
    const end   = new Date(histDateFilter); end.setHours(23, 59, 59, 999);

    histUnsubscribe = db.collection('freshmart').doc('cms_data').collection('pos_transactions')
        .where('dateMs', '>=', start.getTime())
        .where('dateMs', '<=', end.getTime())
        .onSnapshot(snap => {
            // Sort client-side (hindari kebutuhan composite index Firestore)
            histTxList = snap.docs.map(d => d.data()).sort((a, b) => (b.dateMs || 0) - (a.dateMs || 0));
            renderHistList();
        }, (err) => {
            console.error('[POS History]', err);
            showToast('Gagal memuat riwayat kasir', 'error');
            histTxList = [];
            renderHistList();
        });
};

// ─── Render List ─────────────────────────────────────────────
const renderHistList = () => {
    // Rekap
    const totalOmset = histTxList.reduce((s, t) => s + (t.status !== 'void' ? (t.total || 0) : 0), 0);
    const paidCount  = histTxList.filter(t => t.status !== 'void').length;
    const voidCount  = histTxList.filter(t => t.status === 'void').length;
    const byMethod   = {};
    histTxList.filter(t => t.status !== 'void').forEach(t => {
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
            <p class="text-base font-black text-slate-800 dark:text-white">${histTxList.filter(t=>t.status!=='void').reduce((s,t)=>s+(t.items||[]).reduce((a,i)=>a+i.qty,0),0)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Void</p>
            <p class="text-base font-black text-red-500">${voidCount}</p>
        </div>
    </div>
    ${methodBreakdown ? `<div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 mb-4 space-y-1.5">${methodBreakdown}</div>` : ''}`;

    const listHTML = histTxList.length === 0
        ? `<div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600"><i class="fa-solid fa-receipt text-4xl mb-3"></i><p class="font-semibold text-sm">Belum ada transaksi</p><p class="text-xs mt-1">${histDateFilter}</p></div>`
        : histTxList.map(tx => {
            const isVoid = tx.status === 'void';
            const methodColor = { cash: 'emerald', qris: 'blue', transfer: 'violet', tempo: 'amber' }[tx.payment?.method] || 'slate';
            const methodLabel = { cash: 'Tunai', qris: 'QRIS', transfer: 'Transfer', tempo: 'Tempo' }[tx.payment?.method] || tx.payment?.method;
            return `<div class="bg-white dark:bg-slate-800 border ${isVoid ? 'border-red-200 dark:border-red-800 opacity-60' : 'border-slate-200 dark:border-slate-700'} rounded-2xl p-3 space-y-2 ${isVoid ? '' : 'hover:shadow-sm'} transition-all">
                <div class="flex items-start justify-between gap-2">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[10px] font-bold text-slate-500">${esc(tx.txId)}</span>
                            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-${methodColor}-100 dark:bg-${methodColor}-900/30 text-${methodColor}-700 dark:text-${methodColor}-400">${methodLabel}</span>
                            ${isVoid ? `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600">VOID</span>` : ''}
                        </div>
                        <p class="text-[10px] text-slate-400 mt-0.5">${fDate(tx.dateMs)} · ${esc(tx.customer?.name || 'Umum')}</p>
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
                    <button onclick="window.printPOSReceiptFromHist(${JSON.stringify(tx).replace(/"/g,'&quot;')})" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"><i class="fa-solid fa-print"></i>Cetak</button>
                    <button onclick="window.voidPOSTx('${esc(tx.txId)}')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-red-200 dark:border-red-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"><i class="fa-solid fa-ban"></i>Void</button>
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
        `Void transaksi ${txId}?\nTransaksi akan ditandai batal dan tidak dihitung dalam laporan.`,
        async () => {
            try {
                await db.collection('freshmart').doc('cms_data').collection('pos_transactions').doc(txId).update({ status: 'void' });
                showToast('Transaksi berhasil divoid', 'success');
            } catch (e) {
                showToast('Gagal void transaksi', 'error');
            }
        },
        'Ya, Void'
    );
};

// ─── Render Halaman Riwayat ───────────────────────────────────
export const renderPOSHistory = () => {
    setH('admin-content', `
    <div class="max-w-full pb-10 fade-in-scale">
        <!-- Back + Title -->
        <div class="flex items-center gap-3 mb-5">
            <button onclick="window.__openPOSMain?.()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all text-sm"><i class="fa-solid fa-arrow-left"></i></button>
            <div>
                <h2 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Riwayat Transaksi Kasir</h2>
                <p class="text-[10px] text-slate-400">Rekap & detail transaksi POS harian</p>
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
            <button onclick="window.posHistChangDate('${new Date().toISOString().slice(0,10)}')" class="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Hari Ini</button>
        </div>

        <!-- Rekap -->
        <div id="pos-hist-rekap"></div>

        <!-- List Transaksi -->
        <div id="pos-hist-list" class="space-y-3"></div>
    </div>`);

    window.posHistChangDate = (val) => {
        histDateFilter = val;
        const inp = el('pos-hist-date');
        if (inp) inp.value = val;
        loadPOSHistory();
    };
    window.voidPOSTx = voidPOSTx;
    window.printPOSReceiptFromHist = (tx) => {
        import('./pos.js').then(m => m.printPOSReceipt(tx));
    };
    window.__openPOSMain = () => import('./pos.js').then(m => m.renderPOS());

    loadPOSHistory();
};
