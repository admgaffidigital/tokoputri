/**
 * ============================================================
 * TOKO PUTRI — ENTERPRISE OFFLINE PWA SERVICE WORKER ENGINE
 * Versi Cache: v1.18.8
 * 
 * Strategi Caching:
 * 1. Navigasi HTML: Network-First dengan Cache Fallback (0ms offline load)
 * 2. Static Assets (JS, CSS, WebP, SVG, PNG): Stale-While-Revalidate
 * 3. Immutable Third-Party (Google Fonts, FontAwesome): Cache-First
 * 4. API & Firestore: Network-Only (dikelola oleh Firestore SDK & offline queue)
 * 5. Siklus Hidup: skipWaiting() + clients.claim() + Auto-Purge cache lama
 * ============================================================
 */

const CACHE_VERSION = 'v1.18.8';
const CACHE_NAME = `tokoputri-cache-${CACHE_VERSION}`;
const RUNTIME_CACHE = `tokoputri-runtime-${CACHE_VERSION}`;

// Berkas kritis app shell yang di-precache saat instalasi
const PRECACHE_URLS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/official_logo.png',
    '/putri_mascot_anim.gif'
];

// ─── 1. Siklus Install: Precache App Shell ─────────────────────
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(PRECACHE_URLS).catch((err) => {
                console.warn('[SW] Precache non-blocking partial error:', err);
            });
        }).then(() => self.skipWaiting())
    );
});

// ─── 2. Siklus Activate: Bersihkan Seluruh Cache Versi Lama ──
self.addEventListener('activate', (event) => {
    const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (!currentCaches.includes(name) && name.startsWith('tokoputri-')) {
                        console.log('[SW] Menghapus cache usang:', name);
                        return caches.delete(name);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// ─── 3. Siklus Fetch: Pengendalian Jaringan Cerdas & Offline ──
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Abaikan permintaan non-GET dan protokol bukan HTTP/HTTPS (chrome-extension, dsb)
    if (request.method !== 'GET' || !url.protocol.startsWith('http')) {
        return;
    }

    // Abaikan Firestore, Firebase Auth, Google Analytics & Cloud Functions agar tidak terinterupsi
    if (
        url.hostname.includes('firestore.googleapis.com') ||
        url.hostname.includes('identitytoolkit.googleapis.com') ||
        url.hostname.includes('firebaseio.com') ||
        url.hostname.includes('google-analytics.com') ||
        url.hostname.includes('analytics.google.com')
    ) {
        return;
    }

    // A. Permintaan Navigasi Halaman HTML (mode: 'navigate')
    // Strategi: Network-First dengan batas waktu 3 detik -> Fallback ke Cached index.html
    if (request.mode === 'navigate') {
        event.respondWith(
            (async () => {
                try {
                    const networkResponse = await Promise.race([
                        fetch(request),
                        new Promise((_, reject) => setTimeout(() => reject(new Error('Network timeout')), 3000))
                    ]);
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
                        return networkResponse;
                    }
                } catch (_) {
                    // Jaringan gagal atau offline: ambil dari cache
                }

                const cachedResponse = await caches.match(request);
                if (cachedResponse) return cachedResponse;

                // Fallback root app shell
                const fallbackAppShell = await caches.match('/index.html');
                if (fallbackAppShell) return fallbackAppShell;

                return new Response(
                    `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Mode Offline — Toko Putri</title><style>body{font-family:sans-serif;background:#0f172a;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center;padding:20px;}h1{color:#10b981;font-size:1.5rem;}p{color:#94a3b8;font-size:0.9rem;}button{margin-top:16px;padding:12px 24px;border-radius:12px;background:#10b981;color:#fff;font-weight:bold;border:none;cursor:pointer;}</style></head><body><div><h1>Toko Putri (Offline)</h1><p>Anda sedang berada di luar jangkauan internet.<br>Silakan periksa koneksi data atau Wi-Fi Anda.</p><button onclick="window.location.reload()">Coba Lagi</button></div></body></html>`,
                    { headers: { 'Content-Type': 'text/html' } }
                );
            })()
        );
        return;
    }

    // B. Immutable Third-Party (Google Fonts & FontAwesome CDN)
    // Strategi: Cache-First dengan background update
    if (
        url.hostname.includes('fonts.googleapis.com') ||
        url.hostname.includes('fonts.gstatic.com') ||
        url.hostname.includes('cdnjs.cloudflare.com')
    ) {
        event.respondWith(
            caches.open(RUNTIME_CACHE).then(async (cache) => {
                const cached = await cache.match(request);
                if (cached) return cached;
                try {
                    const response = await fetch(request);
                    if (response.status === 200) {
                        cache.put(request, response.clone());
                    }
                    return response;
                } catch (err) {
                    return cached || Response.error();
                }
            })
        );
        return;
    }

    // C. Static Web Assets (JS Vite Chunks, CSS, WebP, SVG, PNG, Manifest)
    // Strategi: Stale-While-Revalidate
    const isStaticAsset = (
        url.pathname.startsWith('/assets/') ||
        url.pathname.endsWith('.js') ||
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.png') ||
        url.pathname.endsWith('.jpg') ||
        url.pathname.endsWith('.jpeg') ||
        url.pathname.endsWith('.gif') ||
        url.pathname.endsWith('.webp') ||
        url.pathname.endsWith('.svg') ||
        url.pathname.endsWith('.woff2') ||
        url.pathname.endsWith('.json')
    );

    if (isStaticAsset) {
        event.respondWith(
            caches.open(RUNTIME_CACHE).then(async (cache) => {
                const cachedResponse = await cache.match(request);
                const fetchPromise = fetch(request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        cache.put(request, networkResponse.clone());
                    }
                    return networkResponse;
                }).catch(() => null);

                // Kembalikan dari cache seketika jika ada (0ms latency), atau tunggu network
                return cachedResponse || fetchPromise || Response.error();
            })
        );
        return;
    }

    // D. Default: Network fetch dengan cache fallback
    event.respondWith(
        fetch(request).catch(() => caches.match(request))
    );
});

// ─── 4. Pesan Antar-Client (Skip Waiting & Cache Sync) ────────
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
