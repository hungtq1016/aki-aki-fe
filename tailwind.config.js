/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cerulean': {
          '50': '#f2f9fd',
          '100': '#e4f1fa',
          '200': '#c3e3f4',
          '300': '#8dceec',
          '400': '#51b5df',
          '500': '#32a4d5',
          '600': '#1b7dae',
          '700': '#17648d',
          '800': '#175575',
          '900': '#194861',
          '950': '#102d41',
        },
        'persian-red': {
          '50': '#fef2f3',
          '100': '#ffe1e3',
          '200': '#ffc8cc',
          '300': '#ffa2a8',
          '400': '#fc6d76',
          '500': '#f43f4b',
          '600': '#d51c28',
          '700': '#be1722',
          '800': '#9d1720',
          '900': '#821a21',
          '950': '#47080c',
        },
        'mountain-mist': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#959595',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
      },
      
      }
    },
  },
  plugins: [
    // ...
    // eslint-disable-next-line no-undef
    require('@tailwindcss/line-clamp'),
  ],
}