import SectionTitle from "~/components/SectionTitle.jsx";
import SectionHighlight from "~/components/SectionHighlight.jsx";

export default function AIAndAutomation() {
  return (
    <section className={"relative py-20 "}>
      <SectionHighlight withDivider />
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionTitle
          centered
          title={"Work smarter using AI\nand automation"}
          description={
            "Put your social support on autopilot with AI-powered experience. Reduce repetitive and manual tasks in minutes. \n" +
            "Boost your team's effectiveness. Automatically prioritize status and filter incoming customer messages, allowing you to stay focused and address messages based on their significance."
          }
          linkAction
        />

        <div className={"flex justify-center gap-6"}>
          <img
            src="/img/social-marketing/nextiva-ai.png"
            className={"w-5/12"}
            alt=""
          />
          <img
            src="/img/social-marketing/with-nextiva-ai.png"
            className={"w-5/12"}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
