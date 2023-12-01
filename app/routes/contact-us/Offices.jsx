const Offices = () => {
	const offices = [
		{
			image: "img/contact-us/scottsdale-office.png",
			name: "🇺🇸 Scottsdale",
			address:
				"9451 East Via de Ventura Scottsdale, AZ 85256, United States",
		},
		{
			image: "img/contact-us/kyiv-office.png",
			name: "🇺🇦 Kyiv",
			address: "57 Pavla Skoropadskoho Street Kyiv 01032 Ukraine",
		},
		{
			image: "img/contact-us/guadalajara-office.png",
			name: "🇲🇽 Guadalajara",
			address:
				"Av. Rubén Darío 425, Piso 8,Col. Circunvalación Vallarta44680 Guadalajara, Jalisco. Mexico",
		},
		{
			image: "img/contact-us/bengaluru-office.png",
			name: "🇮🇳 Bengaluru",
			address:
				"91springboard 7th Floor, Trifecta Adatto 21, ITPL Main Road Garudachar Palya, MahadevapuraBengaluru, Karnataka 560048 India",
		},
	];

	return (
		<section className="py-24 relative">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl text-center md:text-6xl md:leading-tight">
					Our Offices
				</h2>

				<div className="mt-12" x-data="{currentOfficeTab: 0}">
					<div className="grid grid-cols-4 gap-3 relative">
						{offices.map((office, index) => (
							<button
								key={index}
								x-on:click={`currentOfficeTab = ${index}`}
								x-bind:class={`currentOfficeTab == ${index} && 'bg-content text-canvas'`}
								class="rounded-xl h-14 border border-content/20 flex items-center justify-center"
							>
								{office.name}
							</button>
						))}
					</div>

					<div className="mt-6">
						{offices.map((office, index) => (
							<div
								{...(index != 0 ? { "x-cloak": "true" } : {})}
								x-show={`currentOfficeTab == ${index}`}
								key={index}
								className="aspect-[1/0.4] flex gap-6"
							>
								<div className="flex flex-1 border border-content/20 rounded-2xl overflow-hidden">
									<div className="flex-shrink-0 w-2/5 py-10 px-8 bg-gradient-to-r from-content/10 to-content/5 flex flex-col gap-4">
										<h3>{office.name}</h3>
										<p className="text-lg/loose">
											{office.address}
										</p>

										<a
											href="#"
											className="hover:opacity-50 group-hover:opacity-100 mt-auto inline-flex items-center gap-3"
										>
											View on Google Maps
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
									<div className="flex-1">
										<iframe
											title="9451 East Via de Ventura Scottsdale, AZ 85256, United States"
											className="map-top"
											width="100%"
											height="100%"
											src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCgh9Vk9mVINncaMWi1TpkZYw5NicrKAZw&q=${office.address}`}
											allowfullscreen=""
										></iframe>
									</div>
								</div>

								<div className="flex-shrink-0 w-1/4 rounded-xl overflow-hidden">
									<img
										className="w-full h-full object-cover"
										src={office.image}
										alt=""
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bottom-highlight-gradient vibrant"></div>
		</section>
	);
};

export default Offices;
