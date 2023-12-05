import { CalendarDaysIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import GradientTag from "~/components/GradientTag";

const MonthUpdate = ({ update }) => {
	return (
		<div className="py-12 grid grid-cols-12 gap-16 items-center">
			<div className="col-span-5 aspect-square rounded-3xl overflow-hidden bg-content">
				<img
					className="w-full h-full object-cover object-left"
					src={update.image}
					alt=""
				/>
			</div>
			<div className="col-span-7 flex flex-col items-start">
				<GradientTag
					icon={CalendarDaysIcon}
					label={`${update.month} product updates`}
				/>
				<h3 className="mt-3 text-4xl">What's new for {update.month}</h3>

				<div className="mt-5 flex flex-col gap-3">
					{update.sections.map((section, index) => (
						<div key={index} className="text-sm">
							{section.title && (
								<div className="text-base font-medium mb-3">
									{section.title}:
								</div>
							)}
							<div className="pl-5">
								<ul className="list-disc text-content/70 flex flex-col gap-4">
									{section.features.map((feature, index) => {
										var featureArray = feature.split("<>");
										if (featureArray.length > 1) {
											return (
												<li key={index}>
													<span className="text-content">
														{featureArray[0]}
													</span>{" "}
													{featureArray[1]}
												</li>
											);
										}

										return <li key={index}>{feature}</li>;
									})}
								</ul>
							</div>
						</div>
					))}
				</div>

				<a href="#" className="mt-6 flex items-center gap-2 border border-content/40 rounded-full h-11 pl-5 pr-4">
					Learn more
					<ArrowRightIcon className="mt-0.5 w-4" />
				</a>
			</div>
		</div>
	);
};

export default MonthUpdate;
