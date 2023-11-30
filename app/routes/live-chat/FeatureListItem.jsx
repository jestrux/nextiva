export default function FeatureListItem({
  title,
  description,
  Icon,
  className = "bg-canvas",
}) {
  return (
    <div className="relative p-px rounded-xl overflow-hidden">
      <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-content/20 to-content/0"></div>
      <div
        className={`min-h-full relative rounded-xl  p-5 flex ${className} flex-col`}
      >
        <div className="mb-2 text-white/50">
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
