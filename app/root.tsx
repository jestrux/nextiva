import stylesheet from "~/tailwind.css";
// import lightTheme from "~/theme-mode-light.css";
// import wpTheme from "~/wp-theme.css";
import fonts from "~/fonts.css";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import AppNavBar from "~/components/AppNavBar";
import AppFooter from "~/components/AppFooter";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	// { rel: "stylesheet", href: wpTheme },
	// { rel: "stylesheet", href: lightTheme },
	{ rel: "stylesheet", href: stylesheet },
	{ rel: "stylesheet", href: fonts },
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="shortcut icon"
					type="image/x-icon"
					href="favicon.ico"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="favicon-16x16.png"
				/>

				<Meta />
				<Links />
			</head>
			<body className="bg-canvas text-content">
				<AppNavBar />

				<main className="min-h-[600px]">
					<Outlet />
				</main>

				<AppFooter />

				<script src="https://unpkg.com/alpinejs@3.13.3/dist/cdn.min.js" defer></script>

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
