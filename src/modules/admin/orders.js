/**
 * ============================================================
 * MODUL ADMIN: MANAJEMEN PESANAN (LIVE ORDERS)
 * Mengatur pemantauan pesanan real-time, suara notifikasi lonceng,
 * filter status, rincian pesanan pelanggan, cetak struk POS,
 * konfirmasi WhatsApp otomatis, update status, dan export data Excel.
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { 
    appData, gOrds, setGOrds, aOrdLst, setAOrdLst, 
    cVOrd, setCVOrd, isSaving, setIsSaving 
} from '../../core/state.js';
import { 
    el, show, hide, setIn, setH, esc, fCur, 
    showToast, showConfirm, sLoad, hLoad, 
    ensureScriptLoaded, rewardStatusLabel,
    openModalAnim, closeModalAnim
} from '../../core/utils.js';

/**
 * Ekspor daftar pesanan admin ke format Microsoft Excel (.xlsx)
 */
export const exportOrdersToExcel = async () => {
    if (!gOrds || gOrds.length === 0) return showToast("Belum ada data pesanan!");
    
    sLoad('Menyiapkan modul Excel...');
    try {
        await ensureScriptLoaded('https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js', () => typeof XLSX !== 'undefined');
    } catch(e) {
        hLoad();
        showToast('Gagal memuat modul Excel. Cek koneksi internet Anda.');
        return;
    }
    hLoad();
    
    let dataExcel = [];
    gOrds.forEach((o, index) => {
        let date = o.dateString ? new Date(o.dateString).toLocaleString('id-ID') : '-';
        let custName = o.customer?.name || 'Anonim';
        let isPOS = o.source === 'pos' || o.channel === 'pos';
        let method = o.customer?.deliveryMethod === 'delivery' ? 'Dikirim' : (isPOS ? 'Beli Langsung di Kasir (Takeaway)' : 'Ambil di Toko');
        if (o.isDropPoint) method = '📍 Lokasi Berbeda';
        let status = o.status || '-';
        let totalItem = o.items ? o.items.reduce((sum, i) => sum + (parseFloat(i.qty) || 0), 0) : 0;
        let totalHarga = o.payment?.grandTotal || 0;

        dataExcel.push({
            "No": index + 1,
            "ID Pesanan": o.orderId,
            "Tanggal": date,
            "Sumber": isPOS ? `Kasir POS (${o.cashierName || 'Kasir'})` : 'Website Storefront',
            "Nama Pelanggan": custName,
            "Tipe Pelanggan": o.customerType === 'Member' ? '⭐ Member' : '👤 Pelanggan Umum',
            "No. WhatsApp": o.customer?.wa ? `+${o.customer.wa}` : '-',
            "Metode Kirim": method,
            "Status": status,
            "Total Item": totalItem,
            "Total Tagihan (Rp)": totalHarga
        });
    });

    const worksheet = XLSX.utils.json_to_sheet(dataExcel);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Laporan Pesanan");

    const wscols = [
        { wch: 5 },
        { wch: 25 },
        { wch: 22 },
        { wch: 24 },
        { wch: 25 },
        { wch: 18 },
        { wch: 18 },
        { wch: 26 },
        { wch: 15 },
        { wch: 12 },
        { wch: 20 }
    ];
    worksheet['!cols'] = wscols;

    const safeDateString = new Date().toISOString().split('T')[0];
    const fileName = `Laporan_Pesanan_${safeDateString}.xlsx`;
    if (window.AndroidNativeApp && typeof window.AndroidNativeApp.saveOrShareFile === 'function') {
        const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'base64' });
        window.AndroidNativeApp.saveOrShareFile(wbout, fileName, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    } else {
        XLSX.writeFile(workbook, fileName);
    }
    showToast("Laporan Excel (.xlsx) berhasil diunduh!");
};

/**
 * Mainkan nada Ding-Dong saat ada pesanan baru masuk
 */
export const playNewOrderSound = () => {
    try {
        if (typeof window !== 'undefined') {
            if (typeof window.checkUserGesture === 'function' && !window.checkUserGesture()) return;
            if (typeof window.playNativeSound === 'function') {
                window.playNativeSound('success');
                return;
            }
        }
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioClass) return;
        const ctx = new AudioClass();
        if (ctx.state === 'suspended') {
            ctx.resume().catch(() => {});
        }
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); 
        gain.connect(ctx.destination);
        
        osc.type = 'sine';
        
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        osc.frequency.setValueAtTime(600, ctx.currentTime + 0.2);
        
        osc.frequency.setValueAtTime(800, ctx.currentTime + 0.6);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + 0.6);
        osc.frequency.setValueAtTime(600, ctx.currentTime + 0.8);
        
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 1.5); 
        
        osc.start(ctx.currentTime); 
        osc.stop(ctx.currentTime + 1.5);
        setTimeout(() => { ctx.close().catch(() => {}); }, 1600);
    } catch(e) {}
};

/**
 * Render Live Orders tab admin dengan Firestore listener real-time
 */
let orderSourceFilter = 'all'; // 'all' | 'pos' | 'storefront'

export const setOrderSourceFilter = (mode) => {
    orderSourceFilter = mode;
    ['all', 'pos', 'storefront'].forEach(k => {
        const b = el(`btn-ord-filter-${k}`);
        if (b) {
            if (k === mode) {
                b.className = "h-8 px-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer bg-[var(--color-primary)] text-white shadow-sm flex items-center gap-1.5";
            } else {
                b.className = "h-8 px-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 flex items-center gap-1.5";
            }
        }
    });
    renderOrdersList();
};

