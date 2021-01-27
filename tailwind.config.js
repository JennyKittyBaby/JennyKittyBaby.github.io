module.exports = {
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
      height: (_theme) => ({
        '5v': '5vh',
        '10v': '10vh',
        '15v': '15vh',
        '20v': '20vh',
        '25v': '25vh',
        '30v': '30vh',
        '35v': '35vh',
        '40v': '40vh',
        '45v': '45vh',
        '50v': '50vh',
        '55v': '55vh',
        '60v': '60vh',
        '65v': '65vh',
        '70v': '70vh',
        '75v': '75vh',
        '80v': '80vh',
        '85v': '85vh',
        '90v': '90vh',
        '95v': '95vh',
        '100v': '100vh',
      }),
      fontFamily: (_theme) => ({
        sans: ['Open Sans', 'Arial', 'sans-serif'],
        display: ['Hachi Maru Pop', 'cursive'],
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
