import Br from "../../components/Br.jsx";
import SelectInput from "../../components/SelectInput.jsx";
import TextInput from "../../components/TextInput.jsx";
import Button from "../../components/Button.jsx";
import ForbaseBusinesses from "./ForBaseBusinesses.jsx";

export default function Banner() {
  const formFields = [
    { name: "name", label: "Name", placeholder: "John" },
    { name: "lastName", label: "Last Name", placeholder: "Doe" },
    {
      name: "email",
      label: "Email Address",
      placeholder: "Enter your email address",
    },
    { name: "phoneUmber", label: "Phone Number", placeholder: "222-085-5458" },
    { name: "company", label: "Company", placeholder: "Enter company name" },
    {
      name: "numberOfEmployees",
      label: "Number Of Employees",
      options: ["1-20", "20-40"],
    },
  ];
  return (
    <section className="md:py-20  md:px-0 space-y-16 ">
      <div className=" md:max-w-6xl  mx-auto flex gap-32 items-center">
        <div className={"w-fit"}>
          <h1 className="text-2xl md:text-6xl md:leading-tight font-medium mb-2 md:mb-4">
            Simple,
            <Br /> Affordable VoIP <Br /> Phone Service.
          </h1>
          <p className="mb-8  max-w-md opacity-80 font-normal text-sm/loose md:text-lg/loose">
            Operate like a Fortune 500 company, without the Fortune 500 prices.
            Enjoy all the features and functionality you need in one place
          </p>
        </div>

        <form
          className={
            "border border-content/10 bg-gradient-to-r from-content/[0.07]  to-content/0 flex-1 p-8 rounded-2xl space-y-6"
          }
        >
          <h2 className={"text-2xl/none font-medium"}>
            Join 100,000+ growing businesses.
          </h2>

          <div className={"grid grid-cols-2 gap-x-5 gap-y-3 pt-2"}>
            {formFields.map((field) => {
              if (field?.options) {
                return <SelectInput {...field} />;
              } else return <TextInput {...field} />;
            })}
          </div>

          <div className={"flex flex-col items-start gap-5 pt-2"}>
            <Button small href={""}>
              Let’s get started
            </Button>
            <small className={"text-xs/none text-white/50"}>
              By clicking the button, you agree to Nextiva’s Terms & Conditions.
            </small>
          </div>
        </form>
      </div>
      <ForbaseBusinesses />
    </section>
  );
}
