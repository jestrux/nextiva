import SectionHighlight from "../../components/SectionHighlight.jsx";
import SectionTitle from "~/components/SectionTitle.jsx";
import { FingerPrintIcon, InboxIcon } from "@heroicons/react/24/solid/index.js";
import FeatureList from "~/components/FeatureList.jsx";
import LinkButton from "~/components/LinkButton.jsx";

const workflowsAndAutomations = [
  {
    icon: InboxIcon,
    title: "All in one Inbox",
    description:
      "See incoming reviews in real-time, all in a single interface.",
  },
  {
    title: "Read & Reply",
    description: "Engage with your reviews right from the inbox in real-time.",
  },
  {
    title: "Advanced Filtering",
    description:
      "Easily organize your inbox based on date/time, channel and other custom rules.",
  },

  {
    title: "Social Tagging",
    description:
      "Create custom tags, organize keywords and monitor content across channels the way you want so it's easy to find and analyze.",
  },

  {
    title: "Intelligent Routing",
    description:
      "Assign roles and route reviews to you or your team members as you see fit.",
  },
  {
    title: "Performance Monitoring",
    description:
      "Measure the impact, monitor your team and turn insights into valuable business outcomes.",
  },
  {
    title: "Social Tagging",
    description:
      "Create custom tags, organize keywords and monitor content across channels the way you want so it's easy to find and analyze.",
  },
  {
    title: "Features Title",
    description:
      "Track competitor performance using keywords & profiles. Understand industry trends, patterns and more.",
  },
  {
    title: "Features Title",
    description:
      "Respond to tickets and provide integrated, world class customer service across all your social media channels from a single location.",
  },
];
export default function WorkflowsAndAutomations() {
  return (
    <section className={"py-20 relative"}>
      <SectionHighlight />
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          primaryTag={{
            icon: FingerPrintIcon,
            label: "Workflows and automation",
            variant: "warning",
          }}
          centered
          title={"Features we wouldn't let\n you go without"}
        />

        <FeatureList features={workflowsAndAutomations} numberOfColumns={3} />
        <div className={"flex justify-center"}>
          <LinkButton label={"Get started"} />
        </div>
      </div>
    </section>
  );
}
