/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scripts/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blueGray: {
          light: '#f0f4f8',
          DEFAULT: '#d9e2ec',
          dark: '#bcccdc',
        },
      },
    },
  },
  plugins: [],
};
