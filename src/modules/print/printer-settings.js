/**
 * ============================================================
 * MODUL PENGATURAN PERANGKAT & PRINTER UNIVERSAL (POS ESC/POS)
 * Mengelola konfigurasi printer kasir (58mm / 80mm),
 * koneksi Bluetooth, USB OTG, Network LAN/WiFi IP, Driver RawBT,
 * opsi cetak struk, dan eksekusi Uji Coba Cetak (Test Print).
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { el, show, hide, esc, showToast, openModalAnim, closeModalAnim } from '../../core/utils.js';

export const DEFAULT_PRINTER_CONFIG = {
    deviceType: 'rawbt', // 'rawbt' (Rekomendasi Utama Free) | 'bluetooth' | 'usb' | 'network' | 'system'
    deviceName: 'Driver RawBT (Printer Thermal Android - Free)',
    deviceId: '',
    paperSize: '58mm', // '58mm' (32 col) | '58mm-compact' (30 col) | '80mm' (48 col) | '80mm-compact' (42 col)
    directPrint: false, // Wajib melalui preview dokumen / struk sebelum cetak
    feedLines: 3,
    autoCut: true,
    openCashDrawer: false,
    autoPrintOrder: false,
    headerText: '',
    footerText: 'Terima kasih atas kunjungan Anda!',
    showLogo: true,
    showPoints: true,
    showBarcode: true,
    networkIp: '192.168.1.200:9100'
};

/**
 * Menghitung jumlah kolom karakter presisi berdasarkan ukuran kertas
 * 58mm: 32 kolom (standar) atau 30 kolom (compact margin sempit)
 * 80mm: 48 kolom (standar) atau 42 kolom (compact POS)
 */
export const getPaperCols = (paperSize) => {
    switch (paperSize) {
        case '58mm-compact':
        case '58mm_30':
            return 30;
        case '80mm-compact':
        case '80mm_42':
            return 42;
        case '80mm':
            return 48;
        case '58mm':
        default:
            return 32;
    }
};

/**
 * Mengambil konfigurasi printer yang tersimpan di localStorage
 */
export const getPrinterConfig = () => {
    try {
        const saved = localStorage.getItem('freshmart_printer_config');
        if (saved) {
            return { ...DEFAULT_PRINTER_CONFIG, ...JSON.parse(saved) };
        }
    } catch (e) {
        console.warn('Gagal membaca konfigurasi printer lokal:', e);
    }
    return { ...DEFAULT_PRINTER_CONFIG };
};

/**
 * Menyimpan konfigurasi printer ke localStorage
 */
export const savePrinterConfig = (config) => {
    try {
        const current = getPrinterConfig();
        const updated = { ...current, ...config };
        localStorage.setItem('freshmart_printer_config', JSON.stringify(updated));
        return updated;
    } catch (e) {
        console.error('Gagal menyimpan konfigurasi printer:', e);
        return getPrinterConfig();
    }
};

/**
 * Buka modal pengaturan printer universal
 */
export const openPrinterSettingsModal = () => {
    const config = getPrinterConfig();
    
    // Terapkan data ke form modal
    const setChecked = (id, val) => { const elem = el(id); if (elem) elem.checked = !!val; };
    const setValue = (id, val) => { const elem = el(id); if (elem) elem.value = val || ''; };

    setValue('printer-device-name-display', config.deviceName);
    setValue('printer-paper-size', config.paperSize);
    setValue('printer-network-ip', config.networkIp);
    setValue('printer-header-custom', config.headerText);
    setValue('printer-footer-custom', config.footerText);

    setChecked('printer-opt-points', config.showPoints);
    setChecked('printer-opt-barcode', config.showBarcode);
    setChecked('printer-opt-direct', config.directPrint === true);
    setChecked('printer-opt-autocut', config.autoCut !== false);
    setChecked('printer-opt-drawer', config.openCashDrawer);
    setChecked('printer-opt-autoprint', config.autoPrintOrder);

    // Tandai pilihan tipe perangkat aktif
    selectPrinterDeviceTypeUI(config.deviceType || 'rawbt');

    const m = el('printer-settings-modal');
    const b = el('printer-settings-modal-box');
    if (m && m.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('printerSettings');
    }
    openModalAnim(m, b);
};

/**
 * Tutup modal pengaturan printer universal
 */
export const closePrinterSettingsModal = (fH = false) => {
    const m = el('printer-settings-modal');
    const b = el('printer-settings-modal-box');
    if (!m) return;
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('printerSettings', fH, () => {
            closeModalAnim(m, b);
        });
    } else {
        closeModalAnim(m, b);
    }
};

