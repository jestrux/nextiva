import SectionTitle from "~/components/SectionTitle.jsx";
import FeatureSection from "~/routes/forbase/FeatureSection.jsx";

export default function Features() {
  return (
    <section className={"py-20 space-y-20"}>
      <SectionTitle
        centered
        title={
          "Get up and chatting in no time with \n Nextiva, customized for you"
        }
      />

      <div className="space-y-36 max-w-5xl mx-auto">
        <FeatureSection
          image="/img/forbase/exterpice-graduate-mobility.png"
          title="Enterprise-grade mobility"
          description="Nextiva VolP systems empowers you to do business remotely or from the road. The Nextiva App enables complete and secure mobility for your business."
        />

        <FeatureSection
          flipped
          image="/img/forbase/security-reliability.png"
          title="Security & reliability designed for enterprises"
          description="With eight point of presence, carrier-grade data centers, and 99.999% uptime, you'll never miss a beat with your customers. We built one of the world's most reliable enterprise-ready voice networks."
        />

        <FeatureSection
          image="/img/forbase/actionable-voice.png"
          title="Actionable voice & business analytics"
          description="Uncover valuable insights you can act on regarding company call activities, realtime performance, and measure business outcomes. Customize dashboards and wallboards to drive performance across every aspect of the organization."
        />
      </div>
    </section>
  );
}
