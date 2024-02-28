/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'eczar': ['Eczar', 'serif'],
      'roboto': ['Roboto','sans-serif;'],
    },
    
    extend: {
      colors:{
        custom1:"#252525",
        custom2:"#141414",
        azulrey:"#0404e2",
        azulrey2:"#040482",
        griscustom:"#fff",
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '70%': { transform: 'rotate(14deg)' },
          '80%': { transform: 'rotate(-8deg)' },
          '90%': { transform: 'rotate(14deg)' },
          '100%': { transform: 'rotate(-4deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'zoom-in-0': 'zoom-in 0.5s linear ;',
        'zoom-in-3': 'zoom-in 0.5s 0.3s linear ;',
        'zoom-in-5': 'zoom-in 0.5s 0.5s linear ;',
        'zoom-in-6': 'zoom-in 0.5s 0.6s linear ;',
      },
    },
  },
  plugins: [],
}
