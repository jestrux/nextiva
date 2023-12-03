import type { MetaFunction } from "@remix-run/node";

import Businesses from "~/components/Businesses";
import CTATeam from "~/components/CTATeam";

import Banner from "./Banner";
import ManageSocialMedia from "./ManageSocialMedia";
import SalesAndMarketing from "./SalesAndMarketing";
import FAQ from "~/components/FAQ";
import Results from "~/components/Results";
import Divider from "~/components/Divider";
import AIAndAutomation from "~/routes/social-marketing/AIAndAutomation";
import WorkflowsAndAutomations from "~/routes/social-marketing/WorkflowsAndAutomations";

export const meta: MetaFunction = () => {
  return [
    { title: "Nextiva Messenger" },
    {
      name: "description",
      content:
        "Nextiva is a software company that enables all your business communications through one collaboration tool. Get more done using fewer apps. Start your free trial!",
    },
  ];
};

export default function Index() {
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

      <ManageSocialMedia />

      <SalesAndMarketing />

      <AIAndAutomation />

      <WorkflowsAndAutomations />

      <Results className="mb-24" />

      <CTATeam
        title={`Ready to make business\nconversations better?`}
        actionText="Let's talk business"
      />

      <FAQ />
    </div>
  );
}
