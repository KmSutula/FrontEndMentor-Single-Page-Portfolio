/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    colors: {
      black: "#151515",
      green: "#4ee1a0",
      darkGrey: "#242424",
      lightGrey: "#d9d9d9",
      white: "#ffffff",
      red: "#FF6F5B",
    },
    letterSpacing: {
      tightest: "-.156rem",
      tighter: "-.093rem",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      m: "1.125rem",
      l: "1.5rem",
      xl: "2rem",
      "2xl": "3rem",
      "3xl": "5.5rem",
    },

    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
    extend: {},
  },

  plugins: [],
};