/**
 * Pemilihan tipe perangkat di UI (Bluetooth, USB, Network, System, RawBT)
 */
export const selectPrinterDeviceTypeUI = (type) => {
    window._selectedPrinterType = type;
    document.querySelectorAll('.printer-type-card').forEach(c => {
        const cardType = c.getAttribute('data-type');
        if (cardType === type) {
            c.classList.add('border-[var(--color-primary)]', 'bg-[rgba(var(--color-primary-rgb),0.06)]', 'ring-2', 'ring-[var(--color-primary)]/20');
            c.classList.remove('border-slate-200', 'dark:border-slate-700', 'bg-white', 'dark:bg-slate-800');
            const check = c.querySelector('.printer-check-badge');
            if (check) check.classList.remove('hidden');
        } else {
            c.classList.remove('border-[var(--color-primary)]', 'bg-[rgba(var(--color-primary-rgb),0.06)]', 'ring-2', 'ring-[var(--color-primary)]/20');
            c.classList.add('border-slate-200', 'dark:border-slate-700', 'bg-white', 'dark:bg-slate-800');
            const check = c.querySelector('.printer-check-badge');
            if (check) check.classList.add('hidden');
        }
    });

    // Tampilkan / sembunyikan kotak panduan RawBT
    const rawbtBox = el('rawbt-quick-guide-box');
    if (rawbtBox) {
        if (type === 'rawbt') rawbtBox.classList.remove('hidden');
        else rawbtBox.classList.add('hidden');
    }

    // Tampilkan / sembunyikan konfigurasi khusus IP jika network dipilih
    const netBox = el('printer-network-box');
    if (netBox) {
        if (type === 'network') netBox.classList.remove('hidden');
        else netBox.classList.add('hidden');
    }
};

/**
 * Simpan pengaturan dari modal
 */
export const savePrinterSettingsFromModal = () => {
    const getValue = (id, def = '') => { const elem = el(id); return elem ? elem.value : def; };
    const getChecked = (id, def = false) => { const elem = el(id); return elem ? elem.checked : def; };

    const selectedType = window._selectedPrinterType || 'rawbt';
    const defaultName = selectedType === 'rawbt'
        ? 'Driver RawBT (Printer Thermal Android - Free)'
        : (selectedType === 'bluetooth' ? 'Bluetooth POS Printer' : 'Printer Thermal POS');

    const newConfig = {
        deviceType: selectedType,
        deviceName: getValue('printer-device-name-display', defaultName),
        paperSize: getValue('printer-paper-size', '58mm'),
        networkIp: getValue('printer-network-ip', '192.168.1.200:9100'),
        headerText: getValue('printer-header-custom', ''),
        footerText: getValue('printer-footer-custom', 'Terima kasih atas kunjungan Anda!'),
        showPoints: getChecked('printer-opt-points', true),
        showBarcode: getChecked('printer-opt-barcode', true),
        directPrint: getChecked('printer-opt-direct', false),
        autoCut: getChecked('printer-opt-autocut', true),
        openCashDrawer: getChecked('printer-opt-drawer', false),
        autoPrintOrder: getChecked('printer-opt-autoprint', false)
    };

    savePrinterConfig(newConfig);
    showToast('Pengaturan printer berhasil disimpan! ✅');
    closePrinterSettingsModal();
};

/**
 * Pindai & Hubungkan Perangkat Bluetooth (Web Bluetooth API)
 */
export const scanBluetoothPrinter = async () => {
    if (!navigator.bluetooth) {
        showToast('Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.');
        return;
    }

    try {
        showToast('Mencari printer bluetooth di sekitar...');
        const device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: [
                '000018f0-0000-1000-8000-00805f9b34fb', // Standard ESC/POS Service
                'e7810a71-73ae-499d-8c15-faa9aef0c3f2',
                '00001101-0000-1000-8000-00805f9b34fb'  // Serial Port Profile
            ]
        });

        if (device) {
            savePrinterConfig({
                deviceType: 'bluetooth',
                deviceName: device.name || 'Bluetooth POS Printer',
                deviceId: device.id
            });
            const nameEl = el('printer-device-name-display');
            if (nameEl) nameEl.value = device.name || 'Bluetooth POS Printer';
            showToast(`Printer "${device.name || 'Bluetooth POS'}" tersambung! ✅`);
        }
    } catch (e) {
        if (e.name !== 'NotFoundError') {
            showToast('Koneksi bluetooth dibatalkan atau tidak tersedia.');
        }
    }
};

