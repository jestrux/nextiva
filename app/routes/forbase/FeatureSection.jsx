import SectionTitle from "~/components/SectionTitle.jsx";

export default function FeatureSection({
  flipped = false,
  image = "img/live-chat/live-message.png",

  title = "Live chat with messengers all in a single place",
  description = "Customers want to engage with you on any channel. Meet them where they are. Live Chat, WhatsApp, Facebook messenger, and Instagram DMs in one place.",
}) {
  return (
    <div className="max-w-6xl mx-auto">
      <div
        className={`flex items-center ${flipped && "flex-row-reverse"} gap-24`}
      >
        <div className="flex-shrink-0 w-4/12">
          <img className="w-full" src={image} alt="" />
        </div>

        <div className="w-7/12 pb-8 ">
          <SectionTitle
            title={title}
            description={description}
            // primaryTag={null}
            // primaryAction={primaryAction}
            // secondaryAction={secondaryAction}
          />
        </div>
      </div>
    </div>
  );
}
