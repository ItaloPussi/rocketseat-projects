/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#121214',
          800: '#202024',
          750: "#29292E",
          700: '#323238',
          600: '#7C7C8A',
          500: '#E1E1E6',
          400: '#8D8D99',
          300: '#C4C4C6',
          200: '#E1E1E6',
        },
        green: {
          500: '#00875F',
          300: '#00B37E',
        },
        red: {
          500: '#F75A68',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

