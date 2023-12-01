export default function Button({
	href,
	outline = false,
	white = false,
	small = false,
	children,
}) {
	var className = `button 
		${outline && "button-outline"} 
		${white && "button-white"}
		${small && "button-small"}
	`;

	if (href) {
		return (
			<a href="#" className={className}>
				{children}
			</a>
		);
	}

	return <button className={className}>{children}</button>;
}
