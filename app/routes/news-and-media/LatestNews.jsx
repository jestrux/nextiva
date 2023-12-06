import NewsListItem from "./NewsListItem.jsx";

export function LatestNews() {
  const latestNews = [
    {
      title: "How Gen AI can transform business conversations",
      photo: "/img/news-and-media/techcircle.png",
      date: "Nov 15 2023",
      logo: "/img/news-and-media/techcircle-log.png",
    },
    {
      title:
        "How Tomas Gorny lost it all, rebuilt bigger, and became a global business leader",
      photo: "/img/news-and-media/azcentral.png",
      date: "Nov 13 2023",
      logo: "/img/news-and-media/azcentral-logo.png",
    },
    {
      title: "Nextiva’s CEO, Tomas Gorny, on his journey of innovation",
      photo: "/img/news-and-media/usa-today.png",
      date: "Nov 8 2023",
      logo: "/img/news-and-media/usa-today-logo.png",
    },
    {
      title:
        "Tomas Gorny: From humble begginings to customer experience innovator",
      photo: "/img/news-and-media/humble.png",
      date: "Nov 15 2023",
    },
    {
      title: "Nextiva named to Inc’s second annual power partner awards ",
      photo: "/img/news-and-media/nextiva-in.png",
      date: "Nov 13 2023",
      logo: "/img/news-and-media/azcentral-logo.png",
    },
    {
      title:
        "Delivering innovation: Nextiva’s founder and CEO, Tomas Gorny, shares his incredible journey",
      photo: "/img/news-and-media/delivering-innovation.png",
      date: "Nov 8 2023",
      logo: "/img/news-and-media/usa-today-logo.png",
    },
  ];
  return (
    <section className={"pb-20 pt-10"}>
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className={"font-medium text-3xl"}>Our latest news</h2>

        <div className={"grid grid-cols-3 gap-x-5 gap-y-20 p"}>
          {latestNews.map((news, index) => (
            <NewsListItem key={index} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
}
