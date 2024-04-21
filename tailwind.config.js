/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      firstColor: '#A34343',
      secondColor: '#E9C874',
      thirdColor: '#FBF8DD',
      fourthColor: '#C0D6E8'
    }
  },
  plugins: [require("daisyui")],
}



