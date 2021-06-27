const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat']
      },
      colors: {
        cyan: colors.cyan
      },
      screens: {
        'sm-max': { 'max': '639px' }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
