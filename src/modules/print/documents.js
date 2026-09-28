/**
 * ============================================================
 * MODUL DOKUMEN CETAK A4 (INVOICE, SURAT JALAN & PDF EXPORT)
 * Mengatur preview dan ekspor format cetak standar A4.
 * ============================================================
 */

import { el, show, hide, setIn, setH, esc, fCur, sLoad, hLoad, openModalAnim, closeModalAnim } from '../../core/utils.js';

export let currentDocType = 'invoice';

export const openDocPreview = (type, targetId = null) => {
    currentDocType = type;

    if (type === 'po') {
        const purchases = appData.purchases || [];
        const po = purchases.find(x => String(x.id) === String(targetId)) || (window.currentActivePoId ? purchases.find(x => String(x.id) === String(window.currentActivePoId)) : purchases[0]);
        if (!po) {
            if (typeof window.showToast === 'function') window.showToast('Data PO tidak ditemukan!');
            return;
        }

        setIn('doc-modal-title', 'Preview Purchase Order (PO)');
        
        let logoHTML = '';
        if (appData.store.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:'))) {
            logoHTML = `<img loading="eager" src="${esc(appData.store.logo)}" class="w-16 h-16 object-contain">`;
        } else {
            logoHTML = `<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>`;
        }

        const formatDate = (val) => {
            if (!val) return '-';
            try {
                const d = val.toDate ? val.toDate() : new Date(val);
                return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
            } catch(e) { return '-'; }
        };

        const formatQty = (q) => {
            const num = parseFloat(q);
            if (isNaN(num)) return '0';
            return Number.isInteger(num) ? String(num) : num.toFixed(2).replace(/\.?0+$/, '');
        };

        const termLabel = po.paymentType === 'tempo' 
            ? `Tempo ${po.tempoDays || 14} Hari (Jatuh Tempo: ${formatDate(po.tempoDueDate)})` 
            : (po.paymentType === 'konsinyasi' ? 'Konsinyasi' : 'Cash / Tunai');

        let h = `
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
            <div class="flex items-center gap-4">
                ${logoHTML}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store.name || 'TOKO PUTRI')}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store.slogan || 'Pusat Alat Teknik, Bangunan & Perlengkapan')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store.address || 'Alamat fisik toko belum diatur.')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store.wa || appData.store.phone || '-')}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-3xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${esc(po.poNumber || po.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${formatDate(po.date || po.createdAt)}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${po.status === 'ordered' ? 'DIPESAN' : (po.status === 'received' ? 'DITERIMA' : 'SELESAI')}</p>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mb-8">
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${esc(po.supplierName || 'Supplier')}</p>
                ${po.supplierPhone ? `<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(po.supplierPhone)}</p>` : ''}
                ${po.supplierAddress ? `<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${esc(po.supplierAddress)}</p>` : ''}
            </div>
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${termLabel}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${esc(appData.store.name || 'Gudang Utama Toko')}</b></p>
                ${po.notes ? `<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-2"><i class="fa-solid fa-note-sticky mr-1"></i> ${esc(po.notes)}</p>` : ''}
            </div>
        </div>

        <table class="w-full text-left border-collapse mb-8">
            <thead>
                <tr class="border-b-2 border-slate-800 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-900 text-white">
                    <th class="py-3 px-4 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Nama Barang & Spesifikasi</th>
                    <th class="py-3 px-4 text-center w-28 border-r border-slate-700">Kuantitas</th>
                    <th class="py-3 px-4 text-right w-36 border-r border-slate-700">Harga Modal (HPP)</th>
                    <th class="py-3 px-4 rounded-tr-xl text-right w-36">Subtotal</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${(po.items || []).map((it, idx) => `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3 px-4 text-center font-mono text-slate-500">${idx + 1}</td>
                    <td class="py-3 px-4 font-bold text-slate-900 uppercase">
                        ${esc(it.name)}
                        ${it.variantName ? `<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5">Varian: ${esc(it.variantName)}</span>` : ''}
                        ${it.sku ? `<span class="text-slate-400 text-[10px] font-mono block mt-0.5">SKU: ${esc(it.sku)}</span>` : ''}
                    </td>
                    <td class="py-3 px-4 text-center font-bold text-base text-slate-800">${formatQty(it.qty)} <span class="text-xs font-normal text-slate-500">${esc(it.unit || 'pcs')}</span></td>
                    <td class="py-3 px-4 text-right font-mono text-slate-600">${fCur(it.unitPrice)}</td>
                    <td class="py-3 px-4 text-right font-bold font-mono text-slate-900">${fCur(Math.round((parseFloat(it.qty) || 0) * (parseFloat(it.unitPrice) || 0)))}</td>
                </tr>
                `).join('')}
            </tbody>
        </table>

        <div class="flex justify-end mb-8">
            <div class="w-80 bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs space-y-2.5">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${fCur(po.subtotal)}</span></div>
                ${po.discount > 0 ? `<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${fCur(po.discount)}</span></div>` : ''}
                ${po.shippingFee > 0 ? `<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${fCur(po.shippingFee)}</span></div>` : ''}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2.5 mt-2 font-bold text-base text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black">${fCur(po.total)}</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 text-center text-sm mt-auto pt-8 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(appData.store.name || 'Toko Putri')}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(po.supplierName || 'Rekanan / Supplier')}</span>
            </div>
        </div>
        `;

        setH('doc-paper-content', h);
        showDocModalWithAnim();
        return;
    }

    if (type === 'tempo_invoice') {
        const targetOrderId = targetId || cVOrd;
        const piutangList = window.cachedPiutangOrders || [];
        let o = piutangList.find(x => String(x.orderId) === String(targetOrderId))
            || (gOrds || []).find(x => String(x.orderId) === String(targetOrderId));
        if (!o && window.lastPrintedOrder && String(window.lastPrintedOrder.orderId) === String(targetOrderId)) {
            o = window.lastPrintedOrder;
        }

        if (!o) {
            if (typeof window.showToast === 'function') window.showToast('Data nota tagihan piutang tidak ditemukan!');
            return;
        }

        setIn('doc-modal-title', 'Preview Nota Tagihan Piutang (Tempo)');

        let logoHTML = '';
        if (appData.store?.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:'))) {
            logoHTML = `<img loading="eager" src="${esc(appData.store.logo)}" class="w-16 h-16 object-contain">`;
        } else {
            logoHTML = `<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>`;
        }

        const formatDate = (val) => {
            if (!val) return '-';
            try {
                const d = val.toDate ? val.toDate() : new Date(val);
                return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
            } catch(e) { return '-'; }
        };

        const formatQty = (q) => {
            const num = parseFloat(q);
            if (isNaN(num)) return '0';
            return Number.isInteger(num) ? String(num) : num.toFixed(2).replace(/\.?0+$/, '');
        };

        // Hitung rincian piutang, cicilan, dan denda
        let sisa = parseFloat(o.payment?.tempoBalance) || 0;
        let rate = o.payment?.tempoPenaltyRate !== undefined ? parseFloat(o.payment.tempoPenaltyRate) : 1;
        let isStopped = o.payment?.tempoPenaltyStopped === true;
        let latePenalty = 0;
        let dueDate = o.payment?.tempoDueDate || 0;
        let daysLate = 0;
        let daysLeft = 0;
        let isLate = false;
        let isDueSoon = false;
        const now = Date.now();

        if (dueDate > 0) {
            if (now > dueDate) {
                daysLate = Math.floor((now - dueDate) / (24 * 60 * 60 * 1000));
                if (daysLate > 0) isLate = true;
            } else {
                daysLeft = Math.ceil((dueDate - now) / (24 * 60 * 60 * 1000));
                if (daysLeft <= 3) isDueSoon = true;
            }
        }

        if (isStopped) {
            latePenalty = parseFloat(o.payment?.tempoFixedPenalty) || 0;
        } else if (isLate) {
            latePenalty = (rate / 100 * sisa) * daysLate;
        }

        let totalAkhir = sisa + latePenalty;
        const installments = o.payment?.installments || [];
        const totalPaid = installments.reduce((sum, ins) => sum + (parseFloat(ins.amount) || 0), 0);
        const grandTotalAwal = o.payment?.grandTotal || (sisa + totalPaid);
        const isLunas = o.payment?.paymentStatus === 'lunas' || sisa <= 0;

        let statusText = 'TEMPO BERJALAN';
        let statusClass = 'text-blue-600 bg-blue-50 border-blue-200';
        if (isLunas) {
            statusText = 'LUNAS SEPENUHNYA';
            statusClass = 'text-emerald-600 bg-emerald-50 border-emerald-300';
        } else if (isLate) {
            statusText = `TERLAMBAT ${daysLate} HARI`;
            statusClass = 'text-rose-600 bg-rose-50 border-rose-300';
        } else if (isDueSoon) {
            statusText = `JATUH TEMPO H-${daysLeft <= 0 ? '0' : daysLeft}`;
            statusClass = 'text-amber-600 bg-amber-50 border-amber-300';
        }

        const bankListHtml = (appData.banks && appData.banks.length > 0)
            ? appData.banks.map(b => `<div class="font-mono text-xs"><b class="text-slate-900">${esc(b.bank)}:</b> ${esc(b.number)} a/n ${esc(b.name)}</div>`).join('')
            : `<div class="text-xs text-slate-500 italic">Hubungi kasir untuk info rekening transfer bank</div>`;

        let h = `
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
            <div class="flex items-center gap-4">
                ${logoHTML}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store?.slogan || 'Pusat Alat Teknik, Bangunan & Perlengkapan')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store?.address || 'Alamat fisik toko belum diatur.')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || appData.store?.phone || '-')}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl sm:text-3xl tracking-widest text-slate-900 uppercase">NOTA TAGIHAN PIUTANG</h2>
                <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${esc(o.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${formatDate(o.dateString || o.timestamp)}</p>
                <div class="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${statusClass}">
                    ${esc(statusText)}
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mb-8">
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditujukan Kepada (Debitur / Pelanggan):</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${esc(o.customer?.name || 'Pelanggan')}</p>
                ${o.customer?.wa || o.customer?.phone ? `<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> +${esc(o.customer.wa || o.customer.phone)}</p>` : ''}
                <p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${esc(o.customer?.address || 'Alamat di toko / pelanggan tempo')}</p>
                ${o.customer?.note ? `<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-2"><i class="fa-solid fa-note-sticky mr-1"></i> ${esc(o.customer.note)}</p>` : ''}
            </div>
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ketentuan Jatuh Tempo:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${formatDate(dueDate)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="text-slate-900 uppercase">Tempo / Bertahap</b></p>
                ${isLate ? `<p class="text-xs font-bold text-rose-600 mb-1.5"><span class="text-slate-500">Status Keterlambatan:</span> Lewat ${daysLate} Hari (Denda ${rate}%/hari)</p>` : ''}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${esc(o.cashierName || 'Kasir Toko')}</b></p>
            </div>
        </div>

        <table class="w-full text-left border-collapse mb-8">
            <thead>
                <tr class="border-b-2 border-slate-800 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-900 text-white">
                    <th class="py-3 px-4 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
                    <th class="py-3 px-4 text-center w-28 border-r border-slate-700">Kuantitas</th>
                    <th class="py-3 px-4 text-right w-36 border-r border-slate-700">Harga Satuan</th>
                    <th class="py-3 px-4 rounded-tr-xl text-right w-36">Subtotal</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${(o.items || []).map((it, idx) => `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3 px-4 text-center font-mono text-slate-500">${idx + 1}</td>
                    <td class="py-3 px-4 font-bold text-slate-900 uppercase">
                        ${esc(it.name)}
                        ${it.variantName ? `<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5">Varian: ${esc(it.variantName)}</span>` : ''}
                    </td>
                    <td class="py-3 px-4 text-center font-bold text-base text-slate-800">${formatQty(it.qty)} <span class="text-xs font-normal text-slate-500">${esc(it.unit || 'pcs')}</span></td>
                    <td class="py-3 px-4 text-right font-mono text-slate-600">${fCur(it.effectivePrice || it.price)}</td>
                    <td class="py-3 px-4 text-right font-bold font-mono text-slate-900">${fCur(it.subtotal || Math.round((parseFloat(it.qty) || 0) * (parseFloat(it.effectivePrice || it.price) || 0)))}</td>
                </tr>
                `).join('')}
            </tbody>
        </table>

        <!-- HISTORI CICILAN JIKA ADA -->
        ${installments.length > 0 ? `
        <div class="mb-8">
            <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <i class="fa-solid fa-receipt text-[var(--color-primary)]"></i> Histori Pembayaran Cicilan yang Telah Diterima:
            </h3>
            <table class="w-full text-left border border-slate-200 rounded-xl overflow-hidden text-xs">
                <thead class="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                        <th class="py-2.5 px-3 w-12 text-center border-b border-slate-200">Ke</th>
                        <th class="py-2.5 px-3 border-b border-slate-200">Tanggal Bayar</th>
                        <th class="py-2.5 px-3 border-b border-slate-200">Metode Bayar</th>
                        <th class="py-2.5 px-3 text-right border-b border-slate-200">Nominal Cicilan</th>
                        <th class="py-2.5 px-3 border-b border-slate-200">Catatan</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-mono">
                    ${installments.map((ins, idx) => `
                    <tr class="hover:bg-slate-50">
                        <td class="py-2 px-3 text-center text-slate-500">${idx + 1}</td>
                        <td class="py-2 px-3 text-slate-700">${formatDate(ins.date)}</td>
                        <td class="py-2 px-3 uppercase text-slate-600 font-bold">${esc(ins.method || 'Tunai')}</td>
                        <td class="py-2 px-3 text-right font-bold text-emerald-600">+ ${fCur(ins.amount)}</td>
                        <td class="py-2 px-3 text-slate-500 text-[11px] font-sans">${esc(ins.note || '-')}</td>
                    </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>` : ''}

        <div class="grid grid-cols-2 gap-8 mb-8 items-start">
            <!-- Info Rekening Transfer -->
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran:
                </h4>
                <div class="space-y-1.5 pt-1">${bankListHtml}</div>
                <p class="text-[10px] text-slate-500 pt-2 border-t border-slate-200">Mohon kirimkan konfirmasi bukti transfer via WhatsApp ke nomor resmi toko kami.</p>
            </div>

            <!-- Ringkasan Finansial Tagihan -->
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs space-y-2.5">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${fCur(grandTotalAwal)}</span></div>
                ${totalPaid > 0 ? `<div class="flex justify-between text-emerald-600 font-bold"><span>Total Telah Dibayar (Cicilan):</span><span>-${fCur(totalPaid)}</span></div>` : ''}
                <div class="flex justify-between text-slate-700 font-bold"><span>Sisa Pokok Piutang:</span><span>${fCur(sisa)}</span></div>
                ${latePenalty > 0 ? `<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan (${daysLate} Hari):</span><span>+${fCur(latePenalty)}</span></div>` : ''}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2.5 mt-2 font-bold text-base text-slate-900">
                    <span>SISA TAGIHAN WAJIB BAYAR:</span>
                    <span class="text-[var(--color-primary)] font-black text-lg">${fCur(isLunas ? 0 : totalAkhir)}</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 text-center text-sm mt-auto pt-8 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Yang Berhutang (Debitur / Pelanggan):</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(o.customer?.name || 'Pelanggan')}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Bagian Keuangan / Kasir Toko:</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</span>
            </div>
        </div>
        `;

        setH('doc-paper-content', h);
        showDocModalWithAnim();
        return;
    }

    if (type === 'tempo_customer_ledger') {
        const custKey = String(targetId || '').trim();
        const piutangList = window.cachedPiutangOrders || [];
        
        // Filter semua nota tempo aktif milik pelanggan ini
        const customerOrders = piutangList.filter(o => {
            const phone = String(o.customer?.phone || o.customer?.wa || '').replace(/\D/g, '');
            const name = String(o.customer?.name || '').toLowerCase().trim();
            const cleanKey = custKey.replace(/\D/g, '');
            if (cleanKey.length >= 8 && phone.includes(cleanKey)) return true;
            if (name && custKey.toLowerCase().includes(name)) return true;
            return false;
        });

        if (customerOrders.length === 0) {
            if (typeof window.showToast === 'function') window.showToast('Tidak ada nota piutang aktif untuk pelanggan ini.');
            return;
        }

        const sampleCust = customerOrders[0].customer || {};
        const custName = sampleCust.name || 'Pelanggan';
        const custPhone = sampleCust.wa || sampleCust.phone || '-';

        setIn('doc-modal-title', `Kartu Piutang: ${custName}`);

        let logoHTML = '';
        if (appData.store?.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:'))) {
            logoHTML = `<img loading="eager" src="${esc(appData.store.logo)}" class="w-16 h-16 object-contain">`;
        } else {
            logoHTML = `<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>`;
        }

        const formatDate = (val) => {
            if (!val) return '-';
            try {
                const d = val.toDate ? val.toDate() : new Date(val);
                return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
            } catch(e) { return '-'; }
        };

        // Akumulasi seluruh nota
        let grandTotalAllNotes = 0;
        let totalPaidAllNotes = 0;
        let totalSisaPokokAll = 0;
        let totalDendaAll = 0;
        let totalWajibBayarAll = 0;

        const orderRows = customerOrders.map((o, idx) => {
            const sisa = parseFloat(o.payment?.tempoBalance) || 0;
            const rate = o.payment?.tempoPenaltyRate !== undefined ? parseFloat(o.payment.tempoPenaltyRate) : 1;
            const isStopped = o.payment?.tempoPenaltyStopped === true;
            let latePenalty = 0;
            const dueDate = o.payment?.tempoDueDate || 0;
            let daysLate = 0;
            let isLate = false;
            const now = Date.now();

            if (dueDate > 0 && now > dueDate) {
                daysLate = Math.floor((now - dueDate) / (24 * 60 * 60 * 1000));
                if (daysLate > 0) isLate = true;
            }

            if (isStopped) {
                latePenalty = parseFloat(o.payment?.tempoFixedPenalty) || 0;
            } else if (isLate) {
                latePenalty = (rate / 100 * sisa) * daysLate;
            }

            const installments = o.payment?.installments || [];
            const paid = installments.reduce((sum, ins) => sum + (parseFloat(ins.amount) || 0), 0);
            const totalAwal = o.payment?.grandTotal || (sisa + paid);
            const totalAkhir = sisa + latePenalty;

            grandTotalAllNotes += totalAwal;
            totalPaidAllNotes += paid;
            totalSisaPokokAll += sisa;
            totalDendaAll += latePenalty;
            totalWajibBayarAll += totalAkhir;

            return {
                idx: idx + 1,
                orderId: o.orderId,
                dateStr: formatDate(o.dateString || o.timestamp),
                dueStr: formatDate(dueDate),
                totalAwal,
                paid,
                sisa,
                latePenalty,
                totalAkhir,
                isLate,
                daysLate
            };
        });

        const bankListHtml = (appData.banks && appData.banks.length > 0)
            ? appData.banks.map(b => `<div class="font-mono text-xs"><b class="text-slate-900">${esc(b.bank)}:</b> ${esc(b.number)} a/n ${esc(b.name)}</div>`).join('')
            : `<div class="text-xs text-slate-500 italic">Hubungi kasir untuk info rekening transfer bank</div>`;

        let h = `
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
            <div class="flex items-center gap-4">
                ${logoHTML}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store?.slogan || 'Pusat Alat Teknik, Bangunan & Perlengkapan')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store?.address || 'Alamat fisik toko belum diatur.')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || appData.store?.phone || '-')}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl sm:text-3xl tracking-widest text-slate-900 uppercase">KARTU PIUTANG PELANGGAN</h2>
                <p class="text-sm font-bold text-slate-600 mt-2">STATEMENT OF ACCOUNT</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Dicetak: ${formatDate(Date.now())}</p>
                <span class="inline-block mt-2 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-300 rounded-full text-xs font-black uppercase tracking-wider">
                    ${customerOrders.length} NOTA BELUM LUNAS
                </span>
            </div>
        </div>

        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 mb-8">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-xs text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-lg text-slate-900 uppercase">${esc(custName)}</p>
                </div>
                <div>
                    <p class="text-xs text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${esc(custPhone)}</p>
                </div>
            </div>
        </div>

        <table class="w-full text-left border-collapse mb-8">
            <thead>
                <tr class="border-b-2 border-slate-800 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-900 text-white">
                    <th class="py-3 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
                    <th class="py-3 px-3 border-r border-slate-700">No. Nota</th>
                    <th class="py-3 px-3 border-r border-slate-700">Tgl Transaksi</th>
                    <th class="py-3 px-3 border-r border-slate-700">Jatuh Tempo</th>
                    <th class="py-3 px-3 text-right border-r border-slate-700">Total Transaksi</th>
                    <th class="py-3 px-3 text-right border-r border-slate-700">Terbayar</th>
                    <th class="py-3 px-3 text-right border-r border-slate-700">Denda</th>
                    <th class="py-3 px-3 rounded-tr-xl text-right w-36">Sisa Tagihan</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200 text-xs">
                ${orderRows.map(r => `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3 px-3 text-center font-mono text-slate-500">${r.idx}</td>
                    <td class="py-3 px-3 font-mono font-bold text-slate-800">#${esc(r.orderId)}</td>
                    <td class="py-3 px-3 font-medium text-slate-600">${r.dateStr}</td>
                    <td class="py-3 px-3 font-mono ${r.isLate ? 'text-rose-600 font-bold' : 'text-slate-700'}">${r.dueStr} ${r.isLate ? `<span class="text-[10px] text-rose-500">(+${r.daysLate}h)</span>` : ''}</td>
                    <td class="py-3 px-3 text-right font-mono text-slate-600">${fCur(r.totalAwal)}</td>
                    <td class="py-3 px-3 text-right font-mono text-emerald-600 font-bold">${fCur(r.paid)}</td>
                    <td class="py-3 px-3 text-right font-mono text-rose-600">${r.latePenalty > 0 ? fCur(r.latePenalty) : '-'}</td>
                    <td class="py-3 px-3 text-right font-mono font-black text-slate-900">${fCur(r.totalAkhir)}</td>
                </tr>
                `).join('')}
            </tbody>
        </table>

        <div class="grid grid-cols-2 gap-8 mb-8 items-start">
            <!-- Rekening Pembayaran -->
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Transfer Resmi Pelunasan:
                </h4>
                <div class="space-y-1.5 pt-1">${bankListHtml}</div>
                <p class="text-[10px] text-slate-500 pt-2 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <!-- Rekapitulasi Total Piutang Akumulasi -->
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs space-y-2.5">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${fCur(grandTotalAllNotes)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${fCur(totalPaidAllNotes)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${fCur(totalSisaPokokAll)}</span></div>
                ${totalDendaAll > 0 ? `<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda Keterlambatan (+):</span><span>+${fCur(totalDendaAll)}</span></div>` : ''}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2.5 mt-2 font-bold text-base text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-lg">${fCur(totalWajibBayarAll)}</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 text-center text-sm mt-auto pt-8 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Penerima Tagihan (Debitur):</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(custName)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</span>
            </div>
        </div>
        `;

        setH('doc-paper-content', h);
        showDocModalWithAnim();
        return;
    }

    const o = gOrds.find(x => x.orderId === cVOrd);
    if (!o) return;

    setIn('doc-modal-title', type === 'invoice' ? 'Preview Faktur Invoice' : 'Preview Surat Jalan');
    const d = o.dateString ? new Date(o.dateString).toLocaleString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '';
    
    let logoHTML = '';
    if (appData.store.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:'))) {
        logoHTML = `<img loading="eager" src="${esc(appData.store.logo)}" class="w-16 h-16 object-contain">`;
    } else {
        logoHTML = `<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>`;
    }

    let h = `
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${logoHTML}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store.name)}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store.slogan || 'General Supplier')}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store.address || 'Alamat fisik toko belum diatur.')}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store.wa || '-')}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-3xl tracking-widest ${type === 'invoice' ? 'text-blue-600' : 'text-amber-600'} uppercase">${type === 'invoice' ? (o.payment?.method === 'tempo' ? 'PROFORMA INVOICE' : 'INVOICE') : 'SURAT JALAN'}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${o.orderId}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${d}</p>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditagihkan Kepada (Pemesan):</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-1">${esc(o.customer?.name || 'Guest')}${o.customer?.wa ? ` <span class="text-xs font-mono font-medium text-slate-500">(+${esc(o.customer.wa)})</span>` : ''}</p>
            <p class="text-sm font-medium text-slate-700 leading-relaxed mb-2">${esc(o.customer?.address || '-')}</p>
            ${o.isDropPoint && o.dropPoint ? `
            <div class="mt-3 pt-3 border-t border-rose-200 bg-rose-50/80 p-3 rounded-xl border border-dashed text-left">
                <div class="flex items-center gap-1.5 text-rose-700 font-bold text-xs uppercase tracking-wider mb-1">
                    <i class="fa-solid fa-location-dot"></i> Pengantaran ke Lokasi Berbeda (Drop-Point):
                </div>
                <p class="font-bold text-sm text-slate-900 uppercase">${esc(o.dropPoint.name || '-')}${o.dropPoint.wa ? ` <span class="font-mono text-xs font-semibold text-rose-600">(+${esc(o.dropPoint.wa)})</span>` : ''}</p>
                <p class="text-xs font-medium text-slate-700 mt-0.5 leading-relaxed">${esc(o.dropPoint.address || '-')}</p>
            </div>
            ` : ''}
            ${o.customer?.note ? `<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200 mt-2"><i class="fa-solid fa-note-sticky"></i> Catatan: ${esc(o.customer.note)}</p>` : ''}
        </div>
        
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${esc(o.isDropPoint ? 'Drop-Point (Lokasi Berbeda)' : (o.customer?.deliveryMethod === 'delivery' ? 'Dikirim' : 'Ambil di Toko'))}</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistem Pembayaran</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${esc(o.payment?.method || 'cash')}</span>
            </div>
            <div class="flex justify-between items-center pb-1">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Bayar</span>
                <span class="text-sm font-bold ${o.status === 'Selesai' ? 'text-emerald-600' : 'text-rose-600'} uppercase">${o.status === 'Selesai' ? 'LUNAS' : 'BELUM LUNAS'}</span>
            </div>
        </div>
    </div>
    `;

    if (type === 'invoice') {
        h += `
        <table class="w-full text-left text-sm text-slate-900 border-collapse mb-6">
            <thead>
                <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                    <th class="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Deskripsi Produk & Varian</th>
                    <th class="py-3 px-4 text-center w-24 border-r border-slate-700">Qty</th>
                    <th class="py-3 px-4 text-right w-32 border-r border-slate-700">Harga Sat.</th>
                    <th class="py-3 px-4 rounded-tr-xl text-right w-32">Total</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${o.items.map((item, idx) => `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${idx + 1}</td>
                    <td class="py-4 px-4 font-bold flex items-center gap-2">
                        ${esc(item.name)} 
                        ${item.variantName ? `<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${esc(item.variantName)}</span> ${item.colorCode ? `<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${esc(item.colorCode)};"></span>` : ''}` : ''}
                        ${item.poTime ? `<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${esc(item.poTime)}</span>` : ''}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-slate-700">${parseFloat(item.qty)} <span class="text-[10px] font-bold text-slate-400 uppercase">${esc(item.unit || 'pcs')}</span></td>
                    <td class="py-4 px-4 text-right font-mono font-medium">${fCur(item.effectivePrice)}</td>
                    <td class="py-4 px-4 text-right font-mono font-bold">${fCur(item.effectivePrice * parseFloat(item.qty))}</td>
                </tr>`).join('')}
            </tbody>
        </table>

        <div class="flex justify-end mb-10">
            <div class="w-1/2 md:w-[45%] space-y-3 text-sm font-bold text-slate-700">
                <div class="flex justify-between px-4"><span>Subtotal Produk</span><span class="font-mono">${fCur(o.payment?.subtotal)}</span></div>
                ${o.payment?.shippingCost ? `<div class="flex justify-between px-4"><span>Ongkos Kirim</span><span class="font-mono">${fCur(o.payment.shippingCost)}</span></div>` : ''}
                ${o.payment?.shippingDiscount ? `<div class="flex justify-between px-4 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${fCur(o.payment.shippingDiscount)}</span></div>` : ''}
                ${o.payment?.productDiscount ? `<div class="flex justify-between px-4 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${fCur(o.payment.productDiscount)}</span></div>` : ''}
                ${(() => {
                    if (!o.payment?.ppnAmount || o.payment.ppnAmount <= 0) return '';
                    const isInc = o.payment.ppnType === 'inclusive';
                    const ppnRate = o.payment.ppnRate || 11;
                    const ppnAmt = o.payment.ppnAmount;
                    const baseBeforeTax = (o.payment.subtotal || 0) - (o.payment.productDiscount || 0) + (o.payment.shippingCost || 0) - (o.payment.shippingDiscount || 0);
                    const dppAmt = o.payment.dppAmount || (isInc ? Math.round((baseBeforeTax * 100) / (100 + ppnRate)) : Math.max(0, baseBeforeTax));

                    return `
                    <div class="flex justify-between px-4 text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${fCur(dppAmt)}</span></div>
                    <div class="flex justify-between px-4 text-amber-600"><span>${isInc ? 'Termasuk PPN' : 'PPN'} (${ppnRate}%)</span><span class="font-mono">${isInc ? '' : '+'}${fCur(ppnAmt)}</span></div>
                    `;
                })()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-4 shadow-md">
                    <span class="font-bold text-base uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${fCur(o.payment?.grandTotal)}</span>
                </div>
                ${o.payment?.method === 'tempo' ? `
                <div class="flex justify-between px-4 mt-4 text-emerald-600"><span>Uang Muka (DP)</span><span class="font-mono">${fCur(o.payment?.tempoDp || 0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-4 rounded-xl mt-2 border border-rose-200">
                    <span class="font-bold text-base uppercase tracking-widest">Sisa Tagihan</span>
                    <span class="font-mono text-xl font-bold tracking-tight">${fCur(o.payment?.tempoBalance || 0)}</span>
                </div>
                ` : ''}
            </div>
        </div>`;
    } else {
        // Surat Jalan
        h += `
        <table class="w-full text-left text-sm text-slate-900 border-collapse mb-10">
            <thead>
                <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                    <th class="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Nama & Spesifikasi Barang</th>
                    <th class="py-3 px-4 text-center w-28 border-r border-slate-700">Kuantitas</th>
                    <th class="py-3 px-4 text-center w-24 border-r border-slate-700">Satuan</th>
                    <th class="py-3 px-4 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${o.items.map((item, idx) => `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${idx + 1}</td>
                    <td class="py-4 px-4 font-bold uppercase flex items-center gap-2">
                        ${esc(item.name)} 
                        ${item.variantName ? `<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${esc(item.variantName)}</span> ${item.colorCode ? `<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${esc(item.colorCode)};"></span>` : ''}` : ''}
                        ${item.poTime ? `<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${esc(item.poTime)}</span>` : ''}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-lg text-slate-800">${parseFloat(item.qty)}</td>
                    <td class="py-4 px-4 text-center text-slate-500 font-bold uppercase text-xs">${esc(item.unit || 'pcs')}</td>
                    <td class="py-4 px-4 text-center"><div class="w-5 h-5 border-2 border-slate-300 mx-auto rounded shadow-inner"></div></td>
                </tr>`).join('')}
            </tbody>
        </table>
        `;
    }

    // Informasi Poin Loyalty
    if (o.pointsEarned > 0 || (o.finalMemberPoints !== undefined && o.finalMemberPoints !== null)) {
        h += `
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5 flex items-center gap-6">
            <div class="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
            ${o.pointsEarned > 0 ? `<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-lg text-amber-700">+${o.pointsEarned}</p></div>` : ''}
            ${(o.finalMemberPoints !== undefined && o.finalMemberPoints !== null) ? `<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Terkumpul</p><p class="font-bold text-lg text-amber-700">${o.finalMemberPoints}</p></div>` : ''}
        </div>`;
    }

    // Informasi Klaim Hadiah
    if (o.claimedReward) {
        const statusTxt = o.claimedReward.status === 'ready' ? 'SERTAKAN BERSAMA PENGIRIMAN INI'
            : o.claimedReward.status === 'waiting_stock' ? 'STOK KOSONG — KIRIM SUSULAN'
            : 'MENUNGGU KONFIRMASI GUDANG';
        h += `
        <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-5 mb-8 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                <div>
                    <p class="text-[10px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${o.claimedReward.pointsCost} Poin)</p>
                    <p class="font-bold text-base text-violet-800 uppercase">${esc(o.claimedReward.name)}</p>
                    ${o.claimedReward.note ? `<p class="text-xs italic text-violet-600 mt-1">"${esc(o.claimedReward.note)}"</p>` : ''}
                </div>
            </div>
            <span class="text-[10px] font-bold px-3 py-2 rounded-xl bg-violet-600 text-white uppercase tracking-widest text-center shrink-0">${statusTxt}</span>
        </div>`;
    }

    if (o.payment?.method === 'tempo') {
        h += `
        <div class="mt-6 mb-8 border border-pink-200 bg-pink-50 p-4 rounded-xl text-left">
            <h4 class="font-bold text-pink-700 text-xs uppercase tracking-widest mb-1"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo</h4>
            <p class="text-[10px] text-pink-600 font-bold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${o.payment.tempoDueDate ? new Date(o.payment.tempoDueDate).toLocaleDateString('id-ID') : '-'}). Keterlambatan pembayaran akan dikenakan denda sebesar 1% dari sisa tagihan untuk setiap harinya.</p>
        </div>`;
    }

    const hasPO = o.items.some(i => i.poTime && i.poTime !== '');
    if (hasPO) {
        h += `
        <div class="mt-6 mb-8 border border-amber-200 bg-amber-50 p-4 rounded-xl text-left flex gap-3 items-start">
            <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
            <div>
                <h4 class="font-bold text-amber-700 text-xs uppercase tracking-widest mb-1">Informasi Produk Pre-Order (PO)</h4>
                <p class="text-[10px] text-amber-600 font-bold leading-relaxed">Pesanan ini mengandung produk Pre-Order (PO). Khusus untuk produk berlabel PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</p>
            </div>
        </div>`;
    }

    // Tanda Tangan Section
    h += `
    <div class="grid grid-cols-3 gap-8 text-center text-sm mt-auto pt-8">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Penerima / Klien</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">${esc(o.customer?.name || 'Nama Terang & TTD')}</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Sopir / Pengantar</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">Nama Terang & TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Hormat Kami,</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900 uppercase">${esc(appData.store.name)}</span>
        </div>
    </div>
    `;

    setH('doc-paper-content', h);
    showDocModalWithAnim();
};

/**
 * Pratinjau Surat Penawaran Harga (SPH / Quotation Proyek) langsung dari Keranjang Belanja
 */
export const openCartSPHPreview = () => {
    if (!cart || cart.length === 0) {
        if (typeof window.showToast === 'function') window.showToast('Keranjang belanja masih kosong!');
        return;
    }
    currentDocType = 'sph';
    const sphNum = 'SPH-' + new Date().toISOString().slice(0,10).replace(/-/g,'') + '-' + Math.floor(1000 + Math.random() * 9000);
    const issueDate = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
    const validUntil = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

    setIn('doc-modal-title', 'Surat Penawaran Harga (SPH)');

    let logoHTML = '';
    if (appData.store?.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:'))) {
        logoHTML = `<img loading="eager" src="${esc(appData.store.logo)}" class="w-16 h-16 object-contain">`;
    } else {
        logoHTML = `<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>`;
    }

    const getEffP = typeof window.getEffP === 'function' ? window.getEffP : (i => i.price || 0);
    let subtotal = 0;

    let h = `
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${logoHTML}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store?.slogan || 'General Supplier & Alat Teknik')}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store?.address || 'Alamat fisik toko belum diatur.')}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || '-')}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl md:text-3xl tracking-widest text-emerald-600 uppercase">PENAWARAN HARGA</h2>
            <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${sphNum}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${issueDate}</p>
            <span class="inline-block mt-2 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-300 rounded text-[10px] font-bold uppercase tracking-wider">
                Berlaku s/d: ${validUntil}
            </span>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditujukan Kepada:</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-1">Kepada Yth. Rekanan / Proyek</p>
            <p class="text-xs font-medium text-slate-600 leading-relaxed">Pelanggan Terhormat / Departemen Pengadaan</p>
            <p class="text-xs italic text-slate-400 mt-2">* Surat penawaran harga resmi dapat digunakan sebagai referensi RAB proyek & pengajuan anggaran kantor.</p>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Masa Berlaku</span>
                <span class="text-sm font-bold text-slate-800">14 Hari Kalender</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Ketersediaan Stok</span>
                <span class="text-sm font-bold text-slate-800">Konfirmasi Saat Pemesanan</span>
            </div>
            <div class="flex justify-between items-center pb-1">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Dokumen</span>
                <span class="text-sm font-bold text-emerald-600 uppercase tracking-wider font-mono">OFFICIAL QUOTATION</span>
            </div>
        </div>
    </div>

    <table class="w-full text-left text-sm text-slate-900 border-collapse mb-6">
        <thead>
            <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                <th class="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                <th class="py-3 px-4 border-r border-slate-700">Deskripsi Barang & Spesifikasi</th>
                <th class="py-3 px-4 text-center w-24 border-r border-slate-700">Qty</th>
                <th class="py-3 px-4 text-right w-32 border-r border-slate-700">Harga Satuan</th>
                <th class="py-3 px-4 rounded-tr-xl text-right w-32">Total Estimasi</th>
            </tr>
        </thead>
        <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
            ${cart.map((item, idx) => {
                let q = parseFloat(item.qty) || 1;
                let effPrice = getEffP(item);
                let lineTot = q * effPrice;
                subtotal += lineTot;
                return `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3.5 px-4 text-center font-mono text-slate-500">${idx + 1}</td>
                    <td class="py-3.5 px-4 font-bold">
                        ${esc(item.name)}
                        ${item.variantName ? `<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${esc(item.variantName)}</span>` : ''}
                    </td>
                    <td class="py-3.5 px-4 text-center font-bold text-slate-700">${q} <span class="text-[10px] font-bold text-slate-400 uppercase">${esc(item.unit || 'pcs')}</span></td>
                    <td class="py-3.5 px-4 text-right font-mono font-medium">${fCur(effPrice)}</td>
                    <td class="py-3.5 px-4 text-right font-mono font-bold">${fCur(lineTot)}</td>
                </tr>`;
            }).join('')}
        </tbody>
    </table>

    <div class="flex justify-end mb-8">
        <div class="w-1/2 md:w-[45%] space-y-2 text-sm font-bold text-slate-700">
            <div class="flex justify-between px-4"><span>Subtotal Estimasi</span><span class="font-mono">${fCur(subtotal)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-2 shadow-md">
                <span class="font-bold text-base uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${fCur(subtotal)}</span>
            </div>
        </div>
    </div>

    <div class="border border-slate-200 bg-slate-50 p-4 rounded-xl text-left mb-8">
        <h4 class="font-bold text-slate-700 text-xs uppercase tracking-widest mb-1"><i class="fa-solid fa-circle-info mr-1 text-[var(--color-primary)]"></i> Syarat & Ketentuan Penawaran:</h4>
        <ul class="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
            <li>Harga penawaran berlaku selama <b>14 hari kalender</b> terhitung sejak tanggal dokumen diterbitkan.</li>
            <li>Ketersediaan dan fluktuasi stok dapat berubah sewaktu-waktu sampai diterbitkannya konfirmasi pesanan (PO) resmi.</li>
            <li>Biaya pengiriman dan penanganan disesuaikan dengan kuantitas dan jarak tempuh lokasi pengiriman.</li>
        </ul>
    </div>

    <div class="grid grid-cols-2 gap-8 text-center text-sm mt-auto pt-4">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Menyetujui / Klien Proyek</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">Nama Terang & Stempel Perusahaan</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Hormat Kami,</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</span>
        </div>
    </div>
    `;

    setH('doc-paper-content', h);
    showDocModalWithAnim();
};

const showDocModalWithAnim = () => {
    const mDoc = el('doc-preview-modal');
    const bDoc = el('doc-preview-modal-box');
    if (mDoc && mDoc.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('docPreview');
    }
    openModalAnim(mDoc, bDoc);
    fitDocPreview();
};

export const fitDocPreview = () => {
    const area = el('doc-paper-scroll-area');
    const content = el('doc-paper-content');
    const wrapper = el('doc-paper-wrapper');
    if (!area || !content || !wrapper) return;

    const PAPER_W = 794;
    const safeGap = 16;
    const availW = area.clientWidth - safeGap;
    const scale = Math.min(1, availW / PAPER_W);

    content.style.transform = `translateX(-50%) scale(${scale})`;
    wrapper.style.height = (content.offsetHeight * scale) + 'px';
};

window.addEventListener('resize', () => {
    const m = el('doc-preview-modal');
    if (m && !m.classList.contains('hidden')) fitDocPreview();
});

export const closeDocPreviewModal = (fH = false) => {
    const m = el('doc-preview-modal');
    const b = el('doc-preview-modal-box');
    if (!m) return;
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('docPreview', fH, () => {
            closeModalAnim(m, b);
        });
    } else {
        closeModalAnim(m, b);
    }
};

export const printDocA4 = () => {
    const p = el('doc-paper-content') ? el('doc-paper-content').innerHTML : '';
    if (window.AndroidNativeApp && typeof window.AndroidNativeApp.print === 'function') {
        let t = el('thermal-print-section');
        if (!t) {
            t = document.createElement('div');
            t.id = 'thermal-print-section';
            document.body.appendChild(t);
        }
        t.innerHTML = p;
        window.AndroidNativeApp.print();
        return;
    }
    const printWindow = window.open('', '_blank');
    
    if (!printWindow) {
        // Fallback cerdas: Cetak via iframe tersembunyi jika pop-up browser diblokir
        let printIframe = document.getElementById('a4-print-fallback-iframe');
        if (!printIframe) {
            printIframe = document.createElement('iframe');
            printIframe.id = 'a4-print-fallback-iframe';
            printIframe.style.position = 'fixed';
            printIframe.style.right = '0';
            printIframe.style.bottom = '0';
            printIframe.style.width = '0';
            printIframe.style.height = '0';
            printIframe.style.border = '0';
            printIframe.style.opacity = '0';
            document.body.appendChild(printIframe);
        }
        const doc = printIframe.contentWindow.document;
        doc.open();
        doc.write(`<!DOCTYPE html><html><head><title>Cetak Dokumen A4</title>
        <style>@page{size:A4 portrait;margin:10mm}body{font-family:'Barlow',system-ui,sans-serif;background:#fff;margin:0;padding:16px;color:#0f172a;-webkit-print-color-adjust:exact;print-color-adjust:exact}.w-full{width:100%}</style>
        </head><body><div style="max-width:794px;margin:0 auto">${p}</div></body></html>`);
        doc.close();
        setTimeout(() => {
            try {
                printIframe.contentWindow.focus();
                printIframe.contentWindow.print();
            } catch (e) {
                console.warn('[DocPrint] Fallback iframe print error:', e);
            }
        }, 500);
        return;
    }
    
    printWindow.document.write(`
        <html>
        <head>
            <title>Cetak Dokumen</title>
            <script src="https://cdn.tailwindcss.com"></` + `script>
            <style>
                @page { size: A4 portrait; margin: 10mm; }
                body { font-family: 'Barlow', system-ui, sans-serif; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            </style>
        </head>
        <body onload="setTimeout(() => { window.print(); }, 800)">
            <div class="w-full max-w-[794px] mx-auto p-4 text-sm leading-relaxed text-slate-900">
                ${p}
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
};

export const exportDocFile = async (mode) => {
    if (isSaving) return; 
    setIsSaving(true);
    sLoad(mode === 'image' ? 'Membuat Gambar HD...' : 'Menyusun PDF...');
    
    try {
        if (typeof window.ensureScriptLoaded === 'function') {
            await Promise.all([
                window.ensureScriptLoaded('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', () => typeof html2canvas !== 'undefined'),
                window.ensureScriptLoaded('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', () => typeof window.jspdf !== 'undefined' || typeof window.jsPDF !== 'undefined')
            ]);
        }
    } catch (e) {
        hLoad(); 
        setIsSaving(false);
        if (typeof window.showToast === 'function') window.showToast('Gagal memuat modul export. Cek koneksi internet Anda.');
        return;
    }
    
    try {
        const originalPaper = el('doc-paper-content');
        if (!originalPaper) throw new Error("Elemen dokumen tidak ditemukan.");

        const cloneWrapper = document.createElement('div');
        cloneWrapper.style.position = 'absolute';
        cloneWrapper.style.top = '-9999px'; 
        cloneWrapper.style.left = '-9999px'; 
        cloneWrapper.style.width = originalPaper.offsetWidth + 'px'; 
        cloneWrapper.style.height = 'max-content'; 
        cloneWrapper.style.backgroundColor = '#ffffff'; 
        cloneWrapper.style.overflow = 'visible';
        
        const clone = originalPaper.cloneNode(true);
        clone.id = 'doc-clone-printing';
        clone.style.margin = '0 auto';
        clone.style.boxShadow = 'none'; 
        clone.classList.remove('absolute', 'top-0', 'left-1/2');
        clone.style.position = 'static';
        clone.style.left = 'auto';
        clone.style.top = 'auto';
        clone.style.transform = 'none';
        clone.style.height = 'max-content'; 
        clone.style.maxHeight = 'none'; 
        clone.style.overflow = 'visible';
        clone.classList.add('h-max');
        
        cloneWrapper.appendChild(clone);
        document.body.appendChild(cloneWrapper);

        const imgsInClone = Array.from(clone.querySelectorAll('img'));
        await Promise.all(imgsInClone.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.addEventListener('load', resolve, { once: true });
                img.addEventListener('error', resolve, { once: true });
            });
        }));

        await new Promise(r => setTimeout(r, 300));

        if (cloneWrapper.offsetWidth === 0 || cloneWrapper.offsetHeight === 0) {
            throw new Error(`Dokumen belum sepenuhnya ter-render. Coba lagi.`);
        }

        const options = { 
            scale: 2, 
            useCORS: true, 
            backgroundColor: "#ffffff",
            width: cloneWrapper.offsetWidth,
            height: cloneWrapper.offsetHeight, 
            windowWidth: cloneWrapper.offsetWidth,
            windowHeight: cloneWrapper.offsetHeight
        };
        
        const canvas = await html2canvas(cloneWrapper, options);
        document.body.removeChild(cloneWrapper);

        if (!canvas || canvas.width === 0 || canvas.height === 0) {
            throw new Error('Gagal menangkap gambar dokumen (canvas kosong).');
        }

        const docId = cVOrd || Date.now().toString(36).toUpperCase();
        const fileName = `${currentDocType.toUpperCase()}_${docId}`;
        
        if (mode === 'image') {
            const dataUrl = canvas.toDataURL('image/png', 1.0);
            if (window.AndroidNativeApp && typeof window.AndroidNativeApp.saveOrShareFile === 'function') {
                window.AndroidNativeApp.saveOrShareFile(dataUrl, `${fileName}.png`, 'image/png');
            } else {
                const link = document.createElement('a');
                link.download = `${fileName}.png`;
                link.href = dataUrl;
                link.click();
            }
            if (typeof window.showToast === 'function') window.showToast("Gambar Berhasil Disimpan!");
        } else {
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            if (!imgData || !imgData.startsWith('data:image/jpeg;base64,')) {
                throw new Error('Data gambar hasil export tidak valid.');
            }
            
            const jsPDF = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : window.jsPDF;
            const pdfWidth = 210; 
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            if (!isFinite(pdfHeight) || pdfHeight <= 0) {
                throw new Error('Ukuran halaman PDF tidak valid.');
            }
            
            const pdf = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: [pdfWidth, pdfHeight]
            });
            
            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
            if (window.AndroidNativeApp && typeof window.AndroidNativeApp.saveOrShareFile === 'function') {
                window.AndroidNativeApp.saveOrShareFile(pdf.output('datauristring'), `${fileName}.pdf`, 'application/pdf');
            } else {
                pdf.save(`${fileName}.pdf`);
            }
            if (typeof window.showToast === 'function') window.showToast("File PDF Berhasil Disimpan!");
        }
    } catch (err) {
        console.error("Export Error: ", err);
        if (typeof window.showToast === 'function') {
            window.showToast(err && err.message ? `Gagal: ${err.message}` : "Gagal memproses dokumen.");
        }
        
        const emergencyClone = document.getElementById('doc-clone-printing');
        if (emergencyClone && emergencyClone.parentElement) {
            document.body.removeChild(emergencyClone.parentElement);
        }
    } finally {
        hLoad();
        setIsSaving(false);
    }
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.openDocPreview = openDocPreview;
window.openCartSPHPreview = openCartSPHPreview;
window.fitDocPreview = fitDocPreview;
window.closeDocPreviewModal = closeDocPreviewModal;
window.printDocA4 = printDocA4;
window.exportDocFile = exportDocFile;
