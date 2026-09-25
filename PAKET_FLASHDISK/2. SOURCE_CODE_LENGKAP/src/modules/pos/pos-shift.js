/**
 * ============================================================
 * MODUL POS KASIR: MANAJEMEN SHIFT & REKAP TUTUP KASIR CERDAS
 * (Shift Settlement, Cash Drawer Reconciliation & X/Z-Report)
 * 
 * Mengelola siklus kerja kasir:
 * 1. Buka Shift (Modal Awal / Cash Float)
 * 2. Akumulasi Transaksi Berjalan (Live Shift Stats)
 * 3. Ringkasan Shift Berjalan (X-Report)
 * 4. Tutup Shift Kasir (Z-Report & Hitung Fisik Laci / Denominasi)
 * 5. Deteksi Selisih Kas (Pas, Lebih/Surplus, Kurang/Defisit)
 * 6. Cetak Slip Rekap Shift Thermal POS (58mm / 80mm ESC/POS)
 * 7. Laporan & Riwayat Shift Cloud Firestore untuk Admin Toko
 * ============================================================
 */

import { db, firebase } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { el, setH, esc, showToast, showConfirm } from '../../core/utils.js';
import { getCashierSession } from './pos-auth.js';
import { getPrinterConfig } from '../print/printer-settings.js';

// Format Rupiah & Angka Helper POS
export const fRp = n => 'Rp ' + (Math.round(parseFloat(n) || 0)).toLocaleString('id-ID');
export const fNum = n => (Math.round(parseFloat(n) || 0)).toLocaleString('id-ID');

// ─── State Shift Aktif ───────────────────────────────────────
const SHIFT_STORAGE_KEY = 'pos_active_shift';
const LAST_CLOSED_SHIFT_KEY = 'pos_last_closed_shift';

let _activeShift = null;

export const getActiveShift = () => {
    if (_activeShift) return _activeShift;
    try {
        const raw = localStorage.getItem(SHIFT_STORAGE_KEY);
        if (raw) {
            _activeShift = JSON.parse(raw);
            return _activeShift;
        }
    } catch (e) {
        console.warn('[POS Shift] Gagal membaca active shift:', e);
    }
    return null;
};

export const saveActiveShift = (shift) => {
    _activeShift = shift;
    try {
        if (shift) localStorage.setItem(SHIFT_STORAGE_KEY, JSON.stringify(shift));
        else localStorage.removeItem(SHIFT_STORAGE_KEY);
    } catch (e) {}
};

export const clearActiveShift = () => {
    _activeShift = null;
    try { localStorage.removeItem(SHIFT_STORAGE_KEY); } catch (e) {}
};

export const getLastClosedShift = () => {
    try {
        const raw = localStorage.getItem(LAST_CLOSED_SHIFT_KEY);
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
};

export const saveLastClosedShift = (shift) => {
    try {
        localStorage.setItem(LAST_CLOSED_SHIFT_KEY, JSON.stringify(shift));
    } catch (e) {}
};

export const isShiftActive = () => {
    const s = getActiveShift();
    return !!(s && s.status === 'open');
};

// ─── Audio Chimes Shift Kasir (Web Audio API) ────────────────
export const playShiftChime = (type = 'open') => {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const now = ctx.currentTime;

        if (type === 'open') {
            // Bright cheerful arpeggio (C5 -> E5 -> G5 -> C6)
            const freqs = [523.25, 659.25, 783.99, 1046.50];
            freqs.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const startTime = now + (idx * 0.07);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.09, startTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.16);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + 0.16);
            });
            setTimeout(() => { ctx.close().catch(() => {}); }, 600);
        } else {
            // Grand settlement chord (G5+B5 -> C6+E6)
            const chords = [
                { f: [783.99, 987.77], t: now, d: 0.14 },
                { f: [1046.50, 1318.51], t: now + 0.12, d: 0.35 }
            ];
            chords.forEach(c => {
                c.f.forEach(freq => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, c.t);
                    gain.gain.setValueAtTime(0.08, c.t);
                    gain.gain.exponentialRampToValueAtTime(0.0001, c.t + c.d);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(c.t);
                    osc.stop(c.t + c.d);
                });
            });
            setTimeout(() => { ctx.close().catch(() => {}); }, 700);
        }
    } catch (e) {}
};

// ─── Format Durasi Kerja ─────────────────────────────────────
export const formatShiftDuration = (startMs, endMs = Date.now()) => {
    if (!startMs) return '-';
    const diffMs = Math.max(0, endMs - startMs);
    const totalMinutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours > 0) {
        return `${hours} Jam ${minutes} Menit`;
    }
    return `${minutes} Menit`;
};

// ─── Nomor Seri Shift ────────────────────────────────────────
const generateShiftNumber = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const rand = Math.floor(100 + Math.random() * 900);
    return `SHF-${y}${m}${day}-${rand}`;
};

