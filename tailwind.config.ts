import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      /* ── Typography ──────────────────────────────
         font-sans    → Inter        (default body text)
         font-heading → Manrope      (headings & display)
         font-serif   → Merriweather (accent / optional)
         ─────────────────────────────────────────── */
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        heading: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      /* ── Brand colours ─────────────────────────── */
      colors: {
        'metallo-navy': '#071331',
        'metallo-lime': '#d6e600',
        'metallo-lime-hover': '#b5c200',
      },

      /* ── Animations ────────────────────────────── */
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },

  plugins: [],
};

export default config;
