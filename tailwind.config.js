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
        /* New primary color palette */
        "primary-dark": "#1F2937",
        "primary":      "#2563EB",
        "secondary":    "#14B8A6",
        "accent":       "#F97316",
        "bg":           "#F9FAFB",
        "gray":         "#E5E7EB",
        "text":         "#4B5563",
        "white":        "#FFFFFF",
        /* Feature accent colors */
        "feature-blue":   "#2563EB",
        "feature-teal":   "#14B8A6",
        "feature-emerald":"#10B981",
        "feature-sky":    "#0EA5E9",
        "feature-fuchsia":"#EC4899",
        "feature-amber":  "#F59E0B",
        "feature-indigo": "#6366F1",
        
        /* Legacy Ignite brand colors (kept for backward compatibility) */
        'ignite-purple': '#8A3FFC',
        'ignite-pink'  : '#FF7EB6',
        'ignite-cyan'  : '#33B1FF',
        'ignite-navy'  : '#0D2040',
        'ignite-gold'  : '#F1C21B',
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
