export default function Trends() {
    const trends = [
        {
            icon: "img/customer-requests.svg",
            name: "Resolve up yo 80% customer requests instantly",
        },
        {
            icon: "img/customer-satisfaction.svg",
            name: "Increase customer satisfaction with amazing and predictable experiences",
        },
    ];

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto py-20 relative">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-content/[0.03] via-content/30 to-content-[0.03]"></div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl md:text-5xl/tight">
                        The future of customer
                        <span className="hidden md:inline">
                            <br />
                        </span>{" "}
                        conversion is AI
                    </h2>

                    <p className="opacity-80 font-normal text-sm/loose">
                        AI Bot that brings Proactive Experience to keep your
                        customers satisfied,{" "}
                        <span className="hidden md:inline">
                            <br />
                        </span>{" "}
                        teams happy and keeps costs in check.
                    </p>
                </div>

                <div className="mt-12 flex items-center gap-2">
                    {trends.map((trend, index) => (
                        <div
                            key={index}
                            className="w-[70%] flex items-center gap-8 flex-shrink-0"
                            style={{ opacity: index == 0 ? 1 : 0.5 }}
                        >
                            <img className="h-32" src={trend.icon} alt="" />

                            <h3 className="text-3xl/tight font-medium">
                                {trend.name}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-content/[0.03] via-content/30 to-content-[0.03]"></div>
            </div>
        </section>
    );
}
