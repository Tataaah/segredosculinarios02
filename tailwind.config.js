/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        burgundy: '#4C1C24',
        cream: '#FFF4E6',
        gold: '#D4AF37',
        chocolate: '#5B3924',
        sage: '#7D9774',
        burnt: '#C1443D',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};