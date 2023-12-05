import {
	FaceSmileIcon,
	GlobeAmericasIcon,
	QueueListIcon,
	ReceiptPercentIcon,
	RectangleGroupIcon,
	SparklesIcon,
} from "@heroicons/react/24/solid";
import MediaFeatureSection from "~/components/MediaFeatureSection";
import SectionHighlight from "~/components/SectionHighlight.jsx";

const Reviews = () => {
	const locationReviews = [
		{
			icon: GlobeAmericasIcon,
			title: "72%",
			description:
				"of consumers say that positive reviews make them trust a local business more",
		},
		{
			icon: QueueListIcon,
			title: "65%",
			description:
				"of consumers say reliability, expertise, professionalism are the most important reputation traits for local businesses.",
		},
		{
			icon: FaceSmileIcon,
			title: "90%",
			description:
				"of consumers read online reviews before visiting a business",
		},
	];

	const ecommerceReviews = [
		{
			title: "94%",
			description:
				"of customers avoided a business after reading negative reviews online.",
		},
		{
			title: "88%",
			description:
				"of consumers trust online reviews as much as personal recommendations.",
		},
		{
			title: "86%",
			description:
				"will hesitate to purchase from a business that has negative online reviews.",
		},
	];

	const appReviews = [
		{
			icon: GlobeAmericasIcon,
			title: "$935.2B",
			description:
				"is the projected global app revenue expected to be surpassed by 2024.",
		},
		{
			icon: QueueListIcon,
			title: "79%",
			description:
				"of consumers check ratings and reviews before downloading an app.",
		},
		{
			icon: FaceSmileIcon,
			title: "55%",
			description:
				"check rating and reviews before making an in-app purchase.",
		},
		{
			icon: FaceSmileIcon,
			title: "75%",
			description:
				"of people can be influenced to install the app on Apple devices through app reviews.",
		},
	];

	return (
		<>
			{/*Sale on all Messengers*/}
			<div className="relative py-24">
				<SectionHighlight withDivider />
				<MediaFeatureSection
					primaryTag={{
						icon: RectangleGroupIcon,
						label: "AI Powered",
					}}
					image="/img/email/boost.png"
					title="Boost Email Efficiency"
					description="AI can handle today most email interactions with customers more reliably and with better response time than humans. Reduce repetitive and mundane emails and tasks, increase response speed and boost customer satisfaction."
					features={locationReviews}
					primaryAction={"Get started"}
					featuresNumberOfColumns={3}
				/>
			</div>{" "}
			<div className="relative py-24">
				<SectionHighlight withDivider />
				<MediaFeatureSection
					flipped
					primaryTag={{
						icon: RectangleGroupIcon,
						label: "Quality",
					}}
					secondaryTag={{
						icon: ReceiptPercentIcon,
						label: "Experience",
					}}
					image="/img/email/compliance.png"
					title="Assure Compliance"
					description="Monitor agent interactions and establish safeguards to prevent inappropriate responses or content to be sent to customers. Ensure compliance with local laws and regulations."
					features={ecommerceReviews}
					primaryAction={"Get started"}
					featuresNumberOfColumns={3}
				/>
			</div>
			<div className="relative py-24">
				<SectionHighlight withDivider />
				<MediaFeatureSection
					primaryTag={{
						icon: RectangleGroupIcon,
						label: "Share Email",
					}}
					secondaryTag={{
						icon: ReceiptPercentIcon,
						label: "Tickets",
					}}
					image="/img/email/collaborate.png"
					title="Collaborate Seamlessly"
					description="Empower Your Customer Facing Teams with Seamless Collaboration on Email: View and share email conversations and history, and escalate messages with a single click."
					features={appReviews}
					primaryAction={"Get started"}
				/>
			</div>
		</>
	);
};

export default Reviews;
