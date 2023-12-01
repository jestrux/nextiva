export default function LinkButton({ href = "#", label = "Learn more" }) {
	return (
		<a
			href={href}
			className="hover:opacity-90 mt-6 inline-flex items-center gap-3"
		>
			{label}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className="w-5 h-5 mt-0.5"
			>
				<path
					fillRule="evenodd"
					d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
					clipRule="evenodd"
				/>
			</svg>
		</a>
	);
}
