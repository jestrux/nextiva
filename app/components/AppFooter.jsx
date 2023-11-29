export default function AppFooter() {
    const productLinks = [
        "What’s New",
        "Commercial Phone Service",
        "Small Business Phone Service",
        "Small Business VoIP",
        "Cloud  PBX",
        "VoIP Call Center",
        "VoIP Phones",
        "Sales Pipeline CRM",
        "Customer Service CRM",
        "All Products",
    ];

    const communityLinks = [
        "Support",
        "Newsletter",
        "News & Media",
        "Partners",
        "Events",
        "Webinars",
    ];

    const companyLinks = [
        "About",
        "Contact Us",
        "Leadership",
        "Nextiva Cares",
        "Careers - WE’RE HIRING",
        "System Status 100%",
    ];

    const recentBlogs = [
        "Four Leadership Lessons From the CEO Transforming How Businesses Communicate",
        "Nextiva Recognized as a Customers’ Choice in 2 Categories in 2023",
        "Why AI is Needed to Meet Today's Consumer Expectations",
    ];

    const extraLinks = [
        "Legal",
        "Privacy Policy",
        "Security Policy",
        "Patents",
        "Site Map",
    ];

    return (
        <>
            <footer className="text-content/70 relative z-10 text-sm">
                <div className="p-6 md:pt-12 pb-4 md:pb-10 container leading-loose grid grid-cols-12">
                    <div className="hidden md:block col-span-5 min-h-full">
                        <div className="min-h-full mr-6 pr-16 relative">
                            <div className="flex flex-col gap-3">
                                <a href="/" className="pb-2 ml-1 text-content">
                                    <svg
                                        id="logoSvg"
                                        className="h-7 text-content"
                                        viewBox="0 0 116 34"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M45.6952 12.9354C49.0073 12.9354 51.6872 10.2295 51.6872 6.89741C51.6872 3.56533 49.0019 0.859375 45.6952 0.859375C42.3885 0.859375 39.7031 3.56533 39.7031 6.89741C39.7031 10.2295 42.3885 12.9354 45.6952 12.9354Z"
                                            fill="#F8B400"
                                        />
                                        <path d="M11.3357 14.2969H0V33.1133H5.33827V18.3367H10.0011C11.1142 18.3367 12.0057 19.2351 12.0057 20.3567V33.1351H17.344V20.3567C17.344 16.9974 14.6424 14.2969 11.3303 14.2969H11.3357Z" />
                                        <path d="M70.0436 29.0717H66.5478C65.5158 28.99 64.7 28.1297 64.7 27.0517V18.3132H70.0382V14.2733H64.7V7.55469H59.3617V14.2733H57.0222L54.0234 18.3132H59.3617V27.068C59.3617 30.4056 62.0416 33.1061 65.3537 33.1061H70.0166V30.8684L70.0382 29.0662L70.0436 29.0717Z" />
                                        <path d="M55.7192 14.2969H49.7056L45.7181 19.6761L41.709 14.2969H35.6953L42.7031 23.6942L35.6953 33.1133H41.709L45.7181 27.7341L49.7056 33.1133H55.7192L48.7114 23.6942L55.7192 14.2969Z" />
                                        <path d="M92.7187 14.2969L88.0558 26.2749L83.3929 14.2969H78.0547L85.3975 33.1133H90.7196L98.0624 14.2969H92.7241H92.7187Z" />
                                        <path d="M76.7211 14.2969H71.3828V33.1133H76.7211V14.2969Z" />
                                        <path d="M76.7211 7.57812H71.3828V12.9574H76.7211V7.57812Z" />
                                        <path d="M28.0114 29.0718C26.3257 29.0718 24.8938 27.6725 24.2995 25.7125H37.1427C37.2832 25.07 37.3588 24.3949 37.3588 23.6926C37.3588 18.493 33.1714 14.2734 28.0114 14.2734C22.8515 14.2734 18.6641 18.493 18.6641 23.6926C18.6641 28.8921 22.8515 33.1117 28.0114 33.1117H34.3439L37.3426 29.0718H28.0114ZM28.0114 18.3351C29.6972 18.3351 31.129 19.7343 31.7234 21.6944H24.2995C24.8938 19.7126 26.3419 18.3351 28.0114 18.3351Z" />
                                        <path d="M109.11 14.2969H99.3846L97.8177 18.3367H107.781C108.894 18.3367 109.786 19.2351 109.786 20.3567V21.6961H101.784V21.7178C98.8065 21.8975 96.4453 24.3748 96.4453 27.4183C96.4453 30.4618 98.8065 32.9391 101.784 33.1188V33.1406H115.124V20.3621C115.102 17.0028 112.422 14.3023 109.11 14.3023V14.2969ZM103.118 25.7523C103.215 25.7305 103.318 25.7305 103.394 25.7142H109.786V29.0735H103.415C103.318 29.0735 103.215 29.0517 103.14 29.0353C102.383 28.8774 101.811 28.1969 101.811 27.3965C101.811 26.5962 102.346 25.9156 103.124 25.7577L103.118 25.7523Z" />
                                    </svg>
                                </a>

                                <p className="opacity-80">
                                    Software that helps you simplify your
                                    business
                                </p>

                                <div className="mt-2 flex items-center gap-2">
                                    <a
                                        href="#"
                                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-content/10"
                                        target="blank"
                                    >
                                        <svg
                                            className="w-4"
                                            fill="currentColor"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-content/10"
                                        target="blank"
                                    >
                                        <svg
                                            className="w-4"
                                            fill="currentColor"
                                            viewBox="0 0 310 310"
                                        >
                                            <path d="M81.703 165.106h33.981V305a5 5 0 0 0 5 5H178.3a5 5 0 0 0 5-5V165.765h39.064a5 5 0 0 0 4.967-4.429l5.933-51.502a5 5 0 0 0-4.966-5.572h-44.996V71.978c0-9.732 5.24-14.667 15.576-14.667h29.42a5 5 0 0 0 5-5V5.037a5 5 0 0 0-5-5h-40.545A39.746 39.746 0 0 0 185.896 0c-7.035 0-31.488 1.381-50.804 19.151-21.402 19.692-18.427 43.27-17.716 47.358v37.752H81.703a5 5 0 0 0-5 5v50.844a5 5 0 0 0 5 5.001z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-content/10"
                                        target="blank"
                                    >
                                        <svg
                                            className="w-4"
                                            fill="currentColor"
                                            viewBox="0 0 310 310"
                                        >
                                            <path d="M72.16 99.73H9.927a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5H72.16a5 5 0 0 0 5-5V104.73a5 5 0 0 0-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 0 0-5-5h-59.599a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5h62.097a5 5 0 0 0 5-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 0 0 5 5H305a5 5 0 0 0 5-5V194.995c0-49.565-9.451-100.234-79.546-100.234z" />
                                        </svg>
                                    </a>
                                </div>

                                <div className="w-full mt-4 border-l border-t border-b border-content/10 bg-gradient-to-r from-content/[0.08] via-content/[0.08] to-content/0 relative rounded-2xl max-w-4xl mx-auto p-6 pl-8 flex flex-col gap-3">
                                    <h3 className="text-content text-base font-semibold">
                                        Recent blog posts
                                    </h3>

                                    {recentBlogs.map((blog, index) => (
                                        <a
                                            href="#"
                                            key={index}
                                            className="flex hover:text-content"
                                        >
                                            <p className="flex-1 truncate">
                                                {blog}
                                            </p>
                                            <span className="flex-shrink-0">
                                                →
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-content/5 via-content/30 to-content/5"></div>
                        </div>
                    </div>

                    <div className="pl-12 col-span-7 text-center text-xs md:text-left flex justify-between gap-12">
                        <div className="md:flex flex-col items-between md:items-start ">
                            <div className="flex flex-col gap-6">
                                <h5
                                    href="#"
                                    className="text-base font-semibold text-content"
                                >
                                    Products
                                </h5>

                                {productLinks.map((link, index) => (
                                    <a href="#" key={index}>
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="md:flex flex-col items-between md:items-start ">
                            <div className="flex flex-col gap-6">
                                <h5
                                    href="#"
                                    className="text-base font-semibold text-content"
                                >
                                    Community
                                </h5>

                                {communityLinks.map((link, index) => (
                                    <a href="#" key={index}>
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="md:flex flex-col items-between md:items-start ">
                            <div className="flex flex-col gap-6">
                                <h5
                                    href="#"
                                    className="text-base font-semibold text-content"
                                >
                                    Company
                                </h5>

                                {companyLinks.map((link, index) => (
                                    <a href="#" key={index}>
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t h-20 text-content/50 flex items-center border-content/10">
                    <div className="container px-6 flex items-center justify-between">
                        <div className="text-xs/relaxed fontl">
                            Nextiva is the #1 Rated Business Phone System.
                            <span className="hidden md:inline">
                                <br />
                            </span>{" "}
                            Copyright 2023 Nextiva. All Rights Reserved.
                        </div>

                        <div className="flex items-center gap-3">
                            {extraLinks.map((link, index) => (
                                <a
                                    href="#"
                                    className="px-2 hover:text-content font-medium"
                                    key={index}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
