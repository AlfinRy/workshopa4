/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.html', '*.js'],
	theme: {
		extend: {},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
