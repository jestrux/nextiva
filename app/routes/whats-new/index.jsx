import GradientTag from "~/components/GradientTag";
import {
	MagnifyingGlassIcon,
	ArrowRightIcon,
	PhoneIcon,
	ChatBubbleOvalLeftIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Br from "~/components/Br";
import SectionHighlight from "~/components/SectionHighlight";
import MonthUpdate from "./MonthUpdate";

const WhatsNew = () => {
	const updates = [
		{
			image: "img/whats-new/october.png",
			month: "October",
			sections: [
				{
					title: "Admin",
					features: [
						"Expanded options for viewing user data",
						"Bulk send user’s welcome email",
					],
				},
				{
					title: "Events",
					features: ["Chat with a product expert"],
				},
			],
		},
		{
			image: "img/whats-new/september.png",
			month: "September",
			sections: [
				{
					title: "Calls",
					features: ["Up to 80% faster speed to answer"],
				},
				{
					title: "Mobile app",
					features: ["Upgraded call syncing"],
				},
				{
					title: "Meetings",
					features: ["Enhanced calendar integrations"],
				},
				{
					title: "Contacts",
					features: ["Improved data controls"],
				},
			],
		},
		{
			image: "img/whats-new/august.png",
			month: "August",
			sections: [
				{
					title: "New features + how-tos",
					features: [
						"Easily update to the best app version",
						"Auto-accept meeting guests",
						"Create an instant meeting",
						"Create a future meeting",
					],
				},
			],
		},
		{
			image: "img/whats-new/july.png",
			month: "July",
			sections: [
				{
					title: "Recap of the top 5 NextivaONE hacks",
					features: [
						"Recap of the top 5 NextivaONE hacks",
						"Add a note to your calls",
						"Start an instant meeting",
						"Call a department, not just an individual",
						"Silence all incoming communication",
					],
				},
			],
		},
		{
			image: "img/whats-new/june.png",
			month: "June",
			sections: [
				{
					features: [
						"Easily identify unknown numbers<>with enhanced Caller ID in conversation history",
						"Quickly see what they sent<>with file previews in texts and team chats",
						"Manage recurring meetings better.<>Edit one NextivaONE meeting or the whole series",
					],
				},
			],
		},
		{
			image: "img/whats-new/may.png",
			month: "May",
			sections: [
				{
					title: "Conversations just got easier",
					features: [
						"Log in less and still be secure<>with a seven-day login stretch",
						"Control the call<>right from your Jabra / Poly headset",
						"Forget remembering extensions.<>Call a team by name",
						"Relieve the hosting burden<>by letting others accept video meeting guests",
					],
				},
			],
		},
		{
			image: "img/whats-new/april.png",
			month: "April",
			sections: [
				{
					title: "Easy does it",
					features: [
						"Show up ready by setting your default audio device in advance",
						"Save important conversations with an instant call recording button",
						"Remember who you’re talking to with persistent Caller ID",
					],
				},
			],
		},
		{
			image: "img/whats-new/march.png",
			month: "March",
			sections: [
				{
					title: "Get it done — faster.",
					features: [
						"Work in peace by updating your status to do not disturb",
						"Eliminate error-prone manual dialing with highlight to call in NextivaONE",
						"Efficiently handle calls by warm/blind transferring on-hold calls or adding others",
					],
				},
			],
		},
	];

	const latestUpdate = {
		image: "img/whats-new/november.png",
		month: "November",
		sections: [
			{
				title: "Mobile app",
				features: ["Instantly identify missed calls and voicemails"],
			},
			{
				title: "Contacts",
				features: [
					"Bulk edit, delete, and export contacts",
					"Easily call, text, or copy a secondary number",
					"One-click to add a contact",
				],
			},
			{
				title: "Nextiva Call Center:",
				features: ["Live train agents during active calls"],
			},
		],
	};

	return (
		<div className="mt-8">
			<div className="max-w-6xl mx-auto">
				<section className="py-20">
					<GradientTag className="mb-4" label="What's new in 2023" />

					<h2 class="text-6xl/[1.15] tracking-wide font-medium">
						Product updates
						<Br />
						<span class="opacity-30 tracking-normal">
							Everything you need to
							<Br /> know about our products
						</span>
					</h2>

					<div className="mt-12">
						<MonthUpdate update={latestUpdate} />
					</div>
				</section>

				<section className="pt-20 pb-16 relative">
					<SectionHighlight top />

					<div className="flex items-center justify-between">
						<h3 className="text-4xl">Recent updates</h3>

						<div className="relative p-px rounded-full overflow-hidden">
							<div
								className="absolute inset-0"
								style={{
									background:
										"radial-gradient(180.33% 92.46% at 50% 111.42%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 28.94%), radial-gradient(119.05% 61.04% at 50% -13.57%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 49.35%), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
								}}
							></div>

							<div className="relative bg-canvas rounded-full">
								<MagnifyingGlassIcon className="absolute inset-y-0 my-auto left-3 w-4 h-4 opacity-40" />
								<input
									className="w-64 h-10 pb-2.5 text-sm/none pl-10 border-none"
									type="search"
									placeholder="Search for updates"
								/>
							</div>
						</div>
					</div>

					{updates.map((update, index) => (
						<MonthUpdate key={index} update={update} />
					))}

					<SectionHighlight bottom />
				</section>

				<section className="py-24 relative">
					<SectionHighlight top withDivider />
					<div className="flex flex-col gap-12 items-center text-center">
						<h3 className="md:text-5xl/[1.1]">
							You might also like
							<Br />
							these pages
						</h3>

						<div className="w-full max-w-5xl mx-auto grid grid-cols-3 gap-6">
							<a href="#" className="card-gradient-glow overflow-hidden px-6 py-4 rounded-lg flex items-center gap-3">
								<PhoneIcon className="w-4 opacity-50" />
								<span>Customer stories</span>
								<ArrowRightIcon className="w-4 ml-auto" />
							</a>
							<a href="#" className="card-gradient-glow overflow-hidden px-6 py-4 rounded-lg flex items-center gap-3">
								<ChatBubbleOvalLeftIcon className="w-4 opacity-50" />
								<span>Customer stories</span>
								<ArrowRightIcon className="w-4 ml-auto" />
							</a>
							<a href="#" className="card-gradient-glow overflow-hidden px-6 py-4 rounded-lg flex items-center gap-3">
								<VideoCameraIcon className="w-4 opacity-50" />
								<span>Customer stories</span>
								<ArrowRightIcon className="w-4 ml-auto" />
							</a>
						</div>
					</div>
					<SectionHighlight bottom withDivider />
				</section>
			</div>
		</div>
	);
};

export default WhatsNew;
