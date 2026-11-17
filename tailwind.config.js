/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#0e3822',
            dark: '#082516',
            deep: '#061c11',
            light: '#185635',
            soft: '#edf7f1',
          },
          gold: {
            DEFAULT: '#eab308',
            hover: '#ca8a04',
            bright: '#facc15',
            light: '#fef08a',
            subtle: '#fefce8',
          },
          cream: {
            DEFAULT: '#faf7f2',
            card: '#ffffff',
            soft: '#f4efe6',
            border: '#e7ded2',
          },
          charcoal: {
            DEFAULT: '#1c221e',
            muted: '#525d56',
            light: '#849189',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(14, 56, 34, 0.06)',
        'soft': '0 8px 24px -4px rgba(14, 56, 34, 0.08)',
        'soft-lg': '0 16px 36px -6px rgba(14, 56, 34, 0.12)',
        'glow-gold': '0 6px 20px -2px rgba(234, 179, 8, 0.45)',
        'glow-green': '0 6px 20px -2px rgba(14, 56, 34, 0.35)',
      }
    },
  },
  plugins: [],
}
