export default function Testimonials() {
    return (
        <section className="py-8 md:py-12 mb-12">
            <div className="max-w-5xl mx-auto">
                <div className="border border-content/20 bg-gradient-to-r from-content/10 to-content/5 relative rounded-2xl py-3 px-2 flex items-center gap-12">
                    <div className="py-12 pl-14 flex flex-col gap-6">
                        <h2 className="text-2xl md:text-4xl/[1.2]">
                            “Nextiva enables us to have great conversations with
                            our fans everyday”
                        </h2>

                        <div className="mb-4">
                            Savannah Bananas,{" "}
                            <span className="opacity-60">
                                Jesse Cole, Owner
                            </span>
                        </div>
                    </div>

                    <div className="flex-shrink-0 w-1/2 aspect-[1/0.6] self-stretch min-h-full rounded-md overflow-hidden">
                        <img
                            className="w-full h-full object-cover object-top"
                            src="img/jesse-cole.jpg"
                            alt=""
                        />
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-4">
                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-content/10">
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <span className="w-2 h-2 rounded-full bg-content/20"></span>
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="w-2 h-2 rounded-full bg-content/20"></span>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-content/10">
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
                    </button>
                </div>
            </div>
        </section>
    );
}
