/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        { pattern: /bg-./ },
        { pattern: /text-./ }
    ],
	theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'grey': {
                100: '#f3f4f6',
            },
            'black': '#000000',
            'bug': '#A7B723',
            'dark': '#75574C',
            'dragon': '#7037FF',
            'electric': '#F9CF30',
            'fairy': '#E69EAC',
            'fighting': '#C12239',
            'fire': '#F57D31',
            'flying': '#A891EC',
            'ghost': '#70559B',
            'grass': '#74CB48',
            'ground': '#DEC16B',
            'ice': '#9AD6DF',
            'normal': '#AAA67F',
            'poison': '#A43E9E',
            'psychic': '#FB5584',
            'rock': '#B69E31',
            'steel': '#B7B9D0',
            'water': '#6493EB',
        }
	},
	plugins: [],
};
