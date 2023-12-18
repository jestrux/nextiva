import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function RegularSearchInput() {
	return (
		<div className={"relative"}>
			<input
				placeholder={"Search all news"}
				type="text"
				className={
					"rounded-full h-14 text-sm/none placeholder:text-white/70 pl-14 placeholder:font-light"
				}
			/>

			<MagnifyingGlassIcon
				strokeWidth={2}
				className={
					"h-10 w-10 absolute top-0 opacity-20 bottom-0 my-auto pl-4 "
				}
			/>
		</div>
	);
}

export default function SearchInput({
	placeholder = "Type to search",
	rounded = true,
}) {
	return (
		<div
			className={`relative p-px overflow-hidden ${
				rounded ? "bg-canvas rounded-full" : "rounded"
			}`}
		>
			{rounded && (
				<div
					className="absolute inset-0"
					style={{
						background:
							"radial-gradient(180.33% 92.46% at 50% 111.42%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 28.94%), radial-gradient(119.05% 61.04% at 50% -13.57%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 49.35%), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
					}}
				></div>
			)}

			<div
				className={`relative overflow-hidden ${
					rounded
						? "bg-canvas rounded-full"
						: "bg-content/5 border border-content/5 rounded"
				}`}
			>
				<MagnifyingGlassIcon className="absolute inset-y-0 my-auto left-3 w-4 h-4 opacity-40" />
				<input
					className="w-64 h-11 pb-2.5 text-sm/none pl-10 border-none"
					type="search"
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
}
