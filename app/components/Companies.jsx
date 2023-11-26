export default function Companies() {
    const companies = [
        {
            icon: "img/usa-today.svg",
            description:
                "Email, chat or call to get the help you need, when you need it most.",
        },
        {
            icon: "img/pc.svg",
            description:
                "Email, chat or call to get the help you need, when you need it most.",
        },
        {
            icon: "img/money.svg",
            description:
                "Email, chat or call to get the help you need, when you need it most.",
        },
        {
            icon: "img/nasdaq.svg",
            description:
                "Email, chat or call to get the help you need, when you need it most.",
        },
        {
            icon: "img/deloitte.svg",
            description:
                "Email, chat or call to get the help you need, when you need it most.",
        },
        {
            icon: "img/bloomberg.svg",
            description:
                "Email, chat or call to get the help you need, when you need it most.",
        },
    ];

    return (
        <section className="py-8 md:py-16 mb-20">
            <div className="grid grid-cols-6 gap-1.5 items-center">
                {companies.map((company, index) => (
                    <div
                        key={index}
                        className="aspect-[1/0.55] border border-content/10 bg-gradient-to-r from-content/[0.08] via-content/[0.08] to-content/0 relative rounded-xl p-4 flex flex-col gap-3 items-start justify-between"
                    >
                        <img className="h-6" src={company.icon} alt="" />

                        <p className="font-light text-xs/loose opacity-70">{company.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
