module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      fblue: '#111d46',
      green: '#00a606',
      fteal: '#3d707e',
      champ: '#ffcfa1',
      black: '#1c1c1c',
      white: '#cbcbcb',
      gray1: '#7d7d7d',
      gray2: '#959595',
      gray3: '#bababa',
    },
    extend: {
      fontFamily: {
        angkor: ["'Angkor'", 'cursive'],
        // sans: ["Indie Flower, cursive", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
