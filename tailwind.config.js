/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(255,191,67)",
      },
      fontFamily: {
        poppins: 'Poppins'
      },
      backgroundImage: {
        heroPattern: "url('/src/assets/bg2.jpg')",
        heroPattern2: "url('/src/assets/bg1.jpg')"
      }
    },
  },
  plugins: [],
}

