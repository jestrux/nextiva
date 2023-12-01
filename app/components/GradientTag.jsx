import { StarIcon } from "@heroicons/react/24/solid";

export default function GradientTag({
	icon: Icon = StarIcon,
	image,
	label,
	className = "",
}) {
	return (
		<span
			className={`${className} ${
				image ? "md:text-sm" : "md:text-base"
			} text-xs py-2 pl-3 pr-3.5 rounded-full bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light inline-flex items-center gap-1.5 w-fit`}
		>
			{!image ? (
				<Icon className="mb-0.5 w-4 md:w-5" />
			) : (
				<img
					className="-ml-3 -my-2 h-11 w-11 object-cover rounded-l-full rounded-t-full"
					src={image}
					alt={""}
				/>
			)}

			<span className="opacity-60">{label}</span>
		</span>
	);
}
