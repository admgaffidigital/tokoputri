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
    { id: 'pickup', name: 'Mobil Pick-up (L300 / Gran Max)', capacity: '1.5 Ton', icon: 'fa-truck-pickup' },
    { id: 'truck_engkel', name: 'Truk Engkel 4 Roda (Canter/Dyna)', capacity: '3.5 Ton', icon: 'fa-truck' },
    { id: 'truck_dobel', name: 'Truk Dobel 6 Roda (Colt Diesel)', capacity: '7.0 Ton', icon: 'fa-truck-moving' },
    { id: 'trike', name: 'Motor Roda Tiga Bak (Viar/Tosa)', capacity: '500 Kg', icon: 'fa-motorcycle' },
    { id: 'external', name: 'Ekspedisi / Armada Luar / Sewa', capacity: 'Variatif', icon: 'fa-dolly' },
    { id: 'self_pickup', name: 'Diambil Mandor Sendiri di Toko', capacity: '-', icon: 'fa-person-walking-luggage' }
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
        height: 36,
        showText: true,
        fontSize: 9,
        className: 'w-full max-w-[220px] h-auto'
    });

    const statusMeta = DELIVERY_STATUSES[del.status] || DELIVERY_STATUSES.pending_dispatch;

    cEl.innerHTML = `
        <div class="space-y-5 text-slate-800 dark:text-slate-100">
            <!-- HEADER INFO SURAT JALAN -->
            <div class="card-native p-4 sm:p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 shadow-xs">
                <div class="flex items-start gap-3.5">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm" style="background: linear-gradient(135deg, var(--color-primary), #2563eb);">
                        <i class="fa-solid fa-truck-ramp-box text-xl"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2 flex-wrap mb-1">
                            <span class="font-mono font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">#${esc(del.doNumber)}</span>
                            <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider border ${statusMeta.badgeClass} flex items-center gap-1.5">
                                <i class="fa-solid ${statusMeta.icon}"></i> ${statusMeta.label}
                            </span>
                        </div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            Rujukan Pesanan: <b class="font-mono text-slate-700 dark:text-slate-200">#${esc(o.orderId)}</b> &bull; Pelanggan: <b>${esc(o.customer?.name || 'Umum')}</b>
                        </p>
                    </div>
                </div>

                <!-- PREVIEW BARCODE RESMI -->
                <div class="p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white flex flex-col items-center justify-center shrink-0">
                    <div class="w-full flex items-center justify-center">
                        ${barcodeSvg}
                    </div>
                </div>
            </div>

            <!-- TABS & PENGATURAN STATUS CEPAT -->
            <div class="flex items-center justify-between gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                <button type="button" onclick="setDeliveryStatusQuick('${esc(orderId)}', 'pending_dispatch')" class="flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${del.status === 'pending_dispatch' ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'}">
                    <i class="fa-solid fa-boxes-packing text-xs"></i> <span class="hidden sm:inline">1.</span> Menunggu Muat
                </button>
                <button type="button" onclick="setDeliveryStatusQuick('${esc(orderId)}', 'out_for_delivery')" class="flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${del.status === 'out_for_delivery' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'}">
                    <i class="fa-solid fa-truck-fast text-xs"></i> <span class="hidden sm:inline">2.</span> Jalan (Kirim)
                </button>
                <button type="button" onclick="openDeliverySignatureModal('${esc(orderId)}')" class="flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${del.status === 'delivered' ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'}">
                    <i class="fa-solid fa-signature text-xs"></i> <span class="hidden sm:inline">3.</span> TTD &amp; Serah Terima
                </button>
            </div>

            <!-- FORM GRID 2 KOLOM: ARMADA & TUJUAN PROYEK -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <!-- KOLOM KIRI: PENUGASAN ARMADA & SUPIR -->
                <div class="card-native p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 space-y-3.5">
                    <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-2.5">
                        <h4 class="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <i class="fa-solid fa-truck text-[var(--color-primary)]"></i> Penugasan Armada &amp; Pengemudi
                        </h4>
                        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Logistik Toko</span>
                    </div>

                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">Jenis Kendaraan / Armada</label>
                        <select id="do-fleet-type" onchange="onFleetTypeChange(this.value)" class="w-full text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] cursor-pointer">
                            ${DEFAULT_FLEETS.map(f => `<option value="${f.id}" ${del.fleetType === f.id ? 'selected' : ''}>${f.name} (${f.capacity})</option>`).join('')}
                        </select>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">Plat Nomor Kendaraan</label>
                            <input type="text" id="do-plate-number" value="${esc(del.plateNumber)}" placeholder="Cth: B 9234 KDA" class="w-full text-xs font-mono font-bold uppercase rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">Nama Sopir / Pengemudi</label>
                            <input type="text" id="do-driver-name" value="${esc(del.driverName)}" placeholder="Cth: Pak Joko" class="w-full text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">No. WhatsApp Sopir</label>
                            <input type="tel" id="do-driver-phone" value="${esc(del.driverPhone)}" placeholder="Cth: 08123456789" class="w-full text-xs font-mono font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">Helper / Kondektur</label>
                            <input type="text" id="do-helper-name" value="${esc(del.helperName)}" placeholder="Cth: Budi (Kondektur)" class="w-full text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                        </div>
                    </div>

                    <!-- TOMBOL KIRIM INFO KE SUPIR -->
                    ${del.driverPhone ? `
                    <button type="button" onclick="sendDeliveryWhatsAppToDriver('${esc(orderId)}')" class="w-full py-2.5 px-3 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95">
                        <i class="fa-brands fa-whatsapp text-sm text-emerald-600"></i> Kirim Rute &amp; Kontak Mandor ke WA Sopir
                    </button>` : ''}
                </div>

                <!-- KOLOM KANAN: TUJUAN PROYEK & MANDOR -->
                <div class="card-native p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 space-y-3.5">
                    <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-2.5">
                        <h4 class="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <i class="fa-solid fa-map-location-dot text-rose-500"></i> Lokasi Proyek &amp; Kontak Mandor
                        </h4>
                        ${o.isDropPoint ? '<span class="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-700 border border-amber-200">DROP POINT</span>' : ''}
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">Nama Penerima / Mandor</label>
                            <input type="text" id="do-recipient-name" value="${esc(del.recipientName)}" placeholder="Nama penerima di proyek" class="w-full text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">No. WhatsApp Mandor</label>
                            <input type="tel" id="do-recipient-phone" value="${esc(del.recipientPhone)}" placeholder="No WA mandor" class="w-full text-xs font-mono font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                        </div>
                    </div>

                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">Alamat Lengkap Proyek / Drop Point</label>
                        <textarea id="do-destination-address" rows="2" placeholder="Alamat pengiriman / patokan proyek..." class="w-full text-xs font-medium rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">${esc(del.destinationAddress)}</textarea>
                    </div>

                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">Catatan Akses Truk / Instruksi Bongkar</label>
                        <input type="text" id="do-unload-notes" value="${esc(del.unloadNotes)}" placeholder="Cth: Gang sempit, bongkar di samping gudang mandor" class="w-full text-xs font-medium rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                    </div>

                    ${(del.destinationLat && del.destinationLng) ? `
                    <div class="pt-1">
                        <a href="https://www.google.com/maps?q=${esc(del.destinationLat)},${esc(del.destinationLng)}" target="_blank" rel="noopener noreferrer" class="w-full py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold flex items-center justify-center gap-2">
                            <i class="fa-solid fa-location-dot"></i> Buka Titik Koordinat GPS di Google Maps
                        </a>
                    </div>` : ''}
                </div>
            </div>

            <!-- CHECKLIST MUATAN BARANG GUDANG -->
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-2.5">
                    <h4 class="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-list-check text-emerald-500"></i> Checklist Muatan Fisik Barang
                    </h4>
                    <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">Total: ${del.checklist.length} Macam Barang</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden">
                        <thead class="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-extrabold uppercase text-[10px] tracking-wider">
                            <tr>
                                <th class="py-2 px-3 w-10 text-center">Muat</th>
                                <th class="py-2 px-3">Nama &amp; Spesifikasi Barang</th>
                                <th class="py-2 px-3 text-center w-24">Jumlah</th>
                                <th class="py-2 px-3 text-center w-20">Satuan</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200 dark:divide-slate-700/80">
                            ${del.checklist.map((item, idx) => `
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <td class="py-2 px-3 text-center">
                                    <input type="checkbox" id="chk-item-${idx}" ${item.loaded ? 'checked' : ''} onchange="toggleItemLoaded(${idx}, this.checked)" class="w-4 h-4 rounded text-[var(--color-primary)] focus:ring-[var(--color-primary)] cursor-pointer">
                                </td>
                                <td class="py-2 px-3 font-bold text-slate-800 dark:text-slate-100">
                                    ${esc(item.name)}
                                    ${item.variantName ? `<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-1.5 py-0.5 rounded text-[10px] ml-1.5 border border-slate-200 dark:border-slate-600">${esc(item.variantName)}</span>` : ''}
                                </td>
                                <td class="py-2 px-3 text-center font-extrabold text-slate-900 dark:text-white font-mono">${item.qty}</td>
                                <td class="py-2 px-3 text-center font-bold text-slate-500 uppercase text-[10px]">${esc(item.unit || 'pcs')}</td>
                            </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- BUKTI TANDA TANGAN SERAH TERIMA MANDOR (JIKA ADA) -->
            ${del.signature ? `
            <div class="card-native p-4 sm:p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/20 space-y-3">
                <div class="flex items-center justify-between border-b border-emerald-200/60 pb-2">
                    <h4 class="font-extrabold text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                        <i class="fa-solid fa-file-signature text-emerald-600"></i> Bukti Serah Terima &amp; Tanda Tangan Proyek
                    </h4>
                    <span class="text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-lg border border-emerald-300">TERVERIFIKASI</span>
                </div>
                <div class="flex flex-col sm:flex-row items-center gap-4">
                    <div class="p-2 bg-white rounded-xl border border-emerald-200 shadow-xs max-w-[200px] w-full flex items-center justify-center">
                        <img src="${del.signature.signatureDataUrl}" alt="Tanda Tangan Mandor" class="h-20 w-auto object-contain">
                    </div>
                    <div class="flex-1 text-xs space-y-1 text-slate-700 dark:text-slate-300">
                        <p>Penerima: <b class="text-slate-900 dark:text-white">${esc(del.signature.signerName || del.recipientName)}</b></p>
                        <p>Waktu Terima: <b class="font-mono">${del.signature.timestamp ? new Date(del.signature.timestamp).toLocaleString('id-ID') : '-'}</b></p>
                        ${del.signature.notes ? `<p class="italic text-slate-500">" ${esc(del.signature.notes)} "</p>` : ''}
                    </div>
                </div>
            </div>` : ''}

            <!-- FOOTER AKSI UTAMA -->
            <div class="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button type="button" onclick="saveDeliveryDetails('${esc(orderId)}')" class="btn-native-action w-full sm:flex-1 h-12 rounded-2xl text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-95 transition-all" style="background: var(--color-primary);">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Data Pengiriman &amp; Armada
                </button>
                <button type="button" onclick="printOfficialDeliveryOrderA4('${esc(orderId)}')" class="btn-native-action w-full sm:w-auto h-12 px-5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-800 dark:text-slate-200 font-extrabold text-sm flex items-center justify-center gap-2 shadow-2xs cursor-pointer active:scale-95 transition-all">
                    <i class="fa-solid fa-print text-amber-500"></i> Cetak Surat Jalan A4
                </button>
                <button type="button" onclick="sendDeliveryWhatsAppToMandor('${esc(orderId)}')" class="btn-native-action w-full sm:w-auto h-12 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-2xs cursor-pointer active:scale-95 transition-all">
                    <i class="fa-brands fa-whatsapp text-base"></i> Notifikasi Mandor
                </button>
            </div>
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
 * Event ketika tipe armada berubah (isi nama armada otomatis)
 */
