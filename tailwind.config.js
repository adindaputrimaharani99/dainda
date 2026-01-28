/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary:'#e11d48',
        dark:'#020617',
        secondary:'#64748b',
        lingkar:'#4b5563',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

