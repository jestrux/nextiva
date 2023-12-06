import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function CustomSelectInput() {
  return (
    <div
      x-data="{open:false, selectedOption: 'All'}"
      className={
        "bg-content/[0.05] h-14 relative rounded-full flex justify-between items-center px-6"
      }
    >
      <p className={"text-sm/none"}>Story type</p>
      <div
        x-on:click="open=!open"
        className={"flex cursor-pointer gap-1 items-center"}
      >
        <p
          className={
            "text-sm/none  rounded-md px-3 py-2 bg-gradient-to-r from-content/10 via-content/10 to-content/0 "
          }
        >
          <span x-text="selectedOption" className={"opacity-70"}>
            All
          </span>
        </p>
        <ChevronDownIcon
          x-bind:class="open && '-rotate-180 '"
          className={"h-6 w-6  opacity-70 transition-all"}
          strokeWidth={2}
        />
      </div>

      {/* options */}
      <ul
        x-show="open"
        x-cloak
        className={
          "absolute right-0 top-12 z-50 rounded-lg w-max py-2 border bg-content/10 backdrop-blur  "
        }
      >
        <li
          x-on:click="open=false; selectedOption='All'"
          className={"text-sm px-4 py-2 hover:bg-content/[0.08] cursor-pointer"}
        >
          All
        </li>
        <li
          x-on:click="open=false; selectedOption='Option 1'"
          className={"text-sm px-4 py-2 hover:bg-content/[0.08] cursor-pointer"}
        >
          Option 1
        </li>
        <li
          x-on:click="open=false; selectedOption='Option 2'"
          className={"text-sm px-4 py-2 hover:bg-content/[0.08] cursor-pointer"}
        >
          Option 2
        </li>
        <li
          x-on:click="open=false; selectedOption='other option'"
          className={"text-sm px-4 py-2 hover:bg-content/[0.08] cursor-pointer"}
        >
          other option
        </li>
      </ul>
    </div>
  );
}
