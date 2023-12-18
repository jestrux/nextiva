import LinkButton from "~/components/LinkButton";

export default function Stories() {
	const stories = [
		{
			title: "Rallying Record Crowds In The Desert: How Nextiva Boosts Advocacy For Arizona's #1 Soccer Team",
			logo: "/img/all-customer-stories/phoenix-logo.png",
			photo: "/img/all-customer-stories/phoenix-rising-poster.png",
		},
		{
			title: "Maximizing Lifetime Value For Rack Attack’s 1M+ Auto Enthusiasts",
			logo: "/img/all-customer-stories/rack-logo.png",
			photo: "/img/all-customer-stories/rack-attack-poster.png",
		},
		{
			title: "How Nextiva Powers Phat Scooters' 5-Star Customer Experience",
			logo: "/img/news-and-media/techcircle-log.png",
			photo: "/img/news-and-media/techcircle.png",
		},
		{
			title: "Crafting 5-Star Safety Nets For California's Most Vulnerable Citizens",
			logo: "/img/news-and-media/usa-today-logo.png",
			photo: "/img/news-and-media/usa-today.png",
		},
		{
			title: "Tomas Gorny: From humble begginings to customer experience innovator",
			photo: "/img/news-and-media/humble.png",
			date: "Nov 15 2023",
		},
	];

	return (
		<section className="pt-20">
			<div
				x-data="{step: 0, totalSteps: 2}"
				className="max-w-6xl mx-auto overflow-visible"
			>
				<h2 className="text-2xl md:text-5xl/tight font-medium text-center">
					Real businesses. Lasting Impact.
				</h2>

				<div
					className="mt-16 flex"
					x-bind:style="{transform: `translateX(calc(${40 * -step}% - ${1.8 * step}rem))`}"
					style={{ gap: "1.8rem" }}
				>
					{stories.map(({ photo, logo, title }, index) => (
						<div
							key={index}
							className="flex flex-col items-start relative flex-shrink-0"
							style={{ width: "40%" }}
						>
							<div className="mb-5 h-72 w-full overflow-hidden relative rounded-lg">
								<img
									src={photo}
									alt=""
									className="h-full w-full object-cover object-bottom"
								/>
							</div>

							<img src={logo} alt="" className="h-7 mb-4" />

							<h3 className="text-2xl font-medium">{title}</h3>

							<LinkButton label="Read more" />
						</div>
					))}

					<div className="w-32">&nbsp;</div>
				</div>

				<div className="mt-12 flex items-center justify-center gap-4">
					<button
						x-on:click="previousStep()"
						x-bind:class="!canGoBack && 'opacity-50 pointer-events-none'"
						className="w-10 h-10 border border-content/40 rounded-full flex items-center justify-center hover:bg-content/10"
					>
						<svg
							className="w-4 h-4"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
								clipRule="evenodd"
							/>
						</svg>
					</button>

					<button
						x-on:click="nextStep()"
						x-bind:class="!canGoForward && 'opacity-50 pointer-events-none'"
						className="w-10 h-10 border border-content/40 rounded-full flex items-center justify-center hover:bg-content/10"
					>
						<svg
							className="w-4 h-4"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