export const renderOrdersList = () => {
    const listEl = el('admin-orders-list');
    if (!listEl) return;

    if (!gOrds || gOrds.length === 0) {
        listEl.innerHTML = `<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>`;
        return;
    }

    const filtered = gOrds.filter(o => {
        const isPOS = o.source === 'pos' || o.channel === 'pos';
        if (orderSourceFilter === 'pos') return isPOS;
        if (orderSourceFilter === 'storefront') return !isPOS;
        return true;
    });

    if (filtered.length === 0) {
        const emptyLabel = orderSourceFilter === 'pos' 
            ? 'Belum ada transaksi dari Kasir POS' 
            : orderSourceFilter === 'storefront' 
            ? 'Belum ada pesanan dari Website Storefront' 
            : 'Belum ada pesanan';
        listEl.innerHTML = `<div class="flex flex-col items-center justify-center py-16 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-filter-circle-xmark text-4xl mb-3 opacity-30"></i>${emptyLabel}</div>`;
        return;
    }

    listEl.innerHTML = filtered.map(o => {
        let bC = "text-slate-500 border-slate-200 dark:border-slate-600", iC = "fa-clock", boxBg = "bg-slate-50 dark:bg-slate-700/50", boxText = "text-slate-400";
        if (o.status === 'Baru') {
            bC = "text-rose-500 border-rose-200 bg-rose-50 dark:bg-rose-900/20 dark:border-rose-800 animate-pulse"; 
            iC = "fa-asterisk"; 
            boxBg = "bg-rose-500"; 
            boxText = "text-white shadow-md shadow-rose-500/30";
        } else if (o.status === 'Diproses') {
            bC = "text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30"; 
            iC = "fa-spinner fa-spin"; 
            boxBg = "primary-bg"; 
            boxText = "shadow-sm";
        } else if (o.status === 'Selesai') {
            bC = "text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30"; 
            iC = "fa-check-double"; 
            boxBg = "primary-bg-soft"; 
            boxText = "primary-text";
        } else if (o.status === 'Dibatalkan') {
            bC = "text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700"; 
            iC = "fa-xmark"; 
            boxBg = "bg-slate-100 dark:bg-slate-800"; 
            boxText = "text-slate-400";
        }
        
        let pI = "fa-wallet text-slate-400"; 
        let method = o.payment?.method || '';
        let methodLabel = method.toUpperCase();
        const isPOS = o.source === 'pos' || o.channel === 'pos';
        if (method === 'transfer') {
            pI = "fa-building-columns text-[var(--color-primary)]"; 
            methodLabel = 'Transfer';
        } else if (method === 'qris') {
            pI = "fa-qrcode text-purple-500"; 
            methodLabel = 'QRIS';
        } else if (method === 'cod') {
            pI = "fa-hand-holding-dollar text-[var(--color-primary)]"; 
            methodLabel = 'COD';
        } else if (method === 'cashier' || method === 'cash') {
            pI = "fa-cash-register text-emerald-500";
            methodLabel = isPOS ? 'Tunai (Kasir)' : 'Kasir';
        } else if (method === 'tempo') {
            const isPL = !!(o.payment?.isPaylater || o.isPaylater || o.payment?.subMethod === 'paylater');
            pI = isPL ? "fa-bolt text-emerald-500" : "fa-file-invoice-dollar text-amber-500";
            methodLabel = isPL ? 'PayLater' : 'Tempo';
        }
        
        let itemCount = o.items ? parseFloat(o.items.reduce((sum, item) => sum + (parseFloat(item.qty) || 0), 0).toFixed(2)) : 0;
        const dStr = o.dateString ? new Date(o.dateString).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }) : '';
        const shortId = (o.orderId || '').split('-').pop();
        
        return `
        <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-primary)] transition-all duration-300" onclick="openOrderDetail('${o.orderId}')">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${boxBg} ${boxText} flex items-center justify-center shrink-0 transition-colors">
                    <i class="fa-solid fa-receipt text-xl sm:text-2xl"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-start mb-1 gap-2">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">#${shortId}</span>
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded border ${bC} uppercase tracking-widest flex items-center"><i class="fa-solid ${iC} mr-1"></i> ${esc(o.status)}</span>
                            ${isPOS ? `
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 uppercase tracking-widest flex items-center gap-1">
                                <i class="fa-solid fa-cash-register text-[9px]"></i> Kasir: ${esc(o.cashierName || 'POS')}
                            </span>` : `
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[var(--color-primary)] uppercase tracking-widest flex items-center gap-1">
                                <i class="fa-solid fa-globe text-[9px]"></i> Storefront
                            </span>`}
                        </div>
                        <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap shrink-0"><i class="fa-regular fa-calendar"></i> <span class="hidden sm:inline">${dStr}</span></span>
                    </div>
                    <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[120px] sm:max-w-xs"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${esc(o.customer?.name || 'Anonim')}</p>
                        <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                        <span class="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-xl border border-slate-200 dark:border-slate-700 uppercase tracking-widest shrink-0">${itemCount} Item</span>
                        <span class="text-[9px] font-bold ${o.customerType === 'Member' ? 'text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] border border-[rgba(var(--color-primary-rgb),0.25)]' : 'text-slate-500 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700'} px-2 py-0.5 rounded-xl uppercase tracking-widest shrink-0">${o.customerType === 'Member' ? '<i class="fa-solid fa-star text-[var(--color-primary)] mr-1"></i>Member' : 'Umum'}</span>
                        ${o.customer?.lat ? `<span class="text-[9px] font-bold text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] px-1.5 py-0.5 rounded-xl border border-[rgba(var(--color-primary-rgb),0.2)] uppercase tracking-widest shrink-0"><i class="fa-solid fa-location-dot"></i> GPS</span>` : ''}
                        ${o.buktiPayment ? `<span class="text-[9px] font-bold text-violet-500 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded-xl border border-violet-100 dark:border-violet-800 uppercase tracking-widest shrink-0"><i class="fa-solid fa-image"></i></span>` : ''}
                    </div>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:primary-bg transition-all shrink-0" style="transition: background-color 0.2s, color 0.2s">
                    <i class="fa-solid fa-chevron-right text-sm"></i>
                </div>
            </div>
            <div class="w-full border-t border-dashed border-slate-200 dark:border-slate-700 my-4"></div>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="font-bold text-[var(--color-primary)] text-lg sm:text-xl tracking-tight">${fCur(o.payment?.grandTotal)}</span>
                    ${o.payment?.ppnAmount ? `<span class="text-[8px] font-bold bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest">PPN ${o.payment.ppnRate || 11}%</span>` : ''}
                </div>
                <div class="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-700">
                    <i class="fa-solid ${pI} text-xs"></i>
                    <span class="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">${esc(methodLabel)}</span>
                </div>
            </div>
        </div>`;
    }).join('');
};

/**
 * Render Live Orders tab admin dengan Firestore listener real-time
 */
export const rAdmOrd = () => {
    setH('admin-content', `
        <div class="mb-4 flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-satellite-dish animate-pulse text-base"></i>
                </div>
                <div>
                    <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Live Orders</h2>
                    <p class="text-[9px] font-bold text-slate-500 mt-0.5">Pusat pesanan terpadu Website Storefront &amp; Kasir POS</p>
                </div>
            </div>
            <button onclick="exportOrdersToExcel()" class="h-9 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm border transition-all active:scale-95 hover:text-white hover:border-[var(--color-primary)] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600" style="--tw-shadow-color: rgba(var(--color-primary-rgb),0.2)" onmouseover="this.style.background='var(--color-primary)'" onmouseout="this.style.background=''">
                <i class="fa-solid fa-file-csv"></i> <span class="hidden sm:inline">Export Excel</span>
            </button>
        </div>

        <!-- Filter Sumber Pesanan: Semua, Kasir POS, Storefront -->
        <div class="mb-4 flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
            <button onclick="setOrderSourceFilter('all')" id="btn-ord-filter-all" class="h-8 px-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${orderSourceFilter==='all' ? 'bg-[var(--color-primary)] text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
                Semua Pesanan
            </button>
            <button onclick="setOrderSourceFilter('pos')" id="btn-ord-filter-pos" class="h-8 px-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${orderSourceFilter==='pos' ? 'bg-[var(--color-primary)] text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
                <i class="fa-solid fa-cash-register text-[10px]"></i> Kasir POS
            </button>
            <button onclick="setOrderSourceFilter('storefront')" id="btn-ord-filter-storefront" class="h-8 px-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${orderSourceFilter==='storefront' ? 'bg-[var(--color-primary)] text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
                <i class="fa-solid fa-globe text-[10px]"></i> Storefront Web
            </button>
        </div>

        <div id="admin-orders-list" class="space-y-4"><div class="text-center py-16"><div class="w-12 h-12 border-4 border-[rgba(var(--color-primary-rgb),0.2)] border-t-[var(--color-primary)] rounded-full animate-spin mx-auto"></div></div></div>
    `);
    
    const startListener = () => {
        if (aOrdLst) { aOrdLst(); setAOrdLst(null); }
        let isInitial = true; 
        const unsub = db.collection("freshmart_orders").orderBy("timestamp", "desc").limit(100).onSnapshot(p => {
            setGOrds([]);
            if (!isInitial) {
                let isNewOrder = false;
                p.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        const addedData = change.doc.data();
                        if (addedData.status === 'Baru') isNewOrder = true;
                    }
                });
                if (isNewOrder) {
                    showToast("🔔 Pesanan Baru Masuk!");
                    playNewOrderSound();
                }
            }
            isInitial = false;

            if (p.empty) { 
                setH('admin-orders-list', `<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>`); 
                setIn('stat-orders', 0); 
                return; 
            }
            setIn('stat-orders', p.size + (p.size === 100 ? '+' : ''));
            
            const docsList = [];
            p.docs.forEach(d => docsList.push(d.data()));
            setGOrds(docsList);
            renderOrdersList();
        }, () => { 
            setH('admin-orders-list', `<div class="text-center text-rose-500 font-bold">Koneksi terputus. Retrying...</div>`); 
            setTimeout(startListener, 5000); 
        });
        setAOrdLst(unsub);
    }; 
    startListener();
};

/**
 * Buka modal rincian pesanan dari sisi admin
 */
