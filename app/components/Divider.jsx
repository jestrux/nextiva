export default function Divider({ capped = false, top, bottom }) {
	return (
		<div
			className="w-full flex justify-center"
			style={{
				position: top ?? bottom ?? false ? "absolute" : "",
				...(top ? { top: 0 } : bottom ? { bottom: 0 } : {}),
			}}
		>
			<div
				className="w-full h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"
				style={{ maxWidth: capped ? "40rem" : "" }}
			></div>
		</div>
	);
}
