import { FaceSmileIcon, RectangleStackIcon } from "@heroicons/react/24/solid";
import MediaFeatureSection from "~/components/MediaFeatureSection";
import SectionTitle from "~/components/SectionTitle";
import SectionHighlight from "~/components/SectionHighlight";

const powerInboxfeatures = [
	{
		title: "Improve productivity",
		description: "Your team will handle new questions and topics",
	},
	{
		title: "Faster and smarter",
		description: "Resolve questions and problems in a flash",
	},
	{
		title: "Grow fearlessly",
		description: "Grow your business without increasing costs.",
	},

	{
		title: "Enhanced experience",
		description:
			"Personalized recommendations will make your customers feel loved",
	},
];

const aiPlusHumansFeatures = [
	{
		title: "Automation & the human touch",
		description:
			"Customers can self-serve as well as connect with human agents",
	},
	{
		title: "Tailored templates",
		description:
			"Apply tailored templates to launch chatbots in a few clicks",
	},
	{
		title: "Connect, easily",
		description: "One-click integrations to add chatbots across platforms",
	},

	{
		title: "Unlimited resolution",
		description: "Help an unlimited number of customers in real-time",
	},
];

export default function CustomerRelationship() {
	return (
		<section className="py-20 relative">
			<SectionHighlight withDivider />

			<SectionTitle
				centered
				title={"Teams that work smarter\n grow fearlessly"}
				description="Happy teams create more loyal customers. Nextiva's powerful workspace makes it easy to deliver a personal and delightful customer experience at scale."
				primaryAction="Start for free"
			/>

			<div className="py-24 flex flex-col gap-24">
				<MediaFeatureSection
					image="img/live-chat/customer-relationship.png"
					primaryTag={{
						icon: RectangleStackIcon,
						label: "Power inbox",
					}}
					title={`Conversations, tickets and\ncustomer data in a single place`}
					description="All conversations are presented in a single inbox. Route or escalate based on request type, skill, or sentiment. Automated workflows give every request the right priority."
					features={powerInboxfeatures}
				/>

				<MediaFeatureSection
					flipped
					image="img/live-chat/ai-with-humans.png"
					primaryTag={{
						icon: FaceSmileIcon,
						label: "AI + humans",
					}}
					title={`Balance AI with human\nresponse for an amazing experience`}
					description="Chatbots can engage, greet, response and can even escalate quickly route chats with the help of AI. Automatically segment site visitors based on their actions so you can respond quickly."
					features={aiPlusHumansFeatures}
				/>
			</div>
		</section>
	);
}
