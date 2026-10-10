const withOpacity = (varName) => ({ opacityValue }) => {
  if (opacityValue !== undefined) {
    return `rgba(var(${varName}-rgb), ${opacityValue})`;
  }
  return `var(${varName})`;
};

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
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
      },
      fontFamily: {
        sans: ['"Barlow"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Archivo"', '"Barlow"', 'system-ui', '-apple-system', 'sans-serif'],
        industrial: ['"Archivo"', '"Barlow"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'none': 'none',
        '2xs': 'none',
        'xs': 'none',
        'sm': 'none',
        'DEFAULT': 'none',
        'md': 'none',
        'lg': 'none',
        'xl': 'none',
        '2xl': 'none',
        'inner': 'none',
        'soft': 'none',
        'glow': 'none',
        'float': 'none',
      },
      dropShadow: {
        'none': 'none',
        '2xs': 'none',
        'xs': 'none',
        'sm': 'none',
        'DEFAULT': 'none',
        'md': 'none',
        'lg': 'none',
        'xl': 'none',
        '2xl': 'none',
      },
      colors: {
        emerald: {
          50: withOpacity('--color-emerald-50'),
          100: withOpacity('--color-emerald-100'),
          200: withOpacity('--color-emerald-200'),
          300: withOpacity('--color-emerald-300'),
          400: withOpacity('--color-emerald-400'),
          500: withOpacity('--color-emerald-500'),
          600: withOpacity('--color-emerald-600'),
          700: withOpacity('--color-emerald-700'),
          800: withOpacity('--color-emerald-800'),
          900: withOpacity('--color-emerald-900'),
          950: withOpacity('--color-emerald-950'),
        }
      }
    },
  },
  plugins: [],
}

