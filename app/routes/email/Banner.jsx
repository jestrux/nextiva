import GradientTag from "~/components/GradientTag";
import Br from "~/components/Br";
import SectionHighlight from "~/components/SectionHighlight";

export default function Banner() {
	return (
		<section className="md:py-20 overflow-hidden px-4 md:px-0 flex flex-col gap-10 md:gap-16 items-center justify-center relative">
			<div className="container md:px-12 flex flex-col items-center justify-center relative">
				<div className="flex-1 flex flex-col items-center text-center md:max-w-5xl">
					<GradientTag
						className="mb-4"
						label="AI Powered"
					/>
					<h1 className="text-2xl md:text-6xl md:leading-tight font-medium mb-2 md:mb-4">
                        Provide Amazing Email<Br/>Customer Experience
					</h1>
					<p className="mb-8 opacity-80 font-normal text-sm/loose md:text-lg/loose max-w-2xl mx-auto">
                        AI-Powered Email for Sales, Service, Marketing. Designed for High-Performance Teams. Reclaim up to 4 hours every week.
					</p>

					<div className="flex flex-col md:flex-row items-center gap-3">
						<a href="#" className="button">
							Get started
						</a>
						<a href="#" className="button button-outline">
							Case Studies
						</a>
					</div>
				</div>
			</div>

			<img className="w-full" src="img/email/banner2.png" alt="" />

			<SectionHighlight bottom withDivider />
		</section>
	);
}
