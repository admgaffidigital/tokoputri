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
    ensureScriptLoaded, rewardStatusLabel 
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
        let method = o.customer?.deliveryMethod === 'delivery' ? 'Dikirim' : 'Ambil di Toko';
        let status = o.status || '-';
        let totalItem = o.items ? o.items.reduce((sum, i) => sum + (parseFloat(i.qty) || 0), 0) : 0;
        let totalHarga = o.payment?.grandTotal || 0;

        dataExcel.push({
            "No": index + 1,
            "ID Pesanan": o.orderId,
            "Tanggal": date,
            "Nama Pelanggan": custName,
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
        { wch: 25 },
        { wch: 15 },
        { wch: 15 },
        { wch: 12 },
        { wch: 20 }
    ];
    worksheet['!cols'] = wscols;

    const safeDateString = new Date().toISOString().split('T')[0];
    XLSX.writeFile(workbook, `Laporan_Pesanan_${safeDateString}.xlsx`);
    showToast("Laporan Excel (.xlsx) berhasil diunduh!");
};

/**
 * Mainkan nada Ding-Dong saat ada pesanan baru masuk
 */
export const playNewOrderSound = () => {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); 
        gain.connect(ctx.destination);
        
        osc.type = 'sine';
        
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(1, ctx.currentTime);
        osc.frequency.setValueAtTime(600, ctx.currentTime + 0.2);
        
        osc.frequency.setValueAtTime(800, ctx.currentTime + 0.6);
        gain.gain.setValueAtTime(1, ctx.currentTime + 0.6);
        osc.frequency.setValueAtTime(600, ctx.currentTime + 0.8);
        
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 1.5); 
        
        osc.start(ctx.currentTime); 
        osc.stop(ctx.currentTime + 1.5);
    } catch(e) {}
};

/**
 * Render Live Orders tab admin dengan Firestore listener real-time
 */
