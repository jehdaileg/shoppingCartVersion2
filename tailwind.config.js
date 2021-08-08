module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [],
}
