/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    // Kelas dinamis di banner video (digunakan via JS string template)
    'aspect-video',
    // Kelas dinamis sound toggle button
    'bg-emerald-600', 'hover:bg-emerald-500',
    'bg-rose-600', 'hover:bg-rose-500',
    // Kelas animasi/transisi yang diinjeksi via JS
    'animate-pulse', 'animate-spin', 'animate-bounce',
    // Scale dinamis
    'scale-125', 'scale-110', 'scale-108',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Barlow"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'glow': '0 6px 22px -4px rgba(var(--color-primary-rgb), 0.45)',
        'float': '0 10px 25px -5px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        emerald: {
          50: 'var(--color-emerald-50)',
          100: 'var(--color-emerald-100)',
          200: 'var(--color-emerald-200)',
          300: 'var(--color-emerald-300)',
          400: 'var(--color-emerald-400)',
          500: 'var(--color-emerald-500)',
          600: 'var(--color-emerald-600)',
          700: 'var(--color-emerald-700)',
          800: 'var(--color-emerald-800)',
          900: 'var(--color-emerald-900)',
        }
      }
    },
  },
  plugins: [],
}

