import type { MetaFunction } from "@remix-run/node";
import CustomerSupport from "~/routes/live-chat/CustomerSupport";
import AIChatBot from "~/routes/live-chat/AiChatBot";
import Customization from "~/routes/live-chat/Customization";
import AuraSection from "~/routes/live-chat/AuraSection";
import CustomerRelationship from "~/routes/live-chat/CustomerRelationship";
import Results from "~/routes/live-chat/Results";
import CTATeam from "~/components/CTATeam";
import FAQ from "~/routes/messenger/FAQ";
import Banner from "~/routes/live-chat/Banner";
import ChatWithUs from "~/routes/live-chat/ChatWithUs";
import { AIEnhancedCustomerServiceSolution } from "~/routes/live-chat/AIEnhancedCustomerServiceSolution";

export const meta: MetaFunction = () => {
  return [
    { title: "Nextiva: Business Communications Collaboration Software" },
    {
      name: "description",
      content:
        "Nextiva is a software company that enables all your business communications through one collaboration tool. Get more done using fewer apps. Start your free trial!",
    },
  ];
};

export default function AboutUsPage() {
  return (
    <>
      <Banner />
      <ChatWithUs />
      <AIEnhancedCustomerServiceSolution />
      <CustomerSupport />
      <AIChatBot />
      <Customization />
      <AuraSection />
      <CustomerRelationship />
      <Results />
      <CTATeam
        title={`Ready to make business\nconversations better?`}
        actionText="Let's talk business"
      />

      <FAQ />
    </>
  );
}
