/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#000000",
        secondaryColor: "#FFA500",
        textColor: "#FFFFFF"
      }
    },
  },
  plugins: [],
}

