import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Divider from "./Divider";

export default function Select({
	id,
	placeholder = "Select one",
	choices = [
		"Communication Suite",
		"Customer Experience Suite",
		"Sales and Commerce Suite",
		"Marketing Suite",
	],
}) {
	return (
		<div
			x-data="{expanded: false, values: []}"
			x-init={`$watch('values', value => $dispatch('${id}-changed', {value: value}))`}
			className="relative p-px rounded-xl overflow-hidden"
		>
			<div
				className="flex flex-col border border-content/10 bg-content/5 overflow-hidden"
				x-bind:style="{borderRadius: expanded ? '20px' : '30px'}"
			>
				<button
					className="py-3 pl-5 pr-4 text-left flex items-center gap-3 justify-between"
					x-on:click="expanded = !expanded"
				>
					<div className="truncate">{placeholder}</div>

					<ChevronDownIcon
						x-bind:class="expanded && '-rotate-180'"
						className="h-4 w-4 opacity-70 transition-all"
						strokeWidth={2}
					/>
				</button>

				<div
					x-cloak
					x-show="expanded"
					className="px-4 font-light text-sm/loose opacity-90"
				>
					<Divider />

					<div className="pt-2 pb-4">
						{choices.map((choice, index) => (
							<label
								key={index}
								className="flex items-center gap-3"
							>
								<input
									type="checkbox"
									value={choice}
									x-model="values"
								/>
								<span>{choice}</span>
							</label>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
