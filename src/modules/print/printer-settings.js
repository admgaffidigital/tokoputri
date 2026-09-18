/**
 * ============================================================
 * MODUL PENGATURAN PERANGKAT & PRINTER UNIVERSAL (POS ESC/POS)
 * Mengelola konfigurasi printer kasir (58mm / 80mm),
 * koneksi Bluetooth, USB OTG, Network LAN/WiFi IP, Driver RawBT,
 * opsi cetak struk, dan eksekusi Uji Coba Cetak (Test Print).
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { el, show, hide, esc, showToast } from '../../core/utils.js';

export const DEFAULT_PRINTER_CONFIG = {
    deviceType: 'bluetooth', // 'bluetooth' | 'usb' | 'network' | 'system' | 'rawbt'
    deviceName: 'Printer Thermal POS (Default)',
    deviceId: '',
    paperSize: '58mm', // '58mm' (32 kolom) | '80mm' (48 kolom)
    feedLines: 2,
    autoCut: false,
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
    setChecked('printer-opt-autocut', config.autoCut);
    setChecked('printer-opt-drawer', config.openCashDrawer);
    setChecked('printer-opt-autoprint', config.autoPrintOrder);

    // Tandai pilihan tipe perangkat aktif
    selectPrinterDeviceTypeUI(config.deviceType);

    const m = el('printer-settings-modal');
    if (m && m.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('printerSettings');
    }
    show('printer-settings-modal');
    setTimeout(() => {
        if (el('printer-settings-modal')) el('printer-settings-modal').classList.remove('opacity-0');
        if (el('printer-settings-modal-box')) el('printer-settings-modal-box').classList.remove('scale-95');
    }, 10);
};

/**
 * Tutup modal pengaturan printer universal
 */
export const closePrinterSettingsModal = (fH = false) => {
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('printerSettings', fH, () => {
            if (el('printer-settings-modal')) el('printer-settings-modal').classList.add('opacity-0');
            if (el('printer-settings-modal-box')) el('printer-settings-modal-box').classList.add('scale-95');
            setTimeout(() => hide('printer-settings-modal'), 300);
        });
    } else {
        if (el('printer-settings-modal')) el('printer-settings-modal').classList.add('opacity-0');
        if (el('printer-settings-modal-box')) el('printer-settings-modal-box').classList.add('scale-95');
        setTimeout(() => hide('printer-settings-modal'), 300);
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

    const newConfig = {
        deviceType: window._selectedPrinterType || 'bluetooth',
        paperSize: getValue('printer-paper-size', '58mm'),
        networkIp: getValue('printer-network-ip', '192.168.1.200:9100'),
        headerText: getValue('printer-header-custom', ''),
        footerText: getValue('printer-footer-custom', 'Terima kasih atas kunjungan Anda!'),
        showPoints: getChecked('printer-opt-points', true),
        showBarcode: getChecked('printer-opt-barcode', true),
        autoCut: getChecked('printer-opt-autocut', false),
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
    const t = el('thermal-print-section');
    if (t) {
        t.innerHTML = `<div style="width:${is80 ? '80mm' : '58mm'};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${h}</div>`;
        
        if (config.deviceType === 'rawbt' && window.AndroidNativeApp && typeof window.AndroidNativeApp.printRawBT === 'function') {
            const rawHtml = t.innerText;
            const b64 = btoa(unescape(encodeURIComponent(rawHtml)));
            window.AndroidNativeApp.printRawBT(b64);
        } else if (window.AndroidNativeApp && typeof window.AndroidNativeApp.print === 'function') {
            window.AndroidNativeApp.print();
        } else {
            window.print();
        }
        showToast('Perintah uji cetak berhasil dikirim! 🖨️');
    }
};

// ─── Expose ke window untuk HTML onclick ──────
window.getPrinterConfig = getPrinterConfig;
window.savePrinterConfig = savePrinterConfig;
window.openPrinterSettingsModal = openPrinterSettingsModal;
window.closePrinterSettingsModal = closePrinterSettingsModal;
window.selectPrinterDeviceTypeUI = selectPrinterDeviceTypeUI;
window.savePrinterSettingsFromModal = savePrinterSettingsFromModal;
window.scanBluetoothPrinter = scanBluetoothPrinter;
window.scanUsbPrinter = scanUsbPrinter;
window.executeTestPrint = executeTestPrint;
