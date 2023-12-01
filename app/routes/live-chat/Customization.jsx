import Divider from "~/components/Divider";
import Button from "~/components/Button";
import CustomerQuote from "~/components/CustomerQuote";
import SectionTitle from "~/components/SectionTitle";
import { PaintBrushIcon } from "@heroicons/react/24/solid";

export default function Customization() {
	return (
		<section className={"py-24 relative"}>
			<Divider top capped />

			<SectionTitle
				centered
				primaryTag={{
					icon: PaintBrushIcon,
					label: "Customizable",
				}}
				title={"A live chat experience that\nfits your brand perfectly"}
				description="Beautiful live chat software that your visitors will love. Branding and customization. Proactive triggers."
			/>

			<div className="mt-16">
				<img
					src={"img/live-chat/customization.png"}
					className={"h-full "}
					alt=""
				/>
			</div>

			<section className="mt-28 flex flex-col items-center gap-12">
				<CustomerQuote />

				<Button href="#" small>
					Start your free trial
				</Button>
			</section>
		</section>
	);
}
