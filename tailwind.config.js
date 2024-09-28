/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // font family part 
      fontFamily: {
        "inter" : ["Inter", "sans-serif"],
        "ptSerif": ["PT Serif", "serif"],
      },

      // adding different colors
      colors: {
        "brandColor" : "#E52525",
        "commonColor" : "#333333"
      }
    },

    // container part
    container: {
      center: true,
      padding: "178px"
    },
  },
  plugins: [],
}