module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: ['Roboto'],
				headings: ['Poppins'],
			},
			colors: {
				primary: '#90acd1',
				secondary: '#e55447',
				heading: '#222',
				body: '#777',
				pale: '#f9f9ff',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
