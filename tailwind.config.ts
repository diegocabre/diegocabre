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
  			background: '#F4FAFF',
  			letras: '#1F5673',
  			titulo: '#3F0D12',
  			subtitulo: '#1B998B',
  			parrafo: '#7AC74F',

  		},	
  		fontFamily: {
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
