import SectionTitle from "~/components/SectionTitle";
import NewsListItem from "~/routes/news-and-media/NewsListItem";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { CustomSelectInput } from "~/routes/news-and-media/CustomSelectInput";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Divider from "~/components/Divider";

export function PeopleTakingAboutNextiva() {
  const newsList = [
    {
      title:
        "Immigration and diverse populace made America an innovation superpower",
      photo: "/img/news-and-media/techcircle.png",
      date: "Nov 15 2023",
      logo: "/img/news-and-media/azcentral-logo.png",
    },
    {
      title:
        "Never have an exit strategy, advises Tomas Gorny, Co-founder and CEO of Nextiva",
      photo: "/img/news-and-media/delivering-innovation.png",
      date: "Nov 15 2023",
      logo: "/img/news-and-media/azcentral-logo.png",
    },
    {
      title: "How will AI impact the future of work?",
      photo: "/img/news-and-media/thought-about-AI.png",
      date: "Nov 13 2023",
      logo: "/img/news-and-media/azcentral-logo.png",
    },
    {
      title:
        "Multimillionaire at 22 to broke to a nearly $1 billion private equity sale: The Inspiring...",
      photo: "/img/news-and-media/azcentral.png",
      date: "Nov 13 2023",
      logo: "/img/news-and-media/azcentral-logo.png",
    },
    {
      title:
        "How Nextiva is revolutionizing business communication using Cloud and Generative AI",
      photo: "/img/news-and-media/a-robot-holding-a-man.png",
      date: "Nov 13 2023",
      logo: "/img/news-and-media/azcentral-logo.png",
    },
    {
      title:
        "Tech Entrepreneur Tomas Gorny strikes again: Leverages conversations to help",
      photo: "/img/news-and-media/tec-enterpreneure.png",
      date: "Nov 15 2023",
      logo: "/img/news-and-media/azcentral-logo.png",
    },
    {
      title: "Nextiva plans to expand India team in next one year",
      photo: "/img/news-and-media/nextiva-plans.png",

      date: "Nov 15 2023",
      logo: "/img/news-and-media/azcentral-logo.png",
    },
    {
      title: "US-based Nextiva to hire 100 employees in India",
      photo: "/img/news-and-media/hire-employess.png",
      date: "Nov 15 2023",
      logo: "/img/news-and-media/azcentral-logo.png",
    },
  ];
  return (
    <section className={"py-20"}>
      <div className="max-w-6xl mx-auto space-y-8">
        {/*@ts-ignore */}
        <SectionTitle
          large
          title={"We get people talking"}
          description={"See what everyone is saying about Nextiva"}
        />

        <div className={"flex gap-24 pb-20 "}>
          <div className={"w-80 space-y-3 h-10 sticky top-20"}>
            <div className={"relative"}>
              <input
                placeholder={"Search all news"}
                type="text"
                className={
                  "rounded-full h-14 text-sm/none placeholder:text-white/70 pl-14 placeholder:font-light"
                }
              />

              <MagnifyingGlassIcon
                strokeWidth={2}
                className={
                  "h-10 w-10 absolute top-0 opacity-20 bottom-0 my-auto pl-4 "
                }
              />
            </div>
            <CustomSelectInput />
            <CustomSelectInput />
          </div>

          <div className="flex-1">
            <div className={"grid grid-cols-2 gap-x-7 gap-y-20"}>
              {newsList.map((news, index) => (
                <NewsListItem small key={index} {...news} />
              ))}
            </div>
          </div>
        </div>

        <div className={"my-10"}>
          {/* @ts-ignore*/}
          <Divider opacity={0.6} />
          <div className={"flex justify-between py-3 items-center relative"}>
            <button>
              <ArrowLeftIcon className={"h-5 w-5 opacity-50"} />
            </button>
            <ul className={"flex items-center gap-4 justify-center"}>
              {[...Array(4)].map((_, index) => (
                <li
                  className={` h-7 w-7 flex justify-center text-sm ${
                    index === 0 ? "bg-content/[0.07]" : "opacity-50"
                  }  items-center rounded-full`}
                >
                  {index + 1}
                </li>
              ))}
            </ul>

            <button>
              <ArrowRightIcon className={"h-5 w-5 opacity-50"} />
            </button>
          </div>
          {/* @ts-ignore*/}
          <Divider opacity={0.6} />
        </div>
      </div>
    </section>
  );
}
