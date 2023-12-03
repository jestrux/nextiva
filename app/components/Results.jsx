import LinkButton from "./LinkButton";

const ResultCard = function ({ image, action, children, large = true }) {
  return (
    <div
      className={`${
        large ? "w-1/3 aspect-[1/1.25] p-12" : "w-1/3 aspect-[1/1.25] p-8"
      } relative flex-shrink-0 border-l border-b border-b-content/[0.008] border-t border-content/10 bg-gradient-to-br from-content/10 via-content/[0.07] to-transparent rounded-2xl overflow-hidden flex flex-col items-start justify-between gap-3`}
    >
      {image && (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={image}
          alt=""
        />
      )}

      {children}

      {action && <LinkButton label={action} />}
    </div>
  );
};

export default function Results({ large = true, className = "" }) {
  return (
    <section className={"pt-20"}>
      <div
        className={`${className}
			${large ? "max-w-6xl" : "max-w-5xl"} mx-auto overflow-visible`}
      >
        <h2 className="text-2xl md:text-5xl/tight font-medium">
          Nextiva customers realize value and
          <span className="hidden md:inline">
            <br />
          </span>
          results quickly.
        </h2>

        <div className="mt-16 flex gap-4">
          <ResultCard large={large} action="Read case study">
            <div className="flex flex-col">
              <h3 className="text-2xl">
                "Our fans come first, and Nextiva enables us to have great
                conversations with our fans everyday."
              </h3>

              <div className="mt-4 opacity-60">Savannah Bananas, Owner</div>
            </div>
          </ResultCard>

          <ResultCard large={large} image="img/jesse-cole.jpg" />

          <ResultCard large={large} action="Read case study">
            <img
              className="h-6"
              src="img/messenger/tata-play-logo.png"
              alt=""
            />

            <div className="mt-5 flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <h3 className="text-4xl/none font-medium tracking-wide">
                  21M+
                </h3>
                <p className="text-sm/none opacity-60">Customers</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-4xl/none font-medium tracking-wide">40%</h3>
                <p className="text-sm/none opacity-60">Cost Reduction</p>
              </div>
            </div>
          </ResultCard>

          <ResultCard
            large={large}
            image="img/messenger/tata-play-case-study.png"
          />

          <div className="w-32">&nbsp;</div>
        </div>
      </div>
    </section>
  );
}
