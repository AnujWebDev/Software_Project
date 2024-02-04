/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#FFA500",
      },
      fontFamily:{
        'bodyFont':['toledo']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "black",
    ],
  },
}

