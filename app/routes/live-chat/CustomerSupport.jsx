import {
	GlobeAmericasIcon,
	QueueListIcon,
	FaceSmileIcon,
	BoltIcon,
	RectangleGroupIcon,
	ReceiptPercentIcon,
} from "@heroicons/react/24/solid";

import MediaFeatureSection from "~/components/MediaFeatureSection";
import SectionHighlight from "~/components/SectionHighlight";

export default function CustomerSupport() {
	const features = [
		{
			title: "360-degree view",
			description: "Gain a complete view of your website visitors",
			icon: GlobeAmericasIcon,
		},
		{
			title: "All conversations",
			description:
				"Regardless of channel, connect your conversations together.",
			icon: QueueListIcon,
		},
		{
			title: "24/7 availability",
			description:
				"Always have tailored conversations with customers & prospects",
			icon: FaceSmileIcon,
		},

		{
			title: "Work smarter",
			description: "Deliver better, personalized experiences.",
			icon: BoltIcon,
		},
	];

	return (
		<section className="py-24 relative">
			<SectionHighlight withDivider />

			<MediaFeatureSection
				image="img/live-chat/live-message.png"
				primaryTag={{
					icon: RectangleGroupIcon,
					label: "Unified App",
				}}
				secondaryTag={{
					icon: ReceiptPercentIcon,
					label: "94% Customer Satisfaction",
				}}
				title={`Live chat with messengers\nall in a single place`}
				description="Customers want to engage with you on any channel. Meet them where they are. Live Chat, WhatsApp, Facebook messenger, and Instagram DMs in one place."
				features={features}
			/>
		</section>
	);
}
