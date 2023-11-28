import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sohne: ["Sohne", "sans-serif"],
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			inset: {
				"-0.2": "-0.12rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			colors: {
				canvas: "rgb(var(--canvas-color) / <alpha-value>)",
				card: "rgb(var(--card-color) / <alpha-value>)",
				popup: "rgb(var(--popup-color) / <alpha-value>)",
				divider: "rgb(var(--divider-color) / <alpha-value>)",
				content: "rgb(var(--content-color) / <alpha-value>)",
				primary: "rgb(var(--primary-color) / <alpha-value>)",
				"primary-light":
					"rgb(var(--primary-light-color) / <alpha-value>)",
				"primary-dark":
					"rgb(var(--primary-dark-color) / <alpha-value>)",
				accent: "rgb(var(--accent-color) / <alpha-value>)",
				"action-card": "rgb(var(--action-card-color) / <alpha-value>)",
			},
		},
	},
	plugins: [],
} satisfies Config;
