import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  InboxIcon,
  TagIcon,
} from "@heroicons/react/24/solid/index.js";
import FeatureList from "../../components/FeatureList.jsx";
import SectionTitle from "../../components/SectionTitle.jsx";
import {
  PresentationChartLineIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import CustomerQuote from "../../components/CustomerQuote.jsx";

const assentialFeatures = [
  {
    icon: InboxIcon,
    title: "All in one Inbox",
    description:
      "See incoming reviews in real-time, all in a single interface.",
  },
  {
    icon: ArrowPathIcon,
    title: "Read & Reply",
    description: "Engage with your reviews right from the inbox in real-time.",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: "Advanced Filtering",
    description:
      "Easily organize your inbox based on date/time, channel and other custom rules.",
  },

  {
    icon: TagIcon,
    title: "Social Tagging",
    description:
      "Create custom tags, organize keywords and monitor content across channels the way you want so it's easy to find and analyze.",
  },

  {
    icon: UserGroupIcon,
    title: "Intelligent Routing",
    description:
      "Assign roles and route reviews to you or your team members as you see fit.",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Performance Monitoring",
    description:
      "Measure the impact, monitor your team and turn insights into valuable business outcomes.",
  },
];
export default function AssentialFeatures() {
  return (
    <section className={"py-20 relative"}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          centered
          title={"Features we wouldn't let\n you go without"}
        />

        <FeatureList features={assentialFeatures} numberOfColumns={3} />
        <div className={"flex pt-16 justify-center"}>
          <CustomerQuote
            name={"Ryan Petersen, "}
            dp={"img/reviews-and-reputation/RyanPetersen.png"}
            role={"Founder and CEO of Flexport"}
            quote={
              "NextivaOne aims to remove the friction, frustration, inefficiencies, and errors that come."
            }
          />
        </div>
      </div>
    </section>
  );
}
