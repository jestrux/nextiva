export default function Banner() {
	return (
		<section className="md:py-20 overflow-hidden px-4 md:px-0 flex flex-col gap-10 md:gap-16 items-center justify-center relative">
			<div className="container md:px-12 flex flex-col items-center justify-center relative">
				<div className="flex-1 flex flex-col items-center text-center md:max-w-5xl">
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
							One platform that hadles it all
						</span>
					</span>
					<h1 className="text-2xl md:text-6xl md:leading-tight font-medium mb-2 md:mb-4">
						Amazing customer experience
						<span className="hidden md:inline">
							<br />
						</span>{" "}
						on social media
					</h1>
					<p className="mb-8 opacity-80 font-normal text-sm/loose md:text-lg/loose max-w-2xl">
						Stop using multiple solutions to market, monitor and
						support your customers on social media. Do it all from
						one integrated customer experience platform.
					</p>

					<div className="flex flex-col md:flex-row items-center gap-3">
						<a href="#" className="button">
							Get started
						</a>
						<a
							href="#"
							className="button button-outline hover:bg-content/5"
						>
							Case Studies
						</a>
					</div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto">
				<img
					className="w-full"
					src="img/social-marketing/banner.png"
					alt=""
				/>
			</div>

			<div className="bottom-highlight-gradient"></div>
		</section>
	);
}
