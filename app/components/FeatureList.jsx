import { PhoneIcon } from "@heroicons/react/24/solid/index.js";

export default function FeatureList({ features, numberOfColumns = 4 }) {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
      }}
      className="mt-12 grid grid-cols-4 gap-6 relative"
    >
      {features.map((feature, index) => (
        <FeatureListItem key={index} {...feature} />
      ))}
    </div>
  );
}

function FeatureListItem({ title, description, icon, variant = "regular" }) {
  var bgVariantMap = {
    primary: "bg-primary",
    regular: "bg-canvas",
    gradient: "bg-gradient-to-b from-canvas via-canvas to-transparent",
  };

  var bgClass = bgVariantMap[variant ?? "regular"] ?? bgVariantMap.regular;
  var Icon = icon ?? PhoneIcon;

  return (
    <div className="relative p-px rounded-xl overflow-hidden">
      <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-content/20 to-content/0"></div>

      <div
        className={`${bgClass} min-h-full relative rounded-xl p-5 flex flex-col`}
      >
        <div className="mb-2 opacity-50">
          <Icon className={"h-6"} />
        </div>

        <h3 className="mt-4 text-lg">{title}</h3>

        <p className="mt-1 font-light text-xs/relaxed opacity-60">
          {description}
        </p>
      </div>
    </div>
  );
}
