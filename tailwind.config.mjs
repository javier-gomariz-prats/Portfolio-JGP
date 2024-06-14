/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'custom-color': '#5a67d8',
				'linkedincolor':'#0e76a8',
			  },
			  backgroundImage: {
				'custom-gradient': 'linear-gradient(90deg, rgba(26,27,27,1) 0%, rgba(31,41,55,1) 50%, rgba(116,117,117,1) 100%);',
			  },
			  
		},
	},
	plugins: [],
}
