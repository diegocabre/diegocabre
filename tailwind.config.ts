import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#090d16',
  			letras: '#cbd5e1',
  			titulo: '#f8fafc',
  			subtitulo: '#818cf8',
  			parrafo: '#94a3b8',
  		},	
  		fontFamily: {
  			sans: [
  				'Outfit',
  				'Inter',
  				'sans-serif'
  			],
  			JetBrains: [
  				'JetBrains Mono',
  				'sans-serif'
  			]
  		},
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
  ],


} satisfies Config;
