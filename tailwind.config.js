/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Ignite brand colors */
        'ignite-purple': '#8A3FFC',
        'ignite-pink'  : '#FF7EB6',
        'ignite-cyan'  : '#33B1FF',
        'ignite-navy'  : '#0D2040',
        'ignite-gold'  : '#F1C21B',
        /* Extended ignite colors */
        'ignite-orange': '#FF7A59',
        'ignite-emerald': '#0E8A6E',
        'ignite-indigo': '#4F46E5',
        'ignite-crimson': '#E11D48',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
