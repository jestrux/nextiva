import FeatureListItem from "~/routes/live-chat/FeatureListItem.jsx";

const features = [
  {
    title: "Improve productivity",
    description: "Your team will handle new questions and topics",
    Icon: PhoneCallIcon,
  },
  {
    title: "Faster and smarter",
    description: "Resolve questions and problems in a flash",
    Icon: PhoneCallIcon,
  },
  {
    title: "Grow fearlessly",
    description: "Grow your business without increasing costs.",
    Icon: PhoneCallIcon,
  },

  {
    title: "Enhanced experience",
    description:
      "Personalized recommendations will make your customers feel loved",
    Icon: PhoneCallIcon,
  },
];
const aiPlusHumans = [
  {
    title: "Automation & the human touch",
    description:
      "Customers can self-serve as well as connect with human agents",
    Icon: PhoneCallIcon,
  },
  {
    title: "Tailored templates",
    description: "Apply tailored templates to launch chatbots in a few clicks",
    Icon: PhoneCallIcon,
  },
  {
    title: "Connect, easily",
    description: "One-click integrations to add chatbots across platforms",
    Icon: PhoneCallIcon,
  },

  {
    title: "Unlimited resolution",
    description: "Help an unlimited number of customers in real-time",
    Icon: PhoneCallIcon,
  },
];
export default function CustomerRelationship() {
  return (
    <section className={"py-20 relative"}>
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"></div>
      <div className="top-highlight-gradient"></div>

      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"></div>
      <div className="bottom-highlight-gradient"></div>

      <div className="container ">
        <div className={"text-center space-y-6"}>
          <h3 className={"text-6xl font-medium leading-[3.3rem]"}>
            Teams that work smarter <br /> grow fearlessly
          </h3>
          <p
            className={
              "text-white/70  pb-2 font-thin md:text-[15.3px] tracking-wide"
            }
          >
            Happy teams create more loyal customers. Nextiva's powerful
            workspace makes it easy to deliver a <br /> personal and delightful
            customer experience at scale.
          </p>

          <a href="#" className="button text-sm font-medium h-0 py-5 ">
            Start for free
          </a>
        </div>
      </div>

      {/* power box*/}
      <div className={"py-36 "}>
        <div className={"container md:px-12 space-y-14"}>
          <div className={"flex space-x-32"}>
            <div className={"  "}>
              <div
                className={
                  "w-[28rem] h-[28rem] overflow-hidden rounded-3xl bg-gray-50"
                }
              >
                <img src={"img/live-chat/customer-relationship.png"} alt={""} />
              </div>
            </div>
            <div className={"space-y-8 flex flex-col justify-center"}>
              <div className={"flex space-x-2"}>
                <p
                  className={
                    "bg-[#273A44]  flex items-center space-x-1 h-10  tracking-wide w-fit text-[#92E3BA] px-4 py-2 rounded-xl"
                  }
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={"h-4"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.56641 4.65724C5.9435 4.55472 6.34029 4.5 6.74986 4.5H17.2499C17.6594 4.5 18.0562 4.55472 18.4333 4.65724C17.9406 3.67454 16.924 3 15.7499 3H8.24986C7.0757 3 6.0591 3.67454 5.56641 4.65724Z"
                      fill="#76E5B7"
                    />
                    <path
                      d="M2.25 12C2.25 10.3431 3.59315 9 5.25 9H18.75C20.4069 9 21.75 10.3431 21.75 12V18C21.75 19.6569 20.4069 21 18.75 21H5.25C3.59315 21 2.25 19.6569 2.25 18V12Z"
                      fill="#76E5B7"
                    />
                    <path
                      d="M5.24986 7.5C4.84029 7.5 4.4435 7.55472 4.06641 7.65724C4.5591 6.67454 5.5757 6 6.74986 6H17.2499C18.424 6 19.4406 6.67454 19.9333 7.65724C19.5562 7.55472 19.1594 7.5 18.7499 7.5H5.24986Z"
                      fill="#76E5B7"
                    />
                  </svg>

                  <span className={"text-sm"}>Power inbox</span>
                </p>
              </div>

              <h3 className={"text-[2.8rem] font-medium leading-[3.3rem]"}>
                Conversations, tickets and <br />
                customer data in a single <br /> place
              </h3>
              <p
                className={
                  "text-[#B6B7BE] font-thin md:text-[15.3px] tracking-wide"
                }
              >
                All conversations are presented in a single inbox. Route or
                escalate based <br /> on request type, skill, or sentiment.
                Automated workflows give every <br />
                request the right priority.
              </p>
            </div>
          </div>

          <div className={"grid grid-cols-4 gap-10"}>
            {features.map((feature, index) => (
              <FeatureListItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      <div className={"pb- "}>
        <div className={"container md:px-12 space-y-14"}>
          <div className={"flex space-x-32"}>
            <div className={"space-y-8 flex flex-col justify-center"}>
              <div className={"flex space-x-2"}>
                <p
                  className={
                    "bg-[#273A44]  flex items-center space-x-1 h-10  tracking-wide w-fit text-[#92E3BA] px-4 py-2 rounded-xl"
                  }
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={"h-5"}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM9.375 8.25C8.83433 8.25 8.54674 8.66881 8.43901 8.88426C8.30886 9.14457 8.25 9.45171 8.25 9.75C8.25 10.0483 8.30886 10.3554 8.43901 10.6157C8.54674 10.8312 8.83433 11.25 9.375 11.25C9.91567 11.25 10.2033 10.8312 10.311 10.6157C10.4411 10.3554 10.5 10.0483 10.5 9.75C10.5 9.45171 10.4411 9.14457 10.311 8.88426C10.2033 8.66881 9.91567 8.25 9.375 8.25ZM13.689 8.88426C13.7967 8.66881 14.0843 8.25 14.625 8.25C15.1657 8.25 15.4533 8.66881 15.561 8.88426C15.6911 9.14457 15.75 9.45171 15.75 9.75C15.75 10.0483 15.6911 10.3554 15.561 10.6157C15.4533 10.8312 15.1657 11.25 14.625 11.25C14.0843 11.25 13.7967 10.8312 13.689 10.6157C13.5589 10.3554 13.5 10.0483 13.5 9.75C13.5 9.45171 13.5589 9.14457 13.689 8.88426ZM15.7123 15.7123C16.0052 15.4194 16.0052 14.9446 15.7123 14.6517C15.4194 14.3588 14.9445 14.3588 14.6517 14.6517C13.1872 16.1161 10.8128 16.1161 9.34835 14.6517C9.05546 14.3588 8.58058 14.3588 8.28769 14.6517C7.9948 14.9446 7.9948 15.4194 8.28769 15.7123C10.3379 17.7626 13.6621 17.7626 15.7123 15.7123Z"
                      fill="#76E5B7"
                    />
                  </svg>

                  <span className={"text-sm"}>AI + humans</span>
                </p>
              </div>

              <h3 className={"text-[2.8rem] font-medium leading-[3.3rem]"}>
                Balance AI with human
                <br /> response for an amazing experience
              </h3>
              <p
                className={
                  "text-[#B6B7BE] font-thin md:text-[15.3px] tracking-wide"
                }
              >
                Chatbots can engage, greet, response and can even escalate
                quickly route <br /> chats with the help of AI. Automatically
                segment site visitors based on their <br />
                actions so you can respond quickly.
              </p>
            </div>
            <div className={"  "}>
              <div
                className={
                  "w-[28rem] h-[28rem] overflow-hidden rounded-3xl bg-gray-50"
                }
              >
                <img src={"img/live-chat/ai-with-humans.png"} alt={""} />
              </div>
            </div>
          </div>

          <div className={"grid grid-cols-4 gap-10"}>
            {aiPlusHumans.map((feature, index) => (
              <FeatureListItem
                key={index}
                {...feature}
                className={
                  "bg-gradient-to-b from-canvas via-canvas to-transparent"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneCallIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={"h-7"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6C2 3.79086 3.79086 2 6 2H7.82884C8.976 2 9.97596 2.78074 10.2542 3.89366L11.7286 9.79124C11.9725 10.7671 11.6079 11.7941 10.8032 12.3976L9.0784 13.6912C8.89929 13.8255 8.86036 14.0222 8.91067 14.1596C10.4247 18.2926 13.7074 21.5753 17.8404 23.0893C17.9778 23.1396 18.1745 23.1007 18.3088 22.9216L19.6024 21.1968C20.2059 20.3921 21.2329 20.0275 22.2088 20.2714L28.1063 21.7458C29.2193 22.024 30 23.024 30 24.1712V26C30 28.2091 28.2091 30 26 30H23C11.402 30 2 20.598 2 9V6Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
}
