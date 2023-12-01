import Br from "~/components/Br";
import GradientTag from "~/components/GradientTag";

export function AIEnhancedCustomerServiceSolution() {
	return (
		<section className="bg-gradient-to-b py-24  from-content/5 via-content/5 to-transparent">
			<div className="max-w-5xl mx-auto flex flex-col">
				<GradientTag
					className="mb-8"
					image="img/customer-stories/team3.png"
					label="Hey! Tonny from Nextiva here"
				/>

				<p className={"text-6xl/[1.15] tracking-wide "}>
					<span className={"font-medium"}>
						With Nextiva’s AI you can deliver personalized
						experiences. Resolve up to 60% of customer questions.
						Our chatbot technology uses generative
					</span>{" "}
					<span className={"opacity-50 font-medium"}>
						AI to deliver accurate answers that resolve customer
						questions instantly, reduce support cost and increase
						customer satisfaction.
					</span>
				</p>
			</div>

			<div className={"2xl:container "}>
				<img
					src={
						"img/live-chat/AI-Enhanced Customer Support Solutions.png"
					}
					alt={""}
				/>
			</div>
		</section>
	);
}
