const FAQ = () => {
	const faqs = [
		{
			question: "What is Business Messaging?",
			answer: "Business Messaging is commonly a phrase used when customers interact with businesses via text/sms, web, social or other digital chat channels to inquire about products/service or raise concerns/complaints about their current experience with the brand.",
		},
		{
			question:
				"Can I track my usage & performance on messaging channels?",
			answer: "Business Messaging is commonly a phrase used when customers interact with businesses via text/sms, web, social or other digital chat channels to inquire about products/service or raise concerns/complaints about their current experience with the brand.",
		},
		{
			question: "Which Messaging Platforms does Nextiva Social support?",
			answer: "Business Messaging is commonly a phrase used when customers interact with businesses via text/sms, web, social or other digital chat channels to inquire about products/service or raise concerns/complaints about their current experience with the brand.",
		},
		{
			question: "Can multiple team members use Nextiva Social?",
			answer: "Business Messaging is commonly a phrase used when customers interact with businesses via text/sms, web, social or other digital chat channels to inquire about products/service or raise concerns/complaints about their current experience with the brand.",
		},
		{
			question: "How does Nextiva Social help with Business Messaging?",
			answer: "Business Messaging is commonly a phrase used when customers interact with businesses via text/sms, web, social or other digital chat channels to inquire about products/service or raise concerns/complaints about their current experience with the brand.",
		},
	];

	return (
		<section className="py-16 mb-8 relative">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col gap-2 items-center justify-center text-center">
					<h2 className="text-2xl md:text-5xl/tight font-medium">
						Frequently Asked Questions
					</h2>
				</div>

				<div className="mt-12 grid grid-cols-2 items-start gap-4 relative">
					{faqs.map((entry, index) => (
						<button
							key={index}
							x-data="{expanded: false}"
							x-on:click="expanded = !expanded"
							className="relative p-px rounded-xl overflow-hidden"
						>
							<div className="py-5 px-6 flex flex-col gap-2 border-l border-b border-b-content/[0.008] border-t border-content/10 bg-gradient-to-br from-content/10 via-content/[0.07] to-transparent rounded-xl overflow-hidden">
								<div className="text-left flex items-start gap-3 justify-between">
									<h3 className="font-semibold tracking-wide truncate">
										What is Business Messaging?
									</h3>
									<svg
										className="flex-shrink-0 mt-1 w-5 h-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
									>
										<path
											x-show="!expanded"
											id="add-icon"
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 4.5v15m7.5-7.5h-15"
										></path>
										<path
											x-show="expanded"
											id="minus-icon"
											className=""
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M19.5 12h-15"
										></path>
									</svg>
								</div>
								<p
									x-cloak
									x-show="expanded"
									className="mt-1 font-light text-sm/loose opacity-90"
								>
									Business Messaging is commonly a phrase used
									when customers interact with businesses via
									text/sms, web, social or other digital chat
									channels to inquire about products/service
									or raise concerns/complaints about their
									current experience with the brand.
								</p>
							</div>
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
