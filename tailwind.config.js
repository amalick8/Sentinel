/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark mode palette - minimal, deep, expensive
        dark: {
          bg: '#0B0C0F',      // Deep charcoal/obsidian
          surface: '#13141B', // Slightly lighter surface
          elevated: '#1A1B23', // Elevated surface (cards, modals)
          border: '#2A2B35',   // Subtle border
        },
        accent: {
          primary: {
            DEFAULT: '#3B82F6', // Royal Blue
            glow: '#60A5FA',
            dim: 'rgba(59, 130, 246, 0.1)',
          },
          violet: {
            DEFAULT: '#8B5CF6',
            glow: '#A78BFA',
            dim: 'rgba(139, 92, 246, 0.1)',
          },
          cyan: {
            DEFAULT: '#06B6D4',
            glow: '#22D3EE',
            dim: 'rgba(6, 182, 212, 0.1)',
          },
        },
        sentiment: {
          bullish: '#10B981', // Emerald
          neutral: '#94A3B8', // Slate
          cautious: '#F59E0B', // Amber
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.0) 100%)',
        'subtle-glow': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
      },
      boxShadow: {
        'glass': '0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 24px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