// ─── Buka Shift Baru (Open Shift) ────────────────────────────
export const openPOSOpenShiftModal = () => {
    const cashierSession = getCashierSession();
    const cashierName = cashierSession?.name || (window.isAdm ? 'Admin Seller' : 'Kasir Toko');
    const nowStr = new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' });

    // Hapus modal lama jika ada
    document.getElementById('pos-open-shift-modal')?.remove();

    const html = `
    <div id="pos-open-shift-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(5px)">
        <div id="pos-open-shift-box" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md border border-slate-200/90 dark:border-slate-800 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cash-register"></i>
                    </div>
                    <div>
                        <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Buka Shift Kasir Baru</h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Modal awal laci &amp; pembukaan kas</p>
                    </div>
                </div>
                <button onclick="window.closePOSOpenShiftModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-300 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4">
                <!-- Info Petugas & Waktu -->
                <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                    <div class="flex items-center gap-2">
                        <div class="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">
                            <i class="fa-solid fa-user-check"></i>
                        </div>
                        <div>
                            <span class="text-[10px] text-slate-400 block font-medium">Kasir Bertugas</span>
                            <span class="font-bold text-slate-800 dark:text-slate-200">${esc(cashierName)}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] text-slate-400 block font-medium">Waktu Buka</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 text-[11px]">${esc(nowStr)}</span>
                    </div>
                </div>

                <!-- Input Modal Awal / Cash Float -->
                <div class="space-y-1.5">
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center justify-between">
                        <span class="flex items-center gap-1.5">
                            <i class="fa-solid fa-money-bill-wave text-emerald-500"></i>
                            <span>Modal Awal Laci (Uang Kembalian)</span>
                        </span>
                        <span class="text-[10px] font-normal text-slate-400">Cash Float</span>
                    </label>
                    <div class="relative">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-sm text-slate-400 pointer-events-none">Rp</span>
                        <input id="pos-shift-start-cash-input" type="number" min="0" step="1000" placeholder="0" 
                            class="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-black text-base focus:outline-none focus:border-[var(--color-primary)] transition-all text-right"
                            value="100000" oninput="window.posUpdateStartCashChips()">
                    </div>
                    <!-- Quick Amount Chips (Reactive Theme Sync) -->
                    <div id="pos-shift-preset-chips" class="flex items-center gap-1.5 flex-wrap pt-1">
                        <button type="button" data-amount="0" onclick="window.posSetStartCashPreset(0)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">Rp 0</button>
                        <button type="button" data-amount="50000" onclick="window.posSetStartCashPreset(50000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">50.000</button>
                        <button type="button" data-amount="100000" onclick="window.posSetStartCashPreset(100000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer">100.000</button>
                        <button type="button" data-amount="200000" onclick="window.posSetStartCashPreset(200000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">200.000</button>
                        <button type="button" data-amount="500000" onclick="window.posSetStartCashPreset(500000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">500.000</button>
                    </div>
                </div>

                <!-- Catatan Pembukaan (Opsional) -->
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-200">
                        <i class="fa-regular fa-clipboard text-slate-400 mr-1"></i>Catatan Pembukaan (Opsional)
                    </label>
                    <input id="pos-shift-start-notes-input" type="text" placeholder="Contoh: Uang pecahan kecil lengkap, shift pagi"
                        class="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]">
                </div>

                <!-- Hint Info Box -->
                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-2.5 text-[11px] text-amber-800 dark:text-amber-300">
                    <i class="fa-solid fa-lightbulb text-amber-500 mt-0.5 shrink-0"></i>
                    <span>Modal awal akan dihitung bersama total penjualan tunai saat Anda melakukan tutup kasir (settlement) di akhir shift.</span>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center gap-2">
                <button onclick="window.closePOSOpenShiftModal()" class="flex-1 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.confirmStartPOSShift()" class="flex-[2] py-3 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-95" style="background:var(--color-primary)">
                    <i class="fa-solid fa-check"></i>
                    <span>Buka Shift Sekarang</span>
                </button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);

    const m = el('pos-open-shift-modal');
    const box = el('pos-open-shift-box');
    if (!m || !box) return;

    m.classList.remove('pointer-events-none');
    requestAnimationFrame(() => {
        m.classList.remove('opacity-0');
        box.classList.remove('translate-y-8', 'scale-95');
    });

    setTimeout(() => {
        const inp = el('pos-shift-start-cash-input');
        if (inp) { inp.focus(); inp.select(); }
    }, 250);
};

export const closePOSOpenShiftModal = () => {
    const m = el('pos-open-shift-modal');
    const box = el('pos-open-shift-box');
    if (!m) return;
    m.classList.add('opacity-0', 'pointer-events-none');
    if (box) box.classList.add('translate-y-8', 'scale-95');
    setTimeout(() => { m.remove(); }, 280);
};

export const posUpdateStartCashChips = () => {
    const val = parseFloat(el('pos-shift-start-cash-input')?.value) || 0;
    document.querySelectorAll('.pos-preset-chip').forEach(chip => {
        const amt = parseFloat(chip.dataset.amount);
        if (amt === val) {
            chip.className = 'pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer';
        } else {
            chip.className = 'pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer';
        }
    });
};

export const posSetStartCashPreset = (amount) => {
    const inp = el('pos-shift-start-cash-input');
    if (inp) {
        inp.value = amount;
        inp.focus();
        inp.select();
    }
    posUpdateStartCashChips();
};

export const confirmStartPOSShift = async () => {
    const inpCash = el('pos-shift-start-cash-input');
    const inpNotes = el('pos-shift-start-notes-input');
    const startingCash = parseFloat(inpCash?.value) || 0;
    const notes = inpNotes?.value?.trim() || '';

    const cashierSession = getCashierSession();
    const cashierUid = cashierSession?.uid || (window.isAdm ? 'admin' : 'cashier-anon');
    const cashierName = cashierSession?.name || (window.isAdm ? 'Admin Seller' : 'Kasir Toko');
    const cashierEmail = cashierSession?.email || '';

    const shiftData = {
        id: 'SHF-' + Date.now(),
        shiftNo: generateShiftNumber(),
        cashierUid,
        cashierName,
        cashierEmail,
        startTime: Date.now(),
        startTimeISO: new Date().toISOString(),
        startingCash,
        startNotes: notes,
        status: 'open',
        txCount: 0,
        itemCount: 0,
        totalSales: 0,
        cashSales: 0,
        qrisSales: 0,
        bankSales: 0,
        tempoSales: 0,
        discountTotal: 0,
        pointsTotal: 0,
        orders: []
    };

    saveActiveShift(shiftData);

    // Sync ke Firestore secara non-blocking
    try {
        db.collection('freshmart').doc('cms_data').collection('pos_shifts').doc(shiftData.id).set(shiftData).catch(() => {});
        db.collection('pos_shifts').doc(shiftData.id).set(shiftData).catch(() => {});
    } catch (_) {}

    closePOSOpenShiftModal();
    playShiftChime('open');
    showToast(`Shift kasir dibuka! Modal awal: ${fRp(startingCash)} 🎉`, 'success');

    // Perbarui badge indikator shift di UI
    if (typeof window.renderShiftHeaderBadge === 'function') {
        window.renderShiftHeaderBadge();
    }
};

// ─── Rekam Transaksi Penjualan ke Shift Aktif ────────────────
export const recordTransactionToShift = (orderData) => {
    try {
        const shift = getActiveShift();
        if (!shift || shift.status !== 'open') return;

        const total = parseFloat(orderData.total) || 0;
        const method = orderData.payment?.method || 'cash';
        const dp = parseFloat(orderData.payment?.dp) || 0;
        const tempoBal = parseFloat(orderData.payment?.tempoBalance) || 0;
        const discount = parseFloat(orderData.globalDiscount) || 0;
        const points = parseFloat(orderData.pointsEarned) || 0;

        const itemsQty = (orderData.items || []).reduce((acc, i) => acc + (parseFloat(i.qty) || 1), 0);

        shift.txCount = (shift.txCount || 0) + 1;
        shift.itemCount = (shift.itemCount || 0) + itemsQty;
        shift.totalSales = (shift.totalSales || 0) + total;
        shift.discountTotal = (shift.discountTotal || 0) + discount;
        shift.pointsTotal = (shift.pointsTotal || 0) + points;

        if (method === 'cash') {
            shift.cashSales = (shift.cashSales || 0) + total;
        } else if (method === 'qris') {
            shift.qrisSales = (shift.qrisSales || 0) + total;
        } else if (method === 'bank') {
            shift.bankSales = (shift.bankSales || 0) + total;
        } else if (method === 'tempo') {
            if (dp > 0) shift.cashSales = (shift.cashSales || 0) + dp;
            shift.tempoSales = (shift.tempoSales || 0) + tempoBal;
        }

        if (!Array.isArray(shift.orders)) shift.orders = [];
        if (orderData.txId || orderData.id) {
            shift.orders.push(orderData.txId || orderData.id);
        }

        saveActiveShift(shift);

        // Update ke Firestore secara non-blocking
        try {
            const updatePayload = {
                txCount: shift.txCount,
                itemCount: shift.itemCount,
                totalSales: shift.totalSales,
                cashSales: shift.cashSales,
                qrisSales: shift.qrisSales,
                bankSales: shift.bankSales,
                tempoSales: shift.tempoSales,
                discountTotal: shift.discountTotal,
                pointsTotal: shift.pointsTotal,
                orders: shift.orders,
                lastUpdatedISO: new Date().toISOString()
            };
            db.collection('freshmart').doc('cms_data').collection('pos_shifts').doc(shift.id).update(updatePayload).catch(() => {});
            db.collection('pos_shifts').doc(shift.id).update(updatePayload).catch(() => {});
        } catch (_) {}

        // Refresh badge jika sedang terbuka
        if (typeof window.renderShiftHeaderBadge === 'function') {
            window.renderShiftHeaderBadge();
        }
    } catch (err) {
        console.warn('[POS Shift] Gagal update transaksi ke shift:', err);
    }
};

// ─── Modal Ringkasan Shift Berjalan (X-Report) ───────────────
export const openShiftSummaryModal = () => {
    const shift = getActiveShift();
    if (!shift) {
        openPOSOpenShiftModal();
        return;
    }

    document.getElementById('pos-shift-summary-modal')?.remove();

    const expectedCash = (parseFloat(shift.startingCash) || 0) + (parseFloat(shift.cashSales) || 0);
    const durationStr = formatShiftDuration(shift.startTime);
    const startTimeStr = new Date(shift.startTime).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });

    const html = `
    <div id="pos-shift-summary-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(5px)">
        <div id="pos-shift-summary-box" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200/90 dark:border-slate-800 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col max-h-[92vh]">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0" style="background:var(--color-primary)">
                        <i class="fa-solid fa-chart-pie"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Ringkasan Shift Kasir</h3>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">X-Report</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Shift aktif: <b>${esc(shift.shiftNo || shift.id)}</b></p>
                    </div>
                </div>
                <button onclick="window.closePOSShiftSummaryModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-300 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1">
                <!-- Info Kasir & Durasi -->
                <div class="grid grid-cols-2 gap-2.5">
                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-[10px] text-slate-400 block font-medium">Kasir Bertugas</span>
                        <span class="font-bold text-slate-800 dark:text-slate-200 text-xs truncate block">${esc(shift.cashierName)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">Mulai: ${esc(startTimeStr)}</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-[10px] text-slate-400 block font-medium">Durasi Kerja</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400 text-xs block">${esc(durationStr)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">${shift.txCount || 0} Struk / ${shift.itemCount || 0} Pcs</span>
                    </div>
                </div>

                <!-- Kartu Utama: Kas di Laci Saat Ini (Expected Cash) -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-2 border-emerald-500/30 flex items-center justify-between">
                    <div>
                        <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">Uang Kas di Laci Seharusnya</span>
                        <span class="text-[10px] text-slate-500 dark:text-slate-400">Modal Awal (${fRp(shift.startingCash)}) + Penjualan Tunai (${fRp(shift.cashSales || 0)})</span>
                    </div>
                    <div class="text-right">
                        <span class="text-xl font-black text-emerald-600 dark:text-emerald-400 block">${fRp(expectedCash)}</span>
                    </div>
                </div>

                <!-- Rincian Omset Penjualan -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-receipt text-slate-400"></i>Rincian Metode Pembayaran</span>
                        <span class="text-slate-500 text-[11px]">Total Omset: <b style="color:var(--color-primary)">${fRp(shift.totalSales || 0)}</b></span>
                    </div>

                    <div class="space-y-1.5 text-xs">
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-wave"></i></span>
                                <span>Tunai (Cash)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${fRp(shift.cashSales || 0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-qrcode"></i></span>
                                <span>QRIS Dinamis</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${fRp(shift.qrisSales || 0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-building-columns"></i></span>
                                <span>Transfer Bank</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${fRp(shift.bankSales || 0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-clock-rotate-left"></i></span>
                                <span>Tempo / Piutang (Sisa)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${fRp(shift.tempoSales || 0)}</span>
                        </div>
                    </div>
                </div>

                <!-- Diskon & Poin -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-800/40">
                        <span class="text-[10px] text-rose-500 block font-bold">Total Diskon Diberikan</span>
                        <span class="font-black text-rose-600 dark:text-rose-400 text-xs">${fRp(shift.discountTotal || 0)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40">
                        <span class="text-[10px] text-amber-600 block font-bold">Poin Member Dikreditkan</span>
                        <span class="font-black text-amber-600 dark:text-amber-400 text-xs">+${shift.pointsTotal || 0} Poin</span>
                    </div>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center gap-2">
                <button onclick="window.printShiftSettlementReceipt(window.getActiveShift(), true)" class="px-3.5 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95" title="Cetak Slip Sementara (X-Report)">
                    <i class="fa-solid fa-print"></i>
                    <span class="hidden sm:inline">Cetak X-Report</span>
                </button>
                <button onclick="window.closePOSShiftSummaryModal()" class="flex-1 py-3 rounded-2xl bg-slate-200/70 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs transition-all cursor-pointer active:scale-95">
                    <span class="sm:hidden">Lanjut Shift</span>
                    <span class="hidden sm:inline">Lanjut Jaga Kasir</span>
                </button>
                <button onclick="window.closePOSShiftSummaryModal(); window.openPOSCloseShiftModal();" class="flex-1 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-lock"></i>
                    <span>Tutup Shift</span>
                </button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);

    const m = el('pos-shift-summary-modal');
    const box = el('pos-shift-summary-box');
    if (!m || !box) return;

    m.classList.remove('pointer-events-none');
    requestAnimationFrame(() => {
        m.classList.remove('opacity-0');
        box.classList.remove('translate-y-8', 'scale-95');
    });
};

export const closePOSShiftSummaryModal = () => {
    const m = el('pos-shift-summary-modal');
    const box = el('pos-shift-summary-box');
    if (!m) return;
    m.classList.add('opacity-0', 'pointer-events-none');
    if (box) box.classList.add('translate-y-8', 'scale-95');
    setTimeout(() => { m.remove(); }, 280);
};

// ─── Modal Tutup Shift & Rekonsiliasi Kas Laci (Z-Report) ─────
export const openPOSCloseShiftModal = () => {
    const shift = getActiveShift();
    if (!shift) {
        showToast('Tidak ada shift kasir yang aktif saat ini.', 'warning');
        return;
    }

    document.getElementById('pos-close-shift-modal')?.remove();

    const expectedCash = (parseFloat(shift.startingCash) || 0) + (parseFloat(shift.cashSales) || 0);

    const html = `
    <div id="pos-close-shift-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.75);backdrop-filter:blur(6px)">
        <div id="pos-close-shift-box" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200/90 dark:border-slate-800 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col max-h-[94vh]">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Rekap &amp; Tutup Shift Kasir</h3>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">Z-Report</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Rekonsiliasi uang kas di laci kasir</p>
                    </div>
                </div>
                <button onclick="window.closePOSCloseShiftModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-300 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1">
                <!-- Info Uang Kas Sistem -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                        <span class="text-[10px] uppercase font-black text-slate-400 block tracking-wider">Uang Kas Sistem (Seharusnya di Laci)</span>
                        <div class="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                            Modal Awal: <b>${fRp(shift.startingCash)}</b> + Penjualan Tunai: <b>${fRp(shift.cashSales || 0)}</b>
                        </div>
                    </div>
                    <div class="text-right">
                        <span id="pos-close-expected-cash" class="text-lg font-black text-slate-900 dark:text-white">${fRp(expectedCash)}</span>
                    </div>
                </div>

                <!-- Pengalih Mode Hitung Fisik (Quick vs Denominasi) -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <label class="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                            <i class="fa-solid fa-calculator text-emerald-500"></i>
                            <span>Hitung Uang Fisik di Laci</span>
                        </label>
                        <div class="flex items-center bg-slate-200 dark:bg-slate-800 rounded-xl p-0.5 text-[10px]">
                            <button type="button" id="pos-count-tab-quick" onclick="window.setPOSCountMode('quick')" class="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-xs transition-all cursor-pointer">Input Cepat</button>
                            <button type="button" id="pos-count-tab-denom" onclick="window.setPOSCountMode('denom')" class="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer">Lembaran (Denominasi)</button>
                        </div>
                    </div>

                    <!-- Panel Input Cepat -->
                    <div id="pos-count-panel-quick" class="space-y-1.5">
                        <div class="relative">
                            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-sm text-slate-400 pointer-events-none">Rp</span>
                            <input id="pos-shift-actual-cash-input" type="number" min="0" step="1000" placeholder="0" 
                                class="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-black text-base focus:outline-none focus:border-[var(--color-primary)] transition-all text-right"
                                value="${expectedCash}" oninput="window.updatePOSShiftDiscrepancy()">
                        </div>
                    </div>

                    <!-- Panel Kalkulator Denominasi -->
                    <div id="pos-count-panel-denom" class="hidden space-y-2 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/70 dark:border-slate-700/60">
                        <div class="grid grid-cols-2 gap-2 text-xs">
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 100.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-100k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 50.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-50k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 20.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-20k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 10.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-10k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 5.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-5k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 2.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-2k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 1.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-1k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Koin / Receh</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">Rp</span>
                                    <input type="number" min="0" id="denom-coin" placeholder="0" class="w-14 sm:w-20 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Kartu Status Selisih Kas (Live Dynamic Calculation) -->
                <div id="pos-discrepancy-card" class="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40">
                    <div class="flex items-center gap-3">
                        <div id="pos-discrepancy-icon" class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div>
                            <span id="pos-discrepancy-status" class="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block">SEIMBANG (PAS)</span>
                            <span id="pos-discrepancy-desc" class="text-[11px] text-emerald-700 dark:text-emerald-400 block">Uang fisik laci kasir cocok dengan transaksi sistem</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] font-bold text-slate-400 block uppercase">Selisih Kas</span>
                        <span id="pos-discrepancy-amount" class="text-base font-black text-emerald-600 dark:text-emerald-400">Rp 0</span>
                    </div>
                </div>

                <!-- Catatan Penutupan Shift -->
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-200">
                        <i class="fa-regular fa-comment-dots text-slate-400 mr-1"></i>Catatan Penutupan Shift
                    </label>
                    <textarea id="pos-shift-close-notes" rows="2" placeholder="Catatan mengenai kondisi laci, sisa kembalian, atau alasan jika terdapat selisih kas..."
                        class="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]"></textarea>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center gap-2">
                <button onclick="window.closePOSCloseShiftModal()" class="flex-1 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.confirmClosePOSShift()" class="flex-[2] py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <i class="fa-solid fa-lock"></i>
                    <span>Konfirmasi &amp; Tutup Shift</span>
                </button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);

    const m = el('pos-close-shift-modal');
    const box = el('pos-close-shift-box');
    if (!m || !box) return;

    m.classList.remove('pointer-events-none');
    requestAnimationFrame(() => {
        m.classList.remove('opacity-0');
        box.classList.remove('translate-y-8', 'scale-95');
    });

    setTimeout(() => {
        const inp = el('pos-shift-actual-cash-input');
        if (inp) { inp.focus(); inp.select(); }
    }, 250);
};

export const closePOSCloseShiftModal = () => {
    const m = el('pos-close-shift-modal');
    const box = el('pos-close-shift-box');
    if (!m) return;
    m.classList.add('opacity-0', 'pointer-events-none');
    if (box) box.classList.add('translate-y-8', 'scale-95');
    setTimeout(() => { m.remove(); }, 280);
};

export const setPOSCountMode = (mode) => {
    const tabQuick = el('pos-count-tab-quick');
    const tabDenom = el('pos-count-tab-denom');
    const panelQuick = el('pos-count-panel-quick');
    const panelDenom = el('pos-count-panel-denom');

    if (mode === 'quick') {
        if (tabQuick) { tabQuick.className = 'px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600'; }
        if (tabDenom) { tabDenom.className = 'px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent'; }
        if (panelQuick) panelQuick.classList.remove('hidden');
        if (panelDenom) panelDenom.classList.add('hidden');
    } else {
        if (tabQuick) { tabQuick.className = 'px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent'; }
        if (tabDenom) { tabDenom.className = 'px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600'; }
        if (panelQuick) panelQuick.classList.add('hidden');
        if (panelDenom) panelDenom.classList.remove('hidden');
        calcPOSDenominations();
    }
};

export const calcPOSDenominations = () => {
    const d100 = (parseFloat(el('denom-100k')?.value) || 0) * 100000;
    const d50  = (parseFloat(el('denom-50k')?.value) || 0) * 50000;
    const d20  = (parseFloat(el('denom-20k')?.value) || 0) * 20000;
    const d10  = (parseFloat(el('denom-10k')?.value) || 0) * 10000;
    const d5   = (parseFloat(el('denom-5k')?.value) || 0) * 5000;
    const d2   = (parseFloat(el('denom-2k')?.value) || 0) * 2000;
    const d1   = (parseFloat(el('denom-1k')?.value) || 0) * 1000;
    const coin = parseFloat(el('denom-coin')?.value) || 0;

    const total = d100 + d50 + d20 + d10 + d5 + d2 + d1 + coin;

    const inp = el('pos-shift-actual-cash-input');
    if (inp) inp.value = total;

    updatePOSShiftDiscrepancy();
};

export const updatePOSShiftDiscrepancy = () => {
    const shift = getActiveShift();
    if (!shift) return;

    const expectedCash = (parseFloat(shift.startingCash) || 0) + (parseFloat(shift.cashSales) || 0);
    const actualCash = parseFloat(el('pos-shift-actual-cash-input')?.value) || 0;
    const diff = actualCash - expectedCash;

    const card = el('pos-discrepancy-card');
    const icon = el('pos-discrepancy-icon');
    const status = el('pos-discrepancy-status');
    const desc = el('pos-discrepancy-desc');
    const amount = el('pos-discrepancy-amount');

    if (!card || !icon || !status || !desc || !amount) return;

    if (diff === 0) {
        card.className = 'p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40';
        icon.className = 'w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600';
        icon.innerHTML = '<i class="fa-solid fa-check"></i>';
        status.className = 'text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block';
        status.innerText = 'SEIMBANG (PAS)';
        desc.className = 'text-[11px] text-emerald-700 dark:text-emerald-400 block';
        desc.innerText = 'Uang fisik laci kasir cocok dengan transaksi sistem';
        amount.className = 'text-base font-black text-emerald-600 dark:text-emerald-400';
        amount.innerText = 'Rp 0';
    } else if (diff > 0) {
        card.className = 'p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-amber-50 dark:bg-amber-950/20 border-amber-500/40';
        icon.className = 'w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-amber-500';
        icon.innerHTML = '<i class="fa-solid fa-plus"></i>';
        status.className = 'text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block';
        status.innerText = 'LEBIH (SURPLUS)';
        desc.className = 'text-[11px] text-amber-700 dark:text-amber-400 block';
        desc.innerText = 'Terdapat kelebihan uang fisik di laci kasir';
        amount.className = 'text-base font-black text-amber-600 dark:text-amber-400';
        amount.innerText = '+ ' + fRp(diff);
    } else {
        card.className = 'p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-rose-50 dark:bg-rose-950/20 border-rose-500/40';
        icon.className = 'w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600';
        icon.innerHTML = '<i class="fa-solid fa-minus"></i>';
        status.className = 'text-xs font-black uppercase tracking-wider text-rose-800 dark:text-rose-300 block';
        status.innerText = 'KURANG (DEFISIT)';
        desc.className = 'text-[11px] text-rose-700 dark:text-rose-400 block';
        desc.innerText = 'Terdapat kekurangan uang fisik di laci kasir';
        amount.className = 'text-base font-black text-rose-600 dark:text-rose-400';
        amount.innerText = '- ' + fRp(Math.abs(diff));
    }
};

export const confirmClosePOSShift = async () => {
    const shift = getActiveShift();
    if (!shift) return;

    const expectedCash = (parseFloat(shift.startingCash) || 0) + (parseFloat(shift.cashSales) || 0);
    const actualCash = parseFloat(el('pos-shift-actual-cash-input')?.value) || 0;
    const diff = actualCash - expectedCash;
    const closingNotes = el('pos-shift-close-notes')?.value?.trim() || '';

    const denominations = {
        d100k: parseFloat(el('denom-100k')?.value) || 0,
        d50k:  parseFloat(el('denom-50k')?.value) || 0,
        d20k:  parseFloat(el('denom-20k')?.value) || 0,
        d10k:  parseFloat(el('denom-10k')?.value) || 0,
        d5k:   parseFloat(el('denom-5k')?.value) || 0,
        d2k:   parseFloat(el('denom-2k')?.value) || 0,
        d1k:   parseFloat(el('denom-1k')?.value) || 0,
        coin:  parseFloat(el('denom-coin')?.value) || 0
    };

    const endTime = Date.now();
    const durationStr = formatShiftDuration(shift.startTime, endTime);

    const closedShift = {
        ...shift,
        status: 'closed',
        endTime,
        endTimeISO: new Date(endTime).toISOString(),
        duration: durationStr,
        expectedCash,
        actualCash,
        difference: diff,
        discrepancyStatus: diff === 0 ? 'balanced' : (diff > 0 ? 'surplus' : 'deficit'),
        denominations,
        closingNotes
    };

    // Simpan ke Firestore pos_shifts
    try {
        await db.collection('freshmart').doc('cms_data').collection('pos_shifts').doc(closedShift.id).set(closedShift, { merge: true });
        await db.collection('pos_shifts').doc(closedShift.id).set(closedShift, { merge: true });
    } catch (e) {
        console.warn('[POS Shift] Simpan Firestore:', e);
    }

    // Bersihkan sesi aktif & simpan riwayat terakhir
    clearActiveShift();
    saveLastClosedShift(closedShift);

    closePOSCloseShiftModal();
    playShiftChime('close');

    // Tampilkan modal selesai tutup shift dengan tombol Cetak Slip Thermal
    showClosedShiftSuccessModal(closedShift);

    // Refresh UI
    if (typeof window.renderShiftHeaderBadge === 'function') {
        window.renderShiftHeaderBadge();
    }
};

// ─── Modal Sukses Tutup Shift ─────────────────────────────────
const showClosedShiftSuccessModal = (closedShift) => {
    document.getElementById('pos-closed-success-modal')?.remove();

    const diff = closedShift.difference || 0;
    const diffBadge = diff === 0
        ? `<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">PAS (Rp 0)</span>`
        : (diff > 0
            ? `<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">LEBIH (+${fRp(diff)})</span>`
            : `<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">KURANG (-${fRp(Math.abs(diff))})</span>`);

    const html = `
    <div id="pos-closed-success-modal" class="fixed inset-0 z-[10002] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.8);backdrop-filter:blur(6px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md border border-slate-200/90 dark:border-slate-800 overflow-hidden text-center p-6 space-y-4">
            <div class="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-3xl mx-auto shadow-inner">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <div>
                <h3 class="text-base font-black text-slate-800 dark:text-white uppercase tracking-wider">Shift Kasir Berhasil Ditutup</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Laporan rekap Z-Report telah tersimpan aman di database toko</p>
            </div>

            <!-- Rekap Kartu Ringkas -->
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-2 text-left">
                <div class="flex justify-between"><span>No Shift:</span><span class="font-bold font-mono">#${esc(closedShift.shiftNo || closedShift.id)}</span></div>
                <div class="flex justify-between"><span>Kasir:</span><span class="font-bold">${esc(closedShift.cashierName)}</span></div>
                <div class="flex justify-between"><span>Durasi:</span><span class="font-bold">${esc(closedShift.duration)}</span></div>
                <div class="flex justify-between border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Total Omset:</span><span class="font-bold">${fRp(closedShift.totalSales || 0)}</span></div>
                <div class="flex justify-between"><span>Kas Fisik Laci:</span><span class="font-black text-slate-900 dark:text-white">${fRp(closedShift.actualCash || 0)}</span></div>
                <div class="flex justify-between items-center border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Status Selisih:</span><div>${diffBadge}</div></div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-2 pt-2">
                <button onclick="window.printShiftSettlementReceipt(window.getLastClosedShift(), false)" class="w-full py-3.5 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-95" style="background:var(--color-primary)">
                    <i class="fa-solid fa-print"></i>
                    <span>Cetak Slip Tutup Shift (Z-Report)</span>
                </button>
                <div class="flex items-center gap-2">
                    <button onclick="document.getElementById('pos-closed-success-modal')?.remove(); window.openPOSOpenShiftModal();" class="flex-1 py-3 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] font-bold text-xs border border-[rgba(var(--color-primary-rgb),0.25)] transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95">
                        <i class="fa-solid fa-plus-circle"></i>
                        <span>Buka Shift Baru</span>
                    </button>
                    <button onclick="document.getElementById('pos-closed-success-modal')?.remove(); if(typeof window.cashierLogout==='function') window.cashierLogout(true);" class="flex-1 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-all cursor-pointer active:scale-95">
                        Selesai &amp; Keluar
                    </button>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);
};

// ─── Cetak Slip Rekap Shift Thermal POS (58mm / 80mm) ────────
export const printShiftSettlementReceipt = (shift, isXReport = false) => {
    if (!shift) {
        showToast('Data shift tidak ditemukan.', 'warning');
        return;
    }

    const config = typeof getPrinterConfig === 'function' ? getPrinterConfig() : { paperSize: '58mm', deviceType: 'system' };
    const is80 = config.paperSize === '80mm';
    const cols = is80 ? 48 : 32;

    const storeName = config.headerText || appData.store?.name || 'TOKO PUTRI';
    const storeAddr = appData.store?.address || '';
    const storeWa   = appData.store?.wa || '';
    const footerTxt = config.footerText || 'Laporan Kasir Resmi Toko Putri';

    const pL = (l, r, len = cols) => {
        const p = len - l.length - r.length;
        return l + (p > 0 ? ' '.repeat(p) : ' ') + r;
    };

    const titleStr = isXReport ? 'RINGKASAN SHIFT (X-REPORT)' : 'REKAP TUTUP SHIFT (Z-REPORT)';
    const startDateStr = new Date(shift.startTime).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' });
    const endDateStr = shift.endTime ? new Date(shift.endTime).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }) : new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' });
    const durationStr = shift.duration || formatShiftDuration(shift.startTime, shift.endTime || Date.now());

    const expectedCash = (parseFloat(shift.startingCash) || 0) + (parseFloat(shift.cashSales) || 0);
    const actualCash = shift.actualCash !== undefined ? parseFloat(shift.actualCash) : expectedCash;
    const diff = actualCash - expectedCash;
    const diffStatusStr = diff === 0 ? 'SEIMBANG (PAS)' : (diff > 0 ? `LEBIH (+${fRp(diff)})` : `KURANG (-${fRp(Math.abs(diff))})`);

    const w = window.open('', '_blank', `width=${is80 ? 460 : 360},height=740`);
    if (!w) {
        // Fallback In-Page Modal
        document.getElementById('pos-shift-receipt-modal')?.remove();
        document.body.insertAdjacentHTML('beforeend', `
        <div id="pos-shift-receipt-modal" class="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${is80 ? 'max-w-md' : 'max-w-sm'} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
                <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                    <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-emerald-500"></i>Slip Rekap Shift (${is80 ? '80mm' : '58mm'})</span>
                    <button onclick="document.getElementById('pos-shift-receipt-modal')?.remove()" class="w-7 h-7 rounded-lg bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-sm leading-none flex items-center justify-center cursor-pointer">×</button>
                </div>
                <div id="pos-shift-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text">
                    <div class="text-center font-bold text-sm uppercase">${esc(storeName)}</div>
                    ${storeAddr ? `<div class="text-center text-[10px] text-slate-500">${esc(storeAddr)}</div>` : ''}
                    ${storeWa ? `<div class="text-center text-[10px] text-slate-500">WA: ${esc(storeWa)}</div>` : ''}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="text-center font-black text-xs uppercase">${esc(titleStr)}</div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div>No Shift: <b>#${esc(shift.shiftNo || shift.id)}</b></div>
                    <div>Kasir   : ${esc(shift.cashierName)}</div>
                    <div>Mulai   : ${esc(startDateStr)}</div>
                    <div>Selesai : ${esc(endDateStr)}</div>
                    <div>Durasi  : ${esc(durationStr)}</div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="font-bold">RINGKASAN PENJUALAN:</div>
                    <div class="flex justify-between"><span>Total Struk</span><span>${shift.txCount || 0} Trx</span></div>
                    <div class="flex justify-between"><span>Total Barang</span><span>${shift.itemCount || 0} Pcs</span></div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                    <div class="flex justify-between"><span>Tunai (Cash)</span><span>${fRp(shift.cashSales || 0)}</span></div>
                    <div class="flex justify-between"><span>QRIS</span><span>${fRp(shift.qrisSales || 0)}</span></div>
                    <div class="flex justify-between"><span>Transfer Bank</span><span>${fRp(shift.bankSales || 0)}</span></div>
                    <div class="flex justify-between"><span>Tempo (Piutang)</span><span>${fRp(shift.tempoSales || 0)}</span></div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                    <div class="flex justify-between font-black text-xs pt-0.5"><span>TOTAL OMSET</span><span style="color:var(--color-primary)">${fRp(shift.totalSales || 0)}</span></div>
                    ${(shift.discountTotal || 0) > 0 ? `<div class="flex justify-between text-rose-500"><span>Diskon Toko</span><span>-${fRp(shift.discountTotal)}</span></div>` : ''}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="font-bold">REKONSILIASI KAS LACI:</div>
                    <div class="flex justify-between"><span>Modal Awal</span><span>${fRp(shift.startingCash)}</span></div>
                    <div class="flex justify-between"><span>Penjualan Tunai</span><span>${fRp(shift.cashSales || 0)}</span></div>
                    <div class="flex justify-between font-bold"><span>Kas Sistem</span><span>${fRp(expectedCash)}</span></div>
                    ${!isXReport ? `
                    <div class="flex justify-between font-bold"><span>Kas Fisik Dihitung</span><span>${fRp(actualCash)}</span></div>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                    <div class="flex justify-between font-black text-xs ${diff === 0 ? 'text-emerald-600' : (diff > 0 ? 'text-amber-600' : 'text-rose-600')}">
                        <span>SELISIH KAS</span>
                        <span>${diffStatusStr}</span>
                    </div>` : ''}
                    ${shift.closingNotes ? `
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1.5"></div>
                    <div class="text-[10px]"><b>Catatan:</b> ${esc(shift.closingNotes)}</div>` : ''}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="text-center text-[10px] text-slate-400 my-1">${esc(footerTxt)}</div>
                    <div class="grid grid-cols-2 text-center text-[10px] pt-4 pb-2">
                        <div>
                            <div>Kasir Bertugas</div>
                            <div class="pt-8 font-bold">(${esc(shift.cashierName)})</div>
                        </div>
                        <div>
                            <div>Supervisor / Admin</div>
                            <div class="pt-8 font-bold">( ................ )</div>
                        </div>
                    </div>
                </div>
                <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex gap-2">
                    <button onclick="window.executeShiftPrintDirect()" class="flex-1 py-2.5 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95" style="background:var(--color-primary)">
                        <i class="fa-solid fa-print"></i> Cetak Sekarang
                    </button>
                </div>
            </div>
        </div>`);
        return;
    }

    w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Slip Rekap Shift Kasir</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:${is80 ? '330px' : '260px'};margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    .sig{margin-top:20px;text-align:center;font-size:10px;display:flex;justify-content:space-between}
    </style></head><body>
    <h2>${storeName}</h2>${storeAddr?`<p>${esc(storeAddr)}</p>`:''}${storeWa?`<p>WA: ${esc(storeWa)}</p>`:''}
    <div class="line"></div>
    <p style="font-weight:900;font-size:12px">${titleStr}</p>
    <div class="line"></div>
    <p class="left">No Shift: <b>#${esc(shift.shiftNo || shift.id)}</b></p>
    <p class="left">Kasir   : ${esc(shift.cashierName)}</p>
    <p class="left">Mulai   : ${esc(startDateStr)}</p>
    <p class="left">Selesai : ${esc(endDateStr)}</p>
    <p class="left">Durasi  : ${esc(durationStr)}</p>
    <div class="line"></div>
    <p class="left" style="font-weight:bold">RINGKASAN PENJUALAN:</p>
    <table>
    <tr><td>Total Struk</td><td style="text-align:right">${shift.txCount || 0} Trx</td></tr>
    <tr><td>Total Barang</td><td style="text-align:right">${shift.itemCount || 0} Pcs</td></tr>
    <tr><td colspan="2"><div class="line"></div></td></tr>
    <tr><td>Tunai (Cash)</td><td style="text-align:right">${fRp(shift.cashSales || 0)}</td></tr>
    <tr><td>QRIS</td><td style="text-align:right">${fRp(shift.qrisSales || 0)}</td></tr>
    <tr><td>Transfer Bank</td><td style="text-align:right">${fRp(shift.bankSales || 0)}</td></tr>
    <tr><td>Tempo (Piutang)</td><td style="text-align:right">${fRp(shift.tempoSales || 0)}</td></tr>
    <tr><td colspan="2"><div class="line"></div></td></tr>
    <tr class="total"><td>TOTAL OMSET</td><td style="text-align:right">${fRp(shift.totalSales || 0)}</td></tr>
    ${(shift.discountTotal || 0) > 0 ? `<tr><td>Diskon Toko</td><td style="text-align:right">-${fRp(shift.discountTotal)}</td></tr>` : ''}
    </table>
    <div class="line"></div>
    <p class="left" style="font-weight:bold">REKONSILIASI KAS LACI:</p>
    <table>
    <tr><td>Modal Awal</td><td style="text-align:right">${fRp(shift.startingCash)}</td></tr>
    <tr><td>Penjualan Tunai</td><td style="text-align:right">${fRp(shift.cashSales || 0)}</td></tr>
    <tr style="font-weight:bold"><td>Kas Sistem</td><td style="text-align:right">${fRp(expectedCash)}</td></tr>
    ${!isXReport ? `
    <tr style="font-weight:bold"><td>Kas Fisik Laci</td><td style="text-align:right">${fRp(actualCash)}</td></tr>
    <tr><td colspan="2"><div class="line"></div></td></tr>
    <tr style="font-weight:bold"><td>SELISIH KAS</td><td style="text-align:right">${diffStatusStr}</td></tr>` : ''}
    </table>
    ${shift.closingNotes ? `<div class="line"></div><p class="left" style="font-size:10px"><b>Catatan:</b> ${esc(shift.closingNotes)}</p>` : ''}
    <div class="line"></div>
    <p style="font-size:10px">${esc(footerTxt)}</p>
    <div class="sig">
        <div>Kasir<br><br><br><b>(${esc(shift.cashierName)})</b></div>
        <div>Supervisor / Admin<br><br><br><b>( ................ )</b></div>
    </div>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`);
    w.document.close();
};

export const executeShiftPrintDirect = () => {
    const config = typeof getPrinterConfig === 'function' ? getPrinterConfig() : { deviceType: 'system' };
    const pBox = el('pos-shift-receipt-paper-box');
    if (!pBox) return;

    if (config.deviceType === 'rawbt' && window.AndroidNativeApp && typeof window.AndroidNativeApp.printRawBT === 'function') {
        const rawHtml = pBox.innerText;
        const b64 = btoa(unescape(encodeURIComponent(rawHtml)));
        window.AndroidNativeApp.printRawBT(b64);
    } else if (window.AndroidNativeApp && typeof window.AndroidNativeApp.print === 'function') {
        window.AndroidNativeApp.print();
    } else {
        window.print();
    }
};

// ─── Render Shift Header Badge di POS ─────────────────────────
export const renderShiftHeaderBadge = () => {
    const targets = [el('pos-shift-btn-storefront'), el('pos-shift-btn-admin')];
    const shift = getActiveShift();

    targets.forEach(target => {
        if (!target) return;
        if (shift && shift.status === 'open') {
            const isStorefront = target.id === 'pos-shift-btn-storefront';
            if (isStorefront) {
                target.innerHTML = `
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white border border-white/20 transition-all cursor-pointer shadow-xs active:scale-95 inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-emerald-300 text-xs"></i>
                    <span class="hidden sm:inline text-xs font-medium">Shift: </span>
                    <b class="text-white text-xs whitespace-nowrap">${fRp(shift.startingCash)}</b>
                </button>`;
            } else {
                target.innerHTML = `
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-xs"></i>
                    <span class="hidden sm:inline font-medium">Shift: </span>
                    <b class="font-black whitespace-nowrap">${fRp(shift.startingCash)}</b>
                </button>`;
            }
        } else {
            const isStorefront = target.id === 'pos-shift-btn-storefront';
            if (isStorefront) {
                target.innerHTML = `
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer border border-white/25 backdrop-blur-xs whitespace-nowrap shrink-0" title="Buka shift kasir baru">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                    <i class="fa-solid fa-wallet text-amber-300 text-xs"></i>
                    <span class="text-xs font-black whitespace-nowrap">Buka Shift</span>
                </button>`;
            } else {
                target.innerHTML = `
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 animate-pulse whitespace-nowrap shrink-0 shadow-2xs" title="Buka shift kasir baru">
                    <i class="fa-solid fa-wallet text-xs"></i>
                    <span class="whitespace-nowrap">Buka Shift</span>
                </button>`;
            }
        }
    });
};

// ─── Riwayat Shift di CMS Admin & POS ─────────────────────────
export const renderAdminShiftReportView = async (containerEl) => {
    const c = typeof containerEl === 'string' ? el(containerEl) : containerEl;
    if (!c) return;

    c.innerHTML = `
    <div class="space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
                <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <i class="fa-solid fa-file-invoice-dollar text-[var(--color-primary)]"></i>
                    <span>Laporan &amp; Rekap Shift Kasir (Z-Report)</span>
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">Riwayat pembukaan, penutupan laci kasir, dan audit selisih kas</p>
            </div>
            <button onclick="window.loadAdminShiftReports()" class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer self-start sm:self-auto">
                <i class="fa-solid fa-arrows-rotate"></i> Segarkan Data
            </button>
        </div>

        <div id="admin-shift-list-target" class="space-y-3">
            <div class="text-center py-12 text-slate-400"><i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i><p class="text-xs">Memuat laporan shift kasir...</p></div>
        </div>
    </div>`;

    await loadAdminShiftReports();
};

export const loadAdminShiftReports = async () => {
    const target = el('admin-shift-list-target');
    if (!target) return;

    try {
        const snap = await db.collection('freshmart').doc('cms_data').collection('pos_shifts')
            .orderBy('startTime', 'desc')
            .limit(50)
            .get();

        if (snap.empty) {
            target.innerHTML = `
            <div class="text-center py-14 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                <i class="fa-solid fa-clipboard-list text-3xl mb-2"></i>
                <p class="font-bold text-xs">Belum ada riwayat shift kasir tercatat</p>
                <p class="text-[11px] mt-0.5">Shift yang dibuka dan ditutup oleh kasir akan otomatis terarsip di sini.</p>
            </div>`;
            return;
        }

        const cards = snap.docs.map(doc => {
            const s = doc.data();
            const isClosed = s.status === 'closed';
            const diff = s.difference || 0;
            const diffBadge = !isClosed
                ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">SEDANG BERJALAN</span>`
                : (diff === 0
                    ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">PAS</span>`
                    : (diff > 0
                        ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">+${fRp(diff)}</span>`
                        : `<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">-${fRp(Math.abs(diff))}</span>`));

            const startDate = new Date(s.startTime).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });
            const sJson = JSON.stringify(s).replace(/"/g, '&quot;');

            return `
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs hover:shadow-sm transition-all space-y-3">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs text-white shrink-0 ${isClosed ? 'bg-slate-700' : 'bg-emerald-600'}">
                            <i class="fa-solid fa-cash-register"></i>
                        </div>
                        <div>
                            <span class="font-bold text-xs text-slate-800 dark:text-white">#${esc(s.shiftNo || s.id)}</span>
                            <span class="text-[10px] text-slate-400 block">${startDate}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        ${diffBadge}
                        <button onclick="window.printShiftSettlementReceipt(${sJson}, ${!isClosed})" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-200 text-xs flex items-center justify-center transition-all cursor-pointer" title="Cetak Slip">
                            <i class="fa-solid fa-print"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <span class="text-[10px] text-slate-400 block">Kasir</span>
                        <span class="font-bold text-slate-700 dark:text-slate-200 truncate block">${esc(s.cashierName)}</span>
                    </div>
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <span class="text-[10px] text-slate-400 block">Modal Awal</span>
                        <span class="font-bold text-slate-700 dark:text-slate-200 block">${fRp(s.startingCash)}</span>
                    </div>
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <span class="text-[10px] text-slate-400 block">Total Omset</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400 block">${fRp(s.totalSales || 0)}</span>
                    </div>
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <span class="text-[10px] text-slate-400 block">Kas Fisik Laci</span>
                        <span class="font-black text-slate-900 dark:text-white block">${fRp(s.actualCash !== undefined ? s.actualCash : ((s.startingCash || 0) + (s.cashSales || 0)))}</span>
                    </div>
                </div>

                ${s.closingNotes ? `<div class="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-2 rounded-xl border border-slate-100 dark:border-slate-800"><b>Catatan:</b> ${esc(s.closingNotes)}</div>` : ''}
            </div>`;
        }).join('');

        target.innerHTML = cards;
    } catch (err) {
        console.error('[POS Shift] Gagal memuat daftar shift admin:', err);
        target.innerHTML = `
        <div class="text-center py-10 text-rose-500 text-xs">
            <i class="fa-solid fa-triangle-exclamation text-2xl mb-1"></i>
            <p>Gagal memuat laporan shift: ${esc(err.message)}</p>
        </div>`;
    }
};

// ─── Expose ke Global Window ─────────────────────────────────
window.getActiveShift             = getActiveShift;
window.saveActiveShift            = saveActiveShift;
window.clearActiveShift           = clearActiveShift;
window.getLastClosedShift         = getLastClosedShift;
window.isShiftActive              = isShiftActive;
window.openPOSOpenShiftModal      = openPOSOpenShiftModal;
window.closePOSOpenShiftModal     = closePOSOpenShiftModal;
window.posSetStartCashPreset      = posSetStartCashPreset;
window.posUpdateStartCashChips    = posUpdateStartCashChips;
window.confirmStartPOSShift       = confirmStartPOSShift;
window.recordTransactionToShift   = recordTransactionToShift;
window.openPOSShiftModal          = openShiftSummaryModal;
window.openPOSShiftSummaryModal   = openShiftSummaryModal;
window.closePOSShiftSummaryModal  = closePOSShiftSummaryModal;
window.openPOSCloseShiftModal     = openPOSCloseShiftModal;
window.closePOSCloseShiftModal    = closePOSCloseShiftModal;
window.setPOSCountMode            = setPOSCountMode;
window.calcPOSDenominations       = calcPOSDenominations;
window.updatePOSShiftDiscrepancy  = updatePOSShiftDiscrepancy;
window.confirmClosePOSShift       = confirmClosePOSShift;
window.printShiftSettlementReceipt= printShiftSettlementReceipt;
window.executeShiftPrintDirect    = executeShiftPrintDirect;
window.renderShiftHeaderBadge     = renderShiftHeaderBadge;
window.renderAdminShiftReportView = renderAdminShiftReportView;
window.loadAdminShiftReports      = loadAdminShiftReports;
