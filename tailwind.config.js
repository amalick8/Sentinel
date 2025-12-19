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
          background: "#0B0E14",
          surface: "#121826",
          border: "#1E2638",
          muted: "#9AA4BF",
          text: "#E6EAF2",
        },
        accent: {
          blue: "#5B8CFF",
          purple: "#8B5CF6",
        },
      },
    },
  },
  plugins: [],
}
