module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      fblue: "#111d46",
      fteal: "#3d707e",
      champ: "#ffcfa1",
      black: "#000000",
      white: "#e6e6e6",
    },
    extend: {
      fontFamily: {
        angkor: ["'Angkor'", "cursive"],
        // sans: ["Indie Flower, cursive", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
