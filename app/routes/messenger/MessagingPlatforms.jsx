const MessagingPlatforms = () => {
	const platforms = [
		{
			icon: (
				<svg className="h-5" viewBox="0 0 11 24" fill="#1877F2">
					<path d="M7.33326 24H2.97139V12.1696H0V8.31792H2.97127V5.57715C2.97127 2.32932 4.28547 0 8.63553 0C9.55557 0 11 0.201761 11 0.201761V3.7783H9.48288C7.93705 3.7783 7.33349 4.28988 7.33349 5.70422V8.31792H10.9421L10.6208 12.1696H7.33337L7.33326 24Z" />
				</svg>
			),
			title: "Facebook Messenger",
			descrtiption:
				"Read and respond to all customer conversations on messenger.",
		},
		{
			icon: (
				<img
					className="h-5"
					src="img/messenger/instagram-logo.png"
					alt=""
				/>
			),
			title: "Instagram DM",
			descrtiption: "Respond to customer inquiries and DMs on Instagram.",
		},
		{
			icon: (
				<svg className="w-5" viewBox="0 0 24 20" fill="#1DA1F2">
					<path d="M24 2.30952C23.1174 2.70059 22.1693 2.96483 21.1725 3.08427C22.1894 2.47546 22.9694 1.50934 23.3372 0.359338C22.386 0.923797 21.3321 1.33389 20.2107 1.55374C19.3122 0.598259 18.0333 0 16.6169 0C13.8983 0 11.6935 2.20486 11.6935 4.92555C11.6936 5.30261 11.7362 5.67845 11.8203 6.046C7.72661 5.83984 4.10006 3.87912 1.6711 0.90054C1.24835 1.62986 1.00519 2.47547 1.00519 3.37601C1.00519 5.08406 1.87514 6.59242 3.19528 7.47503C2.4134 7.45012 1.64878 7.23885 0.965038 6.85878V6.9222C0.965038 9.30779 2.66152 11.2981 4.91501 11.7505C4.49216 11.8646 4.05605 11.9222 3.61808 11.9218C3.30706 11.922 2.99671 11.893 2.69113 11.8351C3.31792 13.7905 5.13595 15.2153 7.29114 15.2534C5.60521 16.5746 3.48174 17.3621 1.17538 17.3621C0.777953 17.3621 0.385798 17.3388 0 17.2933C2.17954 18.6918 4.76705 19.5056 7.54691 19.5056C16.6053 19.5056 21.5573 12.0031 21.5573 5.49632C21.5573 5.28494 21.552 5.0714 21.5425 4.86002C22.5044 4.1645 23.3394 3.29885 23.9978 2.31267L24 2.30952Z" />
				</svg>
			),
			title: "Twitter Chat",
			descrtiption:
				"Respond to conversations on Twitter efficiently with advanced automation",
		},
		{
			icon: (
				<img
					className="h-5"
					src="img/messenger/whatsapp-logo.png"
					alt=""
				/>
			),
			title: "WhatsApp",
			descrtiption:
				"Leverage AI to automatically route tickets to your agents.",
		},
		{
			icon: (
				<svg className="h-5" viewBox="0 0 24 24" fill="currentColor">
					<path d="M4.913 2.658C6.988 2.388 9.103 2.25 11.25 2.25C13.397 2.25 15.512 2.389 17.587 2.658C19.509 2.908 20.878 4.519 20.992 6.385C20.6577 6.27362 20.3112 6.20278 19.96 6.174C17.1582 5.94141 14.3418 5.94141 11.54 6.174C9.182 6.37 7.5 8.364 7.5 10.608V14.894C7.49906 15.7178 7.72577 16.5258 8.15512 17.2288C8.58446 17.9319 9.19973 18.5026 9.933 18.878L7.28 21.53C7.17511 21.6348 7.04153 21.7061 6.89614 21.735C6.75074 21.7638 6.60004 21.749 6.46308 21.6923C6.32611 21.6356 6.20903 21.5395 6.12661 21.4163C6.04419 21.2931 6.00013 21.1482 6 21V16.97C5.6372 16.9314 5.27484 16.8888 4.913 16.842C2.905 16.58 1.5 14.833 1.5 12.862V6.638C1.5 4.668 2.905 2.919 4.913 2.658Z" />
					<path d="M15.75 7.5C14.374 7.5 13.011 7.557 11.664 7.669C10.124 7.797 9 9.103 9 10.609V14.894C9 16.401 10.128 17.708 11.67 17.834C12.913 17.936 14.17 17.991 15.438 17.999L18.22 20.78C18.3249 20.8848 18.4585 20.9561 18.6039 20.985C18.7493 21.0139 18.9 20.999 19.0369 20.9423C19.1739 20.8856 19.291 20.7896 19.3734 20.6663C19.4558 20.5431 19.4999 20.3982 19.5 20.25V17.86L19.83 17.834C21.372 17.709 22.5 16.401 22.5 14.894V10.608C22.5 9.103 21.375 7.797 19.836 7.668C18.4769 7.55562 17.1137 7.49957 15.75 7.5Z" />
				</svg>
			),
			title: "Live Chat",
			descrtiption:
				"Automatically route high-priority tickets to human agents.",
		},
		{
			icon: (
				<svg className="h-5" viewBox="0 0 24 24" fill="white">
					<path d="M10.5 18.75C10.3011 18.75 10.1103 18.829 9.96967 18.9697C9.82902 19.1103 9.75 19.3011 9.75 19.5C9.75 19.6989 9.82902 19.8897 9.96967 20.0303C10.1103 20.171 10.3011 20.25 10.5 20.25H13.5C13.6989 20.25 13.8897 20.171 14.0303 20.0303C14.171 19.8897 14.25 19.6989 14.25 19.5C14.25 19.3011 14.171 19.1103 14.0303 18.9697C13.8897 18.829 13.6989 18.75 13.5 18.75H10.5Z" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8.625 0.75C7.72989 0.75 6.87145 1.10558 6.23851 1.73851C5.60558 2.37145 5.25 3.22989 5.25 4.125V19.875C5.25 20.7701 5.60558 21.6286 6.23851 22.2615C6.87145 22.8944 7.72989 23.25 8.625 23.25H15.375C16.2701 23.25 17.1286 22.8944 17.7615 22.2615C18.3944 21.6286 18.75 20.7701 18.75 19.875V4.125C18.75 3.22989 18.3944 2.37145 17.7615 1.73851C17.1286 1.10558 16.2701 0.75 15.375 0.75H8.625ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75V3.375C9.75 3.996 10.254 4.5 10.875 4.5H13.125C13.746 4.5 14.25 3.996 14.25 3.375V3H15.375C15.996 3 16.5 3.504 16.5 4.125V19.875C16.5 20.496 15.996 21 15.375 21H8.625C8.32663 21 8.04048 20.8815 7.8295 20.6705C7.61853 20.4595 7.5 20.1734 7.5 19.875V4.125Z"
					/>
				</svg>
			),
			title: "In-App Chat",
			descrtiption:
				"Manage customer inquiries within your own app by integrating it.",
		},
		{
			icon: (
				<img className="h-5" src="img/messenger/line-logo.png" alt="" />
			),
			title: "Line",
			descrtiption:
				"Respond to conversations on Twitter efficiently with advanced automation.",
		},
		{
			icon: (
				<img
					className="h-5"
					src="img/messenger/viber-logo.png"
					alt=""
				/>
			),
			title: "Viber",
			descrtiption:
				"Enable your customers to connect with you on Viber anytime.",
		},
	];

	return (
		<section className="py-20 relative">
			<div className="top-highlight-gradient"></div>

			<div className="container">
				<div className="flex flex-col gap-2 items-center justify-center text-center">
					<h2 className="text-2xl md:text-6xl/tight font-medium">
						Meet your customers on their favorite
						<span className="hidden md:inline">
							<br />
						</span>
						messaging platform
					</h2>
				</div>

				<div className="mt-20 max-w-6xl mx-auto">
					<div className="grid grid-cols-4 gap-6 relative">
						{platforms.map((platform, index) => (
							<div
								key={index}
								className="relative p-px rounded-xl overflow-hidden"
							>
								<div className="absolute rounded-xl inset-0 bg-gradient-to-b from-content/20 to-content/0"></div>

								<div className="min-h-full relative rounded-xl bg-canvas p-5 flex flex-col">
									<div className="w-12 h-12 rounded-full flex items-center justify-center border border-content/10 bg-gradient-to-br from-content/[0.08] via-content/[0.08] to-content/0">
										{platform.icon}
									</div>

									<h3 className="mt-4 text-lg">
										{platform.title}
									</h3>

									<p className="mt-1 font-light text-xs/relaxed opacity-60">
										{platform.descrtiption}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="mt-12 flex items-center justify-center">
					<a
						href="#"
						className="p-3 group hover:opacity-90 mt-6 inline-flex items-center gap-2"
					>
						See all channels
						<svg
							className="group-hover:translate-x-0.5 transition-transform w-5 h-5 mt-0.5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};

export default MessagingPlatforms;
