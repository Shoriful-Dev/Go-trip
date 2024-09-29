/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
     maxWidth: {
      'container': ['1500px'],
    },
    fontFamily: {
     'jost': ["Jost"],
   }
    },
  },
  plugins: [],
}

