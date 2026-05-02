/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'Bebas Neue', 'sans-serif'],
      },
      colors: {
        background: '#f5f5f5',
        text: '#111111',
        accent: '#000000',
        secondary: '#666666'
      }
    },
  },
  plugins: [],
}
