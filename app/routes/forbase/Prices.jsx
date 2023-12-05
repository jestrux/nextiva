import SectionTitle from "~/components/SectionTitle.jsx";
import { InformationCircleIcon } from "@heroicons/react/24/outline/index.js";
import { CheckCircleIcon } from "@heroicons/react/24/solid/index.js";
import Button from "~/components/Button.jsx";
import Divider from "~/components/Divider.jsx";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import SectionHighlight from "~/components/SectionHighlight.jsx";

export default function Prices() {
  const priceList = [
    {
      title: "Core",
      subtitle: "Voice contact center",
      discount: {
        amount: "$99.99",
        percentage: "Save 27%",
      },
      price: "$18.95",
      duration: "/user/mo",
      ctaLabel: "Button Text",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      features: [
        "Unlimited voice & video calling",
        "Voicemail",
        "Toll-free numbers",
        "Outlook/Google Contacts Integrations",
        "Unlimited internet fax",
      ],
    },
    {
      title: "Premium",
      subtitle: "Digital engagement",
      discount: {
        amount: "$99.99",
        percentage: "Save 27%",
      },
      price: "$22.95",
      duration: "/user/mo",
      ctaLabel: "Button Text",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      features: [
        "Unlimited conference calls, 40 participants",
        "Unlimited video conferencing",
        "Screensharing",
        "Auto attendant (multi-level)",
        "Mobile and Desktop SMS/MMS",
        "Salesforce/HubSpot Integrations",
      ],
      otherFeaturesLabel: "Everything in Core +",
    },
    {
      title: "Optimum",
      subtitle: "Workforce optimization",
      discount: {
        amount: "$99.99",
        percentage: "Save 27%",
      },
      price: "$32.95",
      duration: "/user/mo",
      ctaLabel: "Button Text",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      features: [
        "Unlimited participants on voice & video conferencing",
        "Call recording",
        "Unlimited video conference recording",
        "Voicemail transcription",
        "Microsoft Teams/Custom Integrations",
        "Single Sign On",
      ],
      otherFeaturesLabel: "Everything in Premium +",
      recommended: true,
    },
  ];
  return (
    <section className={"pt-20 pb-24 relative"}>
      <SectionHighlight bottom />
      <SectionTitle
        centered
        title={"Award-winning cloud phone \n system with superpowers."}
        description={"Honest. Affordable. Simple."}
      />

      <div className={"max-w-6xl mx-auto space-y-14"}>
        <div className="grid grid-cols-3 gap-8">
          {priceList.map((price, index) => (
            //   price card
            <div
              style={{
                background:
                  price.recommended &&
                  "radial-gradient(127.45% 141.42% at 0% 0%, #3758F9 0%, #6E84F1 100%)",
              }}
              key={index}
              className={"border p-8 space-y-5 rounded-2xl"}
            >
              <div>
                <h3 className={"text-lg"}>{price.title}</h3>
                <p className={"font-light text-xs opacity-50"}>
                  {price.subtitle}
                </p>
              </div>

              <p
                className={
                  "bg-content/[0.1] w-fit px-4 py-2 tracking-wide rounded-full text-xs/none flex gap-1.5"
                }
              >
                <span className={"line-through opacity-70"}>
                  {price.discount.amount}
                </span>
                <span
                  className={`${
                    price.recommended ? "text-white" : "text-[#6A83FB]"
                  } `}
                >
                  {price.discount.percentage}
                </span>
              </p>

              <div className={"flex items-end gap-2.5"}>
                <h4 className={"text-4xl"}>{price.price}</h4>
                <div className={"flex items-center gap-2 "}>
                  <p className={"text-xs/none opacity-50"}>{price.duration}</p>
                  <InformationCircleIcon className={"h-4 w-4 opacity-20"} />
                </div>
              </div>

              <div>
                <a
                  href={""}
                  style={{ color: price.recommended && "#3758F9" }}
                  className={`w-full button button-small ${
                    price.recommended && "bg-white"
                  }`}
                >
                  {price.ctaLabel}
                </a>
              </div>
              <p
                className={
                  "text-xs/relaxed border-b pb-4 tracking-wide opacity-70 font-light"
                }
              >
                {price.description}
              </p>

              {price?.otherFeaturesLabel && (
                <p
                  className={
                    "bg-[#A1EDCD] text-primary-darker w-fit px-4 py-2 tracking-wide rounded-full text-xs/none flex gap-1"
                  }
                >
                  {price.otherFeaturesLabel}
                </p>
              )}

              <div className={"space-y-3"}>
                {price.features.map((feature, index) => (
                  <div key={index} className={"flex gap-x-1.5"}>
                    <CheckCircleIcon
                      className={`h-5 w-5 ${
                        price.recommended ? "text-white" : "text-primary"
                      }`}
                    />
                    <p className={"text-xs font-light tracking-wide pt-0.5"}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <Divider opacity={0.3} />
          <div className={"flex items-center justify-between py-10"}>
            <div className={"space-y-2"}>
              <h3 className={"text-lg"}>Got a pricing question?</h3>
              <p
                className={
                  "text-sm opacity-70 tracking-wide font-light max-w-xs"
                }
              >
                Need pricing information? Chat with our expert for prompt
                assistance and clear insights!
              </p>
            </div>
            <Button outline>
              <span>Chat with an expert</span>
              <ArrowRightIcon className={"h-5 w-5"} strokeWidth={2} />
            </Button>
          </div>
          <Divider opacity={0.3} />
        </div>
      </div>
    </section>
  );
}