export const openOrderDetail = (i) => {
    const o = gOrds.find(x => x.orderId === i);
    if (!o) return; 
    setCVOrd(i);
    
    const isPOS = o.source === 'pos' || o.channel === 'pos';
    const hasWA = !!(o.customer?.wa);
    // Label dan warna status badge untuk tombol WA
    const waStatusIcon = o.status === 'Diproses' ? 'fa-spinner fa-spin' : o.status === 'Selesai' ? 'fa-check-double' : o.status === 'Dibatalkan' ? 'fa-xmark' : 'fa-asterisk';
    const waStatusLabel = o.status === 'Baru' ? 'Konfirmasi Pesanan Baru'
        : o.status === 'Diproses' ? 'Pesanan Sedang Diproses'
        : o.status === 'Selesai' ? 'Pesanan Selesai'
        : o.status === 'Dibatalkan' ? 'Pesanan Dibatalkan'
        : o.status;
    let sSel = `<div class="relative w-full sm:w-40 mt-1"><select onchange="updateOrderStatus('${o.orderId}', this.value)" class="w-full text-sm font-bold ${o.status==='Baru'?'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-900/60':o.status==='Diproses'?'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900/60':o.status==='Selesai'?'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900/60':'text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'} border px-4 py-2.5 rounded-xl focus:outline-none appearance-none cursor-pointer transition-colors shadow-sm"><option value="Baru" ${o.status==='Baru'?'selected':''} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Baru (Pending)</option><option value="Diproses" ${o.status==='Diproses'?'selected':''} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Diproses</option><option value="Selesai" ${o.status==='Selesai'?'selected':''} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Selesai</option><option value="Dibatalkan" ${o.status==='Dibatalkan'?'selected':''} class="text-slate-800 dark:text-slate-100 dark:bg-slate-800">Dibatalkan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 ${o.status==='Baru'?'text-rose-400':o.status==='Diproses'?'text-blue-400':o.status==='Selesai'?'text-emerald-400':'text-slate-400'} pointer-events-none text-xs"></i></div>`;
    
    setH('admin-order-modal-content', `
        <div class="flex flex-col gap-4 text-sm pb-2">
            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row justify-between gap-5 sm:items-center">
                <div class="flex-1">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-crosshairs text-[var(--color-primary)]"></i> Status</p>
                    ${sSel}
                    <div class="mt-2.5 flex items-center gap-1.5 flex-wrap">
                        ${isPOS ? `
                        <span class="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold flex items-center gap-1.5">
                            <i class="fa-solid fa-cash-register text-xs"></i> Sumber: Dibuat di Kasir POS (Petugas: ${esc(o.cashierName || 'Kasir')})
                        </span>` : `
                        <span class="px-2.5 py-1 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[var(--color-primary)] text-[11px] font-bold flex items-center gap-1.5">
                            <i class="fa-solid fa-globe text-xs"></i> Sumber: Pesanan Online (Website Storefront)
                        </span>`}
                    </div>
                    ${hasWA ? `
                    <button type="button" onclick="konfirmasiKeWA('${o.orderId}')" 
                        class="mt-3 w-full flex items-center justify-between gap-2.5 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 px-4 py-3 rounded-xl transition-all active:scale-95 cursor-pointer shadow-sm group">
                        <div class="flex items-center gap-2.5 min-w-0">
                            <div class="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-400/30">
                                <i class="fa-brands fa-whatsapp text-sm"></i>
                            </div>
                            <div class="min-w-0 text-left">
                                <p class="text-[11px] font-black uppercase tracking-widest leading-tight">Notifikasi WA Pembeli</p>
                                <p class="text-[10px] font-medium text-emerald-600/70 dark:text-emerald-400/70 truncate mt-0.5">${waStatusLabel}</p>
                            </div>
                        </div>
                        <i class="fa-solid fa-paper-plane text-xs text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"></i>
                    </button>` : ''}
                </div>
                <div class="text-left sm:text-right flex flex-col justify-center">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">ID Pesanan</p>
                    <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all tracking-wide">#${o.orderId}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1.5">${o.dateString ? new Date(o.dateString).toLocaleString('id-ID') : ''}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl primary-light-icon-box flex items-center justify-center border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-user"></i></div> Data Pemesan</h4>
                <div class="space-y-4">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Nama</span><span class="font-bold text-slate-900 dark:text-white text-base">${esc(o.customer?.name || '-')}</span></div>
                    ${o.customer?.wa ? `<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5"><i class="fa-brands fa-whatsapp text-green-500"></i> WhatsApp</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${esc(o.customer.wa)}'); else window.open('https://wa.me/${esc(o.customer.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${esc(o.customer.wa)}</a></div>` : ''}
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Tipe Pemesan</span><span class="text-xs font-bold px-2.5 py-1 rounded-lg ${o.customerType === 'Member' ? 'bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)]' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}">${o.customerType === 'Member' ? '⭐ Member Resmi' : '👤 Pelanggan Umum'}</span></div>
                    ${o.customer?.wa && o.customerType !== 'Member' ? `<button type="button" onclick="saveOrderCustomerToDB('${esc(o.customer.name || '')}','${esc(o.customer.wa)}','${esc(o.orderId)}')" class="w-full py-2.5 rounded-xl primary-bg active:scale-95 text-white shadow-md shadow-[rgba(var(--color-primary-rgb),0.2)] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all"><i class="fa-solid fa-address-book"></i> + Konfirmasi &amp; Daftarkan Sebagai Member</button>` : ''}
                    ${o.customerType === 'Member' ? `<div class="w-full py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2"><i class="fa-solid fa-circle-check"></i> Terverifikasi — Data Member Terkunci</div>` : ''}
                    <div class="border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                        <span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 mb-2.5"><i class="fa-solid fa-map-location-dot"></i> Alamat Pemesan (${isPOS ? 'Beli Langsung di Kasir (Takeaway)' : (o.customer?.deliveryMethod === 'delivery' ? 'Dikirim' : 'Ambil di Toko')})</span>
                        <div class="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${esc(o.customer?.address || '-')}</div>
                        ${o.customer?.lat && o.customer?.deliveryMethod === 'delivery' && !o.isDropPoint ? `<a href="https://www.google.com/maps?q=${esc(o.customer.lat)},${esc(o.customer.lng)}" target="_blank" class="mt-3 flex items-center justify-center gap-2 bg-[rgba(var(--color-primary-rgb),0.07)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Pembeli di Google Maps</a>` : ''}
                    </div>
                    ${o.isDropPoint && o.dropPoint ? `<div class="border-2 border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.04)] dark:bg-[rgba(var(--color-primary-rgb),0.1)] rounded-xl p-4 mt-2">
                        <p class="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3 flex items-center gap-1.5"><i class="fa-solid fa-location-pin-lock"></i> 📍 DIKIRIM KE LOKASI BERBEDA</p>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Nama Penerima</span><span class="font-bold text-slate-900 dark:text-white">${esc(o.dropPoint.name || '-')}</span></div>
                            ${o.dropPoint.wa ? `<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs flex items-center gap-1"><i class="fa-brands fa-whatsapp text-green-500"></i> WA Penerima</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${esc(o.dropPoint.wa)}'); else window.open('https://wa.me/${esc(o.dropPoint.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${esc(o.dropPoint.wa)}</a></div>` : ''}
                            <div class="border-t border-[var(--color-primary)]/15 pt-2 mt-2">
                                <span class="text-slate-500 dark:text-slate-400 font-bold text-xs block mb-1.5">Alamat Tujuan Pengiriman</span>
                                <div class="bg-white dark:bg-slate-800 p-3 rounded-xl border border-[var(--color-primary)]/20 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${esc(o.dropPoint.address || '-')}</div>
                                ${o.dropPoint.lat ? `<a href="https://www.google.com/maps?q=${esc(o.dropPoint.lat)},${esc(o.dropPoint.lng)}" target="_blank" class="mt-2 flex items-center justify-center gap-2 bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[rgba(var(--color-primary-rgb),0.18)] transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Tujuan di Google Maps</a>` : ''}
                                ${o.dropPoint.wa ? `<button type="button" onclick="konfirmasiKeWAPenerima('${o.orderId}')" class="mt-2.5 w-full py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"><i class="fa-brands fa-whatsapp text-sm"></i> Notifikasi Pengiriman ke WA Penerima</button>` : ''}
                            </div>
                        </div>
                    </div>` : ''}
                    ${o.customer?.note ? `<div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 mt-2"><p class="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan Pembeli</p><p class="text-sm text-amber-900 dark:text-amber-100 font-bold">${esc(o.customer.note)}</p></div>` : ''}
                    ${o.buktiPayment ? `<div class="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800 mt-2"><p class="text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2.5"><i class="fa-solid fa-image"></i> Bukti Pembayaran</p><a href="${esc(o.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border border-violet-200 dark:border-violet-800"><img src="${esc(o.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-48 object-cover" onerror="this.style.display='none'" loading="lazy"><div class="bg-violet-100 dark:bg-violet-900/40 py-2 text-center text-[10px] font-bold text-violet-600 dark:text-violet-400"><i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Tap untuk buka</div></a></div>` : ''}
                </div>
            </div>

            </div>

            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl primary-light-icon-box flex items-center justify-center border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-box-open"></i></div> Rincian Item</h4>
                <div class="space-y-3">${o.items.map(t => `
                    <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
                        <div class="flex items-center gap-3 min-w-0">
                            <div class="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0"><i class="fa-solid fa-tag text-sm"></i></div>
                            <div class="min-w-0">
                                <p class="font-bold text-sm text-slate-900 dark:text-white truncate mb-1" title="${esc(t.name)}">${esc(t.name)}</p>
                                ${(t.variantName || t.poTime) ? `
                                <div class="flex flex-wrap gap-1 mb-1">
                                    ${t.variantName ? `<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg border border-slate-300 dark:border-slate-600 text-[9px] font-bold">${esc(t.variantName)}</span>` : ''}
                                    ${t.poTime ? `<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${esc(t.poTime)}</span>` : ''}
                                </div>
                                ` : ''}
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 font-bold">${parseFloat(t.qty)} ${esc(t.unit || 'pcs')} x ${fCur(t.effectivePrice)}</p>
                            </div>
                        </div>
                        <div class="font-bold text-sm text-slate-900 dark:text-white ml-3 shrink-0">${fCur(t.effectivePrice * parseFloat(t.qty))}</div>
                    </div>`).join('')}
                </div>
            </div>

            ${o.claimedReward ? `
            <div class="bg-violet-50 dark:bg-violet-900/10 p-5 sm:p-6 rounded-[1.5rem] border border-violet-200 dark:border-violet-800 shadow-sm">
                <h4 class="font-bold text-violet-700 dark:text-violet-400 text-sm border-b border-violet-200 dark:border-violet-800 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-500 flex items-center justify-center border border-violet-200 dark:border-violet-800"><i class="fa-solid fa-gift"></i></div> Klaim Hadiah</h4>
                <div class="space-y-3">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Hadiah</span><span class="font-bold text-violet-700 dark:text-violet-400 text-sm">${esc(o.claimedReward.name)}</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Poin Ditukar</span><span class="font-bold text-slate-800 dark:text-white text-sm">${o.claimedReward.pointsCost} Poin</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Status</span><span class="font-bold text-xs px-2 py-1 rounded-xl ${o.claimedReward.status === 'ready' ? 'bg-emerald-100 text-emerald-600' : o.claimedReward.status === 'waiting_stock' ? 'bg-amber-100 text-amber-600' : 'bg-slate-200 text-slate-600'}">${rewardStatusLabel(o.claimedReward)}</span></div>
                    ${o.claimedReward.note ? `<div class="bg-white/70 dark:bg-slate-900/40 p-2.5 rounded-xl text-[11px] italic text-violet-600 dark:text-violet-400">"${esc(o.claimedReward.note)}"</div>` : ''}
                    <div class="border-t border-dashed border-violet-200 dark:border-violet-800 pt-3.5 mt-1 space-y-2.5">
                        <button type="button" onclick="ackRewardClaim('${o.orderId}','ready')" class="w-full py-2.5 rounded-xl primary-bg text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-check"></i> Stok Ada — Kirim Bersama Pesanan</button>
                        <button type="button" onclick="ackRewardClaim('${o.orderId}','waiting_stock')" class="w-full py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-clock"></i> Stok Kosong — Tunda Pengiriman</button>
                    </div>
                </div>
            </div>` : ''}

            <div class="bg-slate-900 p-6 sm:p-7 rounded-[1.5rem] text-white shadow-xl shadow-slate-900/20 border border-slate-700/60 relative overflow-hidden group mt-2">
                <div class="absolute -top-10 -right-10 w-32 h-32 primary-blur-orb rounded-full blur-3xl pointer-events-none transition-all duration-700"></div>
                
                <div class="flex justify-between items-center border-b border-slate-700/80 pb-4 mb-4 relative z-10">
                    <h4 class="font-bold text-[11px] uppercase tracking-widest text-slate-300 flex items-center gap-2.5"><i class="fa-solid fa-wallet text-[var(--color-primary)] text-sm"></i> Ringkasan Bayar</h4>
                    <span class="bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-bold tracking-widest border border-white/10 uppercase shadow-inner text-white">${esc(o.payment?.method || '').toUpperCase()}</span>
                </div>
                
                <div class="space-y-3 font-medium text-sm text-slate-300 relative z-10">
                    <div class="flex justify-between items-center"><span>Subtotal Produk</span><span class="font-bold text-white">${fCur(o.payment?.subtotal)}</span></div>
                    ${o.customer?.deliveryMethod === 'delivery' ? `<div class="flex justify-between items-center"><span>Ongkos Kirim</span><span class="font-bold text-white">${fCur(o.payment?.shippingCost)}</span></div>` : ''}
                    ${o.payment?.shippingDiscount ? `<div class="flex justify-between items-center text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.15)] px-2 py-1 -mx-2 rounded-xl"><span>Diskon Ongkir</span><span class="font-bold">-${fCur(o.payment.shippingDiscount)}</span></div>` : ''}
                    ${o.payment?.productDiscount ? `<div class="flex justify-between items-center text-rose-400 bg-rose-900/20 px-2 py-1 -mx-2 rounded-xl"><span>Diskon Promo</span><span class="font-bold">-${fCur(o.payment.productDiscount)}</span></div>` : ''}
                    ${(() => {
                        const ptDisc = parseFloat(o.pointDiscount || o.payment?.pointDiscount) || 0;
                        const pts = parseFloat(o.pointsRedeemed) || 0;
                        if (ptDisc <= 0) return '';
                        return `
                        <div class="flex justify-between items-center text-emerald-400 bg-emerald-950/40 px-2.5 py-1.5 -mx-2 rounded-xl border border-emerald-800/40">
                            <span class="flex items-center gap-1.5 font-bold"><i class="fa-solid fa-tags text-emerald-400"></i> Diskon Poin Member ${pts > 0 ? `(${pts} Poin)` : ''}</span>
                            <span class="font-bold font-mono">-${fCur(ptDisc)}</span>
                        </div>`;
                    })()}
                    ${(() => {
                        if (!o.payment?.ppnAmount || o.payment.ppnAmount <= 0) return '';
                        const isInc = o.payment.ppnType === 'inclusive';
                        const ppnRate = o.payment.ppnRate || 11;
                        const ppnAmt = o.payment.ppnAmount;
                        const baseBeforeTax = (o.payment.subtotal || 0) - (o.payment.productDiscount || 0) + (o.payment.shippingCost || 0) - (o.payment.shippingDiscount || 0);
                        const dppAmt = o.payment.dppAmount || (isInc ? Math.round((baseBeforeTax * 100) / (100 + ppnRate)) : Math.max(0, baseBeforeTax));

                        return `
                        <div class="flex justify-between items-center text-slate-400"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-bold text-white">${fCur(dppAmt)}</span></div>
                        <div class="flex justify-between items-center text-amber-400 bg-amber-900/20 px-2 py-1 -mx-2 rounded-xl"><span>${isInc ? 'Termasuk PPN' : 'PPN'} (${ppnRate}%)</span><span class="font-bold">${isInc ? '' : '+'}${fCur(ppnAmt)}</span></div>
                        `;
                    })()}
                </div>
                
                <div class="border-t border-dashed border-slate-600/60 my-5 relative z-10"></div>
                
                <div class="flex justify-between items-end relative z-10">
                    <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Tagihan</span>
                    <span class="text-3xl font-bold text-[var(--color-primary)] tracking-tight font-extrabold">${fCur(o.payment?.grandTotal)}</span>
                </div>

                ${(() => {
                    const isTempoOrder = o.payment?.method === 'tempo' || o.isTempo;
                    if (!isTempoOrder) return '';
                    const isPL = !!(o.payment?.isPaylater || o.isPaylater || o.payment?.subMethod === 'paylater');
                    const tempoDp = parseFloat(o.payment?.tempoDp ?? o.payment?.dp) || 0;
                    const tempoBal = parseFloat(o.payment?.tempoBalance) || 0;
                    const isTempoLunas = o.payment?.paymentStatus === 'lunas' || tempoBal <= 0;
                    return `
                    <div class="mt-4 pt-3.5 border-t border-slate-700/80 space-y-2 relative z-10">
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400 font-bold flex items-center gap-1.5">
                                <i class="fa-solid ${isPL ? 'fa-bolt text-emerald-400' : 'fa-hourglass-half text-amber-400'}"></i> Jenis Transaksi
                            </span>
                            <span class="font-bold ${isPL ? 'text-emerald-300' : 'text-amber-300'}">
                                ${isPL ? 'Putri PayLater Member VIP' : 'Penjualan Tempo (Piutang)'}
                            </span>
                        </div>
                        ${isPL ? `
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Limit PayLater Terpakai</span>
                            <span class="font-bold text-emerald-400 font-mono">${fCur(o.payment?.paylaterUsed || (o.payment?.grandTotal - tempoDp))}</span>
                        </div>` : ''}
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Uang Muka (DP Dibayar)</span>
                            <span class="font-bold text-emerald-400 font-mono">${fCur(tempoDp)}</span>
                        </div>
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Sisa Tagihan ${isPL ? 'PayLater' : 'Piutang'}</span>
                            <span class="font-bold font-mono ${isTempoLunas ? 'text-emerald-400' : (isPL ? 'text-emerald-300' : 'text-amber-400')}">${fCur(tempoBal)}</span>
                        </div>
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400">Status ${isPL ? 'PayLater' : 'Piutang'}</span>
                            <span class="px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${isTempoLunas ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : (isPL ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40')}">
                                ${isTempoLunas ? '✓ LUNAS' : '⏳ BELUM LUNAS'}
                            </span>
                        </div>
                        <button type="button" onclick="if(typeof window.closeOrderDetailModal==='function') window.closeOrderDetailModal(); if(typeof window.openAdminTab==='function') window.openAdminTab('piutang'); setTimeout(() => { if(typeof window.openTempoDetail==='function') window.openTempoDetail('${esc(o.orderId)}'); }, 300);" class="mt-2.5 w-full py-2.5 px-3 rounded-xl ${isPL ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40'} text-[11px] font-bold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 shadow-xs">
                            <i class="fa-solid ${isPL ? 'fa-bolt' : 'fa-file-invoice-dollar'}"></i> Kelola Tagihan &amp; Cicilan di Modul Piutang
                        </button>
                    </div>`;
                })()}
            </div>

            </div>
            </div>
        </div>`);
        
    const mOrd = el('admin-order-modal');
    const bOrd = el('admin-order-modal-box');
    const cOrd = el('admin-order-modal-content');
    if (cOrd) {
        cOrd.scrollTop = 0;
        cOrd.style.transform = '';
        cOrd.style.transition = '';
    }
    if (mOrd && mOrd.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('adminOrder');
    }
    openModalAnim(mOrd, bOrd);
};

/**
 * Simpan data kontak pelanggan dari pesanan ke Database Pelanggan CMS
 */
export const saveOrderCustomerToDB = async (name, waRaw, orderId = null) => {
    const normalizeFn = typeof window.normalizeWA === 'function' 
        ? window.normalizeWA 
        : (v) => String(v || '').replace(/\D/g, '').replace(/^0/, '62');
    const phone = normalizeFn(waRaw);
    if (!phone || phone.length < 10) return showToast("Nomor WA tidak valid!");
    sLoad('Menyimpan...');
    try {
        const ref = db.collection("freshmart").doc("cms_data").collection("customers").doc(phone);
        const existing = await ref.get();
        if (existing.exists) {
            // Nomor sudah terdaftar — nama TIDAK BOLEH diubah lewat sini, hanya admin CMS yang bisa edit
            showToast(`⚠️ Nomor ini sudah terdaftar atas nama: ${existing.data().name}`);
            hLoad();
            return;
        }
        // Pelanggan baru — simpan dengan nama pertama kali, tidak bisa diubah oleh pelanggan
        await ref.set({
            id: parseInt(phone, 10),
            name: name || '-',
            phone: phone,
            points: 0,
            registeredAt: Date.now()
        });
        // Update customerType pesanan ini menjadi 'Member'
        if (orderId) {
            await db.collection("freshmart_orders").doc(orderId).update({ customerType: 'Member' });
            // Update data lokal supaya UI langsung reload
            const idx = gOrds.findIndex(o => o.orderId === orderId);
            if (idx !== -1) gOrds[idx].customerType = 'Member';
        }
        showToast("✅ Pelanggan berhasil didaftarkan sebagai Member!");
        // Refresh detail pesanan agar badge langsung berubah
        if (orderId && typeof window.openOrderDetail === 'function') {
            setTimeout(() => window.openOrderDetail(orderId), 400);
        }
    } catch(e) { 
        console.error('Gagal simpan pelanggan:', e); 
        showToast("Gagal menyimpan data pelanggan: " + (e.message || '')); 
    } finally { 
        hLoad(); 
    }
};

/**
 * Admin menyetujui atau menunda status klaim hadiah produk
 */
export const ackRewardClaim = async (orderId, status) => {
    if (status === 'waiting_stock') {
        if (typeof window.customPrompt === 'function') {
            window.customPrompt("Catatan untuk pelanggan:", "Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.", async (note) => {
                if (note === null) return;
                sLoad('Menyimpan...');
                try {
                    await db.collection("freshmart_orders").doc(orderId).update({
                        'claimedReward.status': status,
                        'claimedReward.note': note || ''
                    });
                    showToast('Status klaim hadiah diperbarui!');
                    let idx = gOrds.findIndex(o => o.orderId === orderId);
                    if (idx !== -1) {
                        if (!gOrds[idx].claimedReward) gOrds[idx].claimedReward = {};
                        gOrds[idx].claimedReward.status = status;
                        gOrds[idx].claimedReward.note = note || '';
                    }
                    if (typeof window.openCustomerOrderDetail === 'function') {
                        window.openCustomerOrderDetail(orderId);
                    }
                } catch (e) {
                    showToast('Gagal update klaim: ' + e.message);
                } finally { 
                    hLoad(); 
                }
            });
            return;
        }
    }
    
    let note = '';
    sLoad('Menyimpan...');
    try {
        await db.collection("freshmart_orders").doc(orderId).update({
            'claimedReward.status': status,
            'claimedReward.note': note
        });
        const o = gOrds.find(x => x.orderId === orderId);
        if (o) { 
            o.claimedReward.status = status; 
            o.claimedReward.note = note; 
            openOrderDetail(orderId); 
        }
        showToast("Status hadiah diperbarui!");
    } catch(e) { 
        console.error('Gagal update status hadiah:', e); 
        showToast("Gagal update status hadiah: " + (e.message || '')); 
    } finally { 
        hLoad(); 
    }
};

/**
 * Tutup modal detail pesanan admin
 */
export const closeOrderDetailModal = (fH = false) => {
    const mOrd = el('admin-order-modal');
    const bOrd = el('admin-order-modal-box');
    const doClose = () => {
        closeModalAnim(mOrd, bOrd);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('adminOrder', fH, doClose);
    } else {
        doClose();
    }
};

/**
 * Pulihkan stok barang fisik dan rollback poin/hadiah saat pesanan dibatalkan atau dihapus
 */
export const restoreOrderStockAndRewards = async (orderId, orderData = null) => {
    try {
        let ord = orderData;
        if (!ord) {
            const doc = await db.collection("freshmart_orders").doc(orderId).get();
            if (!doc.exists) return;
            ord = doc.data();
        }
        if (!ord) return;

        const useStk = appData.store?.useStock === true || appData.store?.useStock === 'true';

        // 1. KEMBALIKAN STOK BARANG & VARIAN (Jika manajemen stok aktif & belum pernah di-restock)
        if (useStk && !ord.isStockRestocked && Array.isArray(ord.items) && ord.items.length > 0) {
            for (const it of ord.items) {
                const pId = it.id != null ? String(it.id) : null;
                const qty = parseFloat(it.qty) || 0;
                if (!pId || qty <= 0) continue;

                try {
                    const pRef = db.collection("freshmart").doc("cms_data").collection("products").doc(pId);
                    const pSnap = await pRef.get();
                    if (pSnap.exists) {
                        const pData = pSnap.data();
                        let newStock = (parseFloat(pData.stock) || 0) + qty;
                        let updatePayload = { stock: newStock };

                        // Jika item bervarian
                        if (it.variantName && Array.isArray(pData.variants)) {
                            const vIdx = pData.variants.findIndex(v => v.name === it.variantName);
                            if (vIdx !== -1) {
                                pData.variants[vIdx].stock = (parseFloat(pData.variants[vIdx].stock) || 0) + qty;
                                if (pData.variants[vIdx].stock > 0) {
                                    pData.variants[vIdx].isActive = true;
                                }
                                updatePayload.variants = pData.variants;
                            }
                        }

                        await pRef.update(updatePayload);

                        // Update in-memory appData.products
                        if (Array.isArray(appData.products)) {
                            const localProd = appData.products.find(p => String(p.id) === pId);
                            if (localProd) {
                                localProd.stock = newStock;
                                if (updatePayload.variants) localProd.variants = updatePayload.variants;
                            }
                        }
                    }
                } catch (errP) {
                    console.warn(`[Auto-Restock] Gagal restock produk ${pId}:`, errP);
                }
            }
            ord.isStockRestocked = true;
        }

        // 2. ROLLBACK POIN & HADIAH MEMBER (Jika pesanan member & belum pernah di-rollback)
        const custPhone = ord.customerPhone || ord.customer?.wa;
        if (!ord.isPointsRolledBack && custPhone) {
            try {
                const cRef = db.collection("freshmart").doc("cms_data").collection("customers").doc(custPhone);
                const cSnap = await cRef.get();
                if (cSnap.exists) {
                    const cData = cSnap.data();
                    let currentPts = parseFloat(cData.points) || 0;

                    // Tarik kembali poin belanja yang didapat dari pesanan ini
                    const earned = parseFloat(ord.pointsEarned) || 0;
                    if (earned > 0) {
                        currentPts = Math.max(0, currentPts - earned);
                    }

                    // Kembalikan poin yang digunakan untuk klaim hadiah
                    if (ord.claimedReward && ord.claimedReward.id) {
                        const cost = parseFloat(ord.claimedReward.pointsCost) || 0;
                        if (cost > 0) currentPts += cost;

                        // Kembalikan stok hadiah fisik ke katalog
                        try {
                            const rRef = db.collection("freshmart").doc("cms_data").collection("rewards").doc(String(ord.claimedReward.id));
                            const rSnap = await rRef.get();
                            if (rSnap.exists) {
                                const rData = rSnap.data();
                                const newRewStock = (parseFloat(rData.stock) || 0) + 1;
                                await rRef.update({ stock: newRewStock });
                                if (Array.isArray(appData.rewards)) {
                                    const lRew = appData.rewards.find(r => String(r.id) === String(ord.claimedReward.id));
                                    if (lRew) lRew.stock = newRewStock;
                                }
                            }
                        } catch (errR) {
                            console.warn(`[Auto-Restock] Gagal restock hadiah:`, errR);
                        }

                        ord.claimedReward.status = 'cancelled';
                    }

                    await cRef.update({ points: currentPts });

                    // Update in-memory appData.customers
                    if (Array.isArray(appData.customers)) {
                        const lCust = appData.customers.find(c => String(c.phone) === custPhone || String(c.id) === custPhone);
                        if (lCust) lCust.points = currentPts;
                    }
                }
            } catch (errC) {
                console.warn(`[Auto-Restock] Gagal rollback poin member:`, errC);
            }
            ord.isPointsRolledBack = true;
        }

        // 3. ROLLBACK PEMAKAIAN LIMIT PUTRI PAYLATER (Jika pesanan menggunakan PayLater & belum pernah di-rollback)
        const isPlOrder = !!(ord.payment?.isPaylater || ord.isPaylater || ord.payment?.subMethod === 'paylater');
        if (!ord.isPaylaterRolledBack && isPlOrder && custPhone) {
            // Guard: jika order punya flag paylaterLimitTracked===false, berarti increment Firestore
            // memang TIDAK berhasil saat checkout → jangan decrement (bisa jadi negatif)
            const wasTracked = ord.paylaterLimitTracked !== false; // undefined = order lama, asumsikan tracked
            try {
                const usedLimit = parseFloat(ord.payment?.paylaterUsed || ord.paylaterUsed || ord.payment?.tempoBalance) || 0;
                if (usedLimit > 0 && wasTracked) {
                    const cleanCustPhone = custPhone.replace(/\D/g, '');
                    const normPhone = cleanCustPhone.startsWith('0') ? '62' + cleanCustPhone.slice(1) : cleanCustPhone;
                    const cRef = db.collection("freshmart").doc("cms_data").collection("customers").doc(normPhone);
                    // Gunakan TRANSACTION agar paylaterUsed tidak bisa jadi negatif
                    // (mencegah bug "sisa limit malah bertambah" akibat increment negatif pada nilai 0)
                    await db.runTransaction(async (txn) => {
                        const custSnap = await txn.get(cRef);
                        const currentUsed = Math.max(0, parseFloat(custSnap.exists ? (custSnap.data().paylaterUsed || 0) : 0));
                        const newUsed = Math.max(0, currentUsed - usedLimit);
                        if (custSnap.exists) {
                            txn.update(cRef, { paylaterUsed: newUsed });
                        } else {
                            txn.set(cRef, { paylaterUsed: 0 }, { merge: true });
                        }
                    });
                    if (Array.isArray(appData.customers)) {
                        const lCust = appData.customers.find(c => c && (String(c.phone).replace(/\D/g, '') === cleanCustPhone || String(c.id) === normPhone));
                        if (lCust) lCust.paylaterUsed = Math.max(0, (Math.max(0, parseFloat(lCust.paylaterUsed) || 0)) - usedLimit);
                    }
                } else if (usedLimit > 0 && !wasTracked) {
                    console.info('[PayLater Rollback] Dilewati: pesanan ini tidak berhasil update Firestore saat checkout (paylaterLimitTracked=false). Tidak ada rollback diperlukan.');
                }
            } catch (errPl) {
                console.warn(`[Auto-Restock] Gagal rollback limit PayLater:`, errPl);
            }
            ord.isPaylaterRolledBack = true;
        }

        // Simpan flag di pesanan Firestore jika pesanan masih ada
        await db.collection("freshmart_orders").doc(orderId).update({
            isStockRestocked: ord.isStockRestocked || false,
            isPointsRolledBack: ord.isPointsRolledBack || false,
            isPaylaterRolledBack: ord.isPaylaterRolledBack || false,
            ...(ord.claimedReward ? { claimedReward: ord.claimedReward } : {})
        }).catch(() => {});

        // Update in-memory gOrds
        if (Array.isArray(gOrds)) {
            const mIdx = gOrds.findIndex(o => o.orderId === orderId);
            if (mIdx !== -1) {
                gOrds[mIdx].isStockRestocked = ord.isStockRestocked;
                gOrds[mIdx].isPointsRolledBack = ord.isPointsRolledBack;
                if (ord.claimedReward) gOrds[mIdx].claimedReward = ord.claimedReward;
            }
        }
    } catch (e) {
        console.error('[Auto-Restock] Gagal proses pemulihan stok/poin:', e);
    }
};

/**
 * Potong kembali stok barang dan alokasikan poin jika status 'Dibatalkan' diubah kembali ke status aktif
 */
export const deductOrderStockAndRewards = async (orderId, orderData = null) => {
    try {
        let ord = orderData;
        if (!ord) {
            const doc = await db.collection("freshmart_orders").doc(orderId).get();
            if (!doc.exists) return;
            ord = doc.data();
        }
        if (!ord) return;

        const useStk = appData.store?.useStock === true || appData.store?.useStock === 'true';

        // 1. POTONG KEMBALI STOK BARANG & VARIAN (Jika sebelumnya sudah di-restock)
        if (useStk && ord.isStockRestocked && Array.isArray(ord.items) && ord.items.length > 0) {
            for (const it of ord.items) {
                const pId = it.id != null ? String(it.id) : null;
                const qty = parseFloat(it.qty) || 0;
                if (!pId || qty <= 0) continue;

                try {
                    const pRef = db.collection("freshmart").doc("cms_data").collection("products").doc(pId);
                    const pSnap = await pRef.get();
                    if (pSnap.exists) {
                        const pData = pSnap.data();
                        let newStock = Math.max(0, (parseFloat(pData.stock) || 0) - qty);
                        let updatePayload = { stock: newStock };

                        if (it.variantName && Array.isArray(pData.variants)) {
                            const vIdx = pData.variants.findIndex(v => v.name === it.variantName);
                            if (vIdx !== -1) {
                                pData.variants[vIdx].stock = Math.max(0, (parseFloat(pData.variants[vIdx].stock) || 0) - qty);
                                if (pData.variants[vIdx].stock <= 0) {
                                    pData.variants[vIdx].isActive = false;
                                }
                                updatePayload.variants = pData.variants;
                            }
                        }

                        await pRef.update(updatePayload);

                        if (Array.isArray(appData.products)) {
                            const localProd = appData.products.find(p => String(p.id) === pId);
                            if (localProd) {
                                localProd.stock = newStock;
                                if (updatePayload.variants) localProd.variants = updatePayload.variants;
                            }
                        }
                    }
                } catch (errP) {
                    console.warn(`[Auto-Deduct] Gagal potong stok produk ${pId}:`, errP);
                }
            }
            ord.isStockRestocked = false;
        }

        // 2. KEMBALIKAN ALOKASI POIN & STOK HADIAH
        const custPhone = ord.customerPhone || ord.customer?.wa;
        if (ord.isPointsRolledBack && custPhone) {
            try {
                const cRef = db.collection("freshmart").doc("cms_data").collection("customers").doc(custPhone);
                const cSnap = await cRef.get();
                if (cSnap.exists) {
                    const cData = cSnap.data();
                    let currentPts = parseFloat(cData.points) || 0;

                    const earned = parseFloat(ord.pointsEarned) || 0;
                    if (earned > 0) currentPts += earned;

                    if (ord.claimedReward && ord.claimedReward.id) {
                        const cost = parseFloat(ord.claimedReward.pointsCost) || 0;
                        if (cost > 0) currentPts = Math.max(0, currentPts - cost);

                        try {
                            const rRef = db.collection("freshmart").doc("cms_data").collection("rewards").doc(String(ord.claimedReward.id));
                            const rSnap = await rRef.get();
                            if (rSnap.exists) {
                                const rData = rSnap.data();
                                const newRewStock = Math.max(0, (parseFloat(rData.stock) || 0) - 1);
                                await rRef.update({ stock: newRewStock });
                                if (Array.isArray(appData.rewards)) {
                                    const lRew = appData.rewards.find(r => String(r.id) === String(ord.claimedReward.id));
                                    if (lRew) lRew.stock = newRewStock;
                                }
                            }
                        } catch (errR) {
                            console.warn(`[Auto-Deduct] Gagal potong stok hadiah:`, errR);
                        }

                        ord.claimedReward.status = 'pending';
                    }

                    await cRef.update({ points: currentPts });

                    if (Array.isArray(appData.customers)) {
                        const lCust = appData.customers.find(c => String(c.phone) === custPhone || String(c.id) === custPhone);
                        if (lCust) lCust.points = currentPts;
                    }
                }
            } catch (errC) {
                console.warn(`[Auto-Deduct] Gagal alokasi ulang poin member:`, errC);
            }
            ord.isPointsRolledBack = false;
        }

        // 3. RE-APPLY PEMAKAIAN LIMIT PUTRI PAYLATER (Jika sebelumnya sempat di-rollback saat Dibatalkan)
        const isPlOrder = !!(ord.payment?.isPaylater || ord.isPaylater || ord.payment?.subMethod === 'paylater');
        if (ord.isPaylaterRolledBack && isPlOrder && custPhone) {
            try {
                const usedLimit = parseFloat(ord.payment?.paylaterUsed || ord.paylaterUsed || ord.payment?.tempoBalance) || 0;
                if (usedLimit > 0) {
                    const cleanCustPhone = custPhone.replace(/\D/g, '');
                    const normPhone = cleanCustPhone.startsWith('0') ? '62' + cleanCustPhone.slice(1) : cleanCustPhone;
                    const cRef = db.collection("freshmart").doc("cms_data").collection("customers").doc(normPhone);
                    await db.runTransaction(async (txn) => {
                        const custSnap = await txn.get(cRef);
                        if (custSnap.exists) {
                            const currentUsed = Math.max(0, parseFloat(custSnap.data().paylaterUsed) || 0);
                            txn.update(cRef, { paylaterUsed: currentUsed + usedLimit });
                        }
                    });
                    if (Array.isArray(appData.customers)) {
                        const lCust = appData.customers.find(c => c && (String(c.phone).replace(/\D/g, '') === cleanCustPhone || String(c.id) === normPhone));
                        if (lCust) lCust.paylaterUsed = (Math.max(0, parseFloat(lCust.paylaterUsed) || 0)) + usedLimit;
                    }
                }
            } catch (errPl) {
                console.warn(`[Auto-Deduct] Gagal re-apply limit PayLater:`, errPl);
            }
            ord.isPaylaterRolledBack = false;
        }

        await db.collection("freshmart_orders").doc(orderId).update({
            isStockRestocked: false,
            isPointsRolledBack: false,
            isPaylaterRolledBack: false,
            ...(ord.claimedReward ? { claimedReward: ord.claimedReward } : {})
        }).catch(() => {});

        if (Array.isArray(gOrds)) {
            const mIdx = gOrds.findIndex(o => o.orderId === orderId);
            if (mIdx !== -1) {
                gOrds[mIdx].isStockRestocked = false;
                gOrds[mIdx].isPointsRolledBack = false;
                if (ord.claimedReward) gOrds[mIdx].claimedReward = ord.claimedReward;
            }
        }
    } catch (e) {
        console.error('[Auto-Deduct] Gagal proses deduksi stok/poin:', e);
    }
};

/**
 * Ubah status pesanan di Firestore dengan Auto-Restock & Rollback cerdas
 */
export const updateOrderStatus = async (i, s) => {
    if (isSaving) return; 
    setIsSaving(true); 
    sLoad('Update...');
    try { 
        let ord = gOrds.find(x => x.orderId === i);
        const oldStatus = ord ? ord.status : null;

        await db.collection("freshmart_orders").doc(i).update({ status: s }); 
        if (ord) ord.status = s; 

        // ── AUTO-RESTOCK & ROLLBACK GUARD ──
        if (s === 'Dibatalkan' && oldStatus !== 'Dibatalkan') {
            await restoreOrderStockAndRewards(i, ord);
            showToast("Pesanan dibatalkan & stok dikembalikan ke toko!", "info");
        } else if (oldStatus === 'Dibatalkan' && s !== 'Dibatalkan') {
            await deductOrderStockAndRewards(i, ord);
            showToast("Pesanan diaktifkan kembali & stok dipotong!", "info");
        } else {
            showToast("✅ Status diupdate!"); 
        }

        openOrderDetail(i);

    } catch(e) { 
        showToast("Gagal!"); 
    } finally { 
        setIsSaving(false); 
        hLoad(); 
    }
};

/**
 * Kirim pesan notifikasi status pesanan ke WhatsApp pembeli
 * Pesan bersifat dinamis dan disesuaikan dengan status pesanan saat ini
 */
export const konfirmasiKeWA = async (orderId) => {
    if (!orderId) return showToast('ID pesanan tidak valid!');
    // Ambil dari memori lokal dulu supaya tidak perlu Firestore fetch
    let d = gOrds.find(x => x.orderId === orderId);
    if (!d) {
        sLoad('Memuat data...');
        try {
            const doc = await db.collection('freshmart_orders').doc(orderId).get();
            hLoad();
            if (!doc.exists) return showToast('Data pesanan tidak ditemukan!');
            d = doc.data();
        } catch(e) {
            hLoad();
            showToast('Gagal memuat data pesanan!');
            return;
        }
    }

    const waNum = d.customer && d.customer.wa;
    if (!waNum) return showToast('Nomor WhatsApp pelanggan tidak tersedia!');
    
    const storeName = (appData && appData.store && appData.store.name) ? appData.store.name : 'Toko Putri';
    const storePhone = (appData && appData.store && appData.store.phone) ? appData.store.phone : '';
    const cName = (d.customer && d.customer.name) ? d.customer.name : 'Pelanggan';
    const status = d.status || 'Baru';
    const grandTotal = (d.payment && d.payment.grandTotal) ? fCur(d.payment.grandTotal) : '-';
    const shortId = (orderId || '').split('-').pop();
    const methodRaw = (d.payment && d.payment.method) ? d.payment.method : '';
    const isPL = !!(d.payment?.isPaylater || d.payment?.subMethod === 'paylater');
    const methodLabel = methodRaw === 'transfer' ? 'Transfer Bank'
        : methodRaw === 'qris' ? 'QRIS'
        : methodRaw === 'cod' ? 'COD (Bayar di Tempat)'
        : (methodRaw === 'tempo' && isPL) ? 'Putri PayLater'
        : methodRaw === 'tempo' ? 'Penjualan Tempo'
        : methodRaw === 'cashier' || methodRaw === 'cash' ? 'Tunai'
        : methodRaw.toUpperCase();
    
    const isPOS = d.source === 'pos' || d.channel === 'pos';
    const deliveryMethod = d.customer?.deliveryMethod;
    const isDelivery = deliveryMethod === 'delivery';

    // Info produk singkat (maks 3 item)
    const items = (d.items || []).slice(0, 3);
    const itemLines = items.map(t => `  • ${t.name}${t.variantName ? ` (${t.variantName})` : ''} x${parseFloat(t.qty)}`).join('\n');
    const moreItems = (d.items || []).length > 3 ? `  ...dan ${(d.items || []).length - 3} item lainnya` : '';
    const itemSection = itemLines + (moreItems ? '\n' + moreItems : '');

    // Info pengiriman
    let deliverySection = '';
    if (!isPOS) {
        if (d.isDropPoint && d.dropPoint) {
            deliverySection = `\n📍 *Dikirim ke Lokasi:*\n`
                + `👤 Penerima: *${d.dropPoint.name || '-'}*\n`
                + `🏠 Alamat Tujuan: ${d.dropPoint.address || '-'}\n`;
        } else if (isDelivery && d.customer?.address) {
            deliverySection = `\n🚚 *Alamat Pengiriman:*\n${d.customer.address}\n`;
        } else if (!isDelivery) {
            deliverySection = `\n🏪 *Metode:* Ambil di Toko\n`;
        }
    }

    // Buat pesan sesuai status
    let msg = '';
    if (status === 'Baru') {
        msg = `Halo *${cName}*! 👋\n\n`
            + `Terima kasih telah berbelanja di *${storeName}*! 🛒\n\n`
            + `✅ *Pesanan Anda sudah kami terima!*\n\n`
            + `📋 No. Pesanan: *#${shortId}*\n`
            + `💰 Total: *${grandTotal}*\n`
            + `💳 Pembayaran: *${methodLabel}*\n\n`
            + `🛍️ *Ringkasan Pesanan:*\n${itemSection}\n`
            + deliverySection
            + `\n⏳ Pesanan Anda sedang kami periksa dan akan segera diproses.`
            + (storePhone ? `\n\nJika ada pertanyaan, balas pesan ini atau hubungi kami. Terima kasih! 🙏` : `\n\nTerima kasih! 🙏`);
    } else if (status === 'Diproses') {
        msg = `Halo *${cName}*! 👋\n\n`
            + `🔄 *Kabar Terbaru Pesanan Anda!*\n\n`
            + `Pesanan *#${shortId}* sedang kami siapkan dengan sepenuh hati di *${storeName}*.\n\n`
            + `📋 No. Pesanan: *#${shortId}*\n`
            + `💰 Total: *${grandTotal}*\n\n`
            + `🛍️ *Item yang Disiapkan:*\n${itemSection}\n`
            + deliverySection
            + (isDelivery && !d.isDropPoint
                ? `\n🚗 Pesanan akan segera dikirim ke alamat Anda. Harap siap menerima!`
                : d.isDropPoint
                ? `\n🚗 Pesanan akan segera dikirim ke lokasi tujuan yang Anda tentukan.`
                : `\n🏪 Pesanan Anda akan siap diambil di toko kami sebentar lagi!`)
            + `\n\nTerima kasih atas kepercayaan Anda! 🙏`;
    } else if (status === 'Selesai') {
        msg = `Halo *${cName}*! 👋\n\n`
            + `✅ *Pesanan Selesai! Terima kasih sudah berbelanja!*\n\n`
            + `Pesanan *#${shortId}* dari *${storeName}* telah berhasil diselesaikan.\n\n`
            + `💰 Total Belanja: *${grandTotal}*\n`
            + `💳 Pembayaran: *${methodLabel}*\n\n`
            + `Semoga produk yang Anda terima sesuai harapan! 🎉\n\n`
            + `💬 *Apakah Anda puas dengan pelayanan kami?*\n`
            + `Jangan ragu untuk kembali berbelanja di *${storeName}*. Sampai jumpa! 🛒✨`;
    } else if (status === 'Dibatalkan') {
        msg = `Halo *${cName}*! 👋\n\n`
            + `❌ *Pemberitahuan Pembatalan Pesanan*\n\n`
            + `Kami informasikan bahwa pesanan *#${shortId}* di *${storeName}* telah dibatalkan.\n\n`
            + `💰 Total yang Dibatalkan: *${grandTotal}*\n\n`
            + `Jika Anda memiliki pertanyaan mengenai pembatalan ini atau ingin memesan kembali, `
            + `silakan hubungi kami kembali.\n\n`
            + `Mohon maaf atas ketidaknyamanannya. Terima kasih! 🙏`;
    } else {
        // Fallback generik
        msg = `Halo *${cName}*! 👋\n\n`
            + `Update status pesanan *#${shortId}* dari *${storeName}*:\n\n`
            + `📦 Status: *${status}*\n`
            + `💰 Total: *${grandTotal}*\n\n`
            + `Terima kasih! 🙏`;
    }
    
    if (typeof window.openWhatsApp === 'function') {
        window.openWhatsApp(waNum, msg);
    } else {
        window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    }
};

