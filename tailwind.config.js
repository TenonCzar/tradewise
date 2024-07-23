/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,htaccess}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        text: "#333333",
        button: "#3498DB",
        secondary: "#a225f5",
        primary: "#d72ff5",
      },
      fontFamily: {
        header: '"Philosopher", sans-serif',
        'quicksand': ["Quicksand", 'sans-serif'],
        'comforta': ["Comfortaa", 'sans-serif'],
      },
      backgroundImage: {
        curly_bckgnd: "url(/images/vectorbg.jpg)"
      },
    },
  },
  plugins: [],
};
