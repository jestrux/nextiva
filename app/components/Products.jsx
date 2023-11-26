import {
    CircleStackIcon,
    CloudArrowDownIcon,
    CubeIcon,
} from "@heroicons/react/24/solid";
import { TvIcon } from "@heroicons/react/24/outline";

export default function Products() {
    const productMap = {
        "Experience Cloud": {
            title: "Get the best cloud",
            description:
                "Lorem Ipsum has been the industry's standard dummy text.",
            items: [
                {
                    icon: <CircleStackIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <CloudArrowDownIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <TvIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <CubeIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <TvIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <CubeIcon className="w-4" />,
                    name: "Experience Cloud",
                },
            ],
        },
        "Communications Cloud": {
            title: "The best communication",
            description:
                "Lorem Ipsum has been the industry's standard dummy text.",
            items: [
                {
                    icon: <CircleStackIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <CloudArrowDownIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <TvIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <CubeIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <TvIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <CubeIcon className="w-4" />,
                    name: "Experience Cloud",
                },
            ],
        },
        "Social Marketing Cloud": {
            title: "Keep accurate tabs on socials",
            description:
                "Lorem Ipsum has been the industry's standard dummy text.",
            items: [
                {
                    icon: <CircleStackIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <CloudArrowDownIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <TvIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <CubeIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <TvIcon className="w-4" />,
                    name: "Experience Cloud",
                },
                {
                    icon: <CubeIcon className="w-4" />,
                    name: "Experience Cloud",
                },
            ],
        },
    };

    var product = productMap["Experience Cloud"];

    return (
        <section className="mb-24 py-20 relative">
            <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-content/5 via-content/5 to-transparent"
                style={{
                    background:
                        "radial-gradient(119.05% 61.04% at 50% -13.57%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 49.35%)",
                }}
            ></div>

            <div className="container">
                <div className="flex flex-col gap-2 items-center justify-center text-center">
                    <h2 className="text-2xl md:text-5xl/tight">
                        Nextiva Products
                    </h2>

                    <p className="max-w-2xl opacity-80 font-normal text-sm/loose md:text-base/loose">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley.
                    </p>
                </div>

                <div className="mt-20 max-w-6xl mx-auto">
                    <div className="grid grid-cols-3 gap-6 -mb-2.5 relative">
                        {Object.keys(productMap).map((title, index) => (
                            <button
                                key={index}
                                className={`border-t border-l border-r border-content/20 bg-gradient-to-r from-content/10 to-content/5 relative rounded-tl-xl rounded-tr-xl overflow-hidden
                                    ${
                                        index == 0
                                            ? "opacity-100"
                                            : "opacity-50 hover:opacity-90"
                                    }
                                `}
                                style={{
                                    background:
                                        "linear-gradient(213.28deg, #151F42 22.72%, rgba(41, 43, 55, 0) 109.79%), linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 102.33%)",
                                    // background:
                                    //     index == 0
                                    //         ? "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(212.14deg, #151F42 21.38%, rgba(41, 43, 55, 0) 109.96%)"
                                    //         : "linear-gradient(213.28deg, #151F42 22.72%, rgba(41, 43, 55, 0) 109.79%), linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 102.33%)",
                                }}
                            >
                                <div
                                    className="px-6 pt-5 pb-7 text-center font-medium"
                                    style={{ opacity: index == 0 ? 1 : 0.85 }}
                                >
                                    {title}
                                </div>
                            </button>
                        ))}
                    </div>
                    <div
                        className="border border-content/20 bg-gradient-to-r from-content/10 to-content/5 relative rounded-xl overflow-hidden"
                        style={{
                            background:
                                "linear-gradient(213.28deg, #151F42 22.72%, rgba(41, 43, 55, 0) 109.79%), linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 102.33%)",
                        }}
                    >
                        <div className="flex items-center gap-6">
                            <div className="py-12 pl-12 flex flex-col items-start gap-6">
                                <div className="mb-">
                                    <h3 className="text-3xl font-medium mb-3">
                                        {product.title}
                                    </h3>

                                    <p className="opacity-80 font-normal text-sm/loose">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2">
                                    {product.items.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`flex flex-col gap-2 py-4 ${
                                                index > 1 &&
                                                "border-t border-content/5"
                                            }`}
                                        >
                                            <div className="flex items-center gap-2">
                                                {item.icon}

                                                <h3 className="text-sm">
                                                    {item.name}
                                                </h3>
                                            </div>

                                            <p className="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                                Lorem Ipsum has been the
                                                industry's standard dummy.
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <a href="#" className="button h-11 text-sm">
                                    Learn more
                                </a>
                            </div>

                            <div className="flex-shrink-0 w-[45%] aspect-[1/0.6] self-stretch min-h-full">
                                <img
                                    className="w-full h-full object-cover object-top"
                                    src="img/product-preview.png"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div
                            className="py-4 px-5 flex items-center justify-between text-xs"
                            style={{
                                background:
                                    "linear-gradient(251.56deg, rgba(66, 114, 231, 0.14) 62.68%, rgba(255, 255, 255, 0) 95.53%)",
                            }}
                        >
                            <span className="py-2 pl-3 pr-3.5 rounded-full bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light">
                                <span className="opacity-60">Case study</span>
                            </span>

                            <span>
                                How Phat Scooters Uses Nextiva to Create the
                                Best Customer Experience Every Time
                            </span>

                            <a href="#" className="flex items-center gap-1.5">
                                Read case study
                                <svg
                                    className="w-4 h-4"
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
                </div>
            </div>
        </section>
    );
}
