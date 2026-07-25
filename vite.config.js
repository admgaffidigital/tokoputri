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
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-firebase-core': ['firebase/compat/app', 'firebase/compat/auth'],
          'vendor-firebase-db': ['firebase/compat/firestore'],
          'vendor-firebase-analytics': ['firebase/compat/analytics'],
          'vendor-utils': ['dompurify']
        }
      }
    }
  }
})
