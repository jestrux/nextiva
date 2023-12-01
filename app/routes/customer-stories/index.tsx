import Banner from "./Banner";
import Statistics from "./Statistics";
import Testimonial from "./Testimonial";
import UpgradingCustomerService from "./UpgradingCustomerService";
import OtherCustomerStories from "./OtherCustomerStories";
import CTATeam from "../../components/CTATeam";
import Results from "~/components/Results";

function CustomerStories() {
	return (
		<div className="mt-12">
			<Banner />
			<Statistics />
			<Testimonial />
			<UpgradingCustomerService />

			<Results className="pt-12 pb-32" />

			<OtherCustomerStories />
			<CTATeam />
		</div>
	);
}

export default CustomerStories;
