import { RectangleGroupIcon } from "@heroicons/react/24/solid";
import FeatureList from "~/components/FeatureList.jsx";
import SectionTitle from "~/components/SectionTitle.jsx";

const MediaFeatureSection = ({
  flipped = false,
  image = "img/live-chat/live-message.png",
  primaryTag = {
    icon: RectangleGroupIcon,
    label: "Unified App",
  },
  secondaryTag,
  title = "Live chat with messengers all in a single place",
  description = "Customers want to engage with you on any channel. Meet them where they are. Live Chat, WhatsApp, Facebook messenger, and Instagram DMs in one place.",
  primaryAction,
  secondaryAction,
  features,
}) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div
        className={`flex items-center ${flipped && "flex-row-reverse"} gap-24`}
      >
        <div className="flex-shrink-0 w-5/12">
          <img className="w-full" src={image} alt="" />
        </div>

        <div className="w-7/12 pb-8">
          <SectionTitle
            title={title}
            description={description}
            primaryTag={primaryTag}
            secondaryTag={secondaryTag}
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
          />
        </div>
      </div>

      <FeatureList features={features} />
    </div>
  );
};

export default MediaFeatureSection;
