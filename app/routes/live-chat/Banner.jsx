import GradientTag from "~/components/GradientTag";
import { PresentationChartLineIcon } from "@heroicons/react/24/solid";

export default function Banner() {
	return (
		<section className={"pt-20 flex justify-center"}>
			<div className="flex-1 flex container flex-col items-center text-center md:max-w-5xl">
				<GradientTag
					className="mb-4"
					icon={PresentationChartLineIcon}
					label="Scale your business with"
				/>

				<h1 className="text-2xl md:text-6xl md:leading-tight tracking-wide font-semibold mb-2 md:mb-4">
					AI Powered Live Chat
				</h1>

				<p className="mb-8 opacity-80 font-normal text-sm/loose md:text-lg/loose max-w-xl">
					Resolve issues instantly, keep customers happy, and increase
					team efficiency with AI-powered chatbots for sales and
					support.
				</p>

				<div className="flex flex-col md:flex-row items-center gap-3">
					<a href="#" className="button">
						Get started
					</a>
					<a
						href="#"
						className="button button-outline hover:bg-content/5"
					>
						<span>Talk to an agent</span>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5"
						>
							<path
								fillRule="evenodd"
								d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
