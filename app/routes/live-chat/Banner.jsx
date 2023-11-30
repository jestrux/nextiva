export default function Banner() {
  return (
    <section className={"pt-24 flex justify-center"}>
      <div className="flex-1 flex container flex-col items-center text-center md:max-w-5xl">
        <span className="mb-4 py-2 pl-3 pr-3.5 rounded-2xl bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light inline-flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-0.5 w-4 md:w-4"
          >
            <path
              fillRule="evenodd"
              d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z"
              clipRule="evenodd"
            />
          </svg>

          <span className="opacity-60 text-xs md:text-[15.2px]">
            Scale your business with
          </span>
        </span>
        <h1 className="text-2xl md:text-6xl md:leading-tight tracking-wide font-semibold mb-2 md:mb-4">
          AI Powered Live Chat
        </h1>
        <p className="mb-8 text-[#B6B7BE] font-thin md:text-[17px] tracking-wide">
          Resolve issues instantly, keep customers happy, and increase team{" "}
          efficiency <br /> with AI-powered chatbots for sales and support.
        </p>

        <div className="flex items-center gap-5">
          <a href="#" className="button text-sm">
            Start for free
          </a>

          <a
            href="#"
            className="button-outline text-sm flex items-center space-x-3"
          >
            <span>Talk to an agent</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