export const rAdmOrd = () => {
    setH('admin-content', `
        <div class="mb-5 flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-satellite-dish animate-pulse text-base"></i>
                </div>
                <div>
                    <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Live Orders</h2>
                    <p class="text-[9px] font-bold text-slate-500 mt-0.5">Pantau pesanan masuk secara realtime</p>
                </div>
            </div>
            <button onclick="exportOrdersToExcel()" class="h-9 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm border transition-all active:scale-95 hover:text-white hover:border-[var(--color-primary)] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600" style="--tw-shadow-color: rgba(var(--color-primary-rgb),0.2)" onmouseover="this.style.background='var(--color-primary)'" onmouseout="this.style.background=''">
                <i class="fa-solid fa-file-csv"></i> <span class="hidden sm:inline">Export Excel</span>
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
            setH('admin-orders-list', p.docs.map(d => {
                const o = d.data(); 
                docsList.push(o);
                
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
                if (method === 'transfer') pI = "fa-building-columns text-[var(--color-primary)]"; 
                else if (method === 'qris') pI = "fa-qrcode text-purple-500"; 
                else if (method === 'cod') pI = "fa-hand-holding-dollar text-[var(--color-primary)]"; 
                else if (method === 'cashier') pI = "fa-cash-register text-amber-500";
                
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
                            <div class="flex justify-between items-start mb-1">
                                <div class="flex items-center gap-2">
                                    <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">#${shortId}</span>
                                    <span class="text-[9px] font-bold px-2 py-0.5 rounded border ${bC} uppercase tracking-widest flex items-center"><i class="fa-solid ${iC} mr-1"></i> ${esc(o.status)}</span>
                                </div>
                                <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap"><i class="fa-regular fa-calendar"></i> <span class="hidden sm:inline">${dStr}</span></span>
                            </div>
                            <div class="flex items-center gap-2 mt-1.5">
                                <p class="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[120px] sm:max-w-xs"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${esc(o.customer?.name || 'Anonim')}</p>
                                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                                <span class="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-xl border border-slate-200 dark:border-slate-700 uppercase tracking-widest shrink-0">${itemCount} Item</span>
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
                            <span class="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">${esc(method)}</span>
                        </div>
                    </div>
                </div>`;
            }).join(''));
            setGOrds(docsList);
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
    
    let sSel = `<div class="relative w-full sm:w-40 mt-1"><select onchange="updateOrderStatus('${o.orderId}', this.value)" class="w-full text-sm font-bold ${o.status==='Baru'?'text-rose-600 bg-rose-50 border-rose-200':o.status==='Diproses'?'text-blue-600 bg-blue-50 border-blue-200':o.status==='Selesai'?'text-emerald-600 bg-emerald-50 border-emerald-200':'text-slate-500 bg-slate-50 border-slate-200'} border px-4 py-2.5 rounded-xl focus:outline-none appearance-none cursor-pointer transition-colors shadow-sm"><option value="Baru" ${o.status==='Baru'?'selected':''} class="text-slate-800">Baru (Pending)</option><option value="Diproses" ${o.status==='Diproses'?'selected':''} class="text-slate-800">Diproses</option><option value="Selesai" ${o.status==='Selesai'?'selected':''} class="text-slate-800">Selesai</option><option value="Dibatalkan" ${o.status==='Dibatalkan'?'selected':''} class="text-slate-800">Dibatalkan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 ${o.status==='Baru'?'text-rose-400':o.status==='Diproses'?'text-blue-400':o.status==='Selesai'?'text-emerald-400':'text-slate-400'} pointer-events-none text-xs"></i></div>`;
    
    setH('admin-order-modal-content', `
        <div class="flex flex-col gap-4 text-sm pb-2">
            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row justify-between gap-5 sm:items-center">
                <div class="flex-1">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-crosshairs text-[var(--color-primary)]"></i> Status</p>
                    ${sSel}
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
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center border border-blue-100 dark:border-blue-800"><i class="fa-solid fa-user"></i></div> Data Pemesan</h4>
                <div class="space-y-4">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Nama</span><span class="font-bold text-slate-900 dark:text-white text-base">${esc(o.customer?.name || '-')}</span></div>
                    ${o.customer?.wa ? `<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5"><i class="fa-brands fa-whatsapp text-green-500"></i> WhatsApp</span><a href="https://wa.me/${esc(o.customer.wa)}" target="_blank" class="font-bold text-green-600 dark:text-green-400 hover:underline">+${esc(o.customer.wa)}</a></div>` : ''}
                    ${o.customer?.wa ? `<button type="button" onclick="saveOrderCustomerToDB('${esc(o.customer.name || '')}','${esc(o.customer.wa)}')" class="w-full py-2.5 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-teal-100 transition-all active:scale-95"><i class="fa-solid fa-address-book"></i> Simpan ke Database Pelanggan</button>` : ''}
                    <div class="border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                        <span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 mb-2.5"><i class="fa-solid fa-map-location-dot"></i> Alamat (${o.customer?.deliveryMethod === 'delivery' ? 'Dikirim' : 'Ambil di Toko'})</span>
                        <div class="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${esc(o.customer?.address || '-')}</div>
                        ${o.customer?.lat && o.customer?.deliveryMethod === 'delivery' ? `<a href="https://www.google.com/maps?q=${esc(o.customer.lat)},${esc(o.customer.lng)}" target="_blank" class="mt-3 flex items-center justify-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-blue-100 transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi di Google Maps</a>` : ''}
                    </div>
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
            </div>

            </div>
            </div>
        </div>`);
        
    const mOrd = el('admin-order-modal');
    if (mOrd && mOrd.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('adminOrder');
    }
    show('admin-order-modal'); 
    setTimeout(() => { 
        if (el('admin-order-modal')) el('admin-order-modal').classList.remove('opacity-0'); 
        if (el('admin-order-modal-box')) el('admin-order-modal-box').classList.remove('scale-95'); 
    }, 10);
};

/**
 * Simpan data kontak pelanggan dari pesanan ke Database Pelanggan CMS
 */
export const saveOrderCustomerToDB = async (name, waRaw) => {
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
            await ref.set({ name: name || existing.data().name }, { merge: true });
            showToast("Data pelanggan sudah ada, nama diperbarui.");
        } else {
            await ref.set({ id: parseInt(phone, 10), name: name || '-', phone: phone, points: 0 });
            showToast("✅ Pelanggan baru disimpan ke database!");
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
    const doClose = () => {
        if (el('admin-order-modal')) el('admin-order-modal').classList.add('opacity-0');
        if (el('admin-order-modal-box')) el('admin-order-modal-box').classList.add('scale-95');
        setTimeout(() => hide('admin-order-modal'), 300);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('adminOrder', fH, doClose);
    } else {
        doClose();
    }
};

/**
 * Ubah status pesanan di Firestore
 */
export const updateOrderStatus = async (i, s) => {
    if (isSaving) return; 
    setIsSaving(true); 
    sLoad('Update...');
    try { 
        await db.collection("freshmart_orders").doc(i).update({ status: s }); 
        let ord = gOrds.find(x => x.orderId === i); 
        if (ord) ord.status = s; 
        openOrderDetail(i); 
        showToast("Status diupdate!"); 
    } catch(e) { 
        showToast("Gagal!"); 
    } finally { 
        setIsSaving(false); 
        hLoad(); 
    }
};

/**
 * Kirim pesan konfirmasi otomatis ke WhatsApp pembeli
 */
export const konfirmasiKeWA = async (orderId) => {
    if (!orderId) return showToast('ID pesanan tidak valid!');
    sLoad('Memuat data...');
    try {
        const doc = await db.collection('freshmart_orders').doc(orderId).get();
        hLoad();
        if (!doc.exists) return showToast('Data pesanan tidak ditemukan!');
        const d = doc.data();
        const waNum = d.customer && d.customer.wa;
        if (!waNum) return showToast('Nomor WhatsApp pelanggan tidak tersedia!');
        
        const storeName = (appData && appData.store && appData.store.name) ? appData.store.name : 'Toko Kami';
        const cName = (d.customer && d.customer.name) ? d.customer.name : 'Pelanggan';
        const status = d.status || 'Baru';
        const grandTotal = (d.payment && d.payment.grandTotal) ? fCur(d.payment.grandTotal) : '-';
        const method = (d.payment && d.payment.method) ? d.payment.method.toUpperCase() : '-';
        
        const msg = `Halo *${cName}*! 👋\n\n`
            + `Terima kasih telah berbelanja di *${storeName}*. 🛒\n\n`
            + `*Detail Pesanan Anda:*\n`
            + `📋 ID: *${orderId.split('-').pop()}*\n`
            + `💰 Total: *${grandTotal}*\n`
            + `💳 Pembayaran: *${method}*\n`
            + `📦 Status: *${status}*\n\n`
            + `Kami akan segera memproses pesanan Anda. Terima kasih! 🙏`;
        
        window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`, '_blank');
    } catch(e) {
        hLoad();
        showToast('Gagal memuat data pesanan!');
    }
};

/**
 * Hapus pesanan permanen dari Firestore
 */
export const deleteOrder = (i) => {
    showConfirm("Hapus Pesanan", "Yakin ingin hapus permanen?", async () => {
        if (isSaving) return; 
        setIsSaving(true); 
        sLoad('Menghapus...');
        try { 
            await db.collection("freshmart_orders").doc(i).delete(); 
            showToast("Terhapus!"); 
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
window.rAdmOrd = rAdmOrd;
window.openOrderDetail = openOrderDetail;
window.saveOrderCustomerToDB = saveOrderCustomerToDB;
window.ackRewardClaim = ackRewardClaim;
window.closeOrderDetailModal = closeOrderDetailModal;
window.updateOrderStatus = updateOrderStatus;
window.konfirmasiKeWA = konfirmasiKeWA;
window.deleteOrder = deleteOrder;
