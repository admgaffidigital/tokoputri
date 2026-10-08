/**
 * ============================================================
 * MODUL DOKUMEN CETAK STANDAR A4 PRESISI (210mm x 297mm)
 * Toko Putri - Multi-Page Pagination, Running Header & Footer,
 * Penomoran Halaman Resmi, Print Standar & True Multi-Page PDF
 * ============================================================
 */

import { el, show, hide, setIn, setH, esc, fCur, sLoad, hLoad, openModalAnim, closeModalAnim, extractOrderTaxInfo } from '../../core/utils.js';
import { appData } from '../../core/state.js';
import { canViewHpp } from '../../core/auth-roles.js';

export let currentDocType = 'invoice';
let isSaving = false;
const setIsSaving = (v) => { isSaving = v; };

/**
 * Helper untuk format tanggal standar bahasa Indonesia
 */
const formatDate = (val, withTime = false) => {
    if (!val) return '-';
    try {
        const d = val.toDate ? val.toDate() : new Date(val);
        if (isNaN(d.getTime())) return '-';
        const opts = { day: '2-digit', month: 'short', year: 'numeric' };
        if (withTime) {
            opts.hour = '2-digit';
            opts.minute = '2-digit';
        }
        return d.toLocaleDateString('id-ID', opts);
    } catch (e) {
        return '-';
    }
};

/**
 * Helper untuk format kuantitas barang
 */
const formatQty = (q) => {
    const num = parseFloat(q);
    if (isNaN(num)) return '0';
    return Number.isInteger(num) ? String(num) : num.toFixed(3).replace(/\.?0+$/, '');
};

/**
 * Helper untuk merender logo kop toko resmi
 */
const getStoreLogoHtml = (sizeClass = 'w-16 h-16') => {
    if (appData.store?.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:'))) {
        return `<img loading="eager" src="${esc(appData.store.logo)}" class="${sizeClass} object-contain shrink-0">`;
    }
    return `<div class="${sizeClass} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`;
};

/**
 * Helper untuk merender daftar rekening bank resmi toko secara presisi dan anti-kosong
 */
export const getStoreBankListHtml = (itemClass = 'font-mono text-xs') => {
    const rawBanks = Array.isArray(appData.banks) ? appData.banks : [];
    const validBanks = rawBanks.filter(b => b && (b.bankName || b.bank || b.bankAccount || b.number || b.account));

    if (validBanks.length > 0) {
        return validBanks.map(b => {
            const bName = b.bankName || b.bank || 'BANK';
            const bAcc = b.bankAccount || b.number || b.account || '-';
            const bOwner = b.bankOwner || b.name || b.owner || appData.store?.name || 'Toko Putri';
            return `
            <div class="${itemClass} flex items-center justify-between gap-2 border-b border-slate-200/60 pb-1.5 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-bold text-slate-900 uppercase">${esc(bName)}:</span>
                    <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${esc(bAcc)}</span>
                </div>
                <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right" title="${esc(bOwner)}">
                    a.n <span class="font-semibold text-slate-700">${esc(bOwner)}</span>
                </div>
            </div>`;
        }).join('');
    }

    // Fallback jika master rekening belum diatur, ambil dari data toko resmi (appData.store)
    if (appData.store?.bankName && (appData.store?.bankAccount || appData.store?.bankNumber)) {
        const sName = appData.store.bankName;
        const sAcc = appData.store.bankAccount || appData.store.bankNumber;
        const sOwner = appData.store.bankOwner || appData.store.name || 'Toko Putri';
        return `
        <div class="${itemClass} flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-bold text-slate-900 uppercase">${esc(sName)}:</span>
                <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${esc(sAcc)}</span>
            </div>
            <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right">
                a.n <span class="font-semibold text-slate-700">${esc(sOwner)}</span>
            </div>
        </div>`;
    }

    return `
    <div class="text-[11px] text-slate-600 bg-slate-100 p-2 rounded-lg border border-slate-200">
        <p class="font-semibold text-slate-800"><i class="fa-solid fa-building-columns text-blue-600 mr-1"></i> Rekening Resmi Toko:</p>
        <p class="mt-0.5">Konfirmasi transfer via WhatsApp Resmi: <b class="font-mono text-emerald-600">${esc(appData.store?.wa || appData.store?.phone || '-')}</b></p>
    </div>`;
};

/**
 * Helper untuk render running continuation header pada Halaman 2..N
 */
const renderContinuationHeader = ({ docTitle, docNumber, docDate }) => {
    const logoMini = getStoreLogoHtml('w-8 h-8');
    return `
    <div class="flex justify-between items-center border-b-2 border-slate-800 pb-2.5 mb-4 text-xs font-semibold select-none">
        <div class="flex items-center gap-2.5">
            ${logoMini}
            <div>
                <span class="font-black text-slate-900 uppercase text-xs sm:text-sm tracking-tight">${esc(appData.store?.name || 'TOKO PUTRI')}</span>
                <span class="text-slate-300 mx-1.5">&bull;</span>
                <span class="font-bold text-slate-700 uppercase tracking-wider text-[11px]">${esc(docTitle)}</span>
            </div>
        </div>
        <div class="text-right font-mono text-slate-600 text-[11px]">
            ${docNumber ? `<span class="font-bold text-slate-900">${esc(docNumber)}</span> <span class="text-slate-400 mx-1">&bull;</span>` : ''}
            <span>${esc(docDate || '')}</span>
        </div>
    </div>
    `;
};

/**
 * Helper untuk render running footer presisi di bagian bawah setiap halaman A4
 */
const renderPageFooter = (pageIndex, totalPages, docTitle) => {
    return `
    <div class="a4-page-footer mt-auto pt-2.5 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${esc(docTitle || 'Dokumen Resmi')}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            <span>Halaman ${pageIndex} dari ${totalPages}</span>
        </div>
    </div>
    `;
};

/**
 * ENGINE PEMBAGIAN HALAMAN A4 PRESISI (210mm x 297mm)
 * Memecah baris data tabel secara presisi ke dalam lembar kertas A4 standar.
 */
const paginateTableDocument = ({
    docTitle,
    docNumber,
    docDate,
    kopHtml,
    metaHtml,
    tableHeaderHtml,
    rows = [],
    tableClass = "w-full text-left border-collapse mb-4 text-xs",
    summaryHtml = "",
    extraBlocksHtml = "",
    signaturesHtml = "",
    singlePageMax = 6,
    itemsFirstPage = 6,
    itemsMiddlePage = 14,
    itemsLastPage = 6
}) => {
    const totalItems = rows.length;

    // KASUS 1: Muat dalam 1 Halaman Tunggal Standar A4
    if (totalItems <= singlePageMax) {
        const page1Html = `
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${kopHtml}
                ${metaHtml || ''}
                <table class="${tableClass}">
                    <thead>${tableHeaderHtml}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${rows.join('')}</tbody>
                </table>
                ${summaryHtml || ''}
                ${extraBlocksHtml || ''}
                ${signaturesHtml || ''}
            </div>
            ${renderPageFooter(1, 1, docTitle)}
        </div>
        `;
        return [page1Html];
    }

    // KASUS 2: Multi-Halaman Presisi (2 Halaman atau lebih)
    const pages = [];
    const chunks = [];

    // Halaman 1 mengambil item awal
    const firstChunk = rows.slice(0, itemsFirstPage);
    chunks.push(firstChunk);
    let currentIdx = itemsFirstPage;

    // Halaman-halaman berikutnya
    while (currentIdx < totalItems) {
        const remaining = totalItems - currentIdx;
        if (remaining <= itemsLastPage) {
            chunks.push(rows.slice(currentIdx));
            currentIdx = totalItems;
        } else {
            const take = Math.min(itemsMiddlePage, remaining);
            chunks.push(rows.slice(currentIdx, currentIdx + take));
            currentIdx += take;
        }
    }

    const totalPages = chunks.length;

    // Bangun HTML per lembar halaman
    chunks.forEach((chunkRows, idx) => {
        const pageNum = idx + 1;
        const isFirst = pageNum === 1;
        const isLast = pageNum === totalPages;

        let pageContent = '';
        if (isFirst) {
            pageContent = `
            ${kopHtml}
            ${metaHtml || ''}
            <table class="${tableClass}">
                <thead>${tableHeaderHtml}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${chunkRows.join('')}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${pageNum + 1}...
            </div>
            `;
        } else if (isLast) {
            pageContent = `
            ${renderContinuationHeader({ docTitle, docNumber, docDate })}
            ${chunkRows.length > 0 ? `
            <table class="${tableClass}">
                <thead>${tableHeaderHtml}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${chunkRows.join('')}</tbody>
            </table>` : ''}
            ${summaryHtml || ''}
            ${extraBlocksHtml || ''}
            ${signaturesHtml || ''}
            `;
        } else {
            pageContent = `
            ${renderContinuationHeader({ docTitle, docNumber, docDate })}
            <table class="${tableClass}">
                <thead>${tableHeaderHtml}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${chunkRows.join('')}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${pageNum + 1}...
            </div>
            `;
        }

        pages.push(`
        <div class="a4-page" data-page="${pageNum}" data-total-pages="${totalPages}">
            <div class="a4-page-body flex-1 flex flex-col">
                ${pageContent}
            </div>
            ${renderPageFooter(pageNum, totalPages, docTitle)}
        </div>
        `);
    });

    return pages;
};

/**
 * ============================================================
 * FUNGSI UTAMA PREVIEW DOKUMEN A4
 * ============================================================
 */
