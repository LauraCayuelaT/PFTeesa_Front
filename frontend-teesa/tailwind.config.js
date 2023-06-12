/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teesaBlueDark: '#00082D',
        teesaBlueLight: '#192C8C',
        teesaWhite: '#FBFEFA',
        teesaGrey: '#E5E5E5',
        teesaGreenDark: '#224957',
        teesaGreen: '#03D368',
      },
      screens: {
        'xs': '280px', //280-640
        'sm': '640px', //640-768
        'md': '768px', //768-1024
        'lg': '1024px',//1024-1280
        'xl': '1280px',//1280-1440
      },
    },
  },
  plugins: [],
};
