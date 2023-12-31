/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ['poppins, sans-serif'],
        Montserrat: ['montserrat, sans-serif']
      }
    },
  },
  variants:{
    extend:{
      backgroundColor: ['active']
    }
  },
  plugins: [],
}

