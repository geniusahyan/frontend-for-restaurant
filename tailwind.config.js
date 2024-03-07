/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green": "#ff6868",
        "red": "#39d84a",
        "secondary": "#555",
        "primary": "#fcfcfc"
      },
    },
  },
  plugins: [require("daisyui")],
}

