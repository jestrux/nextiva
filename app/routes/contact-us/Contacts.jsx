import {
	ChatBubbleLeftRightIcon,
	ChartBarSquareIcon,
	ArrowRightIcon,
	UserGroupIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/solid";

const Contacts = () => {
	return (
		<section className="py-8">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-2xl md:text-6xl md:leading-tight">
					Get in touch
				</h2>

				<div className="mt-12 grid grid-cols-2 gap-6 relative">
					<div className="relative p-px rounded-xl overflow-hidden">
						<div className="absolute rounded-xl inset-0 bg-gradient-to-b from-content/20 to-content/0"></div>

						<div className="min-h-full relative rounded-xl bg-canvas p-6 flex flex-col">
							<div className="flex items-center gap-3">
								<ChatBubbleLeftRightIcon className="w-7 opacity-30" />
								<h3 className="text-2xl font-medium">
									Support
								</h3>
							</div>

							<div className="mt-6 flex flex-col text-sm">
								<a
									href="#"
									className="py-2 flex items-center justify-between"
								>
									<span className="mb-0.5">
										Chat with support
									</span>
									<ArrowRightIcon className="w-4 opacity-40" />
								</a>
								<a
									href="#"
									className="py-2 flex items-center justify-between"
								>
									<span className="mb-0.5">
										Submit a ticket
									</span>
									<ArrowRightIcon className="w-4 opacity-40" />
								</a>
								<a
									href="#"
									className="py-2 flex items-center justify-between"
								>
									<span className="mb-0.5">
										Visit Nextiva Support
									</span>
									<ArrowRightIcon className="w-4 opacity-40" />
								</a>
							</div>
						</div>
					</div>

					<div className="relative p-px rounded-xl overflow-hidden">
						<div className="absolute rounded-xl inset-0 bg-gradient-to-b from-content/20 to-content/0"></div>

						<div className="min-h-full relative rounded-xl bg-canvas p-6 flex flex-col">
							<div className="flex items-center gap-3">
								<ChartBarSquareIcon className="w-7 opacity-30" />
								<h3 className="text-2xl font-medium">Sales</h3>
							</div>

							<div className="mt-6 flex flex-col text-sm">
								<a
									href="#"
									className="py-2 flex items-center justify-between"
								>
									<span className="mb-0.5">
										Small business
									</span>
									<ArrowRightIcon className="w-4 opacity-40" />
								</a>
								<a
									href="#"
									className="py-2 flex items-center justify-between"
								>
									<span className="mb-0.5">
										Enterprise sales
									</span>
									<ArrowRightIcon className="w-4 opacity-40" />
								</a>
								<a
									href="#"
									className="py-2 flex items-center justify-between"
								>
									<span className="mb-0.5">
										(800) 799-0600
									</span>
									<ArrowRightIcon className="w-4 opacity-40" />
								</a>
							</div>
						</div>
					</div>

					<div className="relative bg-primary rounded-xl overflow-hidden">
						<div className="min-h-full relative rounded-xl p-6 flex flex-col">
							<span className="text-xs opacity-50">
								Email us at
							</span>
							<span className="text-lg">support@nextiva.com</span>

							<EnvelopeIcon className="w-5 mt-auto opacity-50" />
						</div>
					</div>

					<div className="relative p-px rounded-xl overflow-hidden">
						<div className="absolute rounded-xl inset-0 bg-gradient-to-b from-content/20 to-content/0"></div>

						<div className="min-h-full relative rounded-xl bg-canvas p-6 flex flex-col">
							<div className="flex items-center gap-3">
								<UserGroupIcon className="w-7 opacity-30" />
								<h3 className="text-2xl font-medium">
									HR & Additional
								</h3>
							</div>

							<div className="mt-6 flex flex-col text-sm">
								<a
									href="#"
									className="py-2 flex items-center justify-between"
								>
									<span className="mb-0.5">
										Email human resources
									</span>
									<ArrowRightIcon className="w-4 opacity-40" />
								</a>
								<a
									href="#"
									className="py-2 flex items-center justify-between"
								>
									<span className="mb-0.5">Press</span>
									<ArrowRightIcon className="w-4 opacity-40" />
								</a>
								<a
									href="#"
									className="py-2 flex items-center justify-between"
								>
									<span className="mb-0.5">Careers</span>
									<ArrowRightIcon className="w-4 opacity-40" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
