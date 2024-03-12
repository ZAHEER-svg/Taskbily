/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textNormal: '#80757D',
        textBold: '#1C252C'
      }
    },
  },
  plugins: [],
}

