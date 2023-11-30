export default function Customization() {
  return (
    <section className={"py-20 "}>
      <div className="2xl:container space-y-32">
        <div className={"flex flex-col space-y-6 items-center md:px-12"}>
          <div className={"flex space-x-2"}>
            <p
              className={
                "bg-[#273A44]  flex items-center space-x-1 h-10  tracking-wide w-fit text-[#92E3BA] px-4 py-2 rounded-xl"
              }
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                className={"h-4"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.0991 1.5C20.7237 1.5 20.3567 1.61111 20.0444 1.81934L14.9654 5.20533C13.6858 6.05835 12.5208 7.0624 11.4935 8.19218C13.6069 9.18391 15.3165 10.8935 16.3083 13.007C17.438 11.9797 18.4421 10.8146 19.2951 9.53508L22.6811 4.45609C22.8893 4.14375 23.0004 3.77677 23.0004 3.40139C23.0004 2.35128 22.1492 1.5 21.0991 1.5ZM12.8 15.5249C13.4573 15.1597 14.0902 14.7563 14.6959 14.3175C13.8841 12.258 12.2424 10.6164 10.183 9.80456C9.7441 10.4102 9.34072 11.0432 8.97555 11.7005L8.69702 12.2018C10.4335 12.6985 11.802 14.0669 12.2986 15.8034L12.8 15.5249ZM7.25044 13.5C5.17935 13.5 3.50044 15.1789 3.50044 17.25C3.50044 18.0784 2.82887 18.75 2.00044 18.75C1.96648 18.75 1.93267 18.7489 1.89909 18.7466C1.62294 18.7284 1.35917 18.8637 1.21291 19.0986C1.06664 19.3336 1.06165 19.63 1.19993 19.8697C2.10573 21.4402 3.80386 22.5 5.75044 22.5C8.64995 22.5 11.0004 20.1495 11.0004 17.25C11.0004 15.1789 9.32153 13.5 7.25044 13.5Z"
                  fill="#76E5B7"
                />
              </svg>

              <span className={"text-sm"}>Customizable</span>
            </p>
          </div>

          <div className={"text-center space-y-5"}>
            <h3 className={"text-[2.8rem] font-medium leading-[3.3rem]"}>
              A live chat experience that <br />
              fits your brand perfectly
            </h3>
            <p
              className={
                "text-white/70 font-thin md:text-[15.3px] tracking-wide"
              }
            >
              Beautiful live chat software that your visitors will love.
              Branding and <br />
              customization. Proactive triggers.
            </p>
          </div>
        </div>

        <div className={"flex space-x-8 overflow-hidden"}>
          <div
            className={
              "bg-gray-50 flex justify-end w-64 h-52 shrink-0 -ml-24 rounded-3xl "
            }
          >
            <img
              src={"img/live-chat/customization1.png"}
              className={"h-full "}
              alt=""
            />
          </div>
          <div className={"bg-gray-50 w-64 h-52 shrink-0 rounded-3xl "}>
            <img
              src={"img/live-chat/customization2.png"}
              className={"h-full "}
              alt=""
            />
          </div>
          <div className={"bg-gray-50 w-64 h-52 shrink-0 rounded-3xl "}>
            <img
              src={"img/live-chat/customization3.png"}
              className={"h-full "}
              alt=""
            />
          </div>
          <div className={"bg-gray-50 w-64 h-52 shrink-0 rounded-3xl "}>
            <img
              src={"img/live-chat/customization4.png"}
              className={"h-full "}
              alt=""
            />
          </div>
          <div className={"bg-gray-50 w-64 h-52 shrink-0 rounded-3xl "}>
            <img
              src={"img/live-chat/customization5.png"}
              className={"h-full "}
              alt=""
            />
          </div>
          <div
            className={
              "bg-gray-50 w-64 h-52 relative -mr-24 shrink-0 rounded-3xl "
            }
          >
            <img
              src={"img/live-chat/customization7.png"}
              className={"h-full "}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
