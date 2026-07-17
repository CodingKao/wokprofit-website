/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#c8102e",
          dark: "#a50e25",
          light: "#e63946",
        },
        accent: "#ffb703",
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f9f9f9",
          dark: "#0f0f0f",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
