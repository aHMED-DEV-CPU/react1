/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        mainColor: "#1abc9c"
      },
      screens: {
        medium: "992px"
      }

    },
  },
  plugins: [],
}