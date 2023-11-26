export default function CTA() {
    return (
        <section className="py-8 md:py-12 mb-12">
            <div className="container">
                <div className="border-content/10 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/0 relative rounded-2xl max-w-4xl mx-auto py-14 px-4 flex flex-col items-center justify-center gap-6 text-center">
                    <h2 className="text-2xl md:text-5xl/[1.2] mb-2 md:mb-4">
                        Ready to make business
                        <span className="hidden md:inline">
                            <br />
                        </span>{" "}
                        conversations better?
                    </h2>

                    <button className="button">Let's talk business</button>
                </div>
            </div>
        </section>
    );
}
