import { SparklesIcon } from "@heroicons/react/24/solid";
import MediaFeatureSection from "~/components/MediaFeatureSection";
import SectionHighlight from "~/components/SectionHighlight";

const features = [
	{
		title: "55% efficiency increase",
		description:
			"Your team will be more efficient, working on what matters",
	},
	{
		title: "40% more engagement",
		description:
			"Our AI chatbots see more engagement than traditional chat",
	},
	{
		title: "Increased capacity",
		description:
			"Enable your business to handle more conversations than ever",
	},

	{
		title: "100% answer-rate",
		description: "All common questions are answered instantly",
	},
]

export default function AIChatBot() {
	return (
		<section className={"py-24 relative "}>
			<SectionHighlight withDivider />

			<MediaFeatureSection
				flipped
				image="img/live-chat/chatbot.png"
				primaryTag={{
					icon: SparklesIcon,
					label: "AI powered",
				}}
				title={`Supercharge customer\nconversations with an\nAI Chat Bot`}
				description="Give accurate answers that resolve customer questions and reduce your team’s ticket volume by as much as 80% with an AI Bot. Automate your sales and service conversations to deliver a faster."
				features={features}
			/>
		</section>
	);
}
