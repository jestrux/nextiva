const Results = () => {
	return (
		<section className="mb-24">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-2xl md:text-5xl/tight font-medium">
					Nextiva customers realize value and
					<span className="hidden md:inline">
						<br />
					</span>
					results quickly.
				</h2>

				<div className="mt-16 w-full max-w-4xl overflow-visible">
					<div className="flex gap-4">
						<div className="p-8 w-1/3 aspect-[1/1.25] flex-shrink-0 border-l border-b border-b-content/[0.008] border-t border-content/10 bg-gradient-to-br from-content/10 via-content/[0.07] to-transparent rounded-2xl overflow-hidden flex flex-col items-start justify-between gap-3">
							<div className="flex flex-col">
								<h3 className="text-2xl">
									"Our fans come first, and Nextiva enables us
									to have great conversations with our fans
									everyday."
								</h3>

								<div className="mt-4 opacity-60">
									Savannah Bananas, Owner
								</div>
							</div>

							<a
								href="#"
								className="hover:opacity-90 mt-6 inline-flex items-center gap-3"
							>
								Read case study
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

						<div className="w-1/3 aspect-[1/1.25] flex-shrink-0 border-l border-b border-b-content/[0.008] border-t border-content/10 bg-gradient-to-br from-content/10 via-content/[0.07] to-transparent rounded-2xl overflow-hidden flex flex-col items-start justify-between gap-3">
							<img
								className="w-full h-full object-cover"
								src="img/jesse-cole.jpg"
								alt=""
							/>
						</div>

						<div className="p-8 w-1/3 aspect-[1/1.25] flex-shrink-0 border-l border-b border-b-content/[0.008] border-t border-content/10 bg-gradient-to-br from-content/10 via-content/[0.07] to-transparent rounded-2xl overflow-hidden flex flex-col items-start justify-between gap-3">
							<img
								className="h-6"
								src="img/messenger/tata-play-logo.png"
								alt=""
							/>

							<div className="mt-5 flex flex-col gap-8">
								<div className="flex flex-col gap-1">
									<h3 className="text-4xl/none font-medium tracking-wide">
										21M+
									</h3>
									<p className="text-sm/none opacity-60">
										Customers
									</p>
								</div>

								<div className="flex flex-col gap-1">
									<h3 className="text-4xl/none font-medium tracking-wide">
										40%
									</h3>
									<p className="text-sm/none opacity-60">
										Cost Reduction
									</p>
								</div>
							</div>

							<a
								href="#"
								className="hover:opacity-90 mt-6 inline-flex items-center gap-3"
							>
								Read case study
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

						<div className="w-1/3 aspect-[1/1.25] flex-shrink-0 border-l border-b border-b-content/[0.008] border-t border-content/10 bg-gradient-to-br from-content/10 via-content/[0.07] to-transparent rounded-2xl overflow-hidden flex flex-col items-start justify-between gap-3">
							<img
								className="w-full h-full object-cover"
								src="img/messenger/tata-play-case-study.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Results;
