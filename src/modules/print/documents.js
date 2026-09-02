/**
 * ============================================================
 * MODUL DOKUMEN CETAK A4 (INVOICE, SURAT JALAN & PDF EXPORT)
 * Mengatur preview dan ekspor format cetak standar A4.
 * ============================================================
 */

import { appData, gOrds, cVOrd, isSaving, setIsSaving } from '../../core/state.js';
import { el, show, hide, setIn, setH, esc, fCur, sLoad, hLoad } from '../../core/utils.js';

export let currentDocType = 'invoice';

export const openDocPreview = (type) => {
    currentDocType = type;
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
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditagihkan / Dikirim Kepada:</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-1">${esc(o.customer?.name || 'Guest')}</p>
            <p class="text-sm font-medium text-slate-700 leading-relaxed mb-3">${esc(o.customer?.address || '-')}</p>
            ${o.customer?.note ? `<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200"><i class="fa-solid fa-note-sticky"></i> Catatan: ${esc(o.customer.note)}</p>` : ''}
        </div>
        
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${esc(o.customer?.deliveryMethod === 'delivery' ? 'Dikirim' : 'Ambil di Toko')}</span>
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
    const mDoc = el('doc-preview-modal');
    if (mDoc && mDoc.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('docPreview');
    }
    show('doc-preview-modal');
    setTimeout(() => {
        if (el('doc-preview-modal')) el('doc-preview-modal').classList.remove('opacity-0');
        if (el('doc-preview-modal-box')) el('doc-preview-modal-box').classList.remove('scale-95');
        fitDocPreview();
    }, 10);
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
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('docPreview', fH, () => {
            if (el('doc-preview-modal')) el('doc-preview-modal').classList.add('opacity-0');
            if (el('doc-preview-modal-box')) el('doc-preview-modal-box').classList.add('scale-95');
            setTimeout(() => hide('doc-preview-modal'), 300);
        });
    } else {
        if (el('doc-preview-modal')) el('doc-preview-modal').classList.add('opacity-0');
        if (el('doc-preview-modal-box')) el('doc-preview-modal-box').classList.add('scale-95');
        setTimeout(() => hide('doc-preview-modal'), 300);
    }
};

export const printDocA4 = () => {
    const p = el('doc-paper-content') ? el('doc-paper-content').innerHTML : '';
    const printWindow = window.open('', '_blank');
    
    if (!printWindow) {
        if (typeof window.showToast === 'function') {
            window.showToast("Gagal membuka tab baru. Izinkan pop-up di browser Anda!");
        }
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

        const fileName = `${currentDocType.toUpperCase()}_${cVOrd}`;
        
        if (mode === 'image') {
            const link = document.createElement('a');
            link.download = `${fileName}.png`;
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
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
            pdf.save(`${fileName}.pdf`);
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
window.fitDocPreview = fitDocPreview;
window.closeDocPreviewModal = closeDocPreviewModal;
window.printDocA4 = printDocA4;
window.exportDocFile = exportDocFile;
