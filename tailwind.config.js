/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          50: "#eef3fb",
          100: "#d8e3f5",
          200: "#b0c6e8",
          300: "#7d9fd4",
          500: "#1b54a3",
          600: "#14417f",
          700: "#102f5c",
          800: "#0b2545",
          900: "#071a33",
        },
        growth: {
          50: "#ecfdf5",
          100: "#d1fae5",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        charcoal: {
          400: "#6b7280",
          600: "#3f434c",
          700: "#2e3138",
          900: "#1c1e23",
        },
        cream: {
          50: "#fbfcfd",
          100: "#f5f7fa",
          200: "#e9edf3",
        },
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(11, 37, 69, 0.25)",
        soft: "0 4px 16px -6px rgba(11, 37, 69, 0.18)",
      },
    },
  },
  plugins: [],
};
