import {
  FaceSmileIcon,
  GlobeAmericasIcon,
  QueueListIcon,
  ReceiptPercentIcon,
  RectangleGroupIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import MediaFeatureSection from "~/components/MediaFeatureSection";
import SectionHighlight from "~/components/SectionHighlight.jsx";

const Reviews = () => {
  const locationReviews = [
    {
      icon: GlobeAmericasIcon,
      title: "72%",
      description:
        "of consumers say that positive reviews make them trust a local business more",
    },
    {
      icon: QueueListIcon,
      title: "65%",
      description:
        "of consumers say reliability, expertise, professionalism are the most important reputation traits for local businesses.",
    },
    {
      icon: FaceSmileIcon,
      title: "90%",
      description:
        "of consumers read online reviews before visiting a business",
    },
  ];

  const ecommerceReviews = [
    {
      title: "94%",
      description:
        "of customers avoided a business after reading negative reviews online.",
    },
    {
      title: "88%",
      description:
        "of consumers trust online reviews as much as personal recommendations.",
    },
    {
      title: "86%",
      description:
        "will hesitate to purchase from a business that has negative online reviews.",
    },
  ];

  const appReviews = [
    {
      icon: GlobeAmericasIcon,
      title: "$935.2B",
      description:
        "is the projected global app revenue expected to be surpassed by 2024.",
    },
    {
      icon: QueueListIcon,
      title: "79%",
      description:
        "of consumers check ratings and reviews before downloading an app.",
    },
    {
      icon: FaceSmileIcon,
      title: "55%",
      description: "check rating and reviews before making an in-app purchase.",
    },
    {
      icon: FaceSmileIcon,
      title: "75%",
      description:
        "of people can be influenced to install the app on Apple devices through  app reviews.",
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
            label: "Multi-platform",
          }}
          secondaryTag={{
            icon: ReceiptPercentIcon,
            label: "Beats others by 20%",
          }}
          image="/img/reviews-and-reputation/location-review.png"
          title="Location Reviews"
          description="Boost your local & digital brand reputation by keeping a close eye on your business listings. Monitor location based reviews on platforms like Facebook, Google, TripAdvisor, Yelp and more."
          features={locationReviews}
          primaryAction={"Get started"}
          featuresNumberOfColumns={3}
        />
      </div>{" "}
      <div className="relative py-24">
        <SectionHighlight withDivider />
        <MediaFeatureSection
          flipped
          primaryTag={{
            icon: SparklesIcon,
            label: "AI powered",
          }}
          image="/img/reviews-and-reputation/ecommarce-review.png"
          title="eCommerce Reviews"
          description="Build better product reviews and drive more sales by integrating ecommerce platforms like Amazon and Flipkart. You can even listen and respond to reviews on your own online store and website!"
          features={ecommerceReviews}
          primaryAction={"Get started"}
          featuresNumberOfColumns={3}
        />
      </div>
      <div className="relative py-24">
        <SectionHighlight withDivider />
        <MediaFeatureSection
          primaryTag={{
            icon: RectangleGroupIcon,
            label: "Multi-platform",
          }}
          secondaryTag={{
            icon: ReceiptPercentIcon,
            label: "Beats others by 20%",
          }}
          image="/img/reviews-and-reputation/app-reviews.png"
          title="App Reviews"
          description="Have iOS or Android applications? Increase downloads and improve your reputation by monitoring reviews on both platforms
all from a single platform."
          features={appReviews}
          primaryAction={"Get started"}
        />
      </div>
    </>
  );
};

export default Reviews;
