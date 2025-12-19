/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      /* ==============================
         COLORS — FLAT TOKENS (v4 SAFE)
         ============================== */
      colors: {
        /* Dark system */
        "dark-background": "#0A0A0F", // deep navy-black
        "dark-bg-gradient-start": "#0A0A0F",
        "dark-bg-gradient-end": "#1A1D26",
        "dark-surface": "rgba(255, 255, 255, 0.03)", // glass base
        "dark-border": "rgba(255, 255, 255, 0.08)",
        "dark-muted": "#949DAF",
        "dark-text": "#E0E6ED",
        "dark-highlight": "#FFFFFF",

        /* Brand */
        "brand-blue": "#3B82F6",
        "brand-cyan": "#06B6D4",
        "brand-glow": "rgba(59, 130, 246, 0.5)",
      },

      /* ==============================
         TYPOGRAPHY
         ============================== */
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      /* ==============================
         BACKGROUNDS & EFFECTS
         ============================== */
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },

      /* ==============================
         SHADOWS (GLASS / DEPTH)
         ============================== */
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.35)",
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },

      /* ==============================
         ANIMATION (OPTIONAL BUT CLEAN)
         ============================== */
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },

  plugins: [],
}