/**
 * Kirim notifikasi pengiriman ke nomor WhatsApp penerima di lokasi proyek (Drop-Point)
 */
export const konfirmasiKeWAPenerima = async (orderId) => {
    if (!orderId) return showToast('ID pesanan tidak valid!');
    sLoad('Memuat data...');
    try {
        const doc = await db.collection('freshmart_orders').doc(orderId).get();
        hLoad();
        if (!doc.exists) return showToast('Data pesanan tidak ditemukan!');
        const d = doc.data();
        const dpWa = d.dropPoint && d.dropPoint.wa;
        if (!dpWa) return showToast('Nomor WhatsApp penerima tujuan tidak tersedia!');
        
        const storeName = (appData && appData.store && appData.store.name) ? appData.store.name : 'Toko Putri';
        const dpName = (d.dropPoint && d.dropPoint.name) ? d.dropPoint.name : 'Penerima';
        const cName = (d.customer && d.customer.name) ? d.customer.name : 'Pemesan';
        const dpAddr = (d.dropPoint && d.dropPoint.address) ? d.dropPoint.address : '-';
        const status = d.status || 'Diproses';
        
        const msg = `Halo *${dpName}*! 👋\n\n`
            + `Kami dari *${storeName}* menginformasikan bahwa ada pesanan barang dari *${cName}* yang akan dikirimkan ke lokasi Anda:\n\n`
            + `📋 No. Pesanan: *#${orderId.split('-').pop()}*\n`
            + `🏠 Alamat Tujuan: ${dpAddr}\n`
            + `📦 Status: *${status}*\n\n`
            + `Mohon konfirmasi atau pastikan ada yang menerima barang di lokasi tujuan saat kurir tiba. Terima kasih! 🙏`;
        
        if (typeof window.openWhatsApp === 'function') {
            window.openWhatsApp(dpWa, msg);
        } else {
            window.open(`https://wa.me/${dpWa}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
        }
    } catch(e) {
        hLoad();
        showToast('Gagal memuat data pesanan!');
    }
};

/**
 * Hapus pesanan permanen dari Firestore dengan proteksi pemulihan stok
 */
export const deleteOrder = (i) => {
    showConfirm("Hapus Pesanan", "Yakin ingin menghapus pesanan ini secara permanen? Jika pesanan belum dibatalkan, stok barang akan otomatis dikembalikan ke toko.", async () => {
        if (isSaving) return; 
        setIsSaving(true); 
        sLoad('Menghapus...');
        try { 
            let ord = gOrds.find(x => x.orderId === i);
            if (!ord || ord.status !== 'Dibatalkan') {
                // Pulihkan stok dan rollback poin/hadiah sebelum pesanan dihapus
                await restoreOrderStockAndRewards(i, ord);
            }
            await db.collection("freshmart_orders").doc(i).delete(); 
            showToast("Pesanan terhapus & stok aman!"); 
            if (cVOrd === i) closeOrderDetailModal(); 
        } catch(e) { 
            showToast("Gagal!"); 
        } finally { 
            setIsSaving(false); 
            hLoad(); 
        }
    });
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.exportOrdersToExcel = exportOrdersToExcel;
window.setOrderSourceFilter = setOrderSourceFilter;
window.rAdmOrd = rAdmOrd;
window.openOrderDetail = openOrderDetail;
window.saveOrderCustomerToDB = saveOrderCustomerToDB;
window.ackRewardClaim = ackRewardClaim;
window.closeOrderDetailModal = closeOrderDetailModal;
window.updateOrderStatus = updateOrderStatus;
window.konfirmasiKeWA = konfirmasiKeWA;
window.konfirmasiKeWAPenerima = konfirmasiKeWAPenerima;
window.deleteOrder = deleteOrder;
