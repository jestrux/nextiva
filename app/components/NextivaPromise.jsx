export default function NextivaPromise() {
    const promises = [
        {
            image: "img/promise-uptime.png",
            title: "99.999% Uptime",
            description:
                "With real-time network status updates. So yu and your team never miss a beat.",
        },
        {
            image: "img/promise-security.png",
            title: "Enterprise-Grade Security",
            description:
                "With real-time network status updates. So yu and your team never miss a beat.",
        },
        {
            image: "img/promise-support.png",
            title: "24/7 Support",
            description:
                "Email, chat or call to get the help you need, when you need it most.",
        },
    ];

    return (
        <section className="relative">
            <div className="max-w-5xl mx-auto pt-12 pb-32 grid grid-cols-12">
                <div className="col-span-5 flex flex-col gap-4">
                    <h2 className="text-2xl md:text-5xl/tight">
                        The Nextiva
                        <span className="hidden md:inline">
                            <br />
                        </span>{" "}
                        Promise
                    </h2>

                    <p className="opacity-80 font-normal text-sm/loose">
                        Available to you on day one.
                    </p>
                </div>

                <div className="mt-2 col-span-7 flex flex-col gap-6">
                    {promises.map((promise, index) => (
                        <div
                            key={index}
                            className="border border-content/10 relative rounded-xl overflow-hidden flex gap-2"
                        >
                            <div
                                className="w-20 p-4 h-full flex items-center justify-center"
                                style={{
                                    background:
                                        "linear-gradient(100deg, rgba(255, 255, 255, 0.1) 47.8%, rgba(255, 255, 255, 0) 100.09%), linear-gradient(180deg, rgba(11, 16, 41, 0.12) 0%, rgba(11, 16, 41, 0) 100%)",
                                }}
                            >
                                <img
                                    className="w-10"
                                    src={promise.image}
                                    alt=""
                                />
                            </div>

                            <div className="p-5 bg-gradient-to-r from-content/[0.08] via-content/[0.08] to-content/0">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-base font-medium">
                                        {promise.title}
                                    </h3>

                                    <p className="font-light text-[11px]/loose opacity-50">
                                        {promise.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
