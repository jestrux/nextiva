import Button from "./Button";
import LinkButton from "~/components/LinkButton.jsx";

function VibrantTag({ icon: Icon, label, variant = "success" }) {
  const colorMap = {
    success: "bg-success/20 text-success",
    warning: "bg-warning/20 text-warning",
  };

  const bgClass = colorMap[variant ?? "success"] ?? colorMap.success;

  return (
    <div className={`${bgClass} h-10 px-5 rounded-xl flex items-center gap-2`}>
      <Icon className="w-5" />
      {label}
    </div>
  );
}

export default function SectionTitle({
  title,
  description,
  primaryTag,
  secondaryTag,
  primaryAction,
  secondaryAction,
  linkAction,
  centered = false,
}) {
  return (
    <div
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start"
      }`}
    >
      {(primaryTag || secondaryTag) && (
        <div className="flex items-center gap-2 text-sm/none">
          {primaryTag && <VibrantTag {...primaryTag} />}
          {secondaryTag && (
            <VibrantTag {...{ variant: "warning", ...secondaryTag }} />
          )}
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-2xl md:text-5xl/[1.1]">
          {title.split("\n").map((line) => (
            <>
              {line}
              <span className="hidden md:inline">
                <br />
              </span>
            </>
          ))}
        </h3>
        <p className="mt-4 text-base/loose opacity-70 max-w-xl">
          {description}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-3">
        {primaryAction && <Button small>{primaryAction}</Button>}
        {secondaryAction && (
          <Button small outline>
            {primaryAction}
          </Button>
        )}
        {linkAction && (
          <LinkButton href={linkAction.href} label={linkAction.label} />
        )}
      </div>
    </div>
  );
}
