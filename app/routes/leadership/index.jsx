import BoardOfDirectorDetails from "./details/BoardOfDirectorDetails.jsx";
import BoardOfDirector from "./BoardOfDirector.jsx";
import Br from "../../components/Br.jsx";

const leaders = [
	{
	  name: "Tomas Gorny",
	  position: "CEO & Co-Founder",
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

export default function BoardForDirectors() {
	return (
		<div x-data="leadership">
			<section className="md:py-20  md:px-0 ">
				<div className=" md:max-w-6xl mx-auto">
					<h1 className="text-2xl md:text-6xl md:leading-tight font-medium mb-2 md:mb-4">
						Building the future of <Br /> businesses.
					</h1>
					<p className="mb-8  max-w-2xl opacity-80 font-normal text-sm/loose md:text-lg/loose">
						Empowering employees, partners, and customers with the best tools in the industry to help their businesses grow fearlessly.
					</p>
				</div>
			</section>

			<section className={"pb-20 relative"}>
				<div className="bottom-highlight-gradient"></div>
				<div className="md:max-w-6xl mx-auto gap-x-7 gap-y-16 grid grid-cols-4 ">
					{leaders.map((leader, index) => (
            <BoardOfDirector key={index} {...leader} index={index} />
					))}
				</div>
			</section>

			<BoardOfDirectorDetails />
		</div>
	);
}
