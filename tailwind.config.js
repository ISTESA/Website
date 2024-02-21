/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'false',
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'hollow-black': '#0009',
        'palatinate-blue': '#273BE2',
        'blueberry-blue': '#0041C2',
        'bright-sky': '#02CCFE',
        'pacific-blue': '#009DC4',
        'softblue': '#4891FF',
        'rhino': '#2E3F62',
        'sunglow': '#FFCC33',
        'schoolbus': '#E8A317',
        'rosso-red': '#D40000',
        'dark-pastel-green': '#56AE57',
        'ghost-white': '#F8F8FF',
        'dark-cerulean': '#084B83',
        'hawkes-blue': '#C2E9FF',
        'lily-white': '#EBF8FF',
        'darkblue': '#071632'
      },
      backgroundImage: {
        aboutUs: "url('@/assets/media/img/about-bg.png')",
        program: "url('@/assets/media/img/program-bg.png')",

        aente: "url('@/assets/media/img/program_bg/aente.png')",
        codeblaze: "url('@/assets/media/img/program_bg/codeblaze.png')",
        ideahack: "url('@/assets/media/img/program_bg/ideahack.png')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

