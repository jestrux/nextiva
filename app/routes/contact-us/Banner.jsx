import { ChatBubbleOvalLeftIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Banner() {
	return (
		<section className="md:pt-20 mb-20">
			<div className="overflow-hidden px-4 md:px-0 flex flex-col gap-10 md:gap-16 items-center justify-center relative">
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
								Contact Us
							</span>
						</span>
						<h1 className="text-2xl md:text-6xl md:leading-tight font-medium mb-2 md:mb-4">
							Support when you need it
						</h1>
						<p className="mb-8 opacity-80 font-normal text-sm/loose md:text-lg/loose max-w-lg">
							Learn about our Suites, the products that power
							them, and the platform that supports everything we
							build.
						</p>

						<div className="flex flex-col md:flex-row items-center gap-3">
							<a href="#" className="button">
								Chat with support now
							</a>
						</div>
					</div>
				</div>

				<img
					className="-mt-32 w-full relative z-10"
					src="img/contact-us/banner.png"
					alt=""
				/>

				<div className="bottom-highlight-gradient vibrant"></div>
			</div>

			<div className="max-w-5xl mx-auto">
				<div className="py-4 flex items-center justify-between text-sm">
					<span className="inline-flex items-center gap-1.5">
						<svg
							className="mb-0.5 w-4 md:w-5 text-primary"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clipRule="evenodd"
							/>
						</svg>
						<span>
							Hours of operation
						</span>
					</span>

					<span className="inline-flex items-center gap-1.5">
						<PhoneIcon className="mb-0.5 w-4 md:w-5 text-primary" />

						<span>
							Phone Support{" "}
							<span className="ml-1 opacity-60">24/7</span>
						</span>
					</span>

					<span className="inline-flex items-center gap-1.5">
						<ChatBubbleOvalLeftIcon className="mb-0.5 w-4 md:w-5 text-primary" />

						<span>
							Live Chat{" "}
							<span className="ml-1 opacity-60">
								Mon - Fri: 5 am - 6 pm MST Sat - Sun: 5 am - 4
								pm MST
							</span>
						</span>
					</span>
				</div>

				<div class="pointer-events-none inset-x-6 h-px bg-gradient-to-r from-content/[0.03] via-content/30 to-content-[0.03]"></div>
			</div>
		</section>
	);
}