export const openDocPreview = (type, targetId = null) => {
    currentDocType = type;

    // ────────────────────────────────────────────────────────────
    // 1. PURCHASE ORDER (PO SUPPLIER)
    // ────────────────────────────────────────────────────────────
    if (type === 'po') {
        const purchases = appData.purchases || [];
        const po = purchases.find(x => String(x.id) === String(targetId))
            || (window.currentActivePoId ? purchases.find(x => String(x.id) === String(window.currentActivePoId)) : purchases[0]);
        if (!po) {
            if (typeof window.showToast === 'function') window.showToast('Data PO tidak ditemukan!');
            return;
        }

        setIn('doc-modal-title', 'Preview Purchase Order (PO)');
        const logoHTML = getStoreLogoHtml('w-16 h-16');
        const poDate = formatDate(po.date || po.createdAt);
        const poNumber = po.poNumber || po.id;
        const termLabel = po.paymentType === 'tempo' 
            ? `Tempo ${po.tempoDays || 14} Hari (Jatuh Tempo: ${formatDate(po.tempoDueDate)})` 
            : (po.paymentType === 'konsinyasi' ? 'Konsinyasi' : 'Cash / Tunai');

        const kopHtml = `
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${logoHTML}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store?.slogan || 'Pusat Alat Teknik, Bangunan & Perlengkapan')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store?.address || 'Alamat fisik toko')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || appData.store?.phone || '-')}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${esc(poNumber)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${poDate}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${po.status === 'ordered' ? 'DIPESAN' : (po.status === 'received' ? 'DITERIMA' : 'SELESAI')}</p>
            </div>
        </div>
        `;

        const metaHtml = `
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${esc(po.supplierName || 'Supplier')}</p>
                ${po.supplierPhone ? `<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(po.supplierPhone)}</p>` : ''}
                ${po.supplierAddress ? `<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${esc(po.supplierAddress)}</p>` : ''}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${termLabel}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${esc(appData.store?.name || 'Gudang Utama Toko')}</b></p>
                ${po.notes ? `<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${esc(po.notes)}</p>` : ''}
            </div>
        </div>
        `;

        const tableHeaderHtml = `
        <tr class="border-b-2 border-slate-800 text-[10px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Modal (HPP)</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `;

        const rows = (po.items || []).map((it, idx) => `
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${idx + 1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${esc(it.name)}
                ${it.variantName ? `<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${esc(it.variantName)}</span>` : ''}
                ${it.sku ? `<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${esc(it.sku)}</span>` : ''}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${formatQty(it.qty)} <span class="text-[10px] font-normal text-slate-500">${esc(it.unit || 'pcs')}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${fCur(it.unitPrice)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${fCur(Math.round((parseFloat(it.qty) || 0) * (parseFloat(it.unitPrice) || 0)))}</td>
        </tr>
        `);

        const summaryHtml = `
        <div class="flex justify-end mb-6 mt-2">
            <div class="w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${fCur(po.subtotal)}</span></div>
                ${po.discount > 0 ? `<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${fCur(po.discount)}</span></div>` : ''}
                ${po.shippingFee > 0 ? `<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${fCur(po.shippingFee)}</span></div>` : ''}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${fCur(po.total)}</span>
                </div>
            </div>
        </div>
        `;

        const signaturesHtml = `
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(po.supplierName || 'Rekanan / Supplier')}</span>
            </div>
        </div>
        `;

        const pages = paginateTableDocument({
            docTitle: 'Purchase Order',
            docNumber: `#${poNumber}`,
            docDate: poDate,
            kopHtml,
            metaHtml,
            tableHeaderHtml,
            rows,
            summaryHtml,
            signaturesHtml,
            singlePageMax: 7,
            itemsFirstPage: 6,
            itemsMiddlePage: 14,
            itemsLastPage: 6
        });

        renderPagesToContainer(pages);
        return;
    }

    // ────────────────────────────────────────────────────────────
    // 2. BERITA ACARA STOCK OPNAME
    // ────────────────────────────────────────────────────────────
    if (type === 'stock_opname') {
        const historyList = appData.stockOpnameHistory || [];
        const so = historyList.find(x => String(x.id) === String(targetId) || String(x.soNumber) === String(targetId)) || historyList[0];
        if (!so) {
            if (typeof window.showToast === 'function') window.showToast('Data Berita Acara Stock Opname tidak ditemukan!');
            return;
        }

        setIn('doc-modal-title', 'Preview Berita Acara Stock Opname');
        const logoHTML = getStoreLogoHtml('w-16 h-16');
        const soDate = formatDate(so.date, true);
        const soNumber = so.soNumber || so.id;
        const showHpp = typeof canViewHpp === 'function' ? canViewHpp() : false;
        const items = so.items || [];

        const kopHtml = `
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${logoHTML}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store?.slogan || 'Pusat Alat Teknik, Bangunan & Perlengkapan')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store?.address || 'Alamat fisik toko')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || appData.store?.phone || '-')}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">BERITA ACARA</h2>
                <h3 class="font-bold text-sm tracking-wider text-amber-600 uppercase">STOCK OPNAME FISIK</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${esc(soNumber)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${soDate}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${esc(so.auditorName || 'Staf Auditor')}</b></p>
            </div>
        </div>
        `;

        const metaHtml = `
        <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Total Diperiksa</span>
                <span class="text-lg font-black text-slate-800 font-mono">${so.totalItemsAudited || 0}</span>
                <span class="text-[10px] text-slate-500 block">Item Produk</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Item Selisih</span>
                <span class="text-lg font-black ${so.totalWithDiff > 0 ? 'text-amber-600' : 'text-emerald-600'} font-mono">${so.totalWithDiff || 0}</span>
                <span class="text-[10px] text-slate-500 block">Disesuaikan</span>
            </div>
            <div class="bg-rose-50 p-3 rounded-xl border border-rose-200 text-center">
                <span class="text-[9px] font-black uppercase text-rose-500 block tracking-wider">Total Kurang (Loss)</span>
                <span class="text-lg font-black text-rose-600 font-mono">−${so.totalLossUnits || 0}</span>
                <span class="text-[10px] text-rose-500 block">${showHpp ? '−' + fCur(so.totalLossRp || 0) : 'Pcs'}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${so.totalSurplusUnits || 0}</span>
                <span class="text-[10px] text-amber-600 block">${showHpp ? '+' + fCur(so.totalSurplusRp || 0) : 'Pcs'}</span>
            </div>
        </div>
        `;

        const tableHeaderHtml = `
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Hasil Fisik</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Selisih</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Alasan &amp; Keterangan</th>
            ${showHpp ? `<th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Dampak HPP</th>` : `<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>`}
        </tr>
        `;

        const rows = items.length === 0 ? [
            `<tr><td colspan="7" class="py-8 text-center text-slate-500 italic">Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).</td></tr>`
        ] : items.map((it, idx) => `
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${idx + 1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${esc(it.productName)}
                ${it.variantName ? `<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${esc(it.variantName)}</span>` : ''}
                ${it.sku ? `<span class="text-slate-400 font-mono text-[9px] block">SKU: ${esc(it.sku)}</span>` : ''}
            </td>
            <td class="py-2 px-3 text-center font-mono text-slate-600">${it.systemStock} ${esc(it.unit || 'pcs')}</td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${it.physicalStock} ${esc(it.unit || 'pcs')}</td>
            <td class="py-2 px-3 text-center font-bold font-mono ${it.diff < 0 ? 'text-rose-600' : 'text-amber-600'}">
                ${it.diff < 0 ? `−${Math.abs(it.diff)}` : `+${it.diff}`}
            </td>
            <td class="py-2 px-3 text-[10.5px]">
                <span class="font-bold text-slate-800">${esc(it.reason === 'salah_hitung' ? 'Koreksi Kasir' : (it.reason === 'rusak' ? 'Barang Rusak' : (it.reason === 'hilang' ? 'Barang Hilang' : (it.reason === 'kadaluarsa' ? 'Expired' : (it.reason === 'bonus' ? 'Bonus Supplier' : it.reason)))))}</span>
                ${it.notes ? `<span class="text-slate-500 block italic">"${esc(it.notes)}"</span>` : ''}
            </td>
            ${showHpp ? `
                <td class="py-2 px-3 text-right font-mono font-bold ${it.diff < 0 ? 'text-rose-600' : 'text-amber-600'}">
                    ${it.diff < 0 ? '−' : '+'}${fCur(Math.abs(it.diffValueHpp || 0))}
                </td>` : `
                <td class="py-2 px-3 text-right text-slate-500">${esc(it.unit || 'pcs')}</td>
            `}
        </tr>
        `);

        const extraBlocksHtml = so.notes ? `
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${esc(so.notes)}
        </div>` : '';

        const signaturesHtml = `
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pemeriksa / Auditor:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(so.auditorName || 'Petugas Auditor')}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Kepala Gudang / Kasir:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">Gudang Toko</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Mengetahui (Owner Toko):</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(appData.store?.name || 'Pimpinan')}</span>
            </div>
        </div>
        `;

        const pages = paginateTableDocument({
            docTitle: 'Berita Acara Stock Opname',
            docNumber: `#${soNumber}`,
            docDate: soDate,
            kopHtml,
            metaHtml,
            tableHeaderHtml,
            rows,
            extraBlocksHtml,
            signaturesHtml,
            singlePageMax: 6,
            itemsFirstPage: 6,
            itemsMiddlePage: 14,
            itemsLastPage: 6
        });

        renderPagesToContainer(pages);
        return;
    }

    // ────────────────────────────────────────────────────────────
    // 3. LEMBAR KERJA HITUNG FISIK RAK (WORKSHEET)
    // ────────────────────────────────────────────────────────────
    if (type === 'stock_opname_worksheet') {
        setIn('doc-modal-title', 'Preview Lembar Kerja Hitung Fisik (Worksheet)');
        const logoHTML = getStoreLogoHtml('w-14 h-14');
        const currentDate = formatDate(new Date());
        const products = appData.products || [];

        const wsRows = [];
        products.forEach(p => {
            if (!p || p.id == null) return;
            if (p.variants && p.variants.length > 0) {
                p.variants.forEach(v => {
                    wsRows.push({
                        name: p.name,
                        variantName: v.name,
                        sku: v.sku || p.sku || '',
                        category: p.category || 'Umum',
                        unit: p.unit || 'pcs',
                        systemStock: parseFloat(v.stock) || 0
                    });
                });
            } else {
                wsRows.push({
                    name: p.name,
                    variantName: '',
                    sku: p.sku || '',
                    category: p.category || 'Umum',
                    unit: p.unit || 'pcs',
                    systemStock: parseFloat(p.stock) || 0
                });
            }
        });

        const kopHtml = `
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${logoHTML}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${esc(appData.store?.slogan || 'Pusat Alat Teknik & Bangunan')}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${esc(appData.store?.address || '')}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${currentDate}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${wsRows.length} Baris</b></p>
            </div>
        </div>
        `;

        const metaHtml = `
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 mb-4 flex items-center justify-between">
            <span><b>Petunjuk:</b> Hitung fisik barang di rak/gudang secara teliti. Tulis angka aktual pada kolom <b>HASIL FISIK</b> dan beri catatan bila ada barang rusak/cacat.</span>
        </div>
        `;

        const tableHeaderHtml = `
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">Cek</th>
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi Varian</th>
            <th class="py-2 px-2 border-r border-slate-700 w-28">Kategori / Rak</th>
            <th class="py-2 px-2 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2 px-2 text-center w-28 border-r border-slate-700 bg-amber-900/60">HASIL FISIK</th>
            <th class="py-2 px-3 text-left w-36">Kondisi &amp; Catatan</th>
        </tr>
        `;

        const rows = wsRows.map((r, idx) => `
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
            <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${idx + 1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 border-r border-slate-200 uppercase">
                ${esc(r.name)}
                ${r.variantName ? `<span class="bg-slate-100 text-slate-700 px-1 rounded text-[8.5px] border border-slate-300 ml-1 font-semibold">${esc(r.variantName)}</span>` : ''}
                ${r.sku ? `<span class="text-slate-400 font-mono text-[8.5px] block">SKU: ${esc(r.sku)}</span>` : ''}
            </td>
            <td class="py-2 px-2 text-[10px] text-slate-600 border-r border-slate-200">
                ${esc(r.category)}
            </td>
            <td class="py-2 px-2 text-center font-mono font-bold text-slate-600 border-r border-slate-200">
                ${r.systemStock} ${esc(r.unit)}
            </td>
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200 bg-amber-50/40">
                <span class="inline-block w-20 h-5 border-b-2 border-slate-400"></span>
            </td>
            <td class="py-2 px-3 text-[10px] text-slate-400">
                <span class="inline-block w-full h-5 border-b border-slate-200"></span>
            </td>
        </tr>
        `);

        const signaturesHtml = `
        <div class="grid grid-cols-2 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Staf Penghitung Fisik:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">Nama &amp; Tanda Tangan</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Diverifikasi Oleh:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">Kepala Toko / Owner</span>
            </div>
        </div>
        `;

        const pages = paginateTableDocument({
            docTitle: 'Lembar Kerja Audit Rak',
            docNumber: `TOTAL ${wsRows.length} ITEM`,
            docDate: currentDate,
            kopHtml,
            metaHtml,
            tableHeaderHtml,
            rows,
            tableClass: "w-full text-left border-collapse mb-4 text-[11px]",
            signaturesHtml,
            singlePageMax: 16,
            itemsFirstPage: 15,
            itemsMiddlePage: 20,
            itemsLastPage: 14
        });

        renderPagesToContainer(pages);
        return;
    }

    // ────────────────────────────────────────────────────────────
    // 4. NOTA TAGIHAN PIUTANG (TEMPO & PAYLATER)
    // ────────────────────────────────────────────────────────────
    if (type === 'tempo_invoice') {
        const targetOrderId = targetId || window.cVOrd;
        const piutangList = window.cachedPiutangOrders || [];
        let o = piutangList.find(x => String(x.orderId) === String(targetOrderId))
            || (window.gOrds || []).find(x => String(x.orderId) === String(targetOrderId));
        if (!o && window.lastPrintedOrder && String(window.lastPrintedOrder.orderId) === String(targetOrderId)) {
            o = window.lastPrintedOrder;
        }

        if (!o) {
            if (typeof window.showToast === 'function') window.showToast('Data nota tagihan piutang tidak ditemukan!');
            return;
        }

        setIn('doc-modal-title', 'Preview Nota Tagihan Piutang (Tempo)');
        const logoHTML = getStoreLogoHtml('w-16 h-16');
        const oDate = formatDate(o.dateString || o.timestamp);
        const sisa = parseFloat(o.payment?.tempoBalance) || 0;
        const rate = o.payment?.tempoPenaltyRate !== undefined ? parseFloat(o.payment.tempoPenaltyRate) : 1;
        const isStopped = o.payment?.tempoPenaltyStopped === true;
        let latePenalty = 0;
        const dueDate = o.payment?.tempoDueDate || 0;
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

        const totalAkhir = sisa + latePenalty;
        const installments = o.payment?.installments || [];
        const totalPaid = installments.reduce((sum, ins) => sum + (parseFloat(ins.amount) || 0), 0);
        const grandTotalAwal = o.payment?.grandTotal || (sisa + totalPaid);
        const isLunas = o.payment?.paymentStatus === 'lunas' || sisa <= 0;
        const isPaylater = !!(o.payment?.isPaylater || o.isPaylater || o.payment?.subMethod === 'paylater');

        let statusText = isPaylater ? 'PAYLATER BERJALAN' : 'TEMPO BERJALAN';
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

        const bankListHtml = getStoreBankListHtml('font-mono text-xs');

        const kopHtml = `
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${logoHTML}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store?.slogan || 'Pusat Alat Teknik, Bangunan & Perlengkapan')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store?.address || 'Alamat fisik toko')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || appData.store?.phone || '-')}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">${isPaylater ? 'NOTA PUTRI PAYLATER' : 'NOTA TAGIHAN PIUTANG'}</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${esc(o.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${oDate}</p>
                <div class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${statusClass}">
                    ${esc(statusText)}
                </div>
            </div>
        </div>
        `;

        const metaHtml = `
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditujukan Kepada (Debitur / Pelanggan):</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${esc(o.customer?.name || 'Pelanggan')}</p>
                ${o.customer?.wa || o.customer?.phone ? `<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> +${esc(o.customer.wa || o.customer.phone)}</p>` : ''}
                <p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${esc(o.customer?.address || 'Alamat di toko / pelanggan tempo')}</p>
                ${o.customer?.note ? `<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${esc(o.customer.note)}</p>` : ''}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan Jatuh Tempo:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${formatDate(dueDate)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${isPaylater ? 'text-emerald-700 font-bold' : 'text-slate-900'} uppercase">${isPaylater ? 'Putri PayLater Member VIP' : 'Tempo / Bertahap'}</b></p>
                ${isPaylater ? `<p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tenor Cicilan:</span> <b class="text-emerald-800 font-bold uppercase">${o.payment?.paylaterTenor === '2m' ? '2 Bulan (2x Cicilan)' : (o.payment?.paylaterTenor === '3m' ? '3 Bulan (3x Cicilan)' : '30 Hari (1x Bayar)')}</b></p>` : ''}
                ${isLate ? `<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${daysLate} Hari (Denda ${rate}%/hari)</p>` : ''}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${esc(o.cashierName || 'Kasir Toko')}</b></p>
            </div>
        </div>
        `;

        const tableHeaderHtml = `
        <tr class="border-b-2 border-slate-800 text-[10.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Satuan</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `;

        const rows = (o.items || []).map((it, idx) => `
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${idx + 1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${esc(it.name)}
                ${it.variantName ? `<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${esc(it.variantName)}</span>` : ''}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${formatQty(it.qty)} <span class="text-[10px] font-normal text-slate-500">${esc(it.unit || 'pcs')}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${fCur(it.effectivePrice || it.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${fCur(it.subtotal || Math.round((parseFloat(it.qty) || 0) * (parseFloat(it.effectivePrice || it.price) || 0)))}</td>
        </tr>
        `);

        let paylaterScheduleHtml = '';
        let tagihanBulanIni = 0;
        let tglJatuhTempoBulanIni = '-';
        let firstUnpaidTermin = 1;

        if (isPaylater && Array.isArray(o.payment?.paylaterSchedule) && o.payment.paylaterSchedule.length > 0) {
            let runningTarget = 0;
            let firstUnpaidFound = false;

            const scheduleRows = o.payment.paylaterSchedule.map((sc, idx) => {
                const mIdx = sc.installmentIndex || sc.installmentNo || sc.installmentNumber || sc.month || (idx + 1);
                const pPokok = parseFloat(sc.pokok || sc.principal) || 0;
                const pFee = parseFloat((sc.adminFee || 0) + (sc.serviceFee || 0)) || 0;
                const mTotal = parseFloat(sc.total || sc.totalMonthly || sc.totalInstallment) || (pPokok + pFee);

                const targetBefore = runningTarget;
                runningTarget += mTotal;
                const targetAfter = runningTarget;

                const dueTime = sc.dueDate || 0;
                const dueText = sc.dueDateFormatted || sc.dueDateStr || (dueTime ? formatDate(dueTime) : '-');

                let statusBadge = '';
                if (totalPaid >= targetAfter) {
                    statusBadge = `<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-300">LUNAS</span>`;
                } else if (!firstUnpaidFound) {
                    firstUnpaidFound = true;
                    firstUnpaidTermin = mIdx;
                    const sisaTermin = Math.max(0, targetAfter - totalPaid);
                    tagihanBulanIni = Math.min(sisaTermin, mTotal);
                    tglJatuhTempoBulanIni = dueText;
                    const isOverdue = dueTime && (now > dueTime);
                    statusBadge = isOverdue
                        ? `<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-300">JATUH TEMPO</span>`
                        : `<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">WAJIB BULAN INI</span>`;
                } else {
                    statusBadge = `<span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">BULAN DEPAN</span>`;
                }

                return `
                <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 text-center text-slate-800 font-bold">Bulan Ke-${mIdx}</td>
                    <td class="py-2 px-3 font-mono font-medium text-slate-700 text-center">${dueText}</td>
                    <td class="py-2 px-3 text-right text-slate-600 font-mono">${fCur(pPokok)}</td>
                    <td class="py-2 px-3 text-right text-slate-500 font-mono">${fCur(pFee)}</td>
                    <td class="py-2 px-3 text-right font-black font-mono text-slate-900">${fCur(mTotal)}</td>
                    <td class="py-2 px-3 text-center">${statusBadge}</td>
                </tr>`;
            }).join('');

            paylaterScheduleHtml = `
            <div class="mb-5">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-calendar-check text-emerald-600"></i> Tabel Rencana Angsuran Bulanan (${o.payment?.paylaterMonths || 1}x Tenor):
                    </h3>
                    <span class="text-[10px] text-slate-500 font-medium italic">* Rincian transparan bulan ini &amp; bulan berikutnya</span>
                </div>
                <table class="w-full text-left border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <thead class="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                        <tr>
                            <th class="py-2.5 px-3 w-24 text-center border-b border-slate-200">Termin</th>
                            <th class="py-2.5 px-3 text-center border-b border-slate-200">Jatuh Tempo</th>
                            <th class="py-2.5 px-3 text-right border-b border-slate-200">Pokok</th>
                            <th class="py-2.5 px-3 text-right border-b border-slate-200">Biaya Layanan</th>
                            <th class="py-2.5 px-3 text-right border-b border-slate-200">Total Angsuran</th>
                            <th class="py-2.5 px-3 text-center w-36 border-b border-slate-200">Status Termin</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 font-mono">
                        ${scheduleRows}
                    </tbody>
                </table>
            </div>`;
        }

        const extraBlocksHtml = `
        ${paylaterScheduleHtml}
        ${installments.length > 0 ? `
        <div class="mb-5">
            <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-receipt text-[var(--color-primary)]"></i> Histori Pembayaran Cicilan Diterima:
            </h3>
            <table class="w-full text-left border border-slate-200 rounded-xl overflow-hidden text-xs">
                <thead class="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                        <th class="py-2 px-3 w-12 text-center border-b border-slate-200">Ke</th>
                        <th class="py-2 px-3 border-b border-slate-200">Tanggal Bayar</th>
                        <th class="py-2 px-3 border-b border-slate-200">Metode Bayar</th>
                        <th class="py-2 px-3 text-right border-b border-slate-200">Nominal Cicilan</th>
                        <th class="py-2 px-3 border-b border-slate-200">Catatan</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-mono">
                    ${installments.map((ins, idx) => `
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${idx + 1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${formatDate(ins.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${esc(ins.method || 'Tunai')}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${fCur(ins.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${esc(ins.note || '-')}</td>
                    </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>` : ''}
        `;

        const summaryHtml = `
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${bankListHtml}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi bukti transfer: <b>${esc(appData.store?.wa || appData.store?.phone || '-')}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Harap mencantumkan Nomor Nota (#${esc(o.orderId)}) pada berita transfer.</p>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${fCur(grandTotalAwal)}</span></div>
                ${isPaylater ? `<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${fCur(o.payment?.paylaterUsed || (grandTotalAwal - (o.payment?.tempoDp || o.payment?.dp || 0)))}</span></div>` : ''}
                ${isPaylater && (o.payment?.paylaterAdminFee > 0) ? `<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater:</span><span class="font-bold">+${fCur(o.payment.paylaterAdminFee)}</span></div>` : ''}
                ${isPaylater && (o.payment?.paylaterServiceFee > 0) ? `<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan:</span><span class="font-bold">+${fCur(o.payment.paylaterServiceFee)}</span></div>` : ''}
                ${(parseFloat(o.payment?.tempoDp || o.payment?.dp) || 0) > 0 ? `<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${fCur(o.payment?.tempoDp || o.payment?.dp || 0)}</span></div>` : ''}
                ${totalPaid > 0 ? `<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${fCur(totalPaid)}</span></div>` : ''}
                
                ${isPaylater && tagihanBulanIni > 0 && tagihanBulanIni < sisa ? `
                <!-- KOTAK HIGHLIGHT ANGSURAN BULAN INI -->
                <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 space-y-0.5">
                    <div class="flex justify-between items-center text-[9.5px] font-black uppercase tracking-wider text-amber-800">
                        <span>Angsuran Bulan Ini (Termin Ke-${firstUnpaidTermin}):</span>
                        <span class="font-mono text-[9px] bg-amber-200/80 px-1.5 py-0.5 rounded">Jatuh Tempo: ${tglJatuhTempoBulanIni}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm font-black font-mono pt-0.5">
                        <span>Wajib Dibayar Sekarang:</span>
                        <span class="text-amber-900 text-base font-black">${fCur(tagihanBulanIni)}</span>
                    </div>
                </div>
                <div class="flex justify-between text-slate-500 text-[11px]">
                    <span>Sisa Termin Bulan Berikutnya:</span>
                    <span class="font-mono font-bold">${fCur(Math.max(0, sisa - tagihanBulanIni))}</span>
                </div>
                ` : ''}

                <div class="flex justify-between text-slate-700 font-bold"><span>${isPaylater ? 'Total Sisa Pokok (Semua Tenor):' : 'Sisa Pokok Piutang:'}</span><span>${fCur(sisa)}</span></div>
                ${latePenalty > 0 ? `<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${fCur(latePenalty)}</span></div>` : ''}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${isPaylater ? 'TOTAL PELUNASAN PENUH:' : 'SISA WAJIB BAYAR:'}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${fCur(isLunas ? 0 : totalAkhir)}</span>
                </div>
            </div>
        </div>
        `;

        const signaturesHtml = `
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Yang Berhutang (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(o.customer?.name || 'Pelanggan')}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Kasir Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</span>
            </div>
        </div>
        `;

        const pages = paginateTableDocument({
            docTitle: isPaylater ? 'Nota Putri PayLater' : 'Nota Tagihan Piutang',
            docNumber: `#${o.orderId}`,
            docDate: oDate,
            kopHtml,
            metaHtml,
            tableHeaderHtml,
            rows,
            extraBlocksHtml,
            summaryHtml,
            signaturesHtml,
            singlePageMax: 5,
            itemsFirstPage: 5,
            itemsMiddlePage: 12,
            itemsLastPage: 4
        });

        renderPagesToContainer(pages);
        return;
    }

    // ────────────────────────────────────────────────────────────
    // 5. KARTU PIUTANG PELANGGAN (STATEMENT OF ACCOUNT)
    // ────────────────────────────────────────────────────────────
    if (type === 'tempo_customer_ledger') {
        const custKey = String(targetId || '').trim();
        const piutangList = window.cachedPiutangOrders || [];
        
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
        const logoHTML = getStoreLogoHtml('w-16 h-16');
        const printDate = formatDate(Date.now());

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

            return `
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${idx + 1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${esc(o.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${formatDate(o.dateString || o.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${isLate ? 'text-rose-600 font-bold' : 'text-slate-700'}">${formatDate(dueDate)} ${isLate ? `<span class="text-[9.5px] text-rose-500">(+${daysLate}h)</span>` : ''}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${fCur(totalAwal)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${fCur(paid)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${latePenalty > 0 ? fCur(latePenalty) : '-'}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${fCur(totalAkhir)}</td>
            </tr>
            `;
        });

        const bankListHtml = getStoreBankListHtml('font-mono text-xs');

        const kopHtml = `
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${logoHTML}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store?.slogan || 'Pusat Alat Teknik, Bangunan & Perlengkapan')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store?.address || 'Alamat fisik toko')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || appData.store?.phone || '-')}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">KARTU PIUTANG PELANGGAN</h2>
                <p class="text-xs font-bold text-slate-600 mt-1">STATEMENT OF ACCOUNT</p>
                <p class="text-xs font-semibold text-slate-500 mt-0.5">Dicetak: ${printDate}</p>
                <span class="inline-block mt-1.5 px-3 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded-full text-[11px] font-black uppercase tracking-wider">
                    ${customerOrders.length} NOTA BELUM LUNAS
                </span>
            </div>
        </div>
        `;

        const metaHtml = `
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-[11px] text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-base text-slate-900 uppercase">${esc(custName)}</p>
                </div>
                <div>
                    <p class="text-[11px] text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${esc(custPhone)}</p>
                </div>
            </div>
        </div>
        `;

        const tableHeaderHtml = `
        <tr class="border-b-2 border-slate-800 text-[10.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">No. Nota</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Tgl Transaksi</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Jatuh Tempo</th>
            <th class="py-2.5 px-3 text-right border-r border-slate-700">Total Transaksi</th>
            <th class="py-2.5 px-3 text-right border-r border-slate-700">Terbayar</th>
            <th class="py-2.5 px-3 text-right border-r border-slate-700">Denda</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Sisa Tagihan</th>
        </tr>
        `;

        const summaryHtml = `
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Transfer Resmi Pelunasan:
                </h4>
                <div class="space-y-1 pt-0.5">${bankListHtml}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${fCur(grandTotalAllNotes)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${fCur(totalPaidAllNotes)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${fCur(totalSisaPokokAll)}</span></div>
                ${totalDendaAll > 0 ? `<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda (+):</span><span>+${fCur(totalDendaAll)}</span></div>` : ''}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${fCur(totalWajibBayarAll)}</span>
                </div>
            </div>
        </div>
        `;

        const signaturesHtml = `
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Penerima Tagihan (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(custName)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</span>
            </div>
        </div>
        `;

        const pages = paginateTableDocument({
            docTitle: 'Kartu Piutang Pelanggan',
            docNumber: `STATEMENT OF ACCOUNT`,
            docDate: printDate,
            kopHtml,
            metaHtml,
            tableHeaderHtml,
            rows: orderRows,
            summaryHtml,
            signaturesHtml,
            singlePageMax: 6,
            itemsFirstPage: 6,
            itemsMiddlePage: 14,
            itemsLastPage: 6
        });

        renderPagesToContainer(pages);
        return;
    }

    // ────────────────────────────────────────────────────────────
    // 5b. REKAP BUKU BESAR PIUTANG TOKO (ACCOUNTS RECEIVABLE MASTER LEDGER)
    // ────────────────────────────────────────────────────────────
    if (type === 'tempo_recap') {
        const piutangList = window.cachedPiutangOrders && window.cachedPiutangOrders.length > 0 
            ? window.cachedPiutangOrders 
            : (window.gOrds || []).filter(o => o.payment?.method === 'tempo' && (parseFloat(o.payment?.tempoBalance) > 0 || (o.payment?.status !== 'paid' && o.payment?.status !== 'completed')));

        if (!piutangList || piutangList.length === 0) {
            if (typeof window.showToast === 'function') window.showToast('Tidak ada nota piutang aktif untuk direkap.');
            return;
        }

        setIn('doc-modal-title', 'Rekap Buku Piutang Toko A4');
        const logoHTML = getStoreLogoHtml('w-16 h-16');
        const printDate = formatDate(Date.now(), true);
        const recapDocNo = `AR-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;

        let totalGrandTotal = 0;
        let totalPaid = 0;
        let totalSisaPokok = 0;
        let totalDenda = 0;
        let totalWajibBayar = 0;
        let countLate = 0;
        let countDueSoon = 0;
        let countActive = 0;
        const uniqueDebtors = new Set();

        const rows = piutangList.map((o, idx) => {
            const cust = o.customer || {};
            const custName = cust.name || 'Pelanggan';
            const custPhone = cust.wa || cust.phone || '-';
            const debtorKey = `${custName}_${custPhone}`;
            uniqueDebtors.add(debtorKey);

            const orderDateStr = formatDate(o.dateString || o.createdAt);
            const dueDateVal = o.payment?.tempoDueDate || 0;
            const dueDateStr = formatDate(dueDateVal);

            const sisa = parseFloat(o.payment?.tempoBalance) || 0;
            const rate = o.payment?.tempoPenaltyRate !== undefined ? parseFloat(o.payment.tempoPenaltyRate) : 1;
            const isStopped = o.payment?.tempoPenaltyStopped === true;
            let latePenalty = 0;
            let daysLate = 0;
            let isLate = false;
            let isDueSoon = false;
            const now = Date.now();

            if (dueDateVal > 0) {
                if (now > dueDateVal) {
                    daysLate = Math.floor((now - dueDateVal) / (24 * 60 * 60 * 1000));
                    if (daysLate > 0) isLate = true;
                } else {
                    const daysLeft = Math.ceil((dueDateVal - now) / (24 * 60 * 60 * 1000));
                    if (daysLeft <= 3 && daysLeft >= 0) isDueSoon = true;
                }
            }

            if (isStopped) {
                latePenalty = parseFloat(o.payment?.tempoFixedPenalty) || 0;
            } else if (isLate) {
                latePenalty = (rate / 100 * sisa) * daysLate;
            }

            const installments = o.payment?.installments || [];
            const paid = installments.reduce((sum, ins) => sum + (parseFloat(ins.amount) || 0), 0);
            const totalAwal = o.payment?.grandTotal || (sisa + paid);
            const totalTagihan = sisa + latePenalty;

            totalGrandTotal += totalAwal;
            totalPaid += paid;
            totalSisaPokok += sisa;
            totalDenda += latePenalty;
            totalWajibBayar += totalTagihan;

            let agingStatusBadge = '';
            if (isLate) {
                countLate++;
                agingStatusBadge = `<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-100 text-rose-700 border border-rose-200">Telat ${daysLate} Hari</span>`;
            } else if (isDueSoon) {
                countDueSoon++;
                agingStatusBadge = `<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">H-3 Tempo</span>`;
            } else {
                countActive++;
                agingStatusBadge = `<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Lancar</span>`;
            }

            return `
            <tr class="border-b border-slate-200 text-[10px] hover:bg-slate-50 transition-colors">
                <td class="py-2 px-2 text-center text-slate-500 font-bold border-r border-slate-200">${idx + 1}</td>
                <td class="py-2 px-2.5 border-r border-slate-200">
                    <p class="font-bold text-slate-900 leading-tight">${esc(custName)}</p>
                    <p class="text-[9px] text-slate-500 font-mono"><i class="fa-brands fa-whatsapp text-emerald-600"></i> ${esc(custPhone)}</p>
                </td>
                <td class="py-2 px-2 border-r border-slate-200 font-mono">
                    <p class="font-bold text-slate-800">#${esc(o.orderId || o.id)}</p>
                    <p class="text-[9px] text-slate-500">${orderDateStr}</p>
                </td>
                <td class="py-2 px-2 text-center border-r border-slate-200 font-mono">
                    <span class="font-bold ${isLate ? 'text-rose-600' : 'text-slate-700'}">${dueDateStr}</span>
                </td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono font-bold text-slate-800">${fCur(sisa)}</td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono ${latePenalty > 0 ? 'text-rose-600 font-bold' : 'text-slate-400'}">
                    ${latePenalty > 0 ? `+${fCur(latePenalty)}` : 'Rp 0'}
                </td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono font-black text-slate-900 bg-slate-50/80">${fCur(totalTagihan)}</td>
                <td class="py-2 px-2 text-center">${agingStatusBadge}</td>
            </tr>`;
        });

        const kopHtml = `
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3.5">
                ${logoHTML}
                <div>
                    <h1 class="font-black text-xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</h1>
                    <p class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">${esc(appData.store?.slogan || 'Pusat Alat Teknik, Bangunan & Perlengkapan')}</p>
                    <p class="text-[10px] text-slate-500 max-w-sm leading-snug mt-0.5">${esc(appData.store?.address || 'Alamat Toko')}</p>
                    <p class="text-[10px] text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || appData.store?.phone || '-')}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-widest text-slate-900 uppercase">REKAP BUKU PIUTANG</h2>
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">ACCOUNTS RECEIVABLE MASTER LEDGER</p>
                <p class="text-xs font-bold text-slate-600 font-mono mt-1">#${esc(recapDocNo)}</p>
                <p class="text-[10px] text-slate-500 mt-0.5">Waktu Cetak: ${printDate}</p>
            </div>
        </div>
        `;

        const bankListHtml = getStoreBankListHtml('font-mono text-[10px]');
        const metaHtml = `
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <h3 class="text-[9px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-1">Ringkasan Portofolio Debitur:</h3>
                <div class="grid grid-cols-2 gap-2 text-[10px] pt-1">
                    <div>
                        <span class="text-slate-500">Total Debitur:</span>
                        <b class="text-slate-900 block font-mono text-xs">${uniqueDebtors.size} Orang</b>
                    </div>
                    <div>
                        <span class="text-slate-500">Total Nota Aktif:</span>
                        <b class="text-slate-900 block font-mono text-xs">${piutangList.length} Transaksi</b>
                    </div>
                    <div>
                        <span class="text-rose-600 font-medium">Nota Terlambat:</span>
                        <b class="text-rose-700 block font-mono text-xs">${countLate} Nota</b>
                    </div>
                    <div>
                        <span class="text-emerald-600 font-medium">Nota Lancar:</span>
                        <b class="text-emerald-700 block font-mono text-xs">${countActive} Nota</b>
                    </div>
                </div>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <h3 class="text-[9px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-1 flex items-center gap-1">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Penerimaan Pelunasan Toko:
                </h3>
                <div class="space-y-0.5 pt-0.5">${bankListHtml}</div>
            </div>
        </div>
        `;

        const tableHeaderHtml = `
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-2.5 border-r border-slate-700">Debitur / Pelanggan</th>
            <th class="py-2 px-2 w-28 border-r border-slate-700">Nota &amp; Tgl</th>
            <th class="py-2 px-2 text-center w-24 border-r border-slate-700">Jatuh Tempo</th>
            <th class="py-2 px-2 text-right w-24 border-r border-slate-700">Sisa Pokok</th>
            <th class="py-2 px-2 text-right w-20 border-r border-slate-700">Denda</th>
            <th class="py-2 px-2 text-right w-28 border-r border-slate-700">Total Tagihan</th>
            <th class="py-2 px-2 text-center w-24">Status Aging</th>
        </tr>
        `;

        const summaryHtml = `
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Rekap Piutang Toko:</p>
                <p class="text-slate-600 leading-snug">1. Dokumen ini sah sebagai bukti buku pembukuan piutang berjalan Toko Putri.</p>
                <p class="text-slate-600 leading-snug">2. Seluruh nominal sisa pokok dan denda mengikat hingga tanggal cetak dokumen.</p>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div class="flex justify-between text-slate-600 text-[11px]">
                    <span>Total Sisa Pokok Piutang:</span>
                    <span class="font-bold text-slate-800 font-mono">${fCur(totalSisaPokok)}</span>
                </div>
                ${totalDenda > 0 ? `
                <div class="flex justify-between text-rose-600 text-[11px] font-bold">
                    <span>Total Akumulasi Denda (+):</span>
                    <span class="font-mono">+${fCur(totalDenda)}</span>
                </div>` : ''}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-1.5 mt-1 font-bold text-slate-900">
                    <span class="text-xs uppercase tracking-wider">TOTAL TAGIHAN BERJALAN:</span>
                    <span class="text-[var(--color-primary)] font-black text-sm font-mono">${fCur(totalWajibBayar)}</span>
                </div>
            </div>
        </div>
        `;

        const signaturesHtml = `
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-4 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Petugas Penagihan / Kasir:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 text-[11px] uppercase">( ........................................ )</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Pemilik Toko (Owner):</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 text-[11px] uppercase">${esc(appData.store?.name || 'Toko Putri')}</span>
            </div>
        </div>
        `;

        const pages = paginateTableDocument({
            docTitle: 'Rekap Buku Piutang Toko',
            docNumber: recapDocNo,
            docDate: printDate,
            kopHtml,
            metaHtml,
            tableHeaderHtml,
            rows,
            summaryHtml,
            signaturesHtml,
            singlePageMax: 7,
            itemsFirstPage: 7,
            itemsMiddlePage: 15,
            itemsLastPage: 7
        });

        renderPagesToContainer(pages);
        return;
    }

    // ────────────────────────────────────────────────────────────
    // 5B. NOTA RETUR PENJUALAN KONSUMEN (RMA SALES RETURN A4)
    // ────────────────────────────────────────────────────────────
    if (type === 'sales_return') {
        const returnId = typeof targetId === 'object' && targetId !== null ? targetId.returnId : targetId;
        const retList = appData.salesReturns || [];
        const ret = retList.find(x => String(x.id) === String(returnId)) || retList[0];

        if (!ret) {
            if (typeof window.showToast === 'function') window.showToast('Data retur penjualan tidak ditemukan!');
            return;
        }

        setIn('doc-modal-title', 'Preview Nota Retur Penjualan (A4)');
        const logoHTML = getStoreLogoHtml('w-16 h-16');
        const retDate = formatDate(ret.createdAt, true);
        const methodLabel = ret.refundMethod === 'cash' ? 'Pengembalian Tunai (Cash Refund)' 
            : (ret.refundMethod === 'credit' ? 'Saldo Kredit Toko (Store Credit)' 
            : (ret.refundMethod === 'exchange' ? 'Tukar Barang (Exchange)' : 'Lainnya'));

        const kopHtml = `
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${logoHTML}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store?.slogan || 'Pusat Alat Teknik, Bangunan & Perlengkapan')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store?.address || 'Alamat fisik toko')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || appData.store?.phone || '-')}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">NOTA RETUR</h2>
                <h3 class="font-bold text-sm tracking-wider text-indigo-600 uppercase">PENJUALAN KONSUMEN</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${esc(ret.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${retDate}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Rujukan Nota: <b class="font-mono text-slate-900">#${esc(ret.orderId || '-')}</b></p>
            </div>
        </div>
        `;

        const metaHtml = `
        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Identitas Pelanggan / Konsumen</span>
                <p class="font-bold text-slate-900 text-sm">${esc(ret.customerName || 'Pelanggan Umum')}</p>
                ${ret.customerPhone ? `<p class="text-slate-600 font-mono text-[11px]"><i class="fa-brands fa-whatsapp text-emerald-600"></i> ${esc(ret.customerPhone)}</p>` : ''}
                <p class="text-slate-500 text-[11px]">Saluran Transaksi: <span class="font-semibold text-slate-700">${ret.source === 'pos' ? 'Kasir POS' : 'Website Online'}</span></p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Penyelesaian Finansial</span>
                <p class="font-bold text-slate-900 text-sm">${esc(methodLabel)}</p>
                <p class="text-slate-500 text-[11px]">Petugas Pelaksana: <span class="font-semibold text-slate-700">${esc(ret.cashierName || 'Kasir Toko')}</span></p>
                <p class="text-slate-500 text-[11px]">Status Retur: <span class="font-bold text-emerald-600 uppercase">SELESAI (COMPLETED)</span></p>
            </div>
        </div>
        `;

        const tableHeaderHtml = `
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-28 border-r border-slate-700">Kondisi &amp; Alokasi</th>
            <th class="py-2.5 px-3 text-center w-16 border-r border-slate-700">Qty Retur</th>
            <th class="py-2.5 px-3 text-right w-24 border-r border-slate-700">Harga Jual</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Subtotal Retur</th>
            <th class="py-2.5 px-3 rounded-tr-xl w-36">Alasan Pengembalian</th>
        </tr>
        `;

        const items = ret.items || [];
        const rows = items.map((it, idx) => `
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${idx + 1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${esc(it.name)}
                ${it.variantName ? `<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${esc(it.variantName)}</span>` : ''}
                ${it.sku ? `<span class="text-slate-400 font-mono text-[9px] block">SKU: ${esc(it.sku)}</span>` : ''}
            </td>
            <td class="py-2 px-3 text-center text-[10.5px]">
                ${it.condition === 'good' 
                    ? `<span class="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block text-[9.5px]">Baik (Restok Rak)</span>` 
                    : `<span class="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 block text-[9.5px]">Rusak (Karantina)</span>`}
            </td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${formatQty(it.qty)}</td>
            <td class="py-2 px-3 text-right font-mono text-slate-600">${fCur(it.soldPrice || 0)}</td>
            <td class="py-2 px-3 text-right font-mono font-bold text-slate-900">${fCur(it.subtotalRefund || (it.qty * it.soldPrice) || 0)}</td>
            <td class="py-2 px-3 text-[10.5px] text-slate-600">
                ${esc(it.reason || '-')}
            </td>
        </tr>
        `);

        const summaryHtml = `
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Retur Resmi Toko:</p>
                <p class="text-slate-600 leading-snug">1. Barang retur telah diverifikasi fisik dan dicocokkan dengan struk pembelian asli.</p>
                <p class="text-slate-600 leading-snug">2. Kompensasi diberikan sesuai metode yang disepakati dan tidak dapat dibatalkan.</p>
                ${ret.notes ? `<p class="mt-2 text-slate-700 font-semibold border-t border-slate-200 pt-1">Catatan: "${esc(ret.notes)}"</p>` : ''}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between items-center text-slate-600">
                    <span>Total Item Diretur:</span>
                    <span class="font-mono font-bold text-slate-800">${items.reduce((s, x) => s + (parseFloat(x.qty) || 0), 0)} Unit</span>
                </div>
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 font-bold text-slate-900">
                    <span class="uppercase tracking-wider">TOTAL NILAI RETUR:</span>
                    <span class="text-rose-600 font-black text-base font-mono">${fCur(ret.totalRefund || 0)}</span>
                </div>
            </div>
        </div>
        `;

        const signaturesHtml = `
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Konsumen / Pembeli:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(ret.customerName || 'Konsumen')}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Kasir / Petugas Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(ret.cashierName || appData.store?.name || 'Toko Putri')}</span>
            </div>
        </div>
        `;

        const pages = paginateTableDocument({
            docTitle: 'Nota Retur Penjualan',
            docNumber: `#${ret.id}`,
            docDate: retDate,
            kopHtml,
            metaHtml,
            tableHeaderHtml,
            rows,
            summaryHtml,
            signaturesHtml,
            singlePageMax: 7,
            itemsFirstPage: 6,
            itemsMiddlePage: 14,
            itemsLastPage: 6
        });

        renderPagesToContainer(pages);
        return;
    }

    // ────────────────────────────────────────────────────────────
    // 5C. SURAT PENGEMBALIAN BARANG KE SUPPLIER (RMA VENDOR RETURN A4)
    // ────────────────────────────────────────────────────────────
    if (type === 'vendor_return') {
        const returnId = typeof targetId === 'object' && targetId !== null ? targetId.returnId : targetId;
        const retList = appData.vendorReturns || [];
        const ret = retList.find(x => String(x.id) === String(returnId)) || retList[0];

        if (!ret) {
            if (typeof window.showToast === 'function') window.showToast('Data retur supplier tidak ditemukan!');
            return;
        }

        setIn('doc-modal-title', 'Preview Surat Pengembalian Barang ke Supplier (A4)');
        const logoHTML = getStoreLogoHtml('w-16 h-16');
        const retDate = formatDate(ret.createdAt, true);
        const methodLabel = ret.settlementMethod === 'ap_deduction' 
            ? 'Potong Hutang PO (AP Deduction)' 
            : (ret.settlementMethod === 'cash_refund' ? 'Pengembalian Dana Kas / Transfer' : 'Lainnya');

        const kopHtml = `
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${logoHTML}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store?.slogan || 'Pusat Alat Teknik, Bangunan & Perlengkapan')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store?.address || 'Alamat fisik toko')}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || appData.store?.phone || '-')}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">SURAT PENGEMBALIAN</h2>
                <h3 class="font-bold text-sm tracking-wider text-amber-600 uppercase">BARANG KE PEMASOK (VENDOR RETURN)</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${esc(ret.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${retDate}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Rujukan PO: <b class="font-mono text-slate-900">#${esc(ret.poId || 'Non-PO')}</b></p>
            </div>
        </div>
        `;

        const metaHtml = `
        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Ditujukan Kepada Rekanan Supplier</span>
                <p class="font-bold text-slate-900 text-sm uppercase">${esc(ret.supplierName || 'Pemasok Toko')}</p>
                <p class="text-slate-500 text-[11px]">Rujukan Kulakan PO: <span class="font-mono font-bold text-slate-800">${esc(ret.poId || '-')}</span></p>
                <p class="text-slate-500 text-[11px]">Status Dokumen: <span class="font-bold text-amber-600 uppercase">TERBIT / DISERAHKAN</span></p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Penyelesaian Finansial Supplier</span>
                <p class="font-bold text-slate-900 text-sm">${esc(methodLabel)}</p>
                <p class="text-slate-500 text-[11px]">Estimasi Nilai Klaim HPP: <span class="font-mono font-bold text-amber-600">${fCur(ret.totalClaim || 0)}</span></p>
                ${ret.notes ? `<p class="text-slate-600 text-[10.5px] italic mt-1">Catatan: "${esc(ret.notes)}"</p>` : ''}
            </div>
        </div>
        `;

        const tableHeaderHtml = `
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Asal Lokasi</th>
            <th class="py-2.5 px-3 text-center w-16 border-r border-slate-700">Qty Retur</th>
            <th class="py-2.5 px-3 text-right w-24 border-r border-slate-700">Harga Beli/HPP</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Total Klaim</th>
            <th class="py-2.5 px-3 rounded-tr-xl w-36">Alasan Klaim Cacat</th>
        </tr>
        `;

        const items = ret.items || [];
        const rows = items.map((it, idx) => `
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${idx + 1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${esc(it.name)}
                ${it.variantName ? `<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${esc(it.variantName)}</span>` : ''}
                ${it.sku ? `<span class="text-slate-400 font-mono text-[9px] block">SKU: ${esc(it.sku)}</span>` : ''}
            </td>
            <td class="py-2 px-3 text-center text-[10px] font-semibold text-slate-600">
                ${it.fromLocation === 'warehouse' ? 'Gudang' : 'Rak Toko'}
            </td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${formatQty(it.qty)}</td>
            <td class="py-2 px-3 text-right font-mono text-slate-600">${fCur(it.buyPrice || 0)}</td>
            <td class="py-2 px-3 text-right font-mono font-bold text-amber-600">${fCur(it.subtotalClaim || (it.qty * it.buyPrice) || 0)}</td>
            <td class="py-2 px-3 text-[10.5px] text-slate-600">
                ${esc(it.reason || 'Barang Cacat Pabrik')}
            </td>
        </tr>
        `);

        const summaryHtml = `
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Pengembalian Barang:</p>
                <p class="text-slate-600 leading-snug">1. Barang fisik diserahkan kepada pihak ekspedisi / perwakilan resmi supplier.</p>
                <p class="text-slate-600 leading-snug">2. Nilai klaim memotong saldo hutang PO atau diganti dana/barang baru.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between items-center text-slate-600">
                    <span>Total Kuantitas Barang:</span>
                    <span class="font-mono font-bold text-slate-800">${items.reduce((s, x) => s + (parseFloat(x.qty) || 0), 0)} Unit</span>
                </div>
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 font-bold text-slate-900">
                    <span class="uppercase tracking-wider">TOTAL NILAI KLAIM HPP:</span>
                    <span class="text-amber-600 font-black text-base font-mono">${fCur(ret.totalClaim || 0)}</span>
                </div>
            </div>
        </div>
        `;

        const signaturesHtml = `
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pengirim (Purchasing Toko):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima (Supir / Supplier):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(ret.supplierName || 'Pemasok / Distributor')}</span>
            </div>
        </div>
        `;

        const pages = paginateTableDocument({
            docTitle: 'Surat Pengembalian Barang Supplier',
            docNumber: `#${ret.id}`,
            docDate: retDate,
            kopHtml,
            metaHtml,
            tableHeaderHtml,
            rows,
            summaryHtml,
            signaturesHtml,
            singlePageMax: 7,
            itemsFirstPage: 6,
            itemsMiddlePage: 14,
            itemsLastPage: 6
        });

        renderPagesToContainer(pages);
        return;
    }

    // ────────────────────────────────────────────────────────────
    // 6 & 7. FAKTUR INVOICE & SURAT JALAN PESANAN
    // ────────────────────────────────────────────────────────────
    const targetOrderId = targetId || window.cVOrd;
    const o = (window.gOrds || []).find(x => String(x.orderId) === String(targetOrderId))
        || (window.lastPrintedOrder && String(window.lastPrintedOrder.orderId) === String(targetOrderId) ? window.lastPrintedOrder : null);

    if (!o) {
        if (typeof window.showToast === 'function') window.showToast('Data pesanan tidak ditemukan!');
        return;
    }

    setIn('doc-modal-title', type === 'invoice' ? 'Preview Faktur Invoice' : 'Preview Surat Jalan');
    const d = o.dateString ? new Date(o.dateString).toLocaleString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '';
    const logoHTML = getStoreLogoHtml('w-16 h-16');

    const kopHtml = `
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${logoHTML}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'TOKO PUTRI')}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store?.slogan || 'General Supplier')}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store?.address || 'Alamat fisik toko')}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || '-')}</p>
                ${(o.payment?.taxNpwp || appData.store?.taxNpwp) ? `<p class="text-xs font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP Toko: <span class="font-mono">${esc(o.payment?.taxNpwp || appData.store.taxNpwp)}</span></p>` : ''}
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl sm:text-3xl tracking-widest ${type === 'invoice' ? 'text-blue-600' : 'text-amber-600'} uppercase">${type === 'invoice' ? (o.payment?.method === 'tempo' ? 'PROFORMA INVOICE' : 'INVOICE') : 'SURAT JALAN'}</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${esc(o.orderId)}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${d}</p>
        </div>
    </div>
    `;

    const metaHtml = `
    <div class="grid grid-cols-2 gap-6 mb-5">
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditagihkan Kepada (Pemesan):</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${esc(o.customer?.name || 'Guest')}${o.customer?.wa ? ` <span class="text-xs font-mono font-medium text-slate-500">(+${esc(o.customer.wa)})</span>` : ''}</p>
            <p class="text-xs font-medium text-slate-700 leading-relaxed mb-1">${esc(o.customer?.address || '-')}</p>
            ${o.isDropPoint && o.dropPoint ? `
            <div class="mt-2 pt-2 border-t border-rose-200 bg-rose-50/80 p-2.5 rounded-xl border border-dashed text-left">
                <div class="flex items-center gap-1.5 text-rose-700 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                    <i class="fa-solid fa-location-dot"></i> Pengantaran ke Lokasi Berbeda (Drop-Point):
                </div>
                <p class="font-bold text-xs text-slate-900 uppercase">${esc(o.dropPoint.name || '-')}${o.dropPoint.wa ? ` <span class="font-mono text-[11px] font-semibold text-rose-600">(+${esc(o.dropPoint.wa)})</span>` : ''}</p>
                <p class="text-[11px] font-medium text-slate-700 mt-0.5 leading-relaxed">${esc(o.dropPoint.address || '-')}</p>
            </div>
            ` : ''}
            ${o.customer?.note ? `<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-xl border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan: ${esc(o.customer.note)}</p>` : ''}
        </div>
        
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-center space-y-2.5">
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-xs font-bold text-slate-800 uppercase">${esc(o.isDropPoint ? 'Drop-Point (Lokasi Berbeda)' : (o.customer?.deliveryMethod === 'delivery' ? 'Dikirim' : 'Ambil di Toko'))}</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistem Pembayaran</span>
                <span class="text-xs font-bold text-slate-800 uppercase">${esc(o.payment?.method || 'cash')}</span>
            </div>
            <div class="flex justify-between items-center pb-0.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Bayar</span>
                <span class="text-xs font-bold ${o.status === 'Selesai' ? 'text-emerald-600' : 'text-rose-600'} uppercase">${o.status === 'Selesai' ? 'LUNAS' : 'BELUM LUNAS'}</span>
            </div>
        </div>
    </div>
    `;

    const rawItems = Array.isArray(o.items) ? o.items : (Array.isArray(o.cart) ? o.cart : []);

    if (type === 'invoice') {
        const tableHeaderHtml = `
        <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
            <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Produk &amp; Varian</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Sat.</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total</th>
        </tr>
        `;

        const rows = rawItems.map((item, idx) => `
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${idx + 1}</td>
            <td class="py-2.5 px-3 font-bold flex items-center gap-1.5">
                ${esc(item.name)} 
                ${item.variantName ? `<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${esc(item.variantName)}</span>` : ''}
                ${item.colorCode ? `<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${esc(item.colorCode)};"></span>` : ''}
                ${item.poTime ? `<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${esc(item.poTime)}</span>` : ''}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${parseFloat(item.qty)} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${esc(item.unit || 'pcs')}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${fCur(item.effectivePrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${fCur(item.effectivePrice * parseFloat(item.qty))}</td>
        </tr>
        `);

        let extraBlocksHtml = '';
        if (o.pointsEarned > 0 || (o.finalMemberPoints !== undefined && o.finalMemberPoints !== null)) {
            extraBlocksHtml += `
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
                ${o.pointsEarned > 0 ? `<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-sm text-amber-700">+${o.pointsEarned}</p></div>` : ''}
                ${(o.finalMemberPoints !== undefined && o.finalMemberPoints !== null) ? `<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Member</p><p class="font-bold text-sm text-amber-700">${o.finalMemberPoints}</p></div>` : ''}
            </div>`;
        }

        if (o.claimedReward) {
            extraBlocksHtml += `
            <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-3 mb-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                    <div>
                        <p class="text-[9px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${o.claimedReward.pointsCost} Poin)</p>
                        <p class="font-bold text-xs text-violet-800 uppercase">${esc(o.claimedReward.name)}</p>
                    </div>
                </div>
                <span class="text-[9.5px] font-bold px-2.5 py-1 rounded-lg bg-violet-600 text-white uppercase tracking-wider">${esc(o.claimedReward.status === 'ready' ? 'SERTAKAN PENGIRIMAN' : 'KLAIM RESMI')}</span>
            </div>`;
        }

        if (o.payment?.method === 'tempo') {
            const isPl = !!(o.payment?.isPaylater || o.isPaylater || o.payment?.subMethod === 'paylater');
            if (isPl) {
                const tenorMonths = o.payment?.paylaterMonths || 1;
                const tenorLabel = o.payment?.paylaterTenor === '2m' ? '2 Bulan (2x Cicilan)' : (o.payment?.paylaterTenor === '3m' ? '3 Bulan (3x Cicilan)' : '30 Hari (1x Bayar)');
                const hasSched = Array.isArray(o.payment?.paylaterSchedule) && o.payment.paylaterSchedule.length > 0;
                let schedTable = '';
                if (hasSched) {
                    const currentTempoBal = Math.max(0, parseFloat(o.payment?.tempoBalance) || 0);
                    const installments = o.payment?.installments || [];
                    const paidAll = installments.reduce((sum, ins) => sum + (parseFloat(ins.amount) || 0), 0);
                    let runningTgt = 0;
                    let foundUnpaid = false;

                    schedTable = `
                    <div class="mt-2.5 pt-2 border-t border-emerald-300/60">
                        <div class="flex items-center justify-between mb-1.5">
                            <p class="text-[9.5px] font-black uppercase tracking-wider text-emerald-900 flex items-center gap-1">
                                <i class="fa-solid fa-calendar-check text-emerald-700"></i> Jadwal Angsuran Bulanan (${o.payment?.paylaterMonths || 1}x Tenor):
                            </p>
                            <span class="text-[8.5px] text-emerald-700 font-semibold italic">* Bulan berjalan vs bulan berikutnya</span>
                        </div>
                        <table class="w-full text-left text-[9.5px] border border-emerald-300 rounded-lg overflow-hidden bg-white">
                            <thead class="bg-emerald-100 text-emerald-900 font-black uppercase tracking-wider text-[8.5px]">
                                <tr>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-center w-20">Termin</th>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-center">Jatuh Tempo</th>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-right">Pokok</th>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-right">Layanan</th>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-right">Total Angsuran</th>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-center w-28">Status</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-emerald-200 font-mono">
                                ${o.payment.paylaterSchedule.map((sc, idx) => {
                                    const mIdx = sc.installmentIndex || sc.installmentNo || sc.installmentNumber || sc.month || (idx + 1);
                                    const pPokok = parseFloat(sc.pokok || sc.principal) || 0;
                                    const pFee = parseFloat((sc.adminFee || 0) + (sc.serviceFee || 0)) || 0;
                                    const mTotal = parseFloat(sc.total || sc.totalMonthly || sc.totalInstallment) || (pPokok + pFee);
                                    
                                    runningTgt += mTotal;
                                    const dueTime = sc.dueDate || 0;
                                    const dueStr = sc.dueDateFormatted || sc.dueDateStr || (dueTime ? formatDate(dueTime) : '-');

                                    let badge = '';
                                    if (paidAll >= runningTgt) {
                                        badge = `<span class="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase bg-emerald-100 text-emerald-700 border border-emerald-300">LUNAS</span>`;
                                    } else if (!foundUnpaid) {
                                        foundUnpaid = true;
                                        badge = `<span class="px-1.5 py-0.2 rounded text-[8px] font-black uppercase bg-amber-100 text-amber-800 border border-amber-300">BULAN INI</span>`;
                                    } else {
                                        badge = `<span class="px-1.5 py-0.2 rounded text-[8px] font-medium uppercase bg-slate-100 text-slate-500">MENDATANG</span>`;
                                    }

                                    return `
                                    <tr>
                                        <td class="py-1 px-2 font-bold text-slate-800 text-center font-sans">Bulan Ke-${mIdx}</td>
                                        <td class="py-1 px-2 text-slate-600 text-center">${dueStr}</td>
                                        <td class="py-1 px-2 text-right text-slate-600">${fCur(pPokok)}</td>
                                        <td class="py-1 px-2 text-right text-slate-500">${fCur(pFee)}</td>
                                        <td class="py-1 px-2 font-black text-right text-emerald-800">${fCur(mTotal)}</td>
                                        <td class="py-1 px-2 text-center font-sans">${badge}</td>
                                    </tr>`;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>`;
                }

                extraBlocksHtml += `
                <div class="mb-4 border border-emerald-200 bg-emerald-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-emerald-800 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-handshake text-emerald-600 mr-1"></i> Putri PayLater (${tenorLabel}):</h4>
                    <p class="text-[9.5px] text-emerald-700 font-semibold leading-relaxed">
                        Sistem pembayaran cicilan resmi Toko Putri tanpa biaya tersembunyi. Jatuh Tempo Pertama: ${o.payment.tempoDueDate ? formatDate(o.payment.tempoDueDate) : '-'}.
                        ${o.payment.paylaterMonthlyInstallment ? ` Angsuran: <b>${fCur(o.payment.paylaterMonthlyInstallment)} / bulan</b> (${tenorMonths}x).` : ''}
                    </p>
                    ${schedTable}
                </div>`;
            } else {
                extraBlocksHtml += `
                <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                    <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${o.payment.tempoDueDate ? formatDate(o.payment.tempoDueDate) : '-'}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
                </div>`;
            }
        }

        const invoiceBankListHtml = getStoreBankListHtml('font-mono text-xs');

        const summaryHtml = `
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${invoiceBankListHtml}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi pembayaran via WhatsApp: <b>${esc(appData.store?.wa || appData.store?.phone || '-')}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Terima kasih atas transaksi Anda di ${esc(appData.store?.name || 'Toko Putri')}.</p>
                </div>
            </div>

            ${(() => {
                const tax = extractOrderTaxInfo(o);
                return `
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                    <div class="flex justify-between text-slate-600"><span>Subtotal Produk</span><span class="font-mono">${fCur(tax.subtotal)}</span></div>
                    ${tax.shipping > 0 ? `<div class="flex justify-between text-slate-600"><span>Ongkos Kirim</span><span class="font-mono">${fCur(tax.shipping)}</span></div>` : ''}
                    ${tax.shippingDiscount > 0 ? `<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Ongkir</span><span class="font-mono">-${fCur(tax.shippingDiscount)}</span></div>` : ''}
                    ${tax.productDiscount > 0 ? `<div class="flex justify-between text-rose-600 font-bold"><span>Diskon Produk</span><span class="font-mono">-${fCur(tax.productDiscount)}</span></div>` : ''}
                    ${tax.pointDiscount > 0 ? `<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin Reward</span><span class="font-mono">-${fCur(tax.pointDiscount)}</span></div>` : ''}
                    ${tax.paylaterAdminFee > 0 ? `<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater</span><span class="font-mono">+${fCur(tax.paylaterAdminFee)}</span></div>` : ''}
                    ${tax.paylaterServiceFee > 0 ? `<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan</span><span class="font-mono">+${fCur(tax.paylaterServiceFee)}</span></div>` : ''}
                    ${tax.hasPpn ? `
                    <div class="flex justify-between text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${fCur(tax.dppAmount)}</span></div>
                    <div class="flex justify-between text-amber-600 font-bold"><span>${tax.ppnLabel}</span><span class="font-mono">${tax.ppnAmount > 0 ? (tax.isInclusive ? '' : '+') + fCur(tax.ppnAmount) : 'Rp 0'}</span></div>
                    ` : ''}
                    
                    <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-2 shadow-xs">
                        <span class="font-bold text-xs uppercase tracking-widest">Grand Total</span>
                        <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${fCur(tax.grandTotal)}</span>
                    </div>
                `;
            })()}
                ${o.payment?.method === 'tempo' ? `
                <div class="flex justify-between text-emerald-600 font-bold"><span>${(o.payment?.isPaylater || o.payment?.subMethod === 'paylater') ? 'Limit Terpakai / DP' : 'Uang Muka (DP)'}</span><span class="font-mono">${fCur(o.payment?.tempoDp || 0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-2.5 rounded-xl mt-1 border border-rose-200">
                    <span class="font-bold text-xs uppercase tracking-widest">${(o.payment?.isPaylater || o.payment?.subMethod === 'paylater') ? 'Sisa Tagihan PayLater' : 'Sisa Tagihan'}</span>
                    <span class="font-mono text-sm font-black tracking-tight">${fCur(o.payment?.tempoBalance || 0)}</span>
                </div>
                ${(o.payment?.isPaylater || o.payment?.subMethod === 'paylater') && o.payment?.paylaterMonthlyInstallment ? `
                <div class="flex justify-between text-[11px] text-emerald-700 font-bold">
                    <span>Angsuran per Bulan (${o.payment?.paylaterMonths || 1}x)</span>
                    <span class="font-mono font-black">${fCur(o.payment.paylaterMonthlyInstallment)}/bln</span>
                </div>
                ` : ''}
                ` : ''}
            </div>
        </div>
        `;

        const signaturesHtml = `
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima / Klien:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900">${esc(o.customer?.name || 'Nama Terang & TTD')}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900">Nama Terang &amp; TTD</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</span>
            </div>
        </div>
        `;

        const pages = paginateTableDocument({
            docTitle: o.payment?.method === 'tempo' ? 'Proforma Invoice' : 'Faktur Invoice',
            docNumber: `#${o.orderId}`,
            docDate: d,
            kopHtml,
            metaHtml,
            tableHeaderHtml,
            rows,
            extraBlocksHtml,
            summaryHtml,
            signaturesHtml,
            singlePageMax: 6,
            itemsFirstPage: 6,
            itemsMiddlePage: 12,
            itemsLastPage: 5
        });

        renderPagesToContainer(pages);
        return;
    }

    // SURAT JALAN
    const tableHeaderHtml = `
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Nama &amp; Spesifikasi Barang</th>
        <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
    </tr>
    `;

    const rows = rawItems.map((item, idx) => `
    <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-500">${idx + 1}</td>
        <td class="py-2.5 px-3 font-bold uppercase flex items-center gap-1.5">
            ${esc(item.name)} 
            ${item.variantName ? `<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${esc(item.variantName)}</span>` : ''}
            ${item.colorCode ? `<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${esc(item.colorCode)};"></span>` : ''}
            ${item.poTime ? `<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${esc(item.poTime)}</span>` : ''}
        </td>
        <td class="py-2.5 px-3 text-center font-bold text-base text-slate-800">${parseFloat(item.qty)}</td>
        <td class="py-2.5 px-3 text-center text-slate-500 font-bold uppercase text-[11px]">${esc(item.unit || 'pcs')}</td>
        <td class="py-2.5 px-3 text-center"><div class="w-4 h-4 border-2 border-slate-400 mx-auto rounded-sm shadow-inner"></div></td>
    </tr>
    `);

    const signaturesHtml = `
    <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima / Klien:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">${esc(o.customer?.name || 'Nama Terang & TTD')}</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama Terang &amp; TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</span>
        </div>
    </div>
    `;

    const pages = paginateTableDocument({
        docTitle: 'Surat Jalan Pengiriman',
        docNumber: `#${o.orderId}`,
        docDate: d,
        kopHtml,
        metaHtml,
        tableHeaderHtml,
        rows,
        signaturesHtml,
        singlePageMax: 8,
        itemsFirstPage: 8,
        itemsMiddlePage: 16,
        itemsLastPage: 9
    });

    renderPagesToContainer(pages);
};

