import {
	GlobeAmericasIcon,
	QueueListIcon,
	FaceSmileIcon,
	RectangleGroupIcon,
	ReceiptPercentIcon,
} from "@heroicons/react/24/solid";

const SalesAndMarketing = () => {
	const services = [
		{
			icon: <GlobeAmericasIcon className="h-6" />,
			title: "Listen",
			descrtiption:
				"Be available when your customers need you most with chat that s always on.",
		},
		{
			icon: <QueueListIcon className="h-6" />,
			title: "Route",
			descrtiption:
				"Receive chats in real time, routed to the team members best suited to tackle their challenges.",
		},
		{
			icon: <FaceSmileIcon className="h-6" />,
			title: "Resolve",
			descrtiption:
				"Instantly resolve customer complaints or inquiries, without missing a beat.",
		},
		{
			icon: <FaceSmileIcon className="h-6" />,
			title: "Heading",
			descrtiption: "Paragraph goes here",
		},
	];

	return (
		<section className="mb-24 py-20 relative">
			<div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"></div>
			<div className="top-highlight-gradient"></div>

			<div className="container">
				<div className="flex flex-col gap-2 items-center justify-center text-center">
					<h2 className="text-2xl md:text-5xl/tight font-medium">
						Designed for sales,
						<span className="hidden md:inline">
							<br />
						</span>
						service and marketing
					</h2>
				</div>

				<div className="mt-32 max-w-6xl mx-auto">
					<div className="grid grid-cols-2 gap-28">
						<div>
							<img
								className="w-full"
								src="img/messenger/sales.png"
								alt=""
							/>
						</div>

						<div className="flex flex-col items-start justify-center">
							<div className="flex items-center gap-2">
								<div className="py-2 px-3 rounded-xl bg-success/20 text-success flex items-center gap-2">
									<RectangleGroupIcon className="w-5" />
									Sales
								</div>

								<div className="py-2 px-3 rounded-xl bg-warning/20 text-warning flex items-center gap-2">
									<ReceiptPercentIcon className="w-5" />
									Increase Conversations
								</div>
							</div>

							<div className="mt-4">
								<h3 className="text-2xl md:text-5xl/tight font-medium">
									Sale on all Messengers
								</h3>

								<p className="mt-2">
									Increase sales by making your products and
									services available for sale on your customer
									channels.
								</p>
							</div>

							<div className="mt-6">
								<a href="#" className="button">
									Get started
								</a>
							</div>
						</div>
					</div>

					<div className="mt-12 grid grid-cols-4 gap-6 relative">
						{services.map((service, index) => (
							<div
								key={index}
								className="relative p-px rounded-xl overflow-hidden"
							>
								<div className="absolute rounded-xl inset-0 bg-gradient-to-b from-content/20 to-content/0"></div>

								<div className="min-h-full relative rounded-xl bg-canvas p-5 flex flex-col">
									<div className="mb-2 opacity-50">
										{service.icon}
									</div>

									<h3 className="mt-4 text-lg">
										{service.title}
									</h3>

									<p className="mt-1 font-light text-xs/relaxed opacity-60">
										{service.descrtiption}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="mt-12 flex items-center justify-center">
					<a
						href="#"
						className="p-3 group hover:opacity-90 mt-6 inline-flex items-center gap-2"
					>
						See all channels
						<svg
							className="group-hover:translate-x-0.5 transition-transform w-5 h-5 mt-0.5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};

export default SalesAndMarketing;
