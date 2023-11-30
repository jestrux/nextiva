import FeatureListItem from "~/routes/live-chat/FeatureListItem";

export default function AIChatBot() {
  const features = [
    {
      title: "55% efficiency increase",
      description: "Your team will be more efficient, working on what matters",
      Icon: PhoneCallIcon,
    },
    {
      title: "40% more engagement",
      description: "Our AI chatbots see more engagement than traditional chat",
      Icon: PhoneCallIcon,
    },
    {
      title: "Increased capacity",
      description:
        "Enable your business to handle more conversations than ever",
      Icon: PhoneCallIcon,
    },

    {
      title: "100% answer-rate",
      description: "All common questions are answered instantly",
      Icon: PhoneCallIcon,
    },
  ];
  return (
    <section className={"py-20 "}>
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
                  className={"h-4 w-4"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 4.5C9.33486 4.5 9.62915 4.72198 9.72114 5.04396L10.5343 7.89015C10.8903 9.13593 11.8641 10.1097 13.1099 10.4657L15.956 11.2789C16.278 11.3709 16.5 11.6651 16.5 12C16.5 12.3349 16.278 12.6291 15.956 12.7211L13.1098 13.5343C11.8641 13.8903 10.8903 14.8641 10.5343 16.1099L9.72114 18.956C9.62915 19.278 9.33486 19.5 9 19.5C8.66514 19.5 8.37085 19.278 8.27886 18.956L7.46566 16.1099C7.10972 14.8641 6.13593 13.8903 4.89015 13.5343L2.04396 12.7211C1.72198 12.6291 1.5 12.3349 1.5 12C1.5 11.6651 1.72198 11.3709 2.04396 11.2789L4.89015 10.4657C6.13593 10.1097 7.10972 9.13593 7.46566 7.89015L8.27886 5.04396C8.37085 4.72198 8.66514 4.5 9 4.5Z"
                    fill="#76E5B7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 1.5C18.3442 1.5 18.6441 1.73422 18.7276 2.0681L18.9865 3.10356C19.2216 4.04406 19.9559 4.7784 20.8964 5.01353L21.9319 5.27239C22.2658 5.35586 22.5 5.65585 22.5 6C22.5 6.34415 22.2658 6.64414 21.9319 6.72761L20.8964 6.98647C19.9559 7.2216 19.2216 7.95594 18.9865 8.89644L18.7276 9.9319C18.6441 10.2658 18.3442 10.5 18 10.5C17.6558 10.5 17.3559 10.2658 17.2724 9.9319L17.0135 8.89644C16.7784 7.95594 16.0441 7.2216 15.1036 6.98647L14.0681 6.72761C13.7342 6.64414 13.5 6.34415 13.5 6C13.5 5.65585 13.7342 5.35586 14.0681 5.27239L15.1036 5.01353C16.0441 4.7784 16.7784 4.04406 17.0135 3.10356L17.2724 2.0681C17.3559 1.73422 17.6558 1.5 18 1.5Z"
                    fill="#76E5B7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5 15C16.8228 15 17.1094 15.2066 17.2115 15.5128L17.6058 16.6956C17.7551 17.1435 18.1065 17.4949 18.5544 17.6442L19.7372 18.0385C20.0434 18.1406 20.25 18.4272 20.25 18.75C20.25 19.0728 20.0434 19.3594 19.7372 19.4615L18.5544 19.8558C18.1065 20.0051 17.7551 20.3565 17.6058 20.8044L17.2115 21.9872C17.1094 22.2934 16.8228 22.5 16.5 22.5C16.1772 22.5 15.8906 22.2934 15.7885 21.9872L15.3942 20.8044C15.2449 20.3565 14.8935 20.0051 14.4456 19.8558L13.2628 19.4615C12.9566 19.3594 12.75 19.0728 12.75 18.75C12.75 18.4272 12.9566 18.1406 13.2628 18.0385L14.4456 17.6442C14.8935 17.4949 15.2449 17.1435 15.3942 16.6956L15.7885 15.5128C15.8906 15.2066 16.1772 15 16.5 15Z"
                    fill="#76E5B7"
                  />
                </svg>

                <span className={"text-sm"}>AI powered</span>
              </p>
            </div>

            <h3 className={"text-5xl font-medium leading-[3.5rem]"}>
              Supercharge customer <br /> conversations with an <br /> AI Chat
              Bot
            </h3>
            <p
              className={
                "text-[#B6B7BE] font-thin md:text-[15.3px] tracking-wide"
              }
            >
              Give accurate answers that resolve customer questions and reduce
              your <br /> team’s ticket volume by as much as 80% with an AI Bot.
              Automate your sales <br />
              and service conversations to deliver a faster.
            </p>
          </div>

          <div className={"  "}>
            <div
              className={
                "w-[28rem] h-[28rem] overflow-hidden rounded-3xl bg-gray-50"
              }
            >
              <img src={"img/live-chat/chatbot.png"} alt={""} />
            </div>
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
