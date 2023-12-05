import Divider from "./Divider";

export default function SectionHighlight({
	withDivider = false,
	bottom = false,
}) {
	return (
		<div
			className={`${
				bottom ? "bottom-highlight-gradient" : "top-highlight-gradient"
			}`}
		>
			{withDivider && (
				<Divider capped {...(bottom ? { bottom: true } : {})} />
			)}
		</div>
	);
}
