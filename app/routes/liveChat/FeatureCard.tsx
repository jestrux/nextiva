import FeatureListItem from "~/routes/liveChat/FeatureListItem";

export default function FeatureCard() {
  return (
    <div className={"container space-y-14"}>
      <div className={"flex space-x-32"}>
        <div className={"  "}>
          <div
            className={
              "w-[28rem] h-[28rem] overflow-hidden rounded-3xl bg-gray-50"
            }
          ></div>
        </div>

        <div className={"space-y-8 flex flex-col justify-center"}>
          <div className={"flex space-x-2"}>
            <p
              className={
                "bg-[#273A44] tracking-wide w-fit text-[#92E3BA] px-4 py-1.5 rounded-xl"
              }
            >
              {/*    TODO: Add missing svg icon*/}
              <span className={"text-sm"}>Unified App</span>
            </p>

            <p
              className={
                "bg-[#393940] tracking-wide w-fit text-[#EFDCA2] px-4 py-1.5 rounded-xl"
              }
            >
              {/*    TODO: Add missing svg icon*/}
              <span className={"text-sm"}>94% customer satisfaction</span>
            </p>
          </div>

          <h3 className={"text-[2.5rem] font-semibold leading-[2.5rem]"}>
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
        {[...Array(4)].map((_, index) => (
          <FeatureListItem key={index} />
        ))}
      </div>
    </div>
  );
}
