import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
    // Target modern browsers: aktifkan tree-shaking & optimasi ES modules lebih agresif
    target: 'esnext',
    // Inline aset < 4KB langsung ke HTML/JS (hemat HTTP roundtrip untuk ikon kecil, dll)
    assetsInlineLimit: 4096,
    // Pisahkan CSS per chunk JS agar hanya CSS yang dibutuhkan halaman yang dimuat
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Bundle kritis: core + auth (perlu saat inisialisasi awal)
          'vendor-firebase-core': ['firebase/compat/app', 'firebase/compat/auth'],
          // Firestore: dimuat sesaat setelah app init
          'vendor-firebase-db': ['firebase/compat/firestore', 'firebase/firestore'],
          // Analytics: DIPISAH jadi chunk sendiri — akan dimuat lazy via dynamic import
          // sehingga TIDAK masuk bundle kritis dan tidak memperlambat First Load.
          'vendor-firebase-analytics': ['firebase/compat/analytics'],
          // Utilitas DOM sanitizer
          'vendor-utils': ['dompurify'],
          // Modul Admin & CMS Toko Putri (dipisah agar first load storefront lebih cepat)
          'module-admin': [
            './src/modules/admin/index.js',
            './src/modules/admin/products/index.js',
            './src/modules/admin/orders.js',
            './src/modules/admin/finance.js',
            './src/modules/admin/settings.js',
            './src/modules/admin/tempo.js',
            './src/modules/admin/reviews.js',
            './src/modules/changelog/admin.js',
            // Admin session guard: hanya aktif saat admin login — pisah dari bundle utama
            './src/modules/admin/session.js',
          ],
          // Modul Cetak Dokumen Struk Thermal & Invoice A4
          'module-print': [
            './src/modules/print/index.js',
            './src/modules/print/documents.js'
          ],
          // Modul Member, Reward & Gamifikasi: hanya dibutuhkan pelanggan terdaftar
          'module-member': [
            './src/modules/member/index.js',
            './src/modules/member/reward.js',
            './src/modules/member/voucher.js',
          ],
          // Modul FAQ & Changelog: ringan tapi jarang diakses — pisah dari bundle kritis
          'module-faq': [
            './src/modules/faq/index.js',
            './src/modules/faq/faq.js',
            './src/modules/changelog/index.js',
          ],
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
