import Banner from "./Banner.jsx";
import Businesses from "../../components/Businesses.jsx";
import Divider from "../../components/Divider.jsx";
import MessagingPlatforms from "./MessagingPlatforms.jsx";
import Reviews from "./Reviews.jsx";
import AssentialFeatures from "./AssentialFeatures.jsx";
import AIAndAutomation from "./AIAndAutomation.jsx";
import Results from "../../components/Results.jsx";
import CTATeam from "../../components/CTATeam.jsx";
import FAQ from "../../components/FAQ.jsx";

export default function ReviewAndReputation() {
  return (
    <div className="mt-8">
      <Banner />

      <section className="py-20 relative z-10">
        {/*  @ts-ignore*/}
        <Divider top />
        <Businesses title={`Trusted by local brands\nand businesses`} />
        {/*  @ts-ignore*/}
        <Divider bottom />
      </section>
      <MessagingPlatforms />
      <Reviews />
      <AIAndAutomation />
      <AssentialFeatures />

      <Results className="mb-24" />

      <CTATeam
        title={`Ready to make business\nconversations better?`}
        actionText="Let's talk business"
      />

      <FAQ />
    </div>
  );
}
