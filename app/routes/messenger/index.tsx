import type { MetaFunction } from "@remix-run/node";

import Businesses from "~/components/Businesses";

import Banner from "./Banner";
import MessagingPlatforms from "./MessagingPlatforms";
import SalesAndMarketing from "./SalesAndMarketing";

export const meta: MetaFunction = () => {
	return [
		{ title: "Nextiva Messenger" },
		{
			name: "description",
			content:
				"Nextiva is a software company that enables all your business communications through one collaboration tool. Get more done using fewer apps. Start your free trial!",
		},
	];
};

export default function Index() {
	return (
		<div className="mt-8">
			<Banner />

			<section className="py-20 relative z-10">
				<div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-content/[0.03] via-content/70 to-content-[0.03]"></div>
				<Businesses title={`Trusted by local brands\nand businesses`} />
				<div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-content/[0.03] via-content/40 to-content-[0.03]"></div>
			</section>

			<MessagingPlatforms />

			<SalesAndMarketing />
		</div>
	);
}
