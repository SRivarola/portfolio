/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    textShadow: {
      'default': '0 1.5px 0 #000',
      'md': '0 2px 2px #000',
      'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
      'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
    },
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#161616",
        blue: "#0c88ee",
        yellow: "ffeb43",
      },
      fontFamily: {
        poppins: ["Rajdhani", "sans-serif"],
      },
      boxShadow: {
        '3xl': '2px 2px 5px rgba(124, 124, 124)',
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};