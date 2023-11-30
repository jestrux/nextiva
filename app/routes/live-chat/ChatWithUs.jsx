export default function ChatWithUs() {
  const assistants = [
    "https://i.pinimg.com/474x/dc/91/e5/dc91e5389d4b6171de52ae758f4f19d0.jpg",
    "https://i.pinimg.com/474x/27/9c/3f/279c3f6c5d7ce6b9e8e8974129badd2d.jpg",
    "https://i.pinimg.com/474x/d9/d1/73/d9d1737d07338c6d691bb18f761da590.jpg",
  ];

  return (
    <section
      className={
        " m-5 flex justify-center my-5 mt-16 border rounded-3xl bg-[#1A1F36] px-10 py-24"
      }
    >
      <div className={"space-y-8"}>
        <div className={" flex -space-x-4"}>
          {assistants.map((imageUrl, index) => (
            <div
              key={index}
              style={{ zIndex: 3 - index }}
              className={
                "h-11 w-11 rounded-full bg-gray-100   border-[#1A1F36] border-[3px]"
              }
            >
              <img
                src={imageUrl}
                className={"h-full w-full rounded-full object-cover"}
                alt={""}
              />
            </div>
          ))}
        </div>

        <h3 className={"text-[2.8rem] font-medium leading-[3.4rem]"}>
          Hello, Ross. <br />
          How can we help?
        </h3>

        <div
          className={
            "bg-white flex justify-between items-center px-9 py-6 rounded-3xl space-x-20"
          }
        >
          <div className={"space-y-2"}>
            <p className={"text-2xl  text-[#0C1027]"}>Live chat with us</p>
            <p className={"text-[#6D707E] font-light tracking-wider text-lg "}>
              Start with Nextie, we'll jump in if needed.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-primary"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
