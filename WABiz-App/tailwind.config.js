/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Make sure this is also present for dark mode functionality
  theme: {
    extend: {},
  },
  plugins: [],
}