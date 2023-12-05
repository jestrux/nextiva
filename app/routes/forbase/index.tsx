import Banner from "~/routes/forbase/Banner";
import Prices from "~/routes/forbase/Prices";
import Features from "~/routes/forbase/Features";
import ForbesAdvisor from "~/routes/forbase/ForbesAdvisor";
import Testimonials from "~/components/Testimonials";
import FAQ from "~/components/FAQ";
import TestimonialWithForm from "~/routes/forbase/TestimonialWithForm";

export default function Forbase() {
  return (
    <div className={"mt-8"}>
      <Banner />
      <Prices />
      <Features />
      <ForbesAdvisor />
      <Testimonials />
      <TestimonialWithForm />
      <FAQ />
    </div>
  );
}
