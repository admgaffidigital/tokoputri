/**
 * ============================================================
 * MODUL ADMIN: LOGISTIK, PENGIRIMAN PROYEK & SURAT JALAN (DO)
 * Fase 3 Roadmap Strategis Toko Putri (v1.13.0)
 * 
 * Mengatur penerbitan Surat Jalan (Delivery Order) resmi,
 * penugasan armada & supir, siklus status pengiriman real-time,
 * checklist muatan gudang, notifikasi WhatsApp mandor/supir,
 * serta konfirmasi serah terima dengan Tanda Tangan Digital (Signature Pad).
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData, gOrds } from '../../core/state.js';
import { 
    el, show, hide, setIn, setH, esc, fCur, 
    showToast, showConfirm, sLoad, hLoad, 
    openModalAnim, closeModalAnim 
} from '../../core/utils.js';
import { generateCode128Svg } from '../../core/barcode-code128.js';

/**
 * Preset Armada Toko Bahan Bangunan & Alat Teknik
 */
export const DEFAULT_FLEETS = [
    { id: 'pickup', name: 'Mobil Pick-up (L300 / Gran Max)', shortName: 'Mobil Pick-up', sub: 'L300 / Gran Max', capacity: '1.5 Ton', icon: 'fa-truck-pickup' },
    { id: 'truck_engkel', name: 'Truk Engkel 4 Roda (Canter/Dyna)', shortName: 'Truk Engkel 4 Roda', sub: 'Canter / Dyna', capacity: '3.5 Ton', icon: 'fa-truck' },
    { id: 'truck_dobel', name: 'Truk Dobel 6 Roda (Colt Diesel)', shortName: 'Truk Dobel 6 Roda', sub: 'Colt Diesel', capacity: '7.0 Ton', icon: 'fa-truck-moving' },
    { id: 'trike', name: 'Motor Roda Tiga Bak (Viar/Tosa)', shortName: 'Motor Roda Tiga', sub: 'Viar / Tosa Bak', capacity: '500 Kg', icon: 'fa-motorcycle' },
    { id: 'external', name: 'Ekspedisi / Armada Luar / Sewa', shortName: 'Ekspedisi Luar', sub: 'Sewa / Cargo Luar', capacity: 'Variatif', icon: 'fa-dolly' },
    { id: 'self_pickup', name: 'Diambil Mandor Sendiri di Toko', shortName: 'Ambil di Toko', sub: 'Mandor Ambil Sendiri', capacity: 'Mandiri', icon: 'fa-person-walking-luggage' }
];

/**
 * Status Alur Pengiriman Logistik Proyek
 */
export const DELIVERY_STATUSES = {
    pending_dispatch: {
        label: 'Menunggu Muat',
        badgeClass: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
        icon: 'fa-boxes-packing'
    },
    out_for_delivery: {
        label: 'Dalam Perjalanan',
        badgeClass: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800',
        icon: 'fa-truck-fast'
    },
    delivered: {
        label: 'Terkirim & Diterima',
        badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
        icon: 'fa-circle-check'
    },
    returned: {
        label: 'Gagal / Kembali',
        badgeClass: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800',
        icon: 'fa-triangle-exclamation'
    }
};

/**
 * Menghasilkan Nomor Surat Jalan (DO) Terstandar & Unik
 * Format: DO-YYMM-XXXXX (misal: DO-2610-A9F2)
 */
export const generateDONumber = (orderId = '') => {
    const d = new Date();
    const yy = String(d.getFullYear()).slice(-2);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const suffix = orderId ? String(orderId).replace(/[^a-zA-Z0-9]/g, '').slice(-5).toUpperCase() : Math.random().toString(36).substring(2, 7).toUpperCase();
    return `DO-${yy}${mm}-${suffix}`;
};

/**
 * Menginisialisasi atau mengambil data pengiriman pesanan
 */
export const getOrderDeliveryData = (order) => {
    if (!order) return null;
    const existing = order.delivery || {};
    const recipientName = existing.recipientName || (order.isDropPoint && order.dropPoint?.name) || order.customer?.name || '';
    const recipientPhone = existing.recipientPhone || (order.isDropPoint && order.dropPoint?.wa) || order.customer?.wa || '';
    const destinationAddress = existing.destinationAddress || (order.isDropPoint && order.dropPoint?.address) || order.customer?.address || '';
    const destinationLat = existing.destinationLat || (order.isDropPoint && order.dropPoint?.lat) || order.customer?.lat || null;
    const destinationLng = existing.destinationLng || (order.isDropPoint && order.dropPoint?.lng) || order.customer?.lng || null;
    const unloadNotes = existing.unloadNotes || order.customer?.note || '';

    const items = Array.isArray(order.items) ? order.items : (Array.isArray(order.cart) ? order.cart : []);
    const checklist = Array.isArray(existing.checklist) && existing.checklist.length > 0 
        ? existing.checklist 
        : items.map((it, idx) => ({
            id: it.id || `item-${idx}`,
            name: it.name || 'Barang',
            variantName: it.variantName || '',
            qty: parseFloat(it.qty) || 1,
            unit: it.unit || 'pcs',
            loaded: true
        }));

    return {
        doNumber: existing.doNumber || generateDONumber(order.orderId),
        orderId: order.orderId,
        status: existing.status || 'pending_dispatch',
        createdAt: existing.createdAt || Date.now(),
        fleetType: existing.fleetType || 'pickup',
        fleetName: existing.fleetName || 'Mobil Pick-up (L300 / Gran Max)',
        plateNumber: existing.plateNumber || '',
        driverName: existing.driverName || '',
        driverPhone: existing.driverPhone || '',
        helperName: existing.helperName || '',
        recipientName,
        recipientPhone,
        destinationAddress,
        destinationLat,
        destinationLng,
        unloadNotes,
        dispatchedAt: existing.dispatchedAt || null,
        deliveredAt: existing.deliveredAt || null,
        signature: existing.signature || null,
        checklist,
        logs: existing.logs || [
            { status: 'pending_dispatch', timestamp: existing.createdAt || Date.now(), note: 'Surat Jalan (DO) diterbitkan' }
        ]
    };
};

