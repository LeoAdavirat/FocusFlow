/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'theme1-sand': '#fdf6e3',
				'theme1-file': '#eee8d5',
				'theme1-dock': '#ddd6c1',
				'theme1-head': '#d9d2c2',
				'theme1-text': '#382214'
			},
			fontFamily: {
				body: ['JetBrains Mono', 'monospace']
			},
			fontSize: {
				'1.5xl': '1.3rem',
				'4.5xl': '2.5rem'
			}
		}
	},
	plugins: []
};
