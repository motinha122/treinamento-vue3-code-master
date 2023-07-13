/** @type {import('tailwindcss').Config} */

const palette = require('./src/assets/js/palette')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      regular: ['RobotoRegular'],
      medium: ['RobotoMedium'],
      bold: ['RobotoBold'],
      black: ['RobotoBlack']
    },
    extend: {
      colors: palette
    },
  },
  plugins: [],
}

