export default function Testimonial() {
	return (
		<section className="py-8 md:py-12 mb-32">
			<div className="max-w-6xl mx-auto">
				<div className="border border-content/20 bg-gradient-to-r from-content/10 to-content/5 relative rounded-2xl p-4 flex items-center gap-16">
					<div className="py-14 pl-14 flex flex-col gap-6">
						<h2 className="text-3xl md:text-[2.6rem]/[1.2] font-medium">
							“What led us to looking for a new business phone was
							the efficiencies of Nextiva.”
						</h2>

						<div className="mb-4">
							Kelly Green,{" "}
							<span className="opacity-60">
								General Manager Avit
							</span>
						</div>
					</div>

					<div className="flex-shrink-0 w-1/2 aspect-[1/0.6] self-stretch min-h-full rounded-xl overflow-hidden">
						<img
							className="w-full h-full object-cover object-top"
							src="img/customer-stories/kelly-green.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
