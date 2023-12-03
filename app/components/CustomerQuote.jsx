const CustomerQuote = ({
  companyLogo,
  quote = "We've reached 96% customer satisfaction because of Nextiva and their live chat.",
  dp = "img/live-chat/aura-ceo.png",
  name = "Hari Ravichandran",
  role = "Founder and CEO, Aura",
}) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
      {companyLogo && <img src={companyLogo} alt="" className={"w-20"} />}

      <p className="text-2xl/relaxed text-center">“{quote}”</p>

      <div className="flex items-center justify-center gap-3">
        <img className="w-14" src={dp} alt="" />

        <div className="flex flex-col">
          <span>{name},</span>
          <span className="opacity-60">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerQuote;