/**
 * ============================================================
 * PRATINJAU SURAT PENAWARAN HARGA (SPH / QUOTATION PROYEK)
 * Langsung dari Keranjang Belanja Pelanggan / Sales
 * ============================================================
 */
export const openCartSPHPreview = () => {
    const cart = window.cart || [];
    if (!cart || cart.length === 0) {
        if (typeof window.showToast === 'function') window.showToast('Keranjang belanja masih kosong!');
        return;
    }

    currentDocType = 'sph';
    const sphNum = 'SPH-' + new Date().toISOString().slice(0,10).replace(/-/g,'') + '-' + Math.floor(1000 + Math.random() * 9000);
    const issueDate = formatDate(new Date());
    const validUntil = formatDate(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000));

    setIn('doc-modal-title', 'Surat Penawaran Harga (SPH)');
    const logoHTML = getStoreLogoHtml('w-16 h-16');
    const getEffP = typeof window.getEffP === 'function' ? window.getEffP : (i => i.price || 0);

    let subtotal = 0;
    const rows = cart.map((item, idx) => {
        const q = parseFloat(item.qty) || 1;
        const effPrice = getEffP(item);
        const lineTot = q * effPrice;
        subtotal += lineTot;
        return `
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${idx + 1}</td>
            <td class="py-2.5 px-3 font-bold">
                ${esc(item.name)}
                ${item.variantName ? `<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${esc(item.variantName)}</span>` : ''}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${q} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${esc(item.unit || 'pcs')}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${fCur(effPrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${fCur(lineTot)}</td>
        </tr>
        `;
    });

    const kopHtml = `
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${logoHTML}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store?.slogan || 'General Supplier & Alat Teknik')}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store?.address || 'Alamat fisik toko')}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store?.wa || '-')}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-emerald-600 uppercase">PENAWARAN HARGA</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${sphNum}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${issueDate}</p>
            <span class="inline-block mt-1 px-2.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded text-[10px] font-bold uppercase tracking-wider">
                Berlaku s/d: ${validUntil}
            </span>
        </div>
    </div>
    `;

    const metaHtml = `
    <div class="grid grid-cols-2 gap-6 mb-5">
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Ditujukan Kepada:</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-0.5">Kepada Yth. Rekanan / Proyek</p>
            <p class="text-xs font-medium text-slate-600 leading-relaxed">Pelanggan Terhormat / Departemen Pengadaan</p>
            <p class="text-[10px] italic text-slate-400 mt-1.5">* Surat penawaran harga resmi dapat digunakan sebagai referensi RAB proyek &amp; pengajuan anggaran.</p>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-center space-y-2">
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Masa Berlaku</span>
                <span class="text-xs font-bold text-slate-800">14 Hari Kalender</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Ketersediaan Stok</span>
                <span class="text-xs font-bold text-slate-800">Konfirmasi Saat Pemesanan</span>
            </div>
            <div class="flex justify-between items-center pb-0.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Dokumen</span>
                <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider font-mono">OFFICIAL QUOTATION</span>
            </div>
        </div>
    </div>
    `;

    const tableHeaderHtml = `
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Barang &amp; Spesifikasi</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
        <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total Estimasi</th>
    </tr>
    `;

    const summaryHtml = `
    <div class="flex justify-end mb-4">
        <div class="w-1/2 md:w-[45%] space-y-1.5 text-xs font-bold text-slate-700">
            <div class="flex justify-between px-3"><span>Subtotal Estimasi</span><span class="font-mono">${fCur(subtotal)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-1 shadow-xs">
                <span class="font-bold text-xs uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${fCur(subtotal)}</span>
            </div>
        </div>
    </div>
    `;

    const extraBlocksHtml = `
    <div class="border border-slate-200 bg-slate-50 p-3 rounded-xl text-left mb-4">
        <h4 class="font-bold text-slate-700 text-[10.5px] uppercase tracking-widest mb-1"><i class="fa-solid fa-circle-info mr-1 text-[var(--color-primary)]"></i> Syarat &amp; Ketentuan Penawaran:</h4>
        <ul class="text-[10px] text-slate-600 space-y-0.5 list-disc list-inside">
            <li>Harga penawaran berlaku selama <b>14 hari kalender</b> terhitung sejak tanggal dokumen diterbitkan.</li>
            <li>Ketersediaan dan fluktuasi stok dapat berubah sewaktu-waktu sampai diterbitkannya konfirmasi pesanan (PO) resmi.</li>
            <li>Biaya pengiriman dan penanganan disesuaikan dengan kuantitas dan jarak tempuh lokasi pengiriman.</li>
        </ul>
    </div>
    `;

    const signaturesHtml = `
    <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-4 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Menyetujui / Klien Proyek:</span>
            <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama Terang &amp; Stempel</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Hormat Kami:</span>
            <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${esc(appData.store?.name || 'Toko Putri')}</span>
        </div>
    </div>
    `;

    const pages = paginateTableDocument({
        docTitle: 'Surat Penawaran Harga',
        docNumber: `#${sphNum}`,
        docDate: issueDate,
        kopHtml,
        metaHtml,
        tableHeaderHtml,
        rows,
        summaryHtml,
        extraBlocksHtml,
        signaturesHtml,
        singlePageMax: 6,
        itemsFirstPage: 6,
        itemsMiddlePage: 14,
        itemsLastPage: 5
    });

    renderPagesToContainer(pages);
};

