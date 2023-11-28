export default function Results() {
	const promises = [
		{
			title: "Hybrid capable",
			description:
				"Growing rapidly in headcount and revenue post-adoption",
		},
		{
			title: "Quality control",
			description:
				"Maintaining call quality control via advanced call recording and analytics",
		},
		{
			title: "Growing",
			description:
				"Maintaining call quality control via advanced call recording and analytics",
		},
	];

	return (
		<section className="relative">
			<div className="max-w-5xl mx-auto pt-12 pb-32 grid grid-cols-12">
				<div className="col-span-5 flex flex-col gap-4">
					<h2 className="text-2xl md:text-5xl/tight font-medium">Results</h2>

					<p className="opacity-80 font-normal text-sm/loose">
						Nextiva makes results.
					</p>
				</div>

				<div className="mt-2 col-span-7 flex flex-col gap-6">
					{promises.map((promise, index) => (
						<div
							key={index}
							className="border border-content/10 relative rounded-xl overflow-hidden flex gap-2"
						>
							<div
								className="w-20 p-4 h-full flex items-center justify-center"
								style={{
									background:
										"linear-gradient(100deg, rgba(255, 255, 255, 0.1) 47.8%, rgba(255, 255, 255, 0) 100.09%), linear-gradient(180deg, rgba(11, 16, 41, 0.12) 0%, rgba(11, 16, 41, 0) 100%)",
								}}
							>
								<span className="text-2xl font-medium tracking-wide">
									{(index + 1).toString().padStart(2, "0")}
								</span>
							</div>

							<div className="p-5 bg-gradient-to-r from-content/[0.08] via-content/[0.08] to-content/0">
								<div className="flex flex-col gap-2">
									<h3 className="text-xl">
										{promise.title}
									</h3>

									<p className="font-light text-[11px]/loose opacity-50">
										{promise.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
