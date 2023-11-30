export default function AuraSection() {
  return (
    <section className={" pt-10 pb-20"}>
      <div className="container flex flex-col space-y-6 items-center">
        <img src={"img/live-chat/aura-logo.png"} alt="" className={"w-20"} />
        <p className={"text-center text-[1.11rem] font-light tracking-wide "}>
          We've reached 96% customer satisfaction because of <br />
          Nextiva and their live chat.
        </p>

        <div className={"flex space-x-4"}>
          <div className={"h-12 w-12 rounded-full bg-gray-100 overflow-hidden"}>
            <img src="img/live-chat/aura-ceo.png" alt="" />
          </div>
          <div>
            {" "}
            <p className={"text-[15.5px] tracking-wide "}>Hari Ravichandran,</p>
            <small className={"text-white/70 font-light"}>
              Founder and CEO, Aura
            </small>
          </div>
        </div>

        <a href="#" className="button text-sm h-0 py-5 ">
          Start your free trial
        </a>
      </div>
    </section>
  );
}
