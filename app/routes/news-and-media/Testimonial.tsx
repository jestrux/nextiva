export default function Testimonial() {
  return (
    <section className={"py-20"}>
      <div className="max-w-4xl mx-auto">
        <div
          className={
            "bg-[#CDD6FE] space-y-12 text-canvas px-14 relative py-24 rounded-3xl overflow-hidden"
          }
        >
          <p className={"text-4xl font-medium max-w-xl"}>
            Nextiva has developed a solution for the future: One platform, one
            workspace, zero friction.
          </p>

          <div>
            <p className={"text-base/none"}>Tomas Gorny, </p>
            <small>Founder and CEO of Nextiva</small>
          </div>
          <div className={"absolute  -top-10 right-0 w-[25rem]  bottom-0  "}>
            <img
              src="/img/news-and-media/tomas-gorny.png"
              alt=""
              className={" scale-110 mt-9"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
