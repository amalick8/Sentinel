/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#0A0A0F", // Deep navy/black
          bgGradientStart: "#0A0A0F",
          bgGradientEnd: "#1A1D26", // Charcoal
          surface: "rgba(255, 255, 255, 0.03)", // Glassmorphism base
          border: "rgba(255, 255, 255, 0.08)",
          muted: "#949DAF",
          text: "#E0E6ED",
          highlight: "#FFFFFF",
        },
        brand: {
          blue: "#3B82F6", // Cool blue
          cyan: "#06B6D4", // Cyan
          glow: "rgba(59, 130, 246, 0.5)"
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      }
    },
  },
  plugins: [],
}
