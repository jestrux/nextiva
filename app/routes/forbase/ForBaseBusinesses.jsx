import {
  MicrophoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid/index.js";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function ForbaseBusinesses({
  title = "Trusted by 100,000+\nbusinesses, including:",
}) {
  const featuredBusinesses = [
    {
      Icon: MicrophoneIcon,
      title: "Voice",
    },
    {
      Icon: VideoCameraIcon,
      title: "Video",
    },
    {
      Icon: ChatBubbleLeftRightIcon,
      title: "Messaging",
    },
    {
      Icon: EnvelopeIcon,
      title: "Email",
    },
    {
      Icon: UserGroupIcon,
      title: "Collaboration",
    },
  ];

  const businesses = [
    "chair",
    "poly",
    "panasonic",
    "cisco",
    "tacobell",
    "amazon",
    "chair",
    "poly",
  ];

  return (
    <>
      <div className=" max-w-6xl mx-auto mb-16 flex gap-12 items-end">
        <div className="flex-shrink-0 hidden text-3xl">
          {title.split("\n").map((line) => (
            <>
              {line}
              <span className="hidden md:inline">
                <br />
              </span>
            </>
          ))}
        </div>

        <div className="flex-1 grid grid-cols-5 gap-6">
          {featuredBusinesses.map(({ title, Icon }, index) => (
            <div
              key={index}
              className="border-r border-b border-b-content/[0.008] border-t border-content/10 bg-gradient-to-br from-content/10 via-content/[0.07] to-transparent rounded-lg max-w-lg p-4 flex items-center gap-3"
            >
              <Icon className={"h-4 w-4 opacity-50"} />

              <p className="flex-1 text-sm/relaxed opacity-80">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-1.5 items-center justify-between text-content/5">
        {businesses.map((business, index) => (
          <img
            key={index}
            className="max-h-12 max-w-[100px]"
            src={`img/businesses/${business}.svg`}
            alt={business}
          />
        ))}
      </div>
    </>
  );
}