/**
 * Helper untuk merender hasil paginasi ke elemen paper modal
 */
const renderPagesToContainer = (pages) => {
    const container = el('doc-paper-content');
    if (!container) return;
    container.innerHTML = pages.join('');
    
    // Perbarui badge jumlah halaman di header modal
    const totalPages = pages.length;
    const badge = el('doc-page-count-badge');
    if (badge) {
        badge.textContent = `${totalPages} Halaman A4`;
    }

    showDocModalWithAnim(totalPages);
};

const showDocModalWithAnim = (pageCount = 1) => {
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
    const safeGap = (window.innerWidth < 640) ? 12 : 32;
    const availW = area.clientWidth - safeGap;
    const scale = Math.min(1, Math.max(0.2, availW / PAPER_W));

    content.style.transform = `translateX(-50%) scale(${scale})`;
    const totalH = content.offsetHeight || content.scrollHeight;
    wrapper.style.height = (totalH * scale + 48) + 'px';
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

/**
 * ============================================================
 * PRINT DOKUMEN A4 PRESISI (WINDOW PRINT & NATIVE ANDROID)
 * Menjamin pemotongan lembar kertas presisi tanpa terbelah
 * ============================================================
 */
export const printDocA4 = () => {
    const content = el('doc-paper-content');
    const p = content ? content.innerHTML : '';
    if (!p) {
        if (typeof window.showToast === 'function') window.showToast('Tidak ada dokumen yang dicetak!');
        return;
    }

    // Jika berjalan di dalam aplikasi Android Native App
    if (window.AndroidNativeApp && typeof window.AndroidNativeApp.print === 'function') {
        let a4Section = el('a4-print-section');
        if (!a4Section) {
            a4Section = document.createElement('div');
            a4Section.id = 'a4-print-section';
            document.body.appendChild(a4Section);
        }
        a4Section.innerHTML = p;
        document.body.classList.add('printing-a4');
        window.AndroidNativeApp.print();
        setTimeout(() => document.body.classList.remove('printing-a4'), 2500);
        return;
    }

    const printWindow = window.open('', '_blank');
    const docTitleLabel = currentDocType === 'invoice' ? 'Faktur Invoice' : (currentDocType === 'po' ? 'Purchase Order' : (currentDocType === 'sph' ? 'Penawaran Harga' : (currentDocType === 'stock_opname' ? 'Berita Acara Stock Opname' : (currentDocType === 'tempo_recap' ? 'Rekap Buku Piutang Toko' : (currentDocType === 'tempo_customer_ledger' ? 'Kartu Piutang Pelanggan' : (currentDocType === 'sales_return' ? 'Nota Retur Penjualan' : (currentDocType === 'vendor_return' ? 'Surat Pengembalian Barang' : 'Dokumen Resmi A4')))))));

    const printHtml = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>${esc(docTitleLabel)} - Cetak A4 Standar Presisi</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        @page {
            size: A4 portrait;
            margin: 0;
        }
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            font-family: 'Barlow', system-ui, -apple-system, sans-serif;
            color: #0f172a;
        }
        .a4-page {
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            max-height: 297mm !important;
            margin: 0 auto !important;
            padding: 12mm 15mm 10mm 15mm !important;
            box-sizing: border-box !important;
            page-break-after: always !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            overflow: hidden !important;
            background: #ffffff !important;
            font-size: 13px !important;
            line-height: 1.45 !important;
        }
        .a4-page:last-child {
            page-break-after: avoid !important;
            break-after: avoid !important;
        }
        .a4-page-footer {
            margin-top: auto;
            padding-top: 8px;
            border-top: 1px solid #cbd5e1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 10px;
            color: #64748b;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }
        @media screen {
            body {
                background: #e2e8f0;
                padding: 24px 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 24px;
            }
            .a4-page {
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15) !important;
                border: 1px solid #cbd5e1 !important;
            }
        }
    </style>
</head>
<body onload="setTimeout(() => { window.print(); }, 650)">
    ${p}
</body>
</html>`;

    if (!printWindow) {
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
        doc.write(printHtml);
        doc.close();
        setTimeout(() => {
            try {
                printIframe.contentWindow.focus();
                printIframe.contentWindow.print();
            } catch (e) {
                console.warn('[DocPrint] Fallback iframe print error:', e);
            }
        }, 650);
        return;
    }

    printWindow.document.open();
    printWindow.document.write(printHtml);
    printWindow.document.close();
};

/**
 * ============================================================
 * EXPORT FILE (GAMBAR HD & STANDAR MULTI-PAGE PDF A4)
 * ============================================================
 */
export const exportDocFile = async (mode) => {
    if (isSaving) return;
    setIsSaving(true);
    sLoad(mode === 'image' ? 'Membuat Gambar HD...' : 'Menyusun Dokumen PDF A4...');

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

        // Cari seluruh halaman .a4-page
        let pages = Array.from(originalPaper.querySelectorAll('.a4-page'));
        if (pages.length === 0) {
            pages = [originalPaper];
        }

        const docId = window.cVOrd || Date.now().toString(36).toUpperCase();
        const fileName = `${currentDocType.toUpperCase()}_${docId}`;

        // Helper render 1 halaman A4 ke Canvas HTML2Canvas dengan dimensi presisi 794x1123
        const renderPageCanvas = async (pageEl) => {
            const cloneWrapper = document.createElement('div');
            cloneWrapper.style.position = 'fixed';
            cloneWrapper.style.top = '-9999px';
            cloneWrapper.style.left = '-9999px';
            cloneWrapper.style.width = '794px';
            cloneWrapper.style.height = '1123px';
            cloneWrapper.style.backgroundColor = '#ffffff';
            cloneWrapper.style.overflow = 'hidden';
            cloneWrapper.style.zIndex = '-9999';

            const clone = pageEl.cloneNode(true);
            clone.style.margin = '0 auto';
            clone.style.boxShadow = 'none';
            clone.style.border = 'none';
            clone.style.borderRadius = '0';
            clone.style.transform = 'none';
            clone.style.width = '794px';
            clone.style.height = '1123px';
            clone.style.minHeight = '1123px';
            clone.style.maxHeight = '1123px';
            clone.style.overflow = 'hidden';

            cloneWrapper.appendChild(clone);
            document.body.appendChild(cloneWrapper);

            // Tunggu semua gambar termuat sempurna
            const imgs = Array.from(clone.querySelectorAll('img'));
            await Promise.all(imgs.map(img => {
                if (img.complete) return Promise.resolve();
                return new Promise(resolve => {
                    img.addEventListener('load', resolve, { once: true });
                    img.addEventListener('error', resolve, { once: true });
                });
            }));
            await new Promise(r => setTimeout(r, 200));

            const canvas = await html2canvas(cloneWrapper, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
                width: 794,
                height: 1123,
                windowWidth: 794,
                windowHeight: 1123
            });

            document.body.removeChild(cloneWrapper);
            return canvas;
        };

        if (mode === 'image') {
            if (pages.length === 1) {
                const canvas = await renderPageCanvas(pages[0]);
                const dataUrl = canvas.toDataURL('image/png', 1.0);
                if (window.AndroidNativeApp && typeof window.AndroidNativeApp.saveOrShareFile === 'function') {
                    window.AndroidNativeApp.saveOrShareFile(dataUrl, `${fileName}.png`, 'image/png');
                } else {
                    const link = document.createElement('a');
                    link.download = `${fileName}.png`;
                    link.href = dataUrl;
                    link.click();
                }
                if (typeof window.showToast === 'function') window.showToast("Gambar A4 Presisi Berhasil Disimpan!");
            } else {
                for (let i = 0; i < pages.length; i++) {
                    sLoad(`Menyimpan Gambar Halaman ${i + 1} dari ${pages.length}...`);
                    const canvas = await renderPageCanvas(pages[i]);
                    const dataUrl = canvas.toDataURL('image/png', 1.0);
                    const pFileName = `${fileName}_Hal_${i + 1}.png`;
                    if (window.AndroidNativeApp && typeof window.AndroidNativeApp.saveOrShareFile === 'function') {
                        window.AndroidNativeApp.saveOrShareFile(dataUrl, pFileName, 'image/png');
                    } else {
                        const link = document.createElement('a');
                        link.download = pFileName;
                        link.href = dataUrl;
                        link.click();
                    }
                    await new Promise(r => setTimeout(r, 250));
                }
                if (typeof window.showToast === 'function') window.showToast(`Berhasil menyimpan ${pages.length} gambar halaman A4!`);
            }
        } else {
            // PDF: Standar Multi-Halaman A4 Presisi (210mm x 297mm)
            const jsPDF = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : window.jsPDF;
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            for (let i = 0; i < pages.length; i++) {
                sLoad(`Menyusun PDF Hal ${i + 1} dari ${pages.length}...`);
                const canvas = await renderPageCanvas(pages[i]);
                const imgData = canvas.toDataURL('image/jpeg', 0.95);
                if (i > 0) {
                    pdf.addPage('a4', 'portrait');
                }
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
            }

            if (window.AndroidNativeApp && typeof window.AndroidNativeApp.saveOrShareFile === 'function') {
                window.AndroidNativeApp.saveOrShareFile(pdf.output('datauristring'), `${fileName}.pdf`, 'application/pdf');
            } else {
                pdf.save(`${fileName}.pdf`);
            }
            if (typeof window.showToast === 'function') window.showToast(`File PDF Standar A4 (${pages.length} Halaman) Berhasil Disimpan!`);
        }
    } catch (err) {
        console.error("Export Error: ", err);
        if (typeof window.showToast === 'function') {
            window.showToast(err && err.message ? `Gagal: ${err.message}` : "Gagal memproses dokumen.");
        }
    } finally {
        hLoad();
        setIsSaving(false);
    }
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
export const openTempoRecapDocPreview = () => openDocPreview('tempo_recap');

window.openDocPreview = openDocPreview;
window.openCartSPHPreview = openCartSPHPreview;
window.openTempoRecapDocPreview = openTempoRecapDocPreview;
window.fitDocPreview = fitDocPreview;
window.closeDocPreviewModal = closeDocPreviewModal;
window.printDocA4 = printDocA4;
window.exportDocFile = exportDocFile;
