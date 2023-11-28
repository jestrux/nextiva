export default function OtherCustomerStories() {
	var stories = [
		{
			image: "img/customer-stories/blog1.png",
			title: "A Full-Throttle Business Platform Built for an American Icon",
		},
		{
			image: "img/customer-stories/blog2.png",
			title: "A Full-Throttle Business Platform Built for an American Icon",
		},
		{
			image: "img/customer-stories/blog2.png",
			title: "A Full-Throttle Business Platform Built for an American Icon",
		},
	];

	return (
		<section className="mb- py-24 relative">
			<div
				className="pointer-events-none absolute inset-0 bg-gradient-to-br from-content/5 via-content/5 to-transparent"
				style={{
					background:
						"radial-gradient(119.05% 61.04% at 50% -13.57%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 49.35%)",
				}}
			></div>

			<div className="max-w-6xl mx-auto px-6">
				<h3 className="text-5xl font-medium text-center">
					See other customer stories
				</h3>

				<div className="mt-10 grid grid-cols-3 gap-6">
					{stories.map((item, index) => (
						<div key={index} className="py-4 group">
							<div className="rounded-xl overflow-hidden aspect-video">
								<img src={item.image} alt="" />
							</div>

							<h3 className="mt-3 text-2xl font-medium">
								{item.title}
							</h3>

							<a
								href="#"
								className="opacity-50 group-hover:opacity-100 mt-6 inline-flex items-center gap-3"
							>
								Learn more
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-5 h-5 mt-0.5"
								>
									<path
										fillRule="evenodd"
										d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</div>
					))}
				</div>

				<div className="mt-12 flex items-center justify-center">
					<a href="#" className="button">
						Read case studies
					</a>
				</div>
			</div>
		</section>
	);
}
