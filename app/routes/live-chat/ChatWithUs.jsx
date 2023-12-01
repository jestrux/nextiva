export default function ChatWithUs() {
	return (
		<section className="py-20">
			<div className="max-w-5xl mx-auto border border-content/20 bg-gradient-to-r from-content/10 to-content/5 rounded-3xl py-20 px-12 flex justify-center">
				<div className="space-y-8">
					<div className="flex items-center">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="h-11 w-11 rounded-full -mr-4"
								style={{ zIndex: 3 - i }}
							>
								<img
									className="h-full w-full object-cover"
									src={`img/customer-stories/team${i}.png`}
									alt=""
								/>
							</div>
						))}
					</div>

					<h3
						className={"text-[2.8rem] font-medium leading-[3.4rem]"}
					>
						Hello, Ross.
						<span class="hidden md:inline">
							<br />
						</span>
						How can we help?
					</h3>

					<div
						className={
							"bg-white text-black flex justify-between items-center px-9 py-6 rounded-3xl space-x-20"
						}
					>
						<div className="space-y-3.5">
							<h5 className="text-2xl/none">Live chat with us</h5>
							<p className="font-light tracking-wider text-lg/none">
								Start with Nextie, we'll jump in if needed.
							</p>
						</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-8 h-8 text-primary"
						>
							<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
}
