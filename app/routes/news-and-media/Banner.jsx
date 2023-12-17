import Button from "../../components/Button.jsx";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Banner() {
  return (
    <section className={"py-20"}>
      <div className="max-w-6xl mx-auto">
        <figure className={"relative "}>
          <img
            src="/img/news-and-media/news-and-media-banner.png"
            alt=""
            className={"h-full"}
          />

          <div className={"absolute inset-0   flex flex-col justify-between  "}>
            <div className={"p-10 h-full "}>
              <img
                src="/img/news-and-media/nasdag-logo.png"
                alt=""
                className={""}
              />
            </div>

            <div
              // style={{
              //   background:
              //     "linear-gradient(180deg, rgba(11, 16, 41, 0.00) 0%, #0B1029 108.19%)",
              // }}
              className={
                "flex bg-gradient-to-b from-transparent  to-canvas/90 justify-between items-center space px-10 pb-10"
              }
            >
              <div className={"space-y-5"}>
                <div className={"flex items-center gap-4"}>
                  <p
                    className={
                      "rounded-full px-4 py-2 w-fit text-sm/none bg-white text-[#0B1029]"
                    }
                  >
                    Popular article
                  </p>{" "}
                  <p
                    className={
                      "rounded-full px-4 py-2 w-fit text-sm/none bg-gradient-to-b from-content/30 to-transparent "
                    }
                  >
                    Popular article
                  </p>
                </div>
                <h1
                  className={
                    "text-4xl/snug font-medium tracking-wide max-w-2xl"
                  }
                >
                  Why AI is Needed to Meet Today's Consumer Expectations
                </h1>
              </div>
              <Button small outline>
                <span>Read More</span>
                <ArrowRightIcon className={"h-5 w-5"} />
              </Button>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
