import Results from "~/components/Results";
import CTATeam from "~/components/CTATeam";
import Businesses from "~/components/Businesses";
import FAQ from "~/components/FAQ";
import Banner from "./Banner";
import Features from "./Features";
import Integrations from "./Integrations";

export const meta = () => {
	return [
		{ title: "Nextiva: Business Communications Collaboration Software" },
		{
			name: "description",
			content:
				"Nextiva is a software company that enables all your business communications through one collaboration tool. Get more done using fewer apps. Start your free trial!",
		},
	];
};

export default function AboutUsPage() {
	return (
		<div className="mt-8">
			<Banner />

			<Businesses
				className="py-20 relative z-10"
				title={`Trusted by local brands\nand businesses`}
			/>

            <Features />

			<Results className="-mt-12 mb-32" />

            <Integrations />

			<CTATeam
				title={`Ready to make business\nconversations better?`}
				actionText="Let's talk business"
			/>

			<FAQ />
		</div>
	);
}
