import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import LinkButton from "../../components/LinkButton.jsx";

export default function NewsListItem({ title, photo, logo, date, small }) {
  return (
    <article className={"space-y-4"}>
      <figure
        className={` ${
          small ? "h-56" : " h-72"
        } bg-content/20 overflow-hidden relative rounded-lg`}
      >
        <img src={photo} alt="" className={"h-full w-full object-cover"} />
        <div
          className={
            "absolute flex items-end px-5 pb-14 inset-0 bg-gradient-to-t from-canvas to-transparent"
          }
        >
          {logo && <img src={logo} className={"w-24"} alt="" />}
        </div>
      </figure>

      <div className={"space-y-4"}>
        <p
          className={
            "flex items-center gap-2 bg-content/[0.08] w-fit px-3 py-1.5 rounded-full"
          }
        >
          <CalendarDaysIcon className={"h-4 w-4"} />
          <span className={"text-sm/none tracking-wide"}>{date}</span>
        </p>

        <h3 className={"text-xl font-medium pb-4"}>{title}</h3>
      </div>
      <LinkButton label={"Read more"} />
    </article>
  );
}
