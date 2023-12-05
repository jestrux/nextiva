import SectionHighlight from "~/components/SectionHighlight.jsx";
import SectionTitle from "~/components/SectionTitle.jsx";
import Br from "~/components/Br.jsx";

const Integrations = () => {
	return (
		<section className="py-20 mb-20 relative">
			<SectionHighlight />
			<SectionTitle
				centered
				title={"Seamlessly integrate with Gmail,\nOutlook and IMAP"}
				description="Designed to seamlessly work with the most popular email delivery services."
				primaryAction="Get started"
			/>

			<div className="max-w-5xl mx-auto my-12">
				<img src="img/email/integrations.png" alt="" />
			</div>

			<SectionHighlight bottom />
		</section>
	);
};

export default Integrations;
