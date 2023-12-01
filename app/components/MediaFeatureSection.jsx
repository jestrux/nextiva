import { PhoneIcon } from "@heroicons/react/24/solid";

import SectionTitle from "~/components/SectionTitle";

function FeatureListItem({ title, description, icon, variant = "regular" }) {
	var bgVariantMap = {
		primary: "bg-primary",
		regular: "bg-canvas",
		gradient: "bg-gradient-to-b from-canvas via-canvas to-transparent",
	};

	var bgClass = bgVariantMap[variant ?? "regular"] ?? bgVariantMap.regular;
	var Icon = icon ?? PhoneIcon;

	return (
		<div className="relative p-px rounded-xl overflow-hidden">
			<div className="absolute rounded-xl inset-0 bg-gradient-to-b from-content/20 to-content/0"></div>

			<div
				className={`${bgClass} min-h-full relative rounded-xl p-5 flex flex-col`}
			>
				<div className="mb-2 opacity-50">
					<Icon className={"h-6"} />
				</div>

				<h3 className="mt-4 text-lg">{title}</h3>

				<p className="mt-1 font-light text-xs/relaxed opacity-60">
					{description}
				</p>
			</div>
		</div>
	);
}

const MediaFeatureSection = ({
	flipped = false,
	image = "img/live-chat/live-message.png",
	primaryTag = {
		icon: "rectangle",
		label: "Unified App",
	},
	secondaryTag,
	title = "Live chat with messengers all in a single place",
	description = "Customers want to engage with you on any channel. Meet them where they are. Live Chat, WhatsApp, Facebook messenger, and Instagram DMs in one place.",
	action,
	features,
}) => {
	return (
		<div className="max-w-6xl mx-auto">
			<div
				className={`flex items-center ${
					flipped && "flex-row-reverse"
				} gap-24`}
			>
				<div className="flex-shrink-0 w-5/12">
					<img className="w-full" src={image} alt="" />
				</div>

				<div className="w-7/12 pb-8">
					<SectionTitle
						title={title}
						description={description}
						primaryTag={primaryTag}
						secondaryTag={secondaryTag}
						primaryAction={action}
					/>
				</div>
			</div>

			<div className="mt-12 grid grid-cols-4 gap-6 relative">
				{features.map((feature, index) => (
					<FeatureListItem key={index} {...feature} />
				))}
			</div>
		</div>
	);
};

export default MediaFeatureSection;
