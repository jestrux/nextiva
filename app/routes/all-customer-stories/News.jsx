import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import SectionTitle from "~/components/SectionTitle";
import LinkButton from "~/components/LinkButton";
import Divider from "~/components/Divider";
import Select from "~/components/Select";
import SearchInput from "~/components/SearchInput";

function NewsListItem({ title, photo, logo, date, small }) {
	return (
		<div className="flex flex-col items-start relative flex-shrink-0">
			<div className="mb-4 aspect-video w-full overflow-hidden relative rounded-lg">
				<img
					src={photo}
					alt=""
					className="h-full w-full object-cover object-bottom"
				/>
			</div>

			<div
				className={
					"mb-1.5 flex items-center gap-2 bg-content/[0.08] w-fit px-3 py-2 rounded-full"
				}
			>
				<CalendarDaysIcon className="h-4 w-4" />
				<span className={"text-sm/none tracking-wide"}>{date}</span>
			</div>

			<h3 className="text-xl">{title}</h3>

			<LinkButton label="Read more" />
		</div>
	);
}

export default function News() {
	const newsList = [
		{
			title: "Immigration and diverse populace made America an innovation superpower",
			photo: "/img/news-and-media/techcircle.png",
			date: "Nov 15 2023",
			logo: "/img/news-and-media/azcentral-logo.png",
		},
		{
			title: "Never have an exit strategy, advises Tomas Gorny, Co-founder and CEO of Nextiva",
			photo: "/img/news-and-media/delivering-innovation.png",
			date: "Nov 15 2023",
			logo: "/img/news-and-media/azcentral-logo.png",
		},
		{
			title: "How will AI impact the future of work?",
			photo: "/img/news-and-media/thought-about-AI.png",
			date: "Nov 13 2023",
			logo: "/img/news-and-media/azcentral-logo.png",
		},
		{
			title: "Multimillionaire at 22 to broke to a nearly $1 billion private equity sale: The Inspiring...",
			photo: "/img/news-and-media/azcentral.png",
			date: "Nov 13 2023",
			logo: "/img/news-and-media/azcentral-logo.png",
		},
		{
			title: "How Nextiva is revolutionizing business communication using Cloud and Generative AI",
			photo: "/img/news-and-media/a-robot-holding-a-man.png",
			date: "Nov 13 2023",
			logo: "/img/news-and-media/azcentral-logo.png",
		},
		{
			title: "Tech Entrepreneur Tomas Gorny strikes again: Leverages conversations to help",
			photo: "/img/news-and-media/tec-enterpreneure.png",
			date: "Nov 15 2023",
			logo: "/img/news-and-media/azcentral-logo.png",
		},
		{
			title: "Nextiva plans to expand India team in next one year",
			photo: "/img/news-and-media/nextiva-plans.png",

			date: "Nov 15 2023",
			logo: "/img/news-and-media/azcentral-logo.png",
		},
		{
			title: "US-based Nextiva to hire 100 employees in India",
			photo: "/img/news-and-media/hire-employess.png",
			date: "Nov 15 2023",
			logo: "/img/news-and-media/azcentral-logo.png",
		},
	];

	const choices = [
		"Communication Suite",
		"Customer Experience Suite",
		"Sales and Commerce Suite",
		"Marketing Suite",
	];

	return (
		<section
			className="py-20"
			x-data="{currentPage: 1, totalPages: 4, canGoBack: false, canGoForward: false, industry: [], serviceUsed: [], companySize: []}"
			x-on:industry-changed="industry = $event.detail.value"
			x-on:serviceused-changed="serviceUsed = $event.detail.value"
			x-on:companysize-changed="companySize = $event.detail.value"
		>
			<div className="max-w-6xl mx-auto">
				<SectionTitle
					large
					title={
						"See how brands create remarkable \ncustomer experiences with Nextiva"
					}
				/>

				<div className="mt-4 flex items-start gap-20">
					<div className="w-80 flex flex-col gap-4 sticky top-24">
						<SearchInput />

						<Select
							id="industry"
							placeholder="Industry"
							choices={choices}
						/>

						<Select
							id="serviceused"
							placeholder="Service used"
							choices={choices}
						/>

						<Select
							id="companysize"
							placeholder="Company size"
							choices={choices}
						/>
					</div>

					<div className="mt-1 flex-1">
						<div className={"grid grid-cols-2 gap-x-7 gap-y-10"}>
							{newsList.map((news, index) => (
								<NewsListItem small key={index} {...news} />
							))}
						</div>
					</div>
				</div>

				<div className="mt-20">
					<Divider opacity={0.6} />
					<div className="flex justify-between py-3 items-center relative">
						<button
							x-on:click="previousStep()"
							x-bind:class="!canGoBack && 'opacity-50 pointer-events-none'"
							className="w-10 h-10 rounded-full flex items-center justify-center border-none bg-transparent hover:bg-content/10"
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

						<div className="flex items-center gap-4 justify-center">
							<template x-for="(_, index) in Array.from({ length: totalPages })">
								<button
									className="border-none bg-transparent hover:bg-content/10 h-7 w-7 flex justify-center items-center rounded-full text-sm"
									x-bind:class="index + 1 == currentPage ? 'bg-content/5' : 'opacity-50 hover:opacity-80'"
									x-on:click="currentPage = index + 1"
								>
									<span x-text="index + 1"></span>
								</button>
							</template>
						</div>

						<button
							x-on:click="nextStep()"
							x-bind:class="!canGoForward && 'opacity-50 pointer-events-none'"
							className="w-10 h-10 rounded-full flex items-center justify-center border-none bg-transparent hover:bg-content/10"
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

					<Divider opacity={0.6} />
				</div>
			</div>
		</section>
	);
}
