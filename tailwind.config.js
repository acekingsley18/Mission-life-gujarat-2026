/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        life: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        gov: {
          dark: '#0a2e1d',
          primary: '#0f4c3a',
          surface: '#f8faf9',
          border: '#e2e8f0',
          accent: '#d97706', // warm solar amber
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        gujarati: ['"Noto Sans Gujarati"', 'Shruti', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
