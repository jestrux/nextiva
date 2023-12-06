import { LatestNews } from "./LatestNews.jsx";
import Banner from "./Banner.jsx";
import Testimonial from "./Testimonial.js";
import { PeopleTakingAboutNextiva } from "./PeopleTakingAboutNextiva.js";

export default function NewsAndMedia() {
  return (
    <section className={"mt-8"}>
      <Banner />
      <LatestNews />
      <Testimonial />
      <PeopleTakingAboutNextiva />
    </section>
  );
}