/**
 * Pindai & Hubungkan Perangkat USB (Web USB API)
 */
export const scanUsbPrinter = async () => {
    if (!navigator.usb) {
        showToast('Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.');
        return;
    }

    try {
        showToast('Mencari printer USB...');
        const device = await navigator.usb.requestDevice({ filters: [] });
        if (device) {
            const devName = (device.productName || 'USB Thermal Printer') + ' (USB)';
            savePrinterConfig({
                deviceType: 'usb',
                deviceName: devName,
                deviceId: String(device.vendorId) + ':' + String(device.productId)
            });
            const nameEl = el('printer-device-name-display');
            if (nameEl) nameEl.value = devName;
            showToast(`Printer USB "${devName}" tersambung! ✅`);
        }
    } catch (e) {
        if (e.name !== 'NotFoundError') {
            showToast('Koneksi USB dibatalkan atau tidak ditemukan.');
        }
    }
};

/**
 * Eksekusi Uji Coba Cetak (Test Print) Struk
 */
export const executeTestPrint = () => {
    const config = getPrinterConfig();
    if (config.deviceType === 'rawbt' || !config.deviceType) {
        if (typeof window.executeRawBTTestPrint === 'function') {
            window.executeRawBTTestPrint();
            return;
        }
    }

    const is80 = config.paperSize === '80mm';
    const cols = is80 ? 48 : 32;
    const storeName = appData.store.name || 'TOKO PUTRI';
    const storeWa = appData.store.wa || '';

    const padLine = (l, r, len = cols) => {
        const p = len - l.length - r.length;
        return l + (p > 0 ? ' '.repeat(p) : ' ') + r;
    };

    const separator = '-'.repeat(cols);
    const dateStr = new Date().toLocaleString('id-ID', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
    });

    let h = `
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${esc(storeName)}</div>
    ${storeWa ? `<div style="text-align:center;font-size:11px;margin-bottom:4px;">WA: ${esc(storeWa)}</div>` : ''}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${dateStr}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${is80 ? '80mm (48 Kolom)' : '58mm (32 Kolom)'}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${config.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${padLine('TES ITEM UJI COBA', 'HARGA', cols)}</div>
    <div style="white-space:pre;font-size:10px;">${padLine('1x Produk Percobaan', 'Rp 25.000', cols)}</div>
    <div style="white-space:pre;font-size:10px;">${padLine('2x Kertas Thermal Kasir', 'Rp 15.000', cols)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${padLine('TOTAL UJI', 'Rp 40.000', cols)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;

    if (config.showPoints) {
        h += `<div style="white-space:pre;font-size:11px;">${padLine('Simulasi Poin Member', '+10 Poin', cols)}</div>`;
        h += `<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`;
    }

    if (config.showBarcode) {
        h += `<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`;
    }

    h += `
    <div style="text-align:center;font-size:10px;margin-top:6px;line-height:1.3;">
        ${esc(config.footerText || 'Terima kasih atas kunjungan Anda!')}
    </div>
    <div style="text-align:center;font-size:9px;font-style:italic;margin-top:4px;">
        Printer siap digunakan untuk operasional kasir Toko Putri.
    </div>
    <div style="height:25px;"></div>
    `;

    // Cetak ke thermal-print-section
    let t = el('thermal-print-section');
    if (!t) {
        t = document.createElement('div');
        t.id = 'thermal-print-section';
        document.body.appendChild(t);
    }
    t.innerHTML = `<div style="width:${is80 ? '80mm' : '58mm'};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${h}</div>`;
    
    if (typeof window.sendToRawBT === 'function') {
        const rawText = t.innerText;
        const b64 = btoa(unescape(encodeURIComponent(rawText)));
        window.sendToRawBT(b64, rawText, h);
    } else {
        window.print();
    }
    showToast('Perintah uji cetak berhasil dikirim! 🖨️');
};

// ─── Expose ke window untuk HTML onclick ──────
window.getPrinterConfig = getPrinterConfig;
window.getPaperCols = getPaperCols;
window.savePrinterConfig = savePrinterConfig;
window.openPrinterSettingsModal = openPrinterSettingsModal;
window.closePrinterSettingsModal = closePrinterSettingsModal;
window.selectPrinterDeviceTypeUI = selectPrinterDeviceTypeUI;
window.savePrinterSettingsFromModal = savePrinterSettingsFromModal;
window.scanBluetoothPrinter = scanBluetoothPrinter;
window.scanUsbPrinter = scanUsbPrinter;
window.executeTestPrint = executeTestPrint;
