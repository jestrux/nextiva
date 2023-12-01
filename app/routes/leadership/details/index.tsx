import SlideOver from "~/components/SlideOver";

export default function LeaderDetails() {
  return (
    <>
      <SlideOver>
        <div className=" py-4 flex border-b justify-between">
          <div className={"flex space-x-2.5"}>
            {/* previous button */}
            <button>
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
            <button>
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

        <div className="relative mt-6 flex-1 px-4 sm:px-6">{/*  */}</div>
      </SlideOver>
    </>
  );
}
