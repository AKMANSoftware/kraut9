/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // define all colors
      colors: {
        primary: '#28C6F3',
        secondary: '#27282A',
        tersioary: '#FDCB2A',
        tersioarysolid: '#FFCB00',
        halfSecondary: '#27282A80',
        lightwhite: '#c5e5f0'
      },
      keyframes: {
        motion1: {
          "0%, 100%": {
            top: "0px",
            left: "0px"
          },
          "50%": {
            top: "100%",
            left: "100%"
          },
        },
        motion2: {
          "0%, 100%": {
            top: "0px",
            right: "0px"
          },
          "50%": {
            top: "100%",
            right: "100%"
          },
        }
      },
      animation: {
        "motion1": "motion1 15s linear infinite",
        "motion2": "motion2 15s linear infinite"
      }
    },
  },
  plugins: [],
}

