import FeatureListItem from "~/routes/live-chat/FeatureListItem";

export default function CustomerSupport() {
  const features = [
    {
      title: "360-degree view",
      description: "Gain a complete view of your website visitors",
      Icon: WorldIcon,
    },
    {
      title: "All conversations",
      description:
        "Regardless of channel, connect your conversations together.",
      Icon: AllConversionIcon,
    },
    {
      title: "24/7 availability",
      description:
        "Always have tailored conversations with customers & prospects",
      Icon: AvailabilityIcon,
    },

    {
      title: "Work smarter",
      description: "Deliver better, personalized experiences.",
      Icon: WorkSmartIcon,
    },
  ];
  return (
    <section className={"py-20  relative"}>
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"></div>
      <div className="top-highlight-gradient"></div>
      <div className={"container md:px-12 space-y-14"}>
        <div className={"flex space-x-32"}>
          <div className={"  "}>
            <div
              className={
                "w-[28rem] h-[28rem] overflow-hidden rounded-3xl bg-gray-50"
              }
            >
              <img src={"img/live-chat/live-message.png"} alt={""} />
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
                  className={"h-4 w-4"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 7.125C1.5 6.08947 2.33947 5.25 3.375 5.25H9.375C10.4105 5.25 11.25 6.08947 11.25 7.125V10.875C11.25 11.9105 10.4105 12.75 9.375 12.75H3.375C2.33947 12.75 1.5 11.9105 1.5 10.875V7.125ZM13.5 8.625C13.5 7.58947 14.3395 6.75 15.375 6.75H20.625C21.6605 6.75 22.5 7.58947 22.5 8.625V16.875C22.5 17.9105 21.6605 18.75 20.625 18.75H15.375C14.3395 18.75 13.5 17.9105 13.5 16.875V8.625ZM3 16.125C3 15.0895 3.83947 14.25 4.875 14.25H10.125C11.1605 14.25 12 15.0895 12 16.125V18.375C12 19.4105 11.1605 20.25 10.125 20.25H4.875C3.83947 20.25 3 19.4105 3 18.375V16.125Z"
                    fill="#76E5B7"
                  />
                </svg>
                <span className={"text-sm"}>Unified App</span>
              </p>

              <p
                className={
                  "bg-[#393940] flex items-center space-x-1 tracking-wide w-fit text-[#EFDCA2] px-4 py-2 rounded-xl"
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={"h-4 w-4"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.5C10.079 1.5 8.18374 1.61114 6.32022 1.82741C4.82283 2.00119 3.75 3.28722 3.75 4.75699V21.75C3.75 21.9989 3.87345 22.2315 4.07953 22.3711C4.28561 22.5106 4.54748 22.5388 4.77854 22.4464L8.25 21.0578L11.7215 22.4464C11.9003 22.5179 12.0997 22.5179 12.2785 22.4464L15.75 21.0578L19.2215 22.4464C19.4525 22.5388 19.7144 22.5106 19.9205 22.3711C20.1266 22.2315 20.25 21.9989 20.25 21.75V4.75699C20.25 3.28722 19.1772 2.00119 17.6798 1.82741C15.8163 1.61114 13.921 1.5 12 1.5ZM15.5303 8.78033C15.8232 8.48744 15.8232 8.01256 15.5303 7.71967C15.2374 7.42678 14.7626 7.42678 14.4697 7.71967L8.46967 13.7197C8.17678 14.0126 8.17678 14.4874 8.46967 14.7803C8.76256 15.0732 9.23744 15.0732 9.53033 14.7803L15.5303 8.78033ZM8.625 9C8.625 8.37868 9.12868 7.875 9.75 7.875C10.3713 7.875 10.875 8.37868 10.875 9C10.875 9.62132 10.3713 10.125 9.75 10.125C9.12868 10.125 8.625 9.62132 8.625 9ZM14.25 12.375C13.6287 12.375 13.125 12.8787 13.125 13.5C13.125 14.1213 13.6287 14.625 14.25 14.625C14.8713 14.625 15.375 14.1213 15.375 13.5C15.375 12.8787 14.8713 12.375 14.25 12.375Z"
                    fill="#F3DB9B"
                  />
                </svg>
                <span className={"text-sm"}>94% customer satisfaction</span>
              </p>
            </div>

            <h3 className={"text-[2.8rem] font-medium leading-[3.3rem]"}>
              Live chat with messengers <br />
              all in a single place
            </h3>
            <p
              className={
                "text-[#B6B7BE] font-thin md:text-[15.3px] tracking-wide"
              }
            >
              Customers want to engage with you on any channel. Meet them where
              they <br /> are. Live Chat, WhatsApp, Facebook messenger, and
              Instagram DMs in <br /> one place.
            </p>
          </div>
        </div>

        <div className={"grid grid-cols-4 gap-10"}>
          {features.map((feature, index) => (
            <FeatureListItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorldIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"h-7"}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3ZM8.34929 8.0964C6.28391 10.0961 5 12.8981 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 12.3261 25.1989 9.07296 22.4316 7.0752C21.9817 7.79394 21.3833 8.41108 20.6741 8.88385L18.9999 10L19.2193 10.4389C19.578 11.1561 19.0564 12 18.2545 12C18.0871 12 17.9219 11.961 17.7721 11.8861L16.9669 11.4835C16.3894 11.1948 15.692 11.3079 15.2354 11.7645L15.0606 11.9393C14.4748 12.5251 14.4748 13.4749 15.0606 14.0607L15.4541 14.4542C15.7966 14.7967 16.2835 14.9527 16.7613 14.8731L18.3214 14.6131C18.7522 14.5413 19.1928 14.6608 19.5283 14.9403L21.3007 16.4174C21.7282 16.7736 21.9141 17.3431 21.7792 17.8829C21.2692 19.9226 20.2146 21.7853 18.728 23.2719L17.7644 24.2355C17.3078 24.6921 16.6104 24.8052 16.0329 24.5165L15.8291 24.4146C15.3209 24.1605 14.9999 23.6411 14.9999 23.0729V21.6213C14.9999 21.2235 14.8419 20.842 14.5606 20.5607L12.7644 18.7645C12.3078 18.3079 12.1946 17.6105 12.4834 17.033L12.9999 16L10.8127 13.8128C9.6337 12.6338 8.85253 11.1159 8.57842 9.47116L8.34929 8.0964Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
}

function WorkSmartIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"h-7"}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.487 2.1266C19.8886 2.35053 20.0858 2.8195 19.9648 3.26315L17.3093 13H27C27.3982 13 27.7585 13.2363 27.9172 13.6015C28.0759 13.9667 28.0028 14.3912 27.7311 14.6824L13.7311 29.6824C13.4173 30.0185 12.9147 30.0974 12.5131 29.8735C12.1114 29.6495 11.9143 29.1806 12.0353 28.7369L14.6908 19H5.00002C4.60182 19 4.24158 18.7638 4.08287 18.3986C3.92417 18.0334 3.99727 17.6088 4.26897 17.3177L18.269 2.31772C18.5827 1.98154 19.0853 1.90268 19.487 2.1266Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
}
function AvailabilityIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"h-7"}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3ZM12.5 11C11.7791 11 11.3957 11.5584 11.252 11.8457C11.0785 12.1928 11 12.6023 11 13C11 13.3977 11.0785 13.8072 11.252 14.1543C11.3957 14.4416 11.7791 15 12.5 15C13.2209 15 13.6043 14.4416 13.748 14.1543C13.9215 13.8072 14 13.3977 14 13C14 12.6023 13.9215 12.1928 13.748 11.8457C13.6043 11.5584 13.2209 11 12.5 11ZM18.252 11.8457C18.3957 11.5584 18.7791 11 19.5 11C20.2209 11 20.6043 11.5584 20.748 11.8457C20.9215 12.1928 21 12.6023 21 13C21 13.3977 20.9215 13.8072 20.748 14.1543C20.6043 14.4416 20.2209 15 19.5 15C18.7791 15 18.3957 14.4416 18.252 14.1543C18.0785 13.8072 18 13.3977 18 13C18 12.6023 18.0785 12.1928 18.252 11.8457ZM20.9497 20.9498C21.3403 20.5593 21.3403 19.9261 20.9497 19.5356C20.5592 19.145 19.9261 19.145 19.5355 19.5356C17.5829 21.4882 14.4171 21.4882 12.4645 19.5356C12.0739 19.145 11.4408 19.145 11.0503 19.5356C10.6597 19.9261 10.6597 20.5593 11.0503 20.9498C13.7839 23.6834 18.2161 23.6834 20.9497 20.9498Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
}
function AllConversionIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"h-7"}
    >
      <path
        d="M7.5 5C5.567 5 4 6.567 4 8.5C4 10.433 5.567 12 7.5 12H24.5C26.433 12 28 10.433 28 8.5C28 6.567 26.433 5 24.5 5H7.5Z"
        fill="white"
        fillOpacity="0.5"
      />
      <path
        d="M5 15C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17H27C27.5523 17 28 16.5523 28 16C28 15.4477 27.5523 15 27 15H5Z"
        fill="white"
        fillOpacity="0.5"
      />
      <path
        d="M4 21C4 20.4477 4.44772 20 5 20H27C27.5523 20 28 20.4477 28 21C28 21.5523 27.5523 22 27 22H5C4.44772 22 4 21.5523 4 21Z"
        fill="white"
        fillOpacity="0.5"
      />
      <path
        d="M5 25C4.44772 25 4 25.4477 4 26C4 26.5523 4.44772 27 5 27H27C27.5523 27 28 26.5523 28 26C28 25.4477 27.5523 25 27 25H5Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
}
