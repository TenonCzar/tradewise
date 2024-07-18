/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html, js}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        text: "#333333",
        button: "#3498DB",
        secondary: "#44a642",
        primary: "#27AE60",
      },
    },
  },
  plugins: [],
};
