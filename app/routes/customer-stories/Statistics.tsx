const Statistics = () => {
	const stats = [
		{
			title: "Professional",
			subtitle: "Plan",
		},
		{
			title: "2017",
			subtitle: "Started using Nextiva Services",
		},
		{
			title: "23",
			subtitle: "Users",
		},
	];

	return (
		<section className="w-full py-12 mb-24">
			<div className="relative max-w-6xl mx-auto py-24 px-6">
				<div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-content/[0.03] via-content/30 to-content-[0.03]"></div>

				<div className="grid grid-cols-12 gap-24 h-56">
					<div className="col-span-5 pr-10 flex flex-col gap-6">
						{stats.map((stat, index) => (
							<div
								key={index}
								className="border border-gray-500/40 rounded-xl pl-7 pt-5 pb-6"
							>
								<p className="text-4xl font-medium mb-1">
									{stat.title}
								</p>
								<p className="text-sm opacity-50">
									{stat.subtitle}
								</p>
							</div>
						))}
					</div>

					<div className="col-span-7">
						<p className="mb-7 text-xl/relaxed">
							Phat Scooters is a high-end electric scooter maker
							based in Phoenix, Arizona. In 2020, they adopted
							Nextiva to empower their customer support team to
							better serve their customers and improve their
							overall business decision-making
						</p>

						<p className="text-base/loose opacity-70 mb-10">
							Founded in 2017, Phat Scooters selss high-end
							electric scooters to consumers around the world,
							servicing customers such as Bill Murray and Jeremy
							Renner. In Fall 2020, they began to search for an
							alternative business phone platform to their
							previous business phone provider, Verizon.
						</p>

						<span className="mb-4 py-5 pl-5 pr-3.5 rounded-xl bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light inline-flex items-center gap-1.5">
							<svg
								className="mb-0.5 w-4 md:w-5"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="opacity-60 text-xs md:text-base">
								Favourite Features: Call Recording, Call Groups,
								App, Auto-Attendant
							</span>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Statistics;
