import GradientTag from "~/components/GradientTag.jsx";

export default function Banner() {
  return (
    <section className="md:py-20 overflow-hidden px-4 md:px-0 flex flex-col gap-10 md:gap-16 items-center justify-center relative">
      <div className="container md:px-12 flex flex-col items-center justify-center relative">
        <div className="flex-1 flex flex-col items-center text-center md:max-w-5xl">
          <GradientTag
            className="mb-4"
            label="One platform that hadles it all"
          />

          <h1 className="text-2xl md:text-6xl md:leading-tight font-medium mb-2 md:mb-4">
            Amazing customer experience
            <span className="hidden md:inline">
              <br />
            </span>{" "}
            on social media
          </h1>
          <p className="mb-8 opacity-80 font-normal text-sm/loose md:text-lg/loose max-w-2xl">
            Stop using multiple solutions to market, monitor and support your
            customers on social media. Do it all from one integrated customer
            experience platform.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <a href="#" className="button">
              Get started
            </a>
            <a href="#" className="button button-outline hover:bg-content/5">
              Case Studies
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <img className="w-full" src="img/social-marketing/banner.png" alt="" />
      </div>

      <div className="bottom-highlight-gradient"></div>
    </section>
  );
}
