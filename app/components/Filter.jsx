import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Filter({
	id,
	label = "Select one",
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
			className="p-px"
		>
			<div className="text-lg font-medium">{label}</div>

			<div className="mt-1 pb-4">
				{choices.map((choice, index) => (
					<div key={index}>
						<label className="inline-flex items-center py-1 gap-3">
							<input
								type="checkbox"
								value={choice}
								x-model="values"
							/>
							<span className="opacity-80 font-light">
								{choice}
							</span>
						</label>
					</div>
				))}
			</div>
		</div>
	);
}
