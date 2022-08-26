/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      }
    },
	},
	plugins: [],
};