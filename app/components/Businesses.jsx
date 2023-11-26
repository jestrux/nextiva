export default function Businesses() {
    const featuredBusinesses = ["featured1", "featured2", "featured3"];

    const businesses = [
        "chair",
        "poly",
        "panasonic",
        "cisco",
        "tacobell",
        "amazon",
        "chair",
        "poly",
    ];

    return (
        <section className="-mt-20 mb-20 relative z-10">
            <div className="px-6 max-w-7xl mx-auto mb-16 flex gap-12 items-end">
                <div className="flex-shrink-0 text-3xl">
                    Trusted by 100,000+
                    <span className="hidden md:inline">
                        <br />
                    </span>{" "}
                    businesses, including:
                </div>

                <div className="flex-1 grid grid-cols-3 gap-4">
                    {featuredBusinesses.map((business, index) => (
                        <div
                            key={index}
                            className="border-l border-b border-b-content/[0.008] border-t border-content/10 bg-gradient-to-br from-content/10 via-content/[0.07] to-transparent rounded-lg max-w-lg py-2.5 px-2 flex items-center gap-3"
                        >
                            <div className="ml-1 w-8 h-8 rounded-full">
                                <img
                                    src={`img/businesses/${business}.svg`}
                                    alt=""
                                />
                            </div>

                            <p className="flex-1 text-xs/relaxed font-light opacity-80">
                                Best business phone system by U.S. News four
                                years in a row.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-1.5 items-center justify-between text-content/5">
                {businesses.map((business, index) => (
                    <img
                        key={index}
                        className="max-h-12 max-w-[100px]"
                        src={`img/businesses/${business}.svg`}
                        alt={business}
                    />
                ))}
            </div>
        </section>
    );
}
