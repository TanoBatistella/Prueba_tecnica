/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B3445',
        secondary: '#7D879C',
        accent: '#2DCAB1',
        'chip-green': '#1CB59C',
        'chip-green-bg': '#D3FFF5',
        'chip-yellow': '#FFB800',
        'chip-yellow-bg': '#FFF8E5',
        'chip-red': '#F56565',
        'chip-red-bg': '#FFDFDF',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}