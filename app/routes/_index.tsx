import type { MetaFunction } from "@remix-run/node";

import CTA from "~/components/CTA";
import Banner from "./home/Banner";
import Testimonials from "~/components/Testimonials";
import Companies from "./home/Companies";
import Businesses from "~/components/Businesses";
import FeatureCallout from "./home/FeatureCallout";
import Products from "./home/Products";
import Trends from "./home/Trends";
import PowerOfPlatform from "./home/PowerOfPlatform";
import NextivaPromise from "./home/NextivaPromise";

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
		<div className="mt-12">
			<Banner />

			<section className="-mt-32 mb-20 relative z-10">
				<Businesses />
			</section>

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