/**
 * Buka Modal Manajemen Pengiriman & Surat Jalan DO
 */
export const openDeliveryModal = (orderId) => {
    const o = (gOrds || []).find(x => String(x.orderId) === String(orderId));
    if (!o) {
        showToast('Data pesanan tidak ditemukan!');
        return;
    }

    const del = getOrderDeliveryData(o);
    const mEl = el('modal-delivery-order');
    const bEl = el('modal-delivery-order-box');
    const cEl = el('modal-delivery-order-content');
    if (!mEl || !bEl || !cEl) return;

    // Simpan referensi pesanan aktif
    window._activeDeliveryOrderId = orderId;
    window._currentDeliveryData = del;

    // Render Barcode SVG Code 128
    const barcodeSvg = generateCode128Svg(del.doNumber, {
        height: 38,
        showText: true,
        fontSize: 9.5,
        className: 'w-full max-w-[240px] h-auto'
    });

    const isPending = del.status === 'pending_dispatch';
    const isDispatch = del.status === 'out_for_delivery';
    const isDelivered = del.status === 'delivered';
    const loadedCount = del.checklist.filter(x => x.loaded).length;

    let statusPillHtml = '';
    if (isPending) {
        statusPillHtml = `<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800 flex items-center gap-1.5"><i class="fa-solid fa-boxes-packing"></i> Menunggu Muat</span>`;
    } else if (isDispatch) {
        statusPillHtml = `<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800 flex items-center gap-1.5"><i class="fa-solid fa-truck-fast"></i> Dalam Perjalanan</span>`;
    } else if (isDelivered) {
        statusPillHtml = `<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800 flex items-center gap-1.5"><i class="fa-solid fa-circle-check"></i> Selesai / Terkirim</span>`;
    } else {
        statusPillHtml = `<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200/80 dark:border-rose-800 flex items-center gap-1.5"><i class="fa-solid fa-triangle-exclamation"></i> Gagal / Kembali</span>`;
    }

    cEl.innerHTML = `
        <div class="space-y-4 text-slate-800 dark:text-slate-100">
            <!-- 1. HERO CARD: INFO SURAT JALAN & TOGGLE BARCODE -->
            <div class="card-native p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3">
                <div class="flex items-start justify-between gap-3">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="font-mono font-black text-sm sm:text-base text-slate-900 dark:text-white">#${esc(del.doNumber)}</span>
                                ${statusPillHtml}
                            </div>
                            <p class="text-xs text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                                Order: <b class="font-mono text-slate-700 dark:text-slate-300">#${esc(o.orderId)}</b> &middot; Pemesan: <b class="text-slate-800 dark:text-slate-200">${esc(o.customer?.name || 'Umum')}</b>
                            </p>
                        </div>
                    </div>

                    <!-- Tombol Toggle Barcode -->
                    <button type="button" onclick="const b = document.getElementById('do-barcode-wrap'); b.classList.toggle('hidden'); const ic = document.getElementById('do-bc-chev'); ic.classList.toggle('rotate-180');" class="btn-native-action px-3 py-1.5 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs shrink-0">
                        <i class="fa-solid fa-barcode text-sm" style="color: var(--color-primary);"></i>
                        <span class="hidden sm:inline">Barcode</span>
                        <i id="do-bc-chev" class="fa-solid fa-chevron-down text-[10px] text-slate-400 transition-transform duration-200"></i>
                    </button>
                </div>

                <!-- Collapsible Barcode Drawer -->
                <div id="do-barcode-wrap" class="hidden pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col items-center justify-center">
                    <div class="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs max-w-[260px] w-full flex items-center justify-center">
                        ${barcodeSvg}
                    </div>
                    <p class="text-[10px] text-slate-400 dark:text-slate-500 font-medium text-center mt-1.5">
                        Scan dengan barcode scanner fisik / kamera HP untuk identifikasi cepat surat jalan.
                    </p>
                </div>
            </div>

            <!-- 2. SEGMENTED STATUS STEPPER (100% THEMED NATIVE CONTROL) -->
            <div class="p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 flex items-center gap-1">
                <button 
                    type="button" 
                    onclick="setDeliveryStatusQuick('${esc(orderId)}', 'pending_dispatch')" 
                    class="flex-1 py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${isPending ? 'shadow-sm text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
                    style="${isPending ? 'background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);' : ''}"
                >
                    <i class="fa-solid fa-boxes-packing text-xs"></i>
                    <span>1. Muat Barang</span>
                </button>
                <button 
                    type="button" 
                    onclick="setDeliveryStatusQuick('${esc(orderId)}', 'out_for_delivery')" 
                    class="flex-1 py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${isDispatch ? 'shadow-sm text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
                    style="${isDispatch ? 'background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);' : ''}"
                >
                    <i class="fa-solid fa-truck-fast text-xs"></i>
                    <span>2. Kirim Truk</span>
                </button>
                <button 
                    type="button" 
                    onclick="openDeliverySignatureModal('${esc(orderId)}')" 
                    class="flex-1 py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${isDelivered ? 'shadow-sm text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
                    style="${isDelivered ? 'background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);' : ''}"
                >
                    <i class="fa-solid fa-file-signature text-xs"></i>
                    <span>3. TTD Mandor</span>
                </button>
            </div>

            <!-- 3. PENUGASAN ARMADA & SUPIR (GRID KARTU VISUAL NATIVE) -->
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3.5">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <h4 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-truck" style="color: var(--color-primary);"></i> Penugasan Armada &amp; Pengemudi
                    </h4>
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Logistik Toko</span>
                </div>

                <!-- Hidden Input untuk Kompatibilitas DOM State & Tests -->
                <input type="hidden" id="do-fleet-type" value="${esc(del.fleetType)}">

                <!-- Interactive Visual Fleet Grid (Pengganti Dropdown Kaku) -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2">Pilih Jenis Kendaraan / Armada:</label>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2" id="do-fleet-grid">
                        ${DEFAULT_FLEETS.map(f => {
                            const isSel = del.fleetType === f.id;
                            const shortTitle = f.shortName || f.name.split('(')[0].trim();
                            const subTitle = f.sub || (f.name.includes('(') ? f.name.split('(')[1].replace(')', '') : f.capacity);
                            return `
                            <div 
                                id="fleet-card-${f.id}"
                                onclick="selectFleetCard('${f.id}')"
                                class="fleet-choice-card p-2.5 sm:p-3 rounded-2xl border transition-all cursor-pointer select-none active:scale-95 flex flex-col justify-between min-h-[78px] ${isSel ? 'is-selected shadow-2xs' : 'border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-slate-100/60'}"
                                style="${isSel ? 'background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary); box-shadow: 0 0 0 1px var(--color-primary);' : ''}"
                            >
                                <div class="flex items-center justify-between gap-1.5">
                                    <div id="fleet-icon-${f.id}" class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${isSel ? 'text-white shadow-2xs' : 'border border-slate-200/80 dark:border-slate-700'}"
                                         style="${isSel ? 'background: var(--color-primary);' : 'background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);'}">
                                        <i class="fa-solid ${f.icon} text-xs"></i>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span id="fleet-badge-${f.id}" class="text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono ${isSel ? 'text-white' : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}"
                                              style="${isSel ? 'background: var(--color-primary);' : ''}">
                                            ${f.capacity}
                                        </span>
                                        <i id="fleet-chk-${f.id}" class="fa-solid fa-circle-check text-xs ${isSel ? '' : 'hidden'}" style="color: var(--color-primary);"></i>
                                    </div>
                                </div>
                                <div class="mt-2 min-w-0">
                                    <p class="text-xs font-black text-slate-800 dark:text-white leading-tight truncate">${shortTitle}</p>
                                    <p class="text-[9.5px] font-bold text-slate-400 dark:text-slate-500 truncate mt-0.5">${subTitle}</p>
                                </div>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- Input Detail Supir & Plat Nomor -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-id-card text-slate-400"></i> Plat Nomor Truk / Kendaraan
                        </label>
                        <input type="text" id="do-plate-number" value="${esc(del.plateNumber)}" placeholder="Cth: B 9234 KDA" class="w-full text-xs font-mono font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-slate-400"></i> Nama Sopir / Pengemudi
                        </label>
                        <input type="text" id="do-driver-name" value="${esc(del.driverName)}" placeholder="Cth: Pak Joko" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> No. WhatsApp Sopir
                        </label>
                        <input type="tel" id="do-driver-phone" value="${esc(del.driverPhone)}" placeholder="Cth: 08123456789" class="w-full text-xs font-mono font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-group text-slate-400"></i> Helper / Kondektur Muatan
                        </label>
                        <input type="text" id="do-helper-name" value="${esc(del.helperName)}" placeholder="Cth: Budi (Kondektur)" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <!-- Tombol WA Cepat ke Sopir -->
                ${del.driverPhone ? `
                <button type="button" onclick="sendDeliveryWhatsAppToDriver('${esc(orderId)}')" class="btn-native-action w-full h-10 rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shadow-2xs">
                    <i class="fa-brands fa-whatsapp text-sm text-emerald-600"></i> Kirim Rute &amp; Kontak Mandor ke WA Sopir
                </button>` : ''}
            </div>

            <!-- 4. LOKASI PROYEK & KONTAK MANDOR -->
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3.5">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <h4 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-map-location-dot text-rose-500"></i> Lokasi Proyek &amp; Mandor
                    </h4>
                    ${o.isDropPoint ? '<span class="px-2.5 py-0.5 rounded-full text-[9.5px] font-black bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800">DROP POINT</span>' : '<span class="text-[10px] font-bold text-slate-400">Penerima Barang</span>'}
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-check text-slate-400"></i> Nama Penerima / Mandor
                        </label>
                        <input type="text" id="do-recipient-name" value="${esc(del.recipientName)}" placeholder="Nama penerima di proyek" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> No. WhatsApp Mandor
                        </label>
                        <input type="tel" id="do-recipient-phone" value="${esc(del.recipientPhone)}" placeholder="No WA mandor" class="w-full text-xs font-mono font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                        <i class="fa-solid fa-location-dot text-rose-500"></i> Alamat Lengkap Proyek / Drop Point
                    </label>
                    <textarea id="do-destination-address" rows="2" placeholder="Alamat pengiriman / patokan proyek..." class="w-full text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 p-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">${esc(del.destinationAddress)}</textarea>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation text-amber-500"></i> Catatan Akses Jalan &amp; Instruksi Bongkar
                    </label>
                    <input type="text" id="do-unload-notes" value="${esc(del.unloadNotes)}" placeholder="Cth: Gang sempit, bongkar di samping gudang mandor" class="w-full text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                </div>

                ${(del.destinationLat && del.destinationLng) ? `
                <div class="pt-1">
                    <a href="https://www.google.com/maps?q=${esc(del.destinationLat)},${esc(del.destinationLng)}" target="_blank" rel="noopener noreferrer" class="btn-native-action w-full h-10 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs">
                        <i class="fa-solid fa-location-dot text-rose-500"></i> Buka Titik Koordinat GPS di Google Maps
                    </a>
                </div>` : ''}
            </div>

            <!-- 5. CHECKLIST MUATAN FISIK (NATIVE INTERACTIVE TILES, ZERO TABLE KAKU) -->
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <div>
                        <h4 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <i class="fa-solid fa-list-check" style="color: var(--color-primary);"></i> Checklist Muatan Fisik
                        </h4>
                        <p class="text-[11px] font-semibold text-slate-400 mt-0.5">
                            Verifikasi fisik barang sebelum armada keluar toko
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="px-2.5 py-1 rounded-full text-[10.5px] font-black bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                            <span id="do-loaded-count">${loadedCount}</span>/${del.checklist.length} Siap
                        </span>
                        <button type="button" onclick="toggleAllChecklistItems()" class="text-[11px] font-bold text-slate-500 hover:text-[var(--color-primary)] px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                            Pilih Semua
                        </button>
                    </div>
                </div>

                <div class="space-y-2" id="do-checklist-tiles">
                    ${del.checklist.map((item, idx) => `
                    <div 
                        id="do-chk-row-${idx}"
                        onclick="toggleItemLoaded(${idx})"
                        class="do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 ${item.loaded ? 'border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 shadow-2xs' : 'border-slate-200/60 dark:border-slate-800/60 bg-slate-50/70 dark:bg-slate-900/40 opacity-70'}"
                    >
                        <!-- Squircle Checkbox Touch Target -->
                        <div class="flex items-center gap-3 min-w-0 flex-1">
                            <div 
                                id="do-chk-box-${idx}"
                                class="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all ${item.loaded ? 'border-transparent text-white shadow-2xs' : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-transparent'}"
                                style="${item.loaded ? 'background: var(--color-primary);' : ''}"
                            >
                                <i class="fa-solid fa-check text-xs"></i>
                            </div>
                            <div class="min-w-0">
                                <h5 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white leading-snug">
                                    ${esc(item.name)}
                                </h5>
                                <div class="flex items-center gap-2 mt-1 flex-wrap">
                                    ${item.variantName ? `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600">${esc(item.variantName)}</span>` : ''}
                                    <span class="text-[10px] font-semibold ${item.loaded ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}" id="do-chk-status-${idx}">
                                        <i class="fa-solid ${item.loaded ? 'fa-circle-check' : 'fa-circle-dot'} text-[9px] mr-1"></i>
                                        ${item.loaded ? 'Siap Muat di Armada' : 'Belum Dimuat'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Kapsul Kuantitas & Satuan -->
                        <div class="shrink-0 text-right">
                            <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl font-mono font-black text-xs sm:text-sm bg-slate-100 dark:bg-slate-700/80 text-slate-900 dark:text-white border border-slate-200/90 dark:border-slate-600/80 shadow-2xs">
                                <span>${item.qty}</span>
                                <span class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 font-sans">${esc(item.unit || 'pcs')}</span>
                            </span>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>

            <!-- 6. BUKTI TANDA TANGAN SERAH TERIMA MANDOR (JIKA ADA) -->
            ${del.signature ? `
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/20 space-y-3">
                <div class="flex items-center justify-between border-b border-emerald-200/60 pb-2">
                    <h4 class="font-black text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                        <i class="fa-solid fa-file-signature text-emerald-600"></i> Bukti Serah Terima &amp; Tanda Tangan Proyek
                    </h4>
                    <span class="text-[10px] font-black text-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-lg border border-emerald-300">TERVERIFIKASI</span>
                </div>
                <div class="flex flex-col sm:flex-row items-center gap-4">
                    <div class="p-2 bg-white rounded-xl border border-emerald-200 shadow-2xs max-w-[200px] w-full flex items-center justify-center">
                        <img src="${del.signature.signatureDataUrl}" alt="Tanda Tangan Mandor" class="h-20 w-auto object-contain">
                    </div>
                    <div class="flex-1 text-xs space-y-1 text-slate-700 dark:text-slate-300">
                        <p>Penerima: <b class="text-slate-900 dark:text-white">${esc(del.signature.signerName || del.recipientName)}</b></p>
                        <p>Waktu Terima: <b class="font-mono">${del.signature.timestamp ? new Date(del.signature.timestamp).toLocaleString('id-ID') : '-'}</b></p>
                        ${del.signature.notes ? `<p class="italic text-slate-500">" ${esc(del.signature.notes)} "</p>` : ''}
                    </div>
                </div>
            </div>` : ''}
        </div>
    `;

    if (mEl.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('deliveryOrder');
    }
    openModalAnim(mEl, bEl);
};

/**
 * Tutup Modal Manajemen Pengiriman
 */
export const closeDeliveryModal = (fromHistory = false) => {
    const mEl = el('modal-delivery-order');
    const bEl = el('modal-delivery-order-box');
    const doClose = () => {
        closeModalAnim(mEl, bEl);
        window._activeDeliveryOrderId = null;
        window._currentDeliveryData = null;
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('deliveryOrder', fromHistory, doClose);
    } else {
        doClose();
    }
};

/**
 * Pemilihan Kartu Armada Interaktif Native
 */
export const selectFleetCard = (fleetId) => {
    const f = DEFAULT_FLEETS.find(x => x.id === fleetId);
    if (!f) return;
    if (window._currentDeliveryData) {
        window._currentDeliveryData.fleetType = f.id;
        window._currentDeliveryData.fleetName = f.name;
    }
    const hiddenIn = el('do-fleet-type');
    if (hiddenIn) hiddenIn.value = f.id;

    DEFAULT_FLEETS.forEach(fl => {
        const cEl = el(`fleet-card-${fl.id}`);
        const bEl = el(`fleet-badge-${fl.id}`);
        const icEl = el(`fleet-icon-${fl.id}`);
        const chkEl = el(`fleet-chk-${fl.id}`);
        if (!cEl) return;
        const isSel = fl.id === fleetId;
        if (isSel) {
            cEl.classList.add('is-selected', 'shadow-2xs');
            cEl.classList.remove('border-slate-200/80', 'dark:border-slate-800', 'bg-slate-50/60', 'dark:bg-slate-800/40');
            cEl.style.background = 'rgba(var(--color-primary-rgb), 0.08)';
            cEl.style.borderColor = 'var(--color-primary)';
            cEl.style.boxShadow = '0 0 0 1px var(--color-primary)';
            if (bEl) {
                bEl.style.background = 'var(--color-primary)';
                bEl.className = 'text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono text-white';
            }
            if (icEl) {
                icEl.style.background = 'var(--color-primary)';
                icEl.className = 'w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all text-white shadow-2xs';
            }
            if (chkEl) chkEl.classList.remove('hidden');
        } else {
            cEl.classList.remove('is-selected', 'shadow-2xs');
            cEl.classList.add('border-slate-200/80', 'dark:border-slate-800', 'bg-slate-50/60', 'dark:bg-slate-800/40');
            cEl.style.background = '';
            cEl.style.borderColor = '';
            cEl.style.boxShadow = '';
            if (bEl) {
                bEl.style.background = '';
                bEl.className = 'text-[9.5px] font-black px-1.5 py-0.5 rounded-md font-mono bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300';
            }
            if (icEl) {
                icEl.style.background = 'rgba(var(--color-primary-rgb), 0.1)';
                icEl.style.color = 'var(--color-primary)';
                icEl.className = 'w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all border border-slate-200/80 dark:border-slate-700';
            }
            if (chkEl) chkEl.classList.add('hidden');
        }
    });

    if (typeof window.triggerHaptic === 'function') {
        window.triggerHaptic('light');
    }
};

/**
 * Event ketika tipe armada berubah (kompatibilitas backward)
 */
export const onFleetTypeChange = (fleetId) => {
    selectFleetCard(fleetId);
};

/**
 * Toggle checklist muatan barang dengan pembaruan instan DOM
 */
export const toggleItemLoaded = (idx, isLoaded) => {
    if (!window._currentDeliveryData || !window._currentDeliveryData.checklist || !window._currentDeliveryData.checklist[idx]) return;
    
    const item = window._currentDeliveryData.checklist[idx];
    if (typeof isLoaded === 'boolean') {
        item.loaded = isLoaded;
    } else {
        item.loaded = !item.loaded;
    }

    const rowEl = el(`do-chk-row-${idx}`);
    const boxEl = el(`do-chk-box-${idx}`);
    const statusEl = el(`do-chk-status-${idx}`);
    const countEl = el('do-loaded-count');

    if (item.loaded) {
        if (rowEl) {
            rowEl.className = 'do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 shadow-2xs';
        }
        if (boxEl) {
            boxEl.className = 'w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all border-transparent text-white shadow-2xs';
            boxEl.style.background = 'var(--color-primary)';
        }
        if (statusEl) {
            statusEl.className = 'text-[10px] font-semibold text-emerald-600 dark:text-emerald-400';
            statusEl.innerHTML = '<i class="fa-solid fa-circle-check text-[9px] mr-1"></i> Siap Muat di Armada';
        }
    } else {
        if (rowEl) {
            rowEl.className = 'do-item-tile p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] flex items-center justify-between gap-3 border-slate-200/60 dark:border-slate-800/60 bg-slate-50/70 dark:bg-slate-900/40 opacity-70';
        }
        if (boxEl) {
            boxEl.className = 'w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border transition-all border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-transparent';
            boxEl.style.background = '';
        }
        if (statusEl) {
            statusEl.className = 'text-[10px] font-semibold text-slate-400';
            statusEl.innerHTML = '<i class="fa-solid fa-circle-dot text-[9px] mr-1"></i> Belum Dimuat';
        }
    }

    if (countEl) {
        const totalLoaded = window._currentDeliveryData.checklist.filter(x => x.loaded).length;
        countEl.textContent = totalLoaded;
    }

    if (typeof window.triggerHaptic === 'function') {
        window.triggerHaptic('light');
    }
};

/**
 * Centang atau Hapus Semua Checklist Muatan Sekaligus
 */
export const toggleAllChecklistItems = (forceState = null) => {
    if (!window._currentDeliveryData || !Array.isArray(window._currentDeliveryData.checklist)) return;
    const all = window._currentDeliveryData.checklist;
    const currentState = all.every(x => x.loaded);
    const targetState = forceState !== null ? forceState : !currentState;

    all.forEach((_, idx) => {
        toggleItemLoaded(idx, targetState);
    });

    if (typeof window.triggerHaptic === 'function') {
        window.triggerHaptic('medium');
    }
};

/**
 * Simpan Data Lengkap Pengiriman ke Dokumen Pesanan Firestore
 */
export const saveDeliveryDetails = async (orderId = window._activeDeliveryOrderId) => {
    if (!orderId) orderId = window._activeDeliveryOrderId;
    const o = (gOrds || []).find(x => String(x.orderId) === String(orderId));
    if (!o) return;

    const del = window._currentDeliveryData || getOrderDeliveryData(o);
    
    // Ambil input terbaru dari DOM
    const fleetSelect = el('do-fleet-type');
    const fType = fleetSelect ? fleetSelect.value : del.fleetType;
    const fObj = DEFAULT_FLEETS.find(x => x.id === fType) || {};

    del.fleetType = fType;
    del.fleetName = fObj.name || del.fleetName;
    del.plateNumber = (el('do-plate-number')?.value || '').trim();
    del.driverName = (el('do-driver-name')?.value || '').trim();
    del.driverPhone = (el('do-driver-phone')?.value || '').trim();
    del.helperName = (el('do-helper-name')?.value || '').trim();
    del.recipientName = (el('do-recipient-name')?.value || '').trim();
    del.recipientPhone = (el('do-recipient-phone')?.value || '').trim();
    del.destinationAddress = (el('do-destination-address')?.value || '').trim();
    del.unloadNotes = (el('do-unload-notes')?.value || '').trim();

    sLoad('Menyimpan Data Surat Jalan...');
    try {
        const orderRef = db.collection('freshmart_orders').doc(orderId);
        await orderRef.update({
            delivery: del
        });

        // Update data in-memory
        o.delivery = del;
        showToast('Data Surat Jalan & Armada berhasil disimpan!');
        
        // Refresh modal pengiriman
        openDeliveryModal(orderId);
        
        // Refresh detail pesanan jika terbuka
        if (typeof window.openOrderDetail === 'function' && window.cVOrd === orderId) {
            window.openOrderDetail(orderId);
        }
    } catch (e) {
        console.error('[Delivery] Gagal menyimpan delivery:', e);
        showToast('Gagal menyimpan: ' + (e.message || ''));
    } finally {
        hLoad();
    }
};

/**
 * Ubah Status Pengiriman Secara Cepat
 */
export const setDeliveryStatusQuick = async (orderId, targetStatus) => {
    const o = (gOrds || []).find(x => String(x.orderId) === String(orderId));
    if (!o) return;

    const del = getOrderDeliveryData(o);
    if (del.status === targetStatus) return;

    const statusLabel = DELIVERY_STATUSES[targetStatus]?.label || targetStatus;
    const confirm = await showConfirm(
        'Ubah Status Pengiriman',
        `Perbarui status pengiriman Surat Jalan #${del.doNumber} menjadi "${statusLabel}"?`,
        null,
        'Ya, Perbarui',
        false
    );
    if (!confirm) return;

    del.status = targetStatus;
    if (targetStatus === 'out_for_delivery') {
        del.dispatchedAt = Date.now();
        del.logs.push({ status: 'out_for_delivery', timestamp: Date.now(), note: 'Armada diberangkatkan ke proyek' });
    } else if (targetStatus === 'delivered') {
        del.deliveredAt = Date.now();
        del.logs.push({ status: 'delivered', timestamp: Date.now(), note: 'Material telah diterima di lokasi proyek' });
    }

    sLoad('Memperbarui status logistik...');
    try {
        await db.collection('freshmart_orders').doc(orderId).update({
            delivery: del
        });
        o.delivery = del;
        showToast(`Status pengiriman kini: ${statusLabel}`);
        openDeliveryModal(orderId);
    } catch (e) {
        showToast('Gagal mengubah status: ' + e.message);
    } finally {
        hLoad();
    }
};

/**
 * ============================================================
 * INTERACTIVE TOUCH SIGNATURE PAD (TANDA TANGAN DIGITAL PROYEK)
 * ============================================================
 */

let sigCanvas = null;
let sigCtx = null;
let isDrawing = false;
let hasSigned = false;

export const openDeliverySignatureModal = (orderId) => {
    const o = (gOrds || []).find(x => String(x.orderId) === String(orderId));
    if (!o) return;

    const del = getOrderDeliveryData(o);
    const mEl = el('modal-delivery-signature');
    const bEl = el('modal-delivery-signature-box');
    if (!mEl || !bEl) return;

    window._signatureOrderId = orderId;

    // Render Canvas & Input
    const content = el('modal-delivery-signature-content');
    if (content) {
        content.innerHTML = `
            <div class="space-y-4 text-slate-800 dark:text-slate-100">
                <div class="p-3.5 rounded-2xl border text-xs flex items-start gap-2.5" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary-dark);">
                    <i class="fa-solid fa-circle-info text-base mt-0.5 shrink-0" style="color: var(--color-primary);"></i>
                    <div>
                        <p class="font-black text-slate-900 dark:text-white">Konfirmasi Serah Terima Material Proyek</p>
                        <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">Surat Jalan <b>#${esc(del.doNumber)}</b>. Mohon mandor atau penerima menandatangani langsung pada area di bawah.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-check text-slate-400"></i> Nama Terang Mandor / Penerima
                        </label>
                        <input type="text" id="sig-signer-name" value="${esc(del.recipientName || o.customer?.name || '')}" placeholder="Nama penerima di proyek" class="w-full text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3.5 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-comment-dots text-slate-400"></i> Catatan Kondisi Barang Saat Tiba
                        </label>
                        <input type="text" id="sig-notes" value="" placeholder="Cth: Diterima utuh, semen 50 sak lengkap" class="w-full text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-3.5 py-2.5 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15">
                    </div>
                </div>

                <!-- CANVAS TANDA TANGAN SENTUH NATIVE -->
                <div>
                    <div class="flex items-center justify-between mb-1.5">
                        <label class="text-[11px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                            <i class="fa-solid fa-pen-nib" style="color: var(--color-primary);"></i> Goreskan Tanda Tangan Mandor
                        </label>
                        <button type="button" onclick="clearSignatureCanvas()" class="text-xs font-bold text-rose-500 hover:text-rose-600 cursor-pointer flex items-center gap-1 active:scale-95 transition-all">
                            <i class="fa-solid fa-rotate-left"></i> Bersihkan Canvas
                        </button>
                    </div>
                    <div class="relative w-full h-52 bg-white border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                        <canvas id="signature-pad-canvas" class="w-full h-full cursor-crosshair touch-none"></canvas>
                        <div id="sig-placeholder-hint" class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 select-none">
                            <i class="fa-solid fa-signature text-4xl mb-2 opacity-40"></i>
                            <span class="text-xs font-bold uppercase tracking-widest opacity-50">Tanda Tangan Sentuh di Sini</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    if (mEl.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('deliverySignature');
    }
    openModalAnim(mEl, bEl);

    // Setup Canvas setelah DOM siap
    setTimeout(() => {
        setupSignatureCanvas();
    }, 150);
};

export const closeDeliverySignatureModal = (fromHistory = false) => {
    const mEl = el('modal-delivery-signature');
    const bEl = el('modal-delivery-signature-box');
    const doClose = () => {
        closeModalAnim(mEl, bEl);
        window._signatureOrderId = null;
        sigCanvas = null;
        sigCtx = null;
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('deliverySignature', fromHistory, doClose);
    } else {
        doClose();
    }
};

/**
 * Setup Canvas Resolusi Tinggi & Event Handlers
 */
const setupSignatureCanvas = () => {
    sigCanvas = el('signature-pad-canvas');
    if (!sigCanvas) return;
    sigCtx = sigCanvas.getContext('2d');
    hasSigned = false;

    // Retina / High-DPI scaling
    const rect = sigCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    sigCanvas.width = rect.width * dpr;
    sigCanvas.height = rect.height * dpr;
    sigCtx.scale(dpr, dpr);

    sigCtx.strokeStyle = '#0f172a'; // Slate-900 tebal & pekat
    sigCtx.lineWidth = 2.5;
    sigCtx.lineCap = 'round';
    sigCtx.lineJoin = 'round';

    const getPos = (e) => {
        const cRect = sigCanvas.getBoundingClientRect();
        if (e.touches && e.touches[0]) {
            return {
                x: e.touches[0].clientX - cRect.left,
                y: e.touches[0].clientY - cRect.top
            };
        }
        return {
            x: e.clientX - cRect.left,
            y: e.clientY - cRect.top
        };
    };

    const startDraw = (e) => {
        e.preventDefault();
        isDrawing = true;
        hasSigned = true;
        const hint = el('sig-placeholder-hint');
        if (hint) hint.classList.add('hidden');

        const pos = getPos(e);
        sigCtx.beginPath();
        sigCtx.moveTo(pos.x, pos.y);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        e.preventDefault();
        const pos = getPos(e);
        sigCtx.lineTo(pos.x, pos.y);
        sigCtx.stroke();
    };

    const stopDraw = (e) => {
        if (isDrawing) {
            e.preventDefault();
            sigCtx.closePath();
            isDrawing = false;
        }
    };

    // Mouse Events
    sigCanvas.onmousedown = startDraw;
    sigCanvas.onmousemove = draw;
    sigCanvas.onmouseup = stopDraw;
    sigCanvas.onmouseleave = stopDraw;

    // Touch Events
    sigCanvas.ontouchstart = startDraw;
    sigCanvas.ontouchmove = draw;
    sigCanvas.ontouchend = stopDraw;
    sigCanvas.ontouchcancel = stopDraw;
};

export const clearSignatureCanvas = () => {
    if (!sigCanvas || !sigCtx) return;
    const dpr = window.devicePixelRatio || 1;
    sigCtx.clearRect(0, 0, sigCanvas.width / dpr, sigCanvas.height / dpr);
    hasSigned = false;
    const hint = el('sig-placeholder-hint');
    if (hint) hint.classList.remove('hidden');
};

/**
 * Simpan Tanda Tangan Digital & Tandai Status Terkirim
 */
export const saveDeliverySignature = async () => {
    const orderId = window._signatureOrderId;
    if (!orderId) return;

    const o = (gOrds || []).find(x => String(x.orderId) === String(orderId));
    if (!o) return;

    if (!hasSigned || !sigCanvas) {
        showToast('Harap goreskan tanda tangan mandor terlebih dahulu!');
        return;
    }

    const signerName = (el('sig-signer-name')?.value || '').trim() || o.customer?.name || 'Mandor Pelaksana';
    const notes = (el('sig-notes')?.value || '').trim();
    const signatureDataUrl = sigCanvas.toDataURL('image/png');

    const del = getOrderDeliveryData(o);
    del.status = 'delivered';
    del.deliveredAt = Date.now();
    del.recipientName = signerName;
    del.signature = {
        signerName,
        signatureDataUrl,
        timestamp: Date.now(),
        notes
    };
    del.logs.push({
        status: 'delivered',
        timestamp: Date.now(),
        note: `Serah terima diverifikasi & ditandatangani oleh ${signerName}`
    });

    sLoad('Menyimpan bukti serah terima...');
    try {
        await db.collection('freshmart_orders').doc(orderId).update({
            delivery: del,
            status: 'Selesai' // Otomatis tandai pesanan Selesai
        });

        o.delivery = del;
        o.status = 'Selesai';

        showToast('Serah terima berhasil diverifikasi & pesanan ditandai Selesai!');
        closeDeliverySignatureModal();

        // Refresh modal pengiriman & order detail
        openDeliveryModal(orderId);
        if (typeof window.openOrderDetail === 'function') {
            window.openOrderDetail(orderId);
        }
    } catch (e) {
        console.error('[Delivery] Gagal simpan tanda tangan:', e);
        showToast('Gagal menyimpan: ' + e.message);
    } finally {
        hLoad();
    }
};

/**
 * ============================================================
 * WHATSAPP NOTIFICATIONS KHUSUS LOGISTIK & PENGIRIMAN
 * ============================================================
 */

export const sendDeliveryWhatsAppToMandor = (orderId) => {
    const o = (gOrds || []).find(x => String(x.orderId) === String(orderId));
    if (!o) return;

    const del = getOrderDeliveryData(o);
    const waRaw = del.recipientPhone || o.customer?.wa || '';
    if (!waRaw) {
        showToast('Nomor WhatsApp mandor/pemesan tidak tersedia!');
        return;
    }

    const storeName = appData.store?.name || 'TOKO PUTRI';
    const itemsList = del.checklist.map(it => `• ${it.qty} ${it.unit} - *${it.name}*${it.variantName ? ` (${it.variantName})` : ''}`).join('\n');

    let msg = `🚚 *PENGIRIMAN MATERIAL PROYEK — ${storeName.toUpperCase()}*\n\n`
        + `Halo Bpk/Ibu *${del.recipientName || 'Mandor'}*,\n`
        + `Pesanan material Anda sedang dalam proses pengiriman armada kami:\n\n`
        + `📋 *No. Surat Jalan:* #${del.doNumber}\n`
        + `📦 *No. Pesanan:* #${o.orderId}\n`
        + `🚛 *Armada:* ${del.fleetName} (${del.plateNumber || 'Toko'})\n`
        + `👤 *Sopir:* ${del.driverName || 'Petugas Toko'}${del.driverPhone ? ` (+${del.driverPhone})` : ''}\n`
        + `📍 *Tujuan:* ${del.destinationAddress || '-'}\n`
        + (del.unloadNotes ? `⚠️ *Catatan Bongkar:* ${del.unloadNotes}\n` : '')
        + `\n📦 *DAFTAR MUATAN BARANG:*\n${itemsList}\n\n`
        + `Mohon siapkan area bongkar muat. Terima kasih telah berbelanja di *${storeName}*! 🙏`;

    const cleanWA = String(waRaw).replace(/\D/g, '').replace(/^0/, '62');
    const waUrl = `https://wa.me/${cleanWA}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
};

export const sendDeliveryWhatsAppToDriver = (orderId) => {
    const o = (gOrds || []).find(x => String(x.orderId) === String(orderId));
    if (!o) return;

    const del = getOrderDeliveryData(o);
    const driverPhone = del.driverPhone || '';
    if (!driverPhone) {
        showToast('Nomor WhatsApp sopir belum diisi!');
        return;
    }

    const storeName = appData.store?.name || 'TOKO PUTRI';
    const itemsList = del.checklist.map(it => `• ${it.qty} ${it.unit} - ${it.name}${it.variantName ? ` (${it.variantName})` : ''}`).join('\n');

    let msg = `🚛 *SURAT TUGAS PENGANTARAN MATERIAL — ${storeName.toUpperCase()}*\n\n`
        + `Halo *${del.driverName || 'Sopir'}*,\n`
        + `Berikut rincian tugas pengiriman barang:\n\n`
        + `📋 *No. Surat Jalan:* #${del.doNumber}\n`
        + `📍 *Alamat Tujuan:* ${del.destinationAddress || '-'}\n`
        + `👤 *Penerima Proyek:* ${del.recipientName || '-'}\n`
        + `📞 *Kontak Mandor:* +${del.recipientPhone || '-'}\n`
        + (del.destinationLat && del.destinationLng ? `🗺️ *Rute Google Maps:* https://www.google.com/maps?q=${del.destinationLat},${del.destinationLng}\n` : '')
        + (del.unloadNotes ? `⚠️ *Catatan Bongkar:* ${del.unloadNotes}\n` : '')
        + `\n📦 *DAFTAR MUATAN:*\n${itemsList}\n\n`
        + `Hati-hati di jalan dan utamakan keselamatan kerja! 🚛`;

    const cleanWA = String(driverPhone).replace(/\D/g, '').replace(/^0/, '62');
    const waUrl = `https://wa.me/${cleanWA}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
};

/**
 * Cetak Surat Jalan Resmi (A4) dengan Barcode Code 128
 */
export const printOfficialDeliveryOrderA4 = (orderId) => {
    if (typeof window.openDocPreview === 'function') {
        window.openDocPreview('surat_jalan', orderId);
    } else {
        showToast('Modul cetak dokumen tidak tersedia!');
    }
};

// Bind ke window object untuk kompatibilitas multi-modul & inline onclick
if (typeof window !== 'undefined') {
    window.openDeliveryModal = openDeliveryModal;
    window.closeDeliveryModal = closeDeliveryModal;
    window.setDeliveryStatusQuick = setDeliveryStatusQuick;
    window.saveDeliveryDetails = saveDeliveryDetails;
    window.onFleetTypeChange = onFleetTypeChange;
    window.selectFleetCard = selectFleetCard;
    window.toggleItemLoaded = toggleItemLoaded;
    window.toggleAllChecklistItems = toggleAllChecklistItems;
    window.openDeliverySignatureModal = openDeliverySignatureModal;
    window.closeDeliverySignatureModal = closeDeliverySignatureModal;
    window.clearSignatureCanvas = clearSignatureCanvas;
    window.saveDeliverySignature = saveDeliverySignature;
    window.sendDeliveryWhatsAppToMandor = sendDeliveryWhatsAppToMandor;
    window.sendDeliveryWhatsAppToDriver = sendDeliveryWhatsAppToDriver;
    window.printOfficialDeliveryOrderA4 = printOfficialDeliveryOrderA4;
}