export const onFleetTypeChange = (fleetId) => {
    const f = DEFAULT_FLEETS.find(x => x.id === fleetId);
    if (f && window._currentDeliveryData) {
        window._currentDeliveryData.fleetType = f.id;
        window._currentDeliveryData.fleetName = f.name;
    }
};

/**
 * Toggle checklist muatan barang
 */
export const toggleItemLoaded = (idx, isLoaded) => {
    if (window._currentDeliveryData && window._currentDeliveryData.checklist && window._currentDeliveryData.checklist[idx]) {
        window._currentDeliveryData.checklist[idx].loaded = !!isLoaded;
    }
};

/**
 * Simpan Data Lengkap Pengiriman ke Dokumen Pesanan Firestore
 */
export const saveDeliveryDetails = async (orderId) => {
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
                <div class="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-2.5">
                    <i class="fa-solid fa-circle-info text-base text-blue-600 mt-0.5 shrink-0"></i>
                    <div>
                        <p class="font-bold">Konfirmasi Serah Terima Material Proyek</p>
                        <p class="text-[11px] text-blue-700 dark:text-blue-300 mt-0.5">Surat Jalan <b>#${esc(del.doNumber)}</b>. Mohon mandor atau penerima menandatangani langsung pada area di bawah.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 mb-1">Nama Terang Mandor / Penerima</label>
                        <input type="text" id="sig-signer-name" value="${esc(del.recipientName || o.customer?.name || '')}" placeholder="Nama penerima di proyek" class="w-full text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-500 mb-1">Catatan Kondisi Barang Saat Tiba</label>
                        <input type="text" id="sig-notes" value="" placeholder="Cth: Diterima utuh, semen 50 sak lengkap" class="w-full text-xs font-medium rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                    </div>
                </div>

                <!-- CANVAS TANDA TANGAN SENTUH -->
                <div>
                    <div class="flex items-center justify-between mb-1.5">
                        <label class="text-[11px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                            <i class="fa-solid fa-pen-nib text-[var(--color-primary)]"></i> Goreskan Tanda Tangan Mandor
                        </label>
                        <button type="button" onclick="clearSignatureCanvas()" class="text-xs font-bold text-rose-500 hover:text-rose-600 cursor-pointer flex items-center gap-1">
                            <i class="fa-solid fa-rotate-left"></i> Bersihkan Canvas
                        </button>
                    </div>
                    <div class="relative w-full h-48 bg-white border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                        <canvas id="signature-pad-canvas" class="w-full h-full cursor-crosshair touch-none"></canvas>
                        <div id="sig-placeholder-hint" class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 select-none">
                            <i class="fa-solid fa-signature text-4xl mb-2 opacity-50"></i>
                            <span class="text-xs font-bold uppercase tracking-widest opacity-60">Tanda Tangan di Sini</span>
                        </div>
                    </div>
                </div>

                <!-- TOMBOL KONFIRMASI -->
                <div class="pt-2 flex items-center gap-3">
                    <button type="button" onclick="closeDeliverySignatureModal()" class="w-1/3 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                        Batal
                    </button>
                    <button type="button" onclick="saveDeliverySignature()" class="w-2/3 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-95 transition-all">
                        <i class="fa-solid fa-circle-check"></i> Simpan Tanda Tangan &amp; Selesaikan
                    </button>
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
    window.toggleItemLoaded = toggleItemLoaded;
    window.openDeliverySignatureModal = openDeliverySignatureModal;
    window.closeDeliverySignatureModal = closeDeliverySignatureModal;
    window.clearSignatureCanvas = clearSignatureCanvas;
    window.saveDeliverySignature = saveDeliverySignature;
    window.sendDeliveryWhatsAppToMandor = sendDeliveryWhatsAppToMandor;
    window.sendDeliveryWhatsAppToDriver = sendDeliveryWhatsAppToDriver;
    window.printOfficialDeliveryOrderA4 = printOfficialDeliveryOrderA4;
}
