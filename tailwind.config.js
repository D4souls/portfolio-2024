/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				kalamLight: ['Kalam-Light', 'sans-serif'],
				kalamRegular: ['Kalam-Regular', 'sans-serif'],
				kalamBold: ['Kalam-Bold', 'sans-serif'],
				kalamVariable: ['Kalam-Variable', 'sans-serif'],
				onest: ['Onest', 'sans-serif'],
			},
			colors: {
				'color-1': '#F06543', // color naranja
				'color-2': '#E8E9EB', // color gris claro
				'color-3': '#E0DFD5', // color beige
				'color-4': '#313638', // color gris oscuro
				'color-5': '#F09D51', // color naranja claro
			},
			keyframes: {
				'shine-pulse': {
					'0%': {
						'background-position': '0% 0%',
					},
					'50%': {
						'background-position': '100% 100%',
					},
					to: {
						'background-position': '0% 0%',
					},
				},
			},
		},
	},
	plugins: [],
};
