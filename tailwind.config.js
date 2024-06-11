/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        '2xl': '1440px',
      },
      colors: {
        snow: '#f5f0ee',
        lightSnow: '#FCFAFA',
        maroon: '#410603',
        cornsilk: '#fff5d4',
        white: '#fff',
        indianRed: '#ed4c4e',
        mistyRose: '#ffe8e9',
        peachPuff: '#ffd2b9',
        thistle: '#e4d3ff',
        khaki2: '#f7ff82',
        khaki: '#ffe975',
        paleTurquoise: '#c6edde',
        mistyRose2: '#fee3e1',
        aquamarine: '#34fad5',
        lightBlue: '#d1effe',
        orange: '#ffb106',
      },
    },
  },
  plugins: [],
};
