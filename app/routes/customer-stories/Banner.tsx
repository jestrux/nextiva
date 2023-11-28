const Banner = () => {
	return (
		<section className="md:py-16 overflow-hidden px-4 md:px-0">
			<div className="flex-1 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6">
				<span className="mb-4 py-2 pl-3 pr-3.5 rounded-full bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light inline-flex items-center gap-1.5">
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
						Customer Success Spotlight
					</span>
				</span>

				<h1 className="font-medium text-2xl md:text-6xl md:leading-tight mb-2 md:mb-6">
					How Phat Scooters Uses Nextiva to
					<span className="hidden md:inline">
						<br />
					</span>{" "}
					Create the Best Customer
					<span className="hidden md:inline">
						<br />
					</span>{" "}
					Experience Every Time.
				</h1>

				<p className="max-w-2xl opacity-80 font-normal text-sm/relaxed md:text-xl/relaxed mb-16">
					The high-end electric scooter company needed to level up its
					customer service as it grew. They found their solution in
					Nextiva
				</p>
			</div>

			<div className="max-w-7xl mx-auto px-6">
				<div className="relative w-full aspect-[1/0.5] bg-content/10 rounded-3xl overflow-hidden flex items-center justify-center">
					<img
						className="absolute inset-0 w-full h-full object-cover"
						src="img/customer-stories/banner.png"
						alt=""
					/>
					{/* <button className="mb-2 relative z-10 bg-black/50 text-white w-24 h-24 rounded-full flex items-center justify-center">
						<svg
							className="ml-1 w-12 h-12"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
								clipRule="evenodd"
							/>
						</svg>
					</button> */}
				</div>
			</div>
		</section>
	);
};

export default Banner;
