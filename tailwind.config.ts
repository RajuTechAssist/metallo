import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        default: "100vw",
      },
    },
    extend: {
      /* ── Typography ──────────────────────────────
         font-sans    → Inter        (default body text)
         font-heading → Manrope      (headings & display)
         font-serif   → Merriweather (accent / optional)
         ─────────────────────────────────────────── */
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },

      /* ── Brand colours ─────────────────────────── */
      colors: {
        "metallo-slate": "#0F172A",
        "metallo-gold": "#EAB308",
        "metallo-navy": "#0F172A",
        "metallo-gold-hover": "#CA8A04",

        primary: {
          DEFAULT: "#0F172A",
          foreground: "#EAB308",
        },
        secondary: {
          DEFAULT: "#EAB308",
          foreground: "#0F172A",
        },
        background: "#F8FAFC",
        foreground: "#0F172A",
        muted: "#F1F5F9",
      },

      /* ── Animations ────────────────────────────── */
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },

      /* ── utilities ────────────────────────────── */
    },
  },

  plugins: [],
};

export default config;
