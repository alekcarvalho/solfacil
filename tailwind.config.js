const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
        mono: ['Lato', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: '#FFB600',
        secondary: '#666666',
        'light-gray': '#e5e5e5',
        'middle-gray': '#E0E0E0',
        'dark-gray': '#333',
      },
      maxWidth: {
        container: '1156px',
      },
      fontSize: {
        giant: [
          '40px',
          {
            lineHeight: '47px',
          },
        ],
        large: [
          '32px',
          {
            lineHeight: '32px',
          },
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
