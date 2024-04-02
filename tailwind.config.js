/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        paris2024: ["'Paris 2024'", "cursive"],
        lato: ["Lato", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
