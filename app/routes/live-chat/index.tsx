import type { MetaFunction } from "@remix-run/node";
import CustomerSupport from "~/routes/live-chat/CustomerSupport";
import AIChatBot from "~/routes/live-chat/AiChatBot";
import Customization from "~/routes/live-chat/Customization";

export const meta: MetaFunction = () => {
  return [
    { title: "Nextiva: Business Communications Collaboration Software" },
    {
      name: "description",
      content:
        "Nextiva is a software company that enables all your business communications through one collaboration tool. Get more done using fewer apps. Start your free trial!",
    },
  ];
};

export default function AboutUsPage() {
  const assistants = [
    "https://i.pinimg.com/474x/dc/91/e5/dc91e5389d4b6171de52ae758f4f19d0.jpg",
    "https://i.pinimg.com/474x/27/9c/3f/279c3f6c5d7ce6b9e8e8974129badd2d.jpg",
    "https://i.pinimg.com/474x/d9/d1/73/d9d1737d07338c6d691bb18f761da590.jpg",
  ];
  return (
    <>
      {/* banner section */}
      <section className={"pt-24 flex justify-center"}>
        <div className="flex-1 flex container flex-col items-center text-center md:max-w-5xl">
          <span className="mb-4 py-2 pl-3 pr-3.5 rounded-2xl bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light inline-flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-0.5 w-4 md:w-4"
            >
              <path
                fillRule="evenodd"
                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z"
                clipRule="evenodd"
              />
            </svg>

            <span className="opacity-60 text-xs md:text-[15.2px]">
              Scale your business with
            </span>
          </span>
          <h1 className="text-2xl md:text-6xl md:leading-tight tracking-wide font-semibold mb-2 md:mb-4">
            AI Powered Live Chat
          </h1>
          <p className="mb-8 text-[#B6B7BE] font-thin md:text-[17px] tracking-wide">
            Resolve issues instantly, keep customers happy, and increase team{" "}
            efficiency <br /> with AI-powered chatbots for sales and support.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="button text-sm">
              Start for free
            </a>

            <a
              href="#"
              className="button-outline text-sm flex items-center space-x-3"
            >
              <span>Talk to an agent</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/*  chat with us, section */}
      <section
        className={
          " m-5 flex justify-center my-16 border rounded-3xl bg-content/[0.08] px-10 py-[7rem]"
        }
      >
        <div className={"space-y-8"}>
          <div className={" flex -space-x-4"}>
            {assistants.map((imageUrl, index) => (
              <div
                key={index}
                style={{ zIndex: 3 - index }}
                className={
                  "h-11 w-11 rounded-full bg-gray-100   border-[#1F2338] border-[3px]"
                }
              >
                <img
                  src={imageUrl}
                  className={"h-full w-full rounded-full object-cover"}
                  alt={""}
                />
              </div>
            ))}
          </div>

          <h2
            className={
              "text-5xl pb-3 tracking-wider font-semibold leading-[4rem] "
            }
          >
            Hello, Ross. <br />
            How can we help?
          </h2>

          <div
            className={
              "bg-white flex justify-between items-center px-9 py-8 rounded-3xl space-x-20"
            }
          >
            <div className={"space-y-2"}>
              <p className={"text-3xl  text-[#0C1027]"}>Live chat with us</p>
              <p
                className={
                  "text-[#6D707E] font-light tracking-wider text-[1.3rem]"
                }
              >
                Start with Nextie, we'll jump in if needed.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-primary"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </div>
        </div>
      </section>

      {/*  nextiva's deliverables */}
      <section
        className={
          "bg-gradient-to-b py-24  from-content/5 via-content/5 to-transparent"
        }
      >
        <div className={"container space-y-2"}>
          <div
            className={
              " mb-4   pr-3 rounded-full bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light inline-flex items-center gap-1.5 w-fit"
            }
          >
            <img
              className={"h-11 w-11 object-cover rounded-l-full rounded-t-full"}
              src={
                "https://i.pinimg.com/474x/02/33/d8/0233d86c00fa9d82e7601986f48f12ae.jpg"
              }
              alt={""}
            />

            <p className={"opacity-60 text-xs md:text-sm "}>
              Hey! Tonny from Nextiva here
            </p>
          </div>

          <div>
            <p
              className={
                "text-[3.5rem] leading-[1] tracking-wide  font-semibold"
              }
            >
              <span>
                {" "}
                With Nextiva’s AI you can deliver <br /> personalized
                experiences. Resolve up to <br />
                60% of customer questions. Our chatbot <br /> technology uses
                generative
              </span>{" "}
              <span className={"text-[#3D4052]"}>
                AI to deliver <br /> accurate answers that resolve customer{" "}
                <br />
                questions instantly, reduce support cost <br /> and increase
                customer satisfaction.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* decoration section */}

      <CustomerSupport />
      <AIChatBot />
      <Customization />
    </>
  );
}
