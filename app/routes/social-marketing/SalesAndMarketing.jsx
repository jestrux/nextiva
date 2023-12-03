import {
  ClipboardDocumentCheckIcon,
  FaceSmileIcon,
  PresentationChartLineIcon,
  ReceiptPercentIcon,
  RectangleGroupIcon,
  SparklesIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import MediaFeatureSection from "~/components/MediaFeatureSection.jsx";
import SectionHighlight from "~/components/SectionHighlight.jsx";

const SalesAndMarketing = () => {
  const saleServices = [
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Proactive Ticketing",
      description:
        "Track all messages, comments and replies with our auto-tagging & ticketing system. Know in real-time when customers engage and route cases to team members as you see fit.",
    },
    {
      icon: TableCellsIcon,
      title: "Customer History",
      description:
        "See information about your customers and easily grab information from previous interactions that may aid you in providing the best customer experience",
    },
    {
      icon: PresentationChartLineIcon,
      title: "Schedule & Publish your social posts",
      description:
        "Monitor your brand's sentiment overtime to ensure that you are continuing to build better, stronger customer relationships.",
    },
    {
      icon: FaceSmileIcon,
      title: "Heading",
      description: "Paragraph goes here",
    },
  ];

  const supportServices = [
    {
      title: "Select your channels",
      description:
        "Decide which of your favorite social media channels you want to publish your content too.",
    },
    {
      title: "Create your content",
      description:
        "Write your post, upload your favorite images or videos and preview across multiple channels to refine your content.",
    },
    {
      title: "Schedule Delivery",
      description:
        "Once you're ready, publish immediately or schedule it to be delivered at a future date and time you desire.",
    },
    {
      title: "Heading",
      description: "Paragraph goes here",
    },
  ];

  const monitorPostServices = [
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Real time notification",
      description:
        "be the first to find out if someone posts a complaint and respond to it immediately.",
    },
    {
      icon: TableCellsIcon,
      title: "Channel Analytics",
      description:
        "Monitor the performance of your posts, their popularity and engagement by channel or as one integrated report",
    },
    {
      icon: PresentationChartLineIcon,
      title: "Industry Trends",
      description:
        "Monitor competitors or industry leading brands to provide inspiration or ideas on how to improve your social media strategy",
    },
    {
      icon: FaceSmileIcon,
      title: "Real-time Response",
      description:
        "Respond to comments or replies in real-time across all of your social media channels, from a single, easy to use inbox",
    },
  ];

  return (
    <>
      {/*Sale on all Messengers*/}
      <div className="relative py-24">
        <SectionHighlight withDivider />
        <MediaFeatureSection
          primaryTag={{
            icon: RectangleGroupIcon,
            label: "Engage",
          }}
          image="/img/social-marketing/social-media.png"
          title="Provide better experiences  to the world on social"
          description="Increase customers loyalty and show the world that you care about your customers. Answer questions, reply to positive feedback and turn social media visitors into fans."
          features={saleServices}
          primaryAction={"Get started"}
        />
      </div>{" "}
      <div className="relative py-24">
        <SectionHighlight withDivider />
        <MediaFeatureSection
          flipped
          primaryTag={{
            icon: SparklesIcon,
            label: "Schedule",
          }}
          secondaryTag={{
            icon: ReceiptPercentIcon,
            label: "Publish",
          }}
          image="/img/social-marketing/schedual-social-media-post.png"
          title="Schedule & Publish your social posts"
          description="Streamline your outreach and marketing efforts by scheduling and publishing your content all from a single dashboard. No more app switching or isolated marketing campaigns."
          features={supportServices}
          primaryAction={"Get started"}
        />
      </div>
      <div className="relative py-24">
        <SectionHighlight withDivider />
        <MediaFeatureSection
          primaryTag={{
            icon: RectangleGroupIcon,
            label: "Analyze",
          }}
          image="/img/social-marketing/monitor-and-anlayze-post.png"
          title="Listen, Monitor and Analyze in Real Time"
          description="Keep track of your social media performance and engagement. Never miss an opportunity to turn a like, comment, reply or direct message into a meaningful & positive customer interaction"
          features={monitorPostServices}
          primaryAction={"Get started"}
        />
      </div>
    </>
  );
};

export default SalesAndMarketing;
