import stylesheet from "~/tailwind.css";

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
	{ rel: "stylesheet", href: stylesheet },
];

export default function App() {
	return (
		<html lang="en" class="theme-mode-dark">
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
			<body className="bg-canvas">
				<AppNavBar />

				<main className="min-h-[600px]">
					<Outlet />
				</main>

				<AppFooter />

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
