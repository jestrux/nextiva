const experiences = [
  {
    company: "Nextiva",
    duration: "2023 - Present",
    position: "Chief Product & Technology Officer",
  },
  {
    company: "HinFore",
    duration: "2023",
    position: "Chief Executive Officer/Co-Founder",
  },
  {
    company: "Trader Interactive",
    duration: "2020 - 2022",
    position: "Chief Product & Technology Officer",
  },
  {
    company: "Microsoft",
    duration: "1996 - 2020",
    position: "CTO / Chief Architect",
  },
];

export default function BoardOfDirectorDetails() {
  return (
    <div x-cloak x-show="selectedLeader">
      {/*overlay */}
      <div
        style={{ zIndex: 9998 }}
        className="fixed inset-0 bg-[#0B1029] bg-opacity-75 transition-opacity"
      ></div>

      {/* modal*/}
      <div style={{ zIndex: 9999 }} className="fixed inset-0 overflow-hidden ">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto relative w-screen bg-amber-200 max-w-xl">
              {/*  overlay shadow */}
              <div
                className={
                  "absolute blur-[170px] rounded-xl opacity-50 inset-y-0 w-96 bg-primary"
                }
              ></div>

              {/* modal contents */}
              <div className="flex h-full px-6 text-white flex-col overflow-y-scroll relative bg-[#0B1029] pb-6 shadow-xl">
                <div className=" py-4 z-10 bg-primary-darker sticky top-0 w-full flex border-b justify-between">
                  <div className={"flex space-x-2.5 "}>
                    {/* previous button */}
                    <button x-on:click="previousLeader()">
                      <svg
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={"h-6 w-6 opacity-50"}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M44.1992 25.9996C44.1992 24.9227 43.3262 24.0496 42.2492 24.0496L14.5906 24.0496L25.4008 13.7552C26.1771 13.0088 26.2013 11.7743 25.4548 10.998C24.7084 10.2217 23.474 10.1975 22.6977 10.944L8.39765 24.594C8.0153 24.9616 7.79922 25.4692 7.79922 25.9996C7.79922 26.53 8.0153 27.0376 8.39765 27.4052L22.6977 41.0552C23.474 41.8017 24.7084 41.7775 25.4548 41.0012C26.2013 40.2249 26.1771 38.9904 25.4008 38.244L14.5906 27.9496L42.2492 27.9496C43.3262 27.9496 44.1992 27.0766 44.1992 25.9996Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    {/* next button */}
                    <button x-on:click="nextLeader()">
                      <svg
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={"h-6 w-6"}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.80078 25.9996C7.80078 24.9227 8.67383 24.0496 9.75078 24.0496L37.4094 24.0496L26.5992 13.7552C25.8229 13.0088 25.7987 11.7744 26.5452 10.998C27.2916 10.2217 28.526 10.1975 29.3023 10.944L43.6023 24.594C43.9847 24.9616 44.2008 25.4692 44.2008 25.9996C44.2008 26.53 43.9847 27.0376 43.6023 27.4052L29.3023 41.0552C28.526 41.8017 27.2916 41.7775 26.5452 41.0012C25.7987 40.2249 25.8229 38.9904 26.5992 38.244L37.4094 27.9496L9.75078 27.9496C8.67383 27.9496 7.80078 27.0766 7.80078 25.9996Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* close slide over modal*/}
                  <button
                    type="button"
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    x-on:click="selectLeader()"
                  >
                    <span className="absolute -inset-2.5"></span>
                    <span className="sr-only">Close panel</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative mt-6 flex-1 space-y-14 ">
                  {/* biography */}
                  <div className={"flex pt-5 space-x-6"}>
                    <div className={"h-64 rounded-lg w-48 "}>
                      <img
                        x-bind:src="'img/leadership/' + selectedLeader.avatar"
                        src="/img/leadership/SenthilVelayuthan.png"
                        alt=""
                      />
                    </div>
                    <div
                      className={"flex-1 gap-y-8 flex flex-col justify-between"}
                    >
                      <p
                        className={
                          "text-lg leading-relaxed tracking-wide font-medium"
                        }
                      >
                        "Nextiva believes that customer satisfaction is the key
                        to business success. We will provide industry leading
                        solutions that enable businesses to understand, engage
                        and delight their customers across multiple channels."
                      </p>
                      <div className={"space-y-2"}>
                        <p className={"flex font-medium text-sm"} x-text="selectedLeader.name">
                          Senthil Velayuthan
                        </p>
                        <small className={"opacity-70"} x-text="selectedLeader.position">
                          Chief Product & Technology Officer
                        </small>
                      </div>
                    </div>
                  </div>
                  {/* education*/}
                  <div>
                    <h3 className={"font-medium border-b pb-6 "}>Education</h3>
                    <div className={"flex gap-8 pt-6"}>
                      {[...Array(2)].map((_, index) => (
                        <div className={"flex flex-col gap-y-2"} key={index}>
                          <p className={"text-sm"}>Arizona State University</p>
                          <small
                            className={"text-white/50 text-xs max-w-[14rem] "}
                          >
                            MS, Computer Science and Engineering
                          </small>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* experience*/}
                  <div>
                    <h3 className={"font-medium text border-b pb-6"}>
                      Experience
                    </h3>
                    <div className={"flex flex-wrap gap-y-9 gap-x-10 pt-6"}>
                      {experiences.map(({ company, position, duration }) => (
                        <div className={"flex flex-col gap-y-2"} key={company}>
                          <div
                            className={
                              "flex justify-between gap-10 items-center"
                            }
                          >
                            <p className={"text-sm"}>{company}</p>

                            <small className={"text-white/50 text-xs "}>
                              {duration}
                            </small>
                          </div>
                          <small
                            className={"text-white/50 text-xs tracking-wide"}
                          >
                            {position}
                          </small>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={"font-medium  border-b pb-6"}>
                      About Senthil
                    </h3>
                    <div
                      className={
                        "text-white/70 tracking-wide text-xs/relaxed pt-6 space-y-5 max-w-lg"
                      }
                    >
                      <p>
                        As Chief Product and Technology Officer, Senthil
                        Velayutham oversees all aspects of product and
                        technology at Nextiva.
                      </p>
                      <p>
                        Senthil brings with him a proven history of leading
                        small and large geo-distributed, multi-disciplinary
                        product teams spanning apps, services, and devices. He
                        comes with a long and successful career of 24+ years at
                        Microsoft Corporation having served in leadership roles
                        for flagship products like Microsoft Exchange,
                        Skype/Skype for Business, and most recently as CTO/Chief
                        Architect for Microsoft Teams and then in the Microsoft
                        Search, Assistant and Intelligence division. He also has
                        an impressive track record that includes building
                        startup products from incubation that evolve into
                        successful businesses like Microsoft RoundTable and
                        Microsoft Teams and integrating parts of big
                        acquisitions like Skype into Microsoft.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
