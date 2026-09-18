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
        'none': 'none',
        '2xs': '0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
        'md': '0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'lg': '0 3px 6px -1px rgba(0, 0, 0, 0.04)',
        'xl': '0 4px 8px -2px rgba(0, 0, 0, 0.05)',
        '2xl': '0 6px 12px -3px rgba(0, 0, 0, 0.06)',
        'inner': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'soft': '0 1px 3px 0 rgba(15, 23, 42, 0.03)',
        'glow': '0 2px 6px -1px rgba(var(--color-primary-rgb), 0.15)',
        'float': '0 3px 8px -2px rgba(15, 23, 42, 0.04)',
      },
      dropShadow: {
        'none': '0 0 #0000',
        '2xs': '0 1px 1px rgba(0, 0, 0, 0.03)',
        'xs': '0 1px 1px rgba(0, 0, 0, 0.03)',
        'sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'DEFAULT': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'md': '0 2px 3px rgba(0, 0, 0, 0.05)',
        'lg': '0 3px 4px rgba(0, 0, 0, 0.05)',
        'xl': '0 4px 6px rgba(0, 0, 0, 0.05)',
        '2xl': '0 6px 8px rgba(0, 0, 0, 0.06)',
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

