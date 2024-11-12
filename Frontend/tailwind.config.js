/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class', // Opcional: Mantén esto si en el futuro quieres reactivar el cambio de tema
	content: [
	  './index.html',
	  './src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
	  extend: {
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: 'hsl(var(--card))',
		  'card-foreground': 'hsl(var(--card-foreground))',
		  primary: 'hsl(var(--primary))',
		  'primary-foreground': 'hsl(var(--primary-foreground))',
		  secondary: 'hsl(var(--secondary))',
		  'secondary-foreground': 'hsl(var(--secondary-foreground))',
		  muted: 'hsl(var(--muted))',
		  'muted-foreground': 'hsl(var(--muted-foreground))',
		  accent: 'hsl(var(--accent))',
		  'accent-foreground': 'hsl(var(--accent-foreground))',
		  border: 'hsl(var(--border))',
		  hover: 'hsl(var(--hover))',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }
  