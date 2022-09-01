/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      screens: {
        lg: "1124px"
      },
      colors: {
        primary_purple: "#7856ff",
        primary_blue: "#1D9BF0"
      }
    },
	},
	plugins: [],
};