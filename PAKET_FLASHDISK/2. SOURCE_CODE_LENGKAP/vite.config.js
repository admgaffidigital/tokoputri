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
          'vendor-utils': ['dompurify']
        }
      }
    }
  }
})
