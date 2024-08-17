/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D",
        },
        danger: "#E25858",
        blue: {
          500: "#1E6F9F",
          300: "#4EA8DE",
        },
        purple: {
          500: "#5E60CE",
          300: "#8284FA", 
        }
      }
    },
  },
  plugins: [],
}

