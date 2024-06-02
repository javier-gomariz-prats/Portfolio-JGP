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
			  
		},
	},
	plugins: [],
}
