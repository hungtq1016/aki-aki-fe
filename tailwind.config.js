import defaultTheme from 'tailwindcss/defaultTheme'
import colors from './src/core/services/common/tailwind/colors'
import spacing from './src/core/services/common/tailwind/spacing'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      satoshi: ['Roboto', 'sans-serif'],
      sans: ["Noto Sans", "Noto Sans JP", 'sans-serif']
    },
    screens: {
      '2xsm': '375px',
      xsm: '425px',
      '3xl': '2000px',
      ...defaultTheme.screens
    },

    extend: {
      colors: colors,
    },
    spacing:spacing,
    zIndex: {
      999999: '999999',
      99999: '99999',
      9999: '9999',
      999: '999',
      99: '99',
      9: '9',
      1: '1'
    },

  },
  
plugins: [
    // ...
    // eslint-disable-next-line no-undef
    require('@tailwindcss/line-clamp'),
  ],
}