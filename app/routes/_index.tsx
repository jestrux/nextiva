import type { MetaFunction } from "@remix-run/node";

import CTA from "~/components/CTA";
import Banner from "~/components/Banner";
import Testimonials from "~/components/Testimonials";
import Companies from "~/components/Companies";
import Businesses from "~/components/Businesses";
import FeatureCallout from "~/components/FeatureCallout";
import Products from "~/components/Products";
import Trends from "~/components/Trends";
import PowerOfPlatform from "~/components/PowerOfPlatform";
import NextivaPromise from "~/components/NextivaPromise";

export const meta: MetaFunction = () => {
	return [
		{ title: "Nextiva: Business Communications Collaboration Software" },
		{
			name: "description",
			content:
				"Nextiva is a software company that enables all your business communications through one collaboration tool. Get more done using fewer apps. Start your free trial!",
		},
	];
};

export default function Index() {
	return (
		<div>
			<div className="mt-12 flex flex-col gap-10 md:gap-20">
				<Banner />
			</div>

			<Businesses />

			<FeatureCallout />

			<Products />

			<Trends />

			<PowerOfPlatform />

			<NextivaPromise />

			<Testimonials />

			<Companies />

			<CTA />
		</div>
	);
}
