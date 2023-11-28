import Banner from "./Banner";
import Statistics from "./Statistics";
import Testimonial from "./Testimonial";
import Results from "./Results";
import UpgradingCustomerService from "./UpgradingCustomerService";
import OtherCustomerStories from "./OtherCustomerStories";
import CTA from "./CTA";

function CustomerStories() {
	return (
		<div className="mt-12">
			<Banner />
			<Statistics />
			<Testimonial />
			<UpgradingCustomerService />
			<Results />
			<OtherCustomerStories />
			<CTA />
		</div>
	);
}

export default CustomerStories;
