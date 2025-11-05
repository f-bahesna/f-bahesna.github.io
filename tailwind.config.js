module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-one': {
          DEFAULT: '#F8FAFC',
          BlueLight: '#D9EAFD',
          GrayLight: '#BCCCDC',
          DarkGrayCustom: '#9AA6B2'
        }
      }
    },
  },
  plugins: [],
}
