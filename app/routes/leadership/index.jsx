import Leader from "~/routes/leadership/Leader";
import LeaderDetails from "./details/index.js";

const leaders = [
  {
    name: "Tomas Gorny",
    position: "CEO & Co-rFounder",
    avatar: "TomasGorny.png",
  },
  {
    name: "Tracy Conrad",
    position: "Chief Amazing Officer, Co-Founder",
    avatar: "TracyConrad.png",
  },
  {
    name: "Senthil Velayuthan",
    position: "Chief Product & Technology Officer",
    avatar: "SenthilVelayuthan.png",
  },
  {
    name: "Anne Brennan",
    position: "Chief Financial Officer",
    avatar: "AnneBrennan.png",
  },
  {
    name: "Yaniv Masjedi",
    position: "Chief Marketing Officer",
    avatar: "YanivMasjedi.png",
  },
  {
    name: "Chris Reaburn",
    position: "Chief of Strategic Execution",
    avatar: "ChrisReaburn.png",
  },
  {
    name: "Josh Lesavoy",
    position: "Chief Information Officer",
    avatar: "JoshLesavoy.png",
  },
  {
    name: "Mark Green",
    position: "Chief People Officer",
    avatar: "MarkGreen.png",
  },
  {
    name: "Mitch Haber",
    position: "Chief of Strategic Growth",
    avatar: "MarkGreen.png",
  },
  {
    name: "Ken McMahon",
    position: "Chief Customer Officer",
    avatar: "KenMcMahon.png",
  },
  {
    name: "Lukas Gorny",
    position: "EVP, Office of Amazing",
    avatar: "LukasGorny.png",
  },
  {
    name: "Kim Lamont",
    position: "Chief of Staff",
    avatar: "KimLamont.png",
  },
  {
    name: "John Murphy",
    position: "General Counsel",
    avatar: "JohnMurphy.png",
  },
];
export default function Leadership() {
  return (
    <>
      <section className={"pt-20 relative"}>
        <div className="container px-10">
          <h1 className="text-2xl md:text-6xl md:leading-tight tracking-wide font-semibold mb-2 md:mb-4">
            Building the future of <br /> businesses.
          </h1>
          <p className="mb-8 max-w-2xl opacity-70 font-thin md:text-[17px] tracking-wide">
            Empowering employees, partners, and customers with the best tools in
            the industry to help their businesses grow fearlessly.
          </p>
        </div>
      </section>

      <section className={"pt-10 pb-20 relative"}>
        <div className={"bottom-highlight-gradient"}></div>
        <div className="container gap-10 grid grid-cols-4 px-10">
          {leaders.map((leader) => (
            <Leader key={leader.name} {...leader} />
          ))}
        </div>
      </section>

      <LeaderDetails />
    </>
  );
}
