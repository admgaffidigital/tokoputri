const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('path');

// Single instance lock (mencegah aplikasi terbuka ganda)
const gotTheLock = app.requestSingleInstanceLock();

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 1024,
        minHeight: 640,
        title: 'Toko Putri ( Official Store )',
        icon: path.join(__dirname, '../public/logo.png'),
        autoHideMenuBar: true,
        backgroundColor: '#0f172a',
        show: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true,
            webSecurity: true
        }
    });

    // Buka jendela dengan elegan saat konten siap
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // Muat bundle produksi dari dist/index.html
    const indexPath = path.join(__dirname, '../dist/index.html');
    mainWindow.loadFile(indexPath).catch(err => {
        console.error('[Electron] Gagal memuat index.html:', err);
    });

    // Buka tautan eksternal (WhatsApp, Google Maps, link luar) di browser default OS
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('http:') || url.startsWith('https:') || url.startsWith('mailto:') || url.startsWith('whatsapp:') || url.startsWith('tel:')) {
            shell.openExternal(url);
            return { action: 'deny' };
        }
        return { action: 'allow' };
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

if (!gotTheLock) {
    app.quit();
} else {
    app.on('second-instance', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.focus();
        }
    });

    app.whenReady().then(() => {
        createWindow();

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                createWindow();
            }
        });
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
}
