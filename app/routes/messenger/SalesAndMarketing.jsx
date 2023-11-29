import {
	GlobeAmericasIcon,
	QueueListIcon,
	FaceSmileIcon,
	RectangleGroupIcon,
	ReceiptPercentIcon,
	PhoneIcon,
	SparklesIcon,
} from "@heroicons/react/24/solid";

const SalesAndMarketing = () => {
	const saleServices = [
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

	const supportServices = [
		{
			icon: <PhoneIcon className="h-6" />,
			title: "Integrate Messengers",
			descrtiption:
				"Facebook, Twitter, WhatsApp and more, never miss a conversation again.",
		},
		{
			icon: <PhoneIcon className="h-6" />,
			title: "Read & Respond",
			descrtiption:
				"Provide your customers with timely, relevant and detailed responses.",
		},
		{
			icon: <PhoneIcon className="h-6" />,
			title: "Automate",
			descrtiption:
				"Deliver better customer experiences and automate responses for basic inquiries.",
		},
		{
			icon: <PhoneIcon className="h-6" />,
			title: "Heading",
			descrtiption: "Paragraph goes here",
		},
	];

	return (
		<section className="py-20 relative">
			<div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"></div>
			<div className="top-highlight-gradient"></div>

			<div className="flex flex-col gap-2 items-center justify-center text-center">
				<h2 className="text-2xl md:text-6xl/tight font-medium">
					Designed for sales,
					<span className="hidden md:inline">
						<br />
					</span>
					service and marketi ng
				</h2>
			</div>

			<div className="py-24 max-w-6xl mx-auto">
				<div className="grid grid-cols-12 gap-28">
					<div className="col-span-5">
						<img
							className="w-full"
							src="img/messenger/sale-services.png"
							alt=""
						/>
					</div>

					<div className="col-span-7 pb-12 flex flex-col items-start justify-center">
						<div className="flex items-center gap-2 text-sm/none">
							<div className="h-10 px-5 rounded-xl bg-success/20 text-success flex items-center gap-2">
								<RectangleGroupIcon className="w-5" />
								Sales
							</div>

							<div className="h-10 px-5 rounded-xl bg-warning/20 text-warning flex items-center gap-2">
								<ReceiptPercentIcon className="w-4" />
								Increase Conversations
							</div>
						</div>

						<div className="mt-6">
							<h3 className="text-2xl md:text-5xl/tight">
								Sale on all Messengers
							</h3>

							<p className="mt-2 text-base/relaxed opacity-70 max-w-lg">
								Increase sales by making your products and
								services available for sale on your customer
								channels.
							</p>
						</div>

						<div className="mt-10">
							<a href="#" className="button h-12 px-6">
								Get started
							</a>
						</div>
					</div>
				</div>

				<div className="mt-12 grid grid-cols-4 gap-6 relative">
					{saleServices.map((service, index) => (
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

			<div className="relative py-24">
				<div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"></div>
				<div className="top-highlight-gradient"></div>

				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-12 gap-28">
						<div className="col-span-7 pb-12 flex flex-col items-start justify-center">
							<div className="flex items-center gap-2 text-sm/none">
								<div className="h-10 px-5 rounded-xl bg-success/20 text-success flex items-center gap-2">
									<SparklesIcon className="w-5" />
									Service
								</div>

								<div className="h-10 px-5 rounded-xl bg-warning/20 text-warning flex items-center gap-2">
									<ReceiptPercentIcon className="w-4" />
									Increase Satisfaction
								</div>
							</div>

							<div className="mt-6">
								<h3 className="text-2xl md:text-5xl/tight">
									Support customers on all Messengers
								</h3>

								<p className="mt-2 text-base/relaxed opacity-70 max-w-lg">
									Gain loyalty and improve customer
									satisfaction by making yourself available on
									customers preferred channels without
									additional effort.
								</p>
							</div>

							<div className="mt-10">
								<a href="#" className="button h-12 px-6">
									Get started
								</a>
							</div>
						</div>

						<div className="col-span-5">
							<img
								className="w-full"
								src="img/messenger/support-services.png"
								alt=""
							/>
						</div>
					</div>

					<div className="mt-12 grid grid-cols-4 gap-6 relative">
						{supportServices.map((service, index) => (
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
			</div>

			<div className="relative py-24">
				<div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"></div>
				<div className="top-highlight-gradient"></div>

				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-12 gap-28">
						<div className="col-span-5">
							<img
								className="w-full"
								src="img/messenger/engagement-services.png"
								alt=""
							/>
						</div>

						<div className="col-span-7 pb-12 flex flex-col items-start justify-center">
							<div className="flex items-center gap-2 text-sm/none">
								<div className="h-10 px-5 rounded-xl bg-success/20 text-success flex items-center gap-2">
									<SparklesIcon className="w-5" />
									Marketing
								</div>
							</div>

							<div className="mt-6">
								<h3 className="text-2xl md:text-5xl/tight">
									Engage with purpose
								</h3>

								<p className="mt-2 text-base/relaxed opacity-70 max-w-lg">
									Deliver the right and personalize message at
									the right time on the customer preferred
									channels.
								</p>
							</div>

							<div className="mt-10">
								<a href="#" className="button h-12 px-6">
									Get started
								</a>
							</div>
						</div>
					</div>

					<div className="mt-12 grid grid-cols-4 gap-6 relative">
						{supportServices.map((service, index) => (
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
			</div>
		</section>
	);
};

export default SalesAndMarketing;
