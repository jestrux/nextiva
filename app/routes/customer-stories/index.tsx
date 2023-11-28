import React from "react";
import GradientTitlte from "~/components/GradientTitlte";

function CustomerStories() {
  return (
    <div className="pt-9">
      <section className="hero">
        <div className="container md:px-12 flex flex-col items-center justify-center relative">
          <div className="flex-1 flex flex-col items-center text-center md:max-w-5xl">
            <GradientTitlte>Customer Success Spotlight</GradientTitlte>

            <h1 className="text-2xl md:text-6xl md:leading-tight mb-2 md:mb-4">
              How Phat Scooters Uses Nextiva to Create the Best Customer
              Experience Every Time.
              {/* <span className="hidden md:inline">
                <br />
              </span>{" "}
              with a conversation */}
            </h1>
            <p className="opacity-80 font-normal text-sm/loose md:text-xl/loose mb-16">
              The high-end electric scooter company needed to level up its
              customer service as it grew. They found their solution in Nextiva
            </p>
            <video
              src="#"
              className="aspect-video w-full text-white bg-slate-400 rounded-3xl"
            >
              Video goes here
            </video>

            {/* <div className="flex flex-col md:flex-row items-center gap-3">
              <a href="#" className="button">
                Let's talk business
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <section className="statistics flex w-full gap-44 px-48 mt-32">
        <div>
          <div className="border border-gray-500/40 rounded-2xl p-6 w-min">
            <p className="text-4xl font-medium mb-1">Professional</p>
            <p className="text-sm opacity-50">Plan</p>
          </div>
        </div>
        <div className="w-full">
          <p className="mb-6">
            Phat Scooters is a high-end electric scooter maker based in Phoenix,
            Arizona. In 2020, they adopted Nextiva to empower their customer
            support team to better serve their customers and improve their
            overall business decision-making
          </p>
          <p className="text-sm opacity-70 mb-6">
            Founded in 2017, Phat Scooters selss high-end electric scooters to
            consumers around the world, servicing customers such as Bill Murray
            and Jeremy Renner. In Fall 2020, they began to search for an
            alternative business phone platform to their previous business phone
            provider, Verizon.
          </p>
          <GradientTitlte>
            Favourite Features: Call Recording, Call Groups, App, Auto-Attendant
          </GradientTitlte>
        </div>
      </section>
    </div>
  );
}

export default CustomerStories;
