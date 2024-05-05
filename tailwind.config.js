/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        secondary: ["TT Livret Display Trl"],
      },
      colors: {
        whiteSecondary: "#F6F7F9",
        blueSecondary: "#142949",
      },
    },
  },
  plugins: [],
};
