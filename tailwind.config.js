/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        AbrilFatface: ['"Abril Fatface"'],
        PTSans: ['"PT Sans"']
      },
      colors: {
        'white': '#FFFFFF',
        'off-white': '#F5F5F5',
        'grey': '#E6E6E6',
        'charcoal': '#39393A'
      },
      backgroundImage: {
        //'twd_bg_image' : "url('../assets/bg_image.png')"
        'twd_bg_image' : "url('https://cdn-icons-png.flaticon.com/512/4744/4744822.png')"
      },
      animation: {
        'bounce-short': 'bounce 1s ease-in-out 3.5'
      }
    },
  },
  plugins: [],
}
