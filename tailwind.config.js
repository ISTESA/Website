/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'hollow-black': '#000c',
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
      },
      backgroundImage: {
        aboutUs: "url('/media/img/about-bg.png')",
        program: "url('/media/img/program-bg.png')",

        aente: "url('/media/img/program_bg/aente.png')",
        codeblaze: "url('/media/img/program_bg/codeblaze.png')",
        ideahack: "url('/media/img/program_bg/ideahack.png')",
      }
    },
  },
  plugins: [],
}

