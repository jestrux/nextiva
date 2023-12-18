const Careers = () => {
	return (
		<div className="mt-8">
			<section
				className="py-20"
				x-on:location-changed="location = $event.detail.value"
				x-on:type-changed="type = $event.detail.value"
				x-on:team-changed="team = $event.detail.value"
			>
				<div className="max-w-6xl mx-auto">
					<div className="flex items-end gap-20">
						<div className="w-80 flex flex-col gap-4">
							<h3 className="text-2xl md:text-5xl/[1.1]">
								Apply now!
							</h3>
						</div>
						<div className="flex-1">
							<div className="bg-content/10 h-10 px-4 rounded-lg inline-flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									className="w-4"
								>
									<path
										fill-rule="evenodd"
										d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
										clip-rule="evenodd"
									></path>
									<path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
								</svg>
								<span className="text-sm">
									19 open positions
								</span>
							</div>
						</div>
					</div>
					<div className="mt-12 flex items-start gap-20">
						<div className="w-80 flex flex-col">
							<div className="relative p-px overflow-hidden rounded">
								<div className="relative overflow-hidden bg-content/5 border border-content/5 rounded">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
										className="absolute inset-y-0 my-auto left-3 w-4 h-4 opacity-40"
									>
										<path
											fill-rule="evenodd"
											d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
											clip-rule="evenodd"
										></path>
									</svg>
									<input
										className="w-64 h-11 pb-2.5 text-sm/none pl-10 border-none"
										type="search"
										placeholder="Type to search"
									/>
								</div>
							</div>
							<div className="mt-5">
								<div
									x-data="{expanded: false, values: []}"
									x-init="$watch('values', value => $dispatch('location-changed', {value: value}))"
									className="p-px"
								>
									<div className="text-lg font-medium">
										Location
									</div>
									<div className="mt-1 pb-4">
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Mexico"
												/>
												<span className="opacity-80 font-light">
													Mexico
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="United States"
												/>
												<span className="opacity-80 font-light">
													United States
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Scottsdale, Arizona"
												/>
												<span className="opacity-80 font-light">
													Scottsdale, Arizona
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Bangalore, Karnataka"
												/>
												<span className="opacity-80 font-light">
													Bangalore, Karnataka
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Guadalajara, Jalisco"
												/>
												<span className="opacity-80 font-light">
													Guadalajara, Jalisco
												</span>
											</label>
										</div>
									</div>
								</div>
								<div
									x-data="{expanded: false, values: []}"
									x-init="$watch('values', value => $dispatch('type-changed', {value: value}))"
									className="p-px"
								>
									<div className="text-lg font-medium">
										Type
									</div>
									<div className="mt-1 pb-4">
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Mexico"
												/>
												<span className="opacity-80 font-light">
													Mexico
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="United States"
												/>
												<span className="opacity-80 font-light">
													United States
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Scottsdale, Arizona"
												/>
												<span className="opacity-80 font-light">
													Scottsdale, Arizona
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Bangalore, Karnataka"
												/>
												<span className="opacity-80 font-light">
													Bangalore, Karnataka
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Guadalajara, Jalisco"
												/>
												<span className="opacity-80 font-light">
													Guadalajara, Jalisco
												</span>
											</label>
										</div>
									</div>
								</div>
								<div
									x-data="{expanded: false, values: []}"
									x-init="$watch('values', value => $dispatch('team-changed', {value: value}))"
									className="p-px"
								>
									<div className="text-lg font-medium">
										Team
									</div>
									<div className="mt-1 pb-4">
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Sales"
												/>
												<span className="opacity-80 font-light">
													Sales
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Customer Success"
												/>
												<span className="opacity-80 font-light">
													Customer Success
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Technology"
												/>
												<span className="opacity-80 font-light">
													Technology
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Marketing"
												/>
												<span className="opacity-80 font-light">
													Marketing
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Product Development"
												/>
												<span className="opacity-80 font-light">
													Product Development
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="People &amp; Culture"
												/>
												<span className="opacity-80 font-light">
													People &amp; Culture
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Strategic Growth"
												/>
												<span className="opacity-80 font-light">
													Strategic Growth
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Finance &amp; Accounting"
												/>
												<span className="opacity-80 font-light">
													Finance &amp; Accounting
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Sales Operations"
												/>
												<span className="opacity-80 font-light">
													Sales Operations
												</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center py-1 gap-3">
												<input
													type="checkbox"
													x-model="values"
													value="Administration &amp; Legal"
												/>
												<span className="opacity-80 font-light">
													Administration &amp; Legal
												</span>
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-1">
							<div className="border-t border-b divide-y">
								<div className="group pt-5 pb-4 flex items-center justify-between">
									<div className="flex flex-col gap-1">
										<h3 className="text-xl">
											Oracle Integration Cloud Engineer
										</h3>
										<div className="flex items-center gap-2 opacity-70">
											<span className="text-sm/none tracking-wide">
												Business Technology
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												Mexico(Remote)
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												September 19, 2023
											</span>
										</div>
									</div>
									<a
										href="#"
										className="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs"
									>
										Apply
									</a>
								</div>
								<div className="group pt-5 pb-4 flex items-center justify-between">
									<div className="flex flex-col gap-1">
										<h3 className="text-xl">
											Direct Sales Account Executive
										</h3>
										<div className="flex items-center gap-2 opacity-70">
											<span className="text-sm/none tracking-wide">
												Business Technology
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												Mexico(Remote)
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												September 19, 2023
											</span>
										</div>
									</div>
									<a
										href="#"
										className="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs"
									>
										Apply
									</a>
								</div>
								<div className="group pt-5 pb-4 flex items-center justify-between">
									<div className="flex flex-col gap-1">
										<h3 className="text-xl">
											Product Specific Account Executive
										</h3>
										<div className="flex items-center gap-2 opacity-70">
											<span className="text-sm/none tracking-wide">
												Business Technology
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												Mexico(Remote)
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												September 19, 2023
											</span>
										</div>
									</div>
									<a
										href="#"
										className="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs"
									>
										Apply
									</a>
								</div>
								<div className="group pt-5 pb-4 flex items-center justify-between">
									<div className="flex flex-col gap-1">
										<h3 className="text-xl">
											Director of Tax
										</h3>
										<div className="flex items-center gap-2 opacity-70">
											<span className="text-sm/none tracking-wide">
												Business Technology
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												Mexico(Remote)
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												September 19, 2023
											</span>
										</div>
									</div>
									<a
										href="#"
										className="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs"
									>
										Apply
									</a>
								</div>
								<div className="group pt-5 pb-4 flex items-center justify-between">
									<div className="flex flex-col gap-1">
										<h3 className="text-xl">
											Sales Readiness Trainer
										</h3>
										<div className="flex items-center gap-2 opacity-70">
											<span className="text-sm/none tracking-wide">
												Business Technology
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												Mexico(Remote)
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												September 19, 2023
											</span>
										</div>
									</div>
									<a
										href="#"
										className="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs"
									>
										Apply
									</a>
								</div>
								<div className="group pt-5 pb-4 flex items-center justify-between">
									<div className="flex flex-col gap-1">
										<h3 className="text-xl">
											Sales Readiness Trainer
										</h3>
										<div className="flex items-center gap-2 opacity-70">
											<span className="text-sm/none tracking-wide">
												Business Technology
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												Mexico(Remote)
											</span>
											<span className="font-bold mx-1 opacity-80">
												·
											</span>
											<span className="text-sm/none tracking-wide">
												September 19, 2023
											</span>
										</div>
									</div>
									<a
										href="#"
										className="opacity-0 group-hover:opacity-100 button button-outline h-9 pb-0.5 text-xs"
									>
										Apply
									</a>
								</div>
							</div>
							<div className="mt-10">
								<a href="#" className="button button-small">
									View All
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Careers;
