import SelectInput from "../../components/SelectInput.jsx";
import TextInput from "../../components/TextInput.jsx";
import Button from "../../components/Button.jsx";

export default function TestimonialWithForm() {
	const formFields = [
		{ name: "name", label: "Name", placeholder: "John" },
		{ name: "lastName", label: "Last Name", placeholder: "Doe" },
		{
			name: "email",
			label: "Email Address",
			placeholder: "Enter your email address",
		},
		{
			name: "phoneUmber",
			label: "Phone Number",
			placeholder: "222-085-5458",
		},
		{
			name: "company",
			label: "Company",
			placeholder: "Enter company name",
		},
		{
			name: "numberOfEmployees",
			label: "Number Of Employees",
			options: ["1-20", "20-40"],
		},
	];
	return (
		<section className={"pb-10"}>
			<div className="max-w-6xl mx-auto flex gap-6">
				<div
					className={
						"relative rounded-2xl overflow-hidden w-96 inset-0 flex items-end"
					}
				>
					<img
						className="absolute inset-0 w-full h-full object-cover object-left"
						src="img/forbase/steve-wozniak.png"
						alt=""
					/>
				</div>
				<form
					className={
						"border border-content/10 bg-gradient-to-r from-content/[0.07]  to-content/0 flex-1 p-8 rounded-2xl space-y-2"
					}
				>
					<h2 className={"text-2xl/none font-medium"}>
						See why 100,000+ small businesses choose Nextiva for
						VoIP phone service.
					</h2>

					<div className={"grid grid-cols-2 gap-x-5 gap-y-3 pt-2"}>
						{formFields.map((field) => {
							if (field?.options) {
								return <SelectInput {...field} />;
							} else return <TextInput {...field} />;
						})}
					</div>

					<div className={"flex flex-col items-start gap-5 pt-3"}>
						<Button small href={""}>
							Let’s get started
						</Button>
						<small className={"text-xs/none text-white/50"}>
							By clicking the button, you agree to Nextiva’s Terms
							& Conditions.
						</small>
					</div>
				</form>
			</div>
		</section>
	);
}
