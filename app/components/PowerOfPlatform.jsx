import { CheckIcon } from "@heroicons/react/24/solid";

export default function PowerOfPlatform() {
    const powers = [
        {
            title: "All channels together",
            description:
                "House all your communication channels in a single place.",
        },
        {
            title: "Customer management",
            description:
                "House all your communication channels in a single place.",
        },
        {
            title: "Team collaboration",
            description:
                "House all your communication channels in a single place.",
        },
        {
            title: "Rich insight and AI",
            description:
                "House all your communication channels in a single place.",
        },
    ];

    return (
        <section className="mb-24 pt-32 pb-40 relative">
            <div className="container">
                <div className="flex flex-col gap-2 items-center justify-center text-center">
                    <h2 className="text-2xl md:text-5xl/tight">
                        The power of the Nextiva
                        <span className="hidden md:inline">
                            <br />
                        </span>{" "}
                        conversation platform
                    </h2>
                </div>

                <div className="mt-20 max-w-6xl mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-5 flex flex-col gap-4">
                            {powers.map((power, index) => (
                                <div
                                    key={index}
                                    className={`border border-content/10 bg-gradient-to-r from-content/[0.08] via-content/[0.08] to-content/0 relative rounded-xl p-5 flex flex-col gap-2 justify-between
                                            ${index != 0 && "opacity-30"}
                                        `}
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckIcon className="w-4" />

                                        <h3 className="text-sm font-medium">
                                            {power.title}
                                        </h3>
                                    </div>

                                    <p className="font-light text-xs/loose opacity-70">
                                        {power.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div
                            className="relative col-span-7 rounded-xl overflow-hidden"
                            style={{
                                background: "rgba(23, 29, 53, 1)",
                            }}
                        >
                            <img
                                className="absolute inset-0 w-full h-full scale-95 origin-bottom-right"
                                src="img/power-of-platform.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-20 max-w-2xl mx-auto flex flex-col gap-6">
                    <p className="text-2xl/relaxed text-center">
                        “NextivaOne aims to remove the friction, frustration,
                        inefficiencies, and errors that come.”
                    </p>

                    <div className="flex items-center justify-center gap-3">
                        <img className="w-14" src="img/yan-santos.png" alt="" />

                        <div className="flex flex-col">
                            <span>Yan Santos,</span>
                            <span className="opacity-60">Founder of IBM</span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-content/5 via-content/5 to-transparent"
                style={{
                    background:
                        "radial-gradient(180.33% 92.46% at 50% 111.42%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 28.94%)",
                }}
            ></div>
        </section>
    );
}
