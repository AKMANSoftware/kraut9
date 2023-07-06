/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      // define all colors
      colors:{
       primary: '#28C6F3',
       secondary:'#27282A',
       tersioary:'#FDCB2A',
       tersioarysolid:'#FFCB00',
       halfSecondary:'#27282A80'
      }
    },
  },
  plugins: [],
}

