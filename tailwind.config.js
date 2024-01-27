/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.{js,css}",
    "./views/**/*.ejs",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

