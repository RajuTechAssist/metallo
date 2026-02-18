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
        'metallo-slate': '#0F172A',
        'metallo-gold': '#EAB308',
        'metallo-navy': '#0F172A',
        'metallo-gold-hover': '#CA8A04',
        
        primary: {
          DEFAULT: '#0F172A',
          foreground: '#EAB308',
        },
        secondary: {
          DEFAULT: '#EAB308',
          foreground: '#0F172A',
        },
        background: '#F8FAFC',
        foreground: '#0F172A',
        muted: '#F1F5F9',
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
