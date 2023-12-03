import BoardOfDirectorDetails from "./details/BoardOfDirectorDetails.jsx";
import BoardOfDirector from "./BoardOfDirector.jsx";
import Br from "../../components/Br.jsx";

const leaders = [
	{
		name: "Bob Beauchamp",
		position: "Board Member,Advisor, Investor",
		avatar: "BobBeauchamp.png",
	},
	{
		name: "Alan Black",
		position: "Founder, Surfspray Capital",
		avatar: "AlanBlack.png",
	},
	{
		name: "John Connolly",
		position: "Founder/Managing Directorat Eaglehead Capital",
		avatar: "JohnConnolly.png",
	},
	{
		name: "Tracy Conrad",
		position: "Chief Amazing Officer, Co-Founder",
		avatar: "TracyConrad.png",
	},
	{
		name: "Tomas Gorny",
		position: "Chairman, CEO, & Co-Founder",
		avatar: "TomasGorny.png",
	},
	{
		name: "Stephen Kerns",
		position: "Managing Director, Goldman Sachs Growth Equity",
		avatar: "StephenKerns.png",
	},
];

export default function BoardForDirectors() {
	return (
		<div x-data="leadership">
			<section className="md:py-20  md:px-0 ">
				<div className=" md:max-w-6xl mx-auto">
					<h1 className="text-2xl md:text-6xl md:leading-tight font-medium mb-2 md:mb-4">
						Meet our Board of <Br /> Directors
					</h1>
					<p className="mb-8  max-w-2xl opacity-80 font-normal text-sm/loose md:text-lg/loose">
						Our Board of Directors brings together wide experience,
						deep expertise, and sound judgment to help chart a
						strong path forward.
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
