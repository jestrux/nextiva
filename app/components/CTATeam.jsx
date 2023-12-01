import { Fragment } from "react";

export default function CTATeam({
  title = "See how Nextiva can\nhelp your business\ngrow fearlessly.",
  actionLink = "#",
  actionText = "Get started for free",
}) {
  return (
    <section className="py-8 md:py-12 mb-12">
      <div className="max-w-5xl mx-auto">
        <div className="border-content/10 bg-gradient-to-r from-primary to-primary-dark relative rounded-3xl p-16">
          <div className="flex-1 flex flex-col items-start justify-center gap-6">
            <div className="rounded-full bg-content/10 p-1 pr-4 flex items-center gap-6">
              <div className="flex items-center">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full -mr-4"
                    style={{ zIndex: 3 - i }}
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={`img/customer-stories/team${i}.png`}
                      alt=""
                    />
                  </div>
                ))}
              </div>

              <span className="text-sm font-light opacity-80">
                Talk to our team
              </span>
            </div>
            <h2 className="text-2xl md:text-5xl/[1.2] mb-2 md:mb-4">
              {title.split("\n").map((line) => (
                <Fragment key={line}>
                  {line}
                  <span className="hidden md:inline">
                    <br />
                  </span>
                </Fragment>
              ))}
            </h2>

            <a href={actionLink} className="button button-white">
              {actionText}
            </a>
          </div>

          <div className="absolute inset-y-0 right-0">
            <img className="h-full" src="img/customer-stories/cta.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
