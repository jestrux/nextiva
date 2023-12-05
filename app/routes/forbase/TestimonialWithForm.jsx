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
    { name: "phoneUmber", label: "Phone Number", placeholder: "222-085-5458" },
    { name: "company", label: "Company", placeholder: "Enter company name" },
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
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 47.77%, #000 113.04%), url('/img/forbase/security-reliability.png'), lightgray -572.289px -73.883px / 350.052% 201.154% no-repeat",
          }}
          className={"rounded-2xl  w-96 inset-0 flex items-end"}
        >
          <div className={"p-4 gap-4 flex "}>
            <svg
              width="30"
              height="25"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={"h-8 w-8"}
            >
              <path
                d="M6.70692 12.6465H12.3102V24.6465H0V11.9704C0 8.53381 1.10367 5.80141 3.31101 3.77324C5.57495 1.74508 8.57467 0.702825 12.3102 0.646484V6.30846C10.3858 6.47747 8.97086 7.01268 8.06529 7.91409C7.15971 8.75916 6.70692 9.9986 6.70692 11.6324V12.6465ZM23.6016 12.6465H29.2048V24.6465H16.8947V11.9704C16.8947 8.53381 17.9983 5.80141 20.2057 3.77324C22.4696 1.74508 25.4693 0.702825 29.2048 0.646484V6.30846C27.2805 6.47747 25.8655 7.01268 24.9599 7.91409C24.0544 8.75916 23.6016 9.9986 23.6016 11.6324V12.6465Z"
                fill="#3758F9"
              />
            </svg>
            <div className={"space-y-3"}>
              <p className={"text-2xl font-medium "}>
                I’m a big fan of companies like Nextiva.
              </p>

              <div>
                <p className={"font-light "}>Steve Wozniak</p>
                <p className={"font-light opacity-50 "}>Co-founder at Apple</p>
              </div>
            </div>
          </div>
        </div>
        <form
          className={
            "border border-content/10 bg-gradient-to-r from-content/[0.07]  to-content/0 flex-1 p-8 rounded-2xl space-y-2"
          }
        >
          <h2 className={"text-2xl/none font-medium"}>
            See why 100,000+ small businesses choose Nextiva for VoIP phone
            service.
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
              By clicking the button, you agree to Nextiva’s Terms & Conditions.
            </small>
          </div>
        </form>
      </div>
    </section>
  );
}
