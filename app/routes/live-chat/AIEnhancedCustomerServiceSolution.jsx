export function AIEnhancedCustomerServiceSolution() {
  return (
    <section
      className={
        "bg-gradient-to-b py-24  from-content/5 via-content/5 to-transparent"
      }
    >
      <div className={"container space-y-2"}>
        <div
          className={
            " mb-4   pr-3 rounded-full bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light inline-flex items-center gap-1.5 w-fit"
          }
        >
          <img
            className={"h-11 w-11 object-cover rounded-l-full rounded-t-full"}
            src={
              "https://i.pinimg.com/474x/02/33/d8/0233d86c00fa9d82e7601986f48f12ae.jpg"
            }
            alt={""}
          />

          <p className={"opacity-60 text-xs md:text-sm "}>
            Hey! Tonny from Nextiva here
          </p>
        </div>

        <div className={""}>
          <p className={"text-[3.5rem] leading-[1] tracking-wide "}>
            <span className={"font-medium"}>
              {" "}
              With Nextiva’s AI you can deliver <br /> personalized experiences.
              Resolve up to <br />
              60% of customer questions. Our chatbot <br /> technology uses
              generative
            </span>{" "}
            <span className={"text-[#3D4052] font-medium"}>
              AI to deliver <br /> accurate answers that resolve customer <br />
              questions instantly, reduce support cost <br /> and increase
              customer satisfaction.
            </span>
          </p>
        </div>
      </div>

      <div className={"2xl:container "}>
        <img
          src={"img/live-chat/AI-Enhanced Customer Support Solutions.png"}
          alt={""}
        />
      </div>
    </section>
  );
}
