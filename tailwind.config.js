/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FAF6F2',
          100: '#F2E8DF',
          200: '#E4D0BE',
          300: '#CDAE91',
          400: '#B68A6B',
          500: '#9B6B4A',
          600: '#7E5135',
          700: '#633D27',
          800: '#4A2C1C',
          900: '#321E13',
          950: '#1F1209',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF3E8',
          200: '#F5E9D5',
          300: '#EEDDC0',
        },
        caramel: {
          400: '#D9A05B',
          500: '#C68642',
          600: '#A66B2E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'steam': 'steam 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        steam: {
          '0%, 100%': { opacity: '0.2', transform: 'translateY(0) scaleY(1)' },
          '50%': { opacity: '0.6', transform: 'translateY(-12px) scaleY(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
