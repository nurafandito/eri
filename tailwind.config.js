/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F5F5',
          100: '#D9E2E2',
          200: '#B3C9C9',
          300: '#8DB0B0',
          400: '#559090',
          500: '#1B3D42', // Primary color
          600: '#183639',
          700: '#0F2426',
          800: '#0C1E21',
          900: '#081516',
        },
        secondary: {
          50: '#FEF9F6',
          100: '#FDF0E7',
          200: '#FBE2C3',
          300: '#F9D49F',
          400: '#F6C679',
          500: '#EDC599', // Secondary color
          600: '#E1AE7D',
          700: '#C8976A',
          800: '#A27F55',
          900: '#856445',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
