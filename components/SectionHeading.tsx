type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  index,
  label,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading mb-14 md:mb-20 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      <p
        className={`coord-label mb-4 flex items-center gap-3 uppercase text-bone-400 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="text-signal">[ {index} ]</span>
        {label}
      </p>
      <h2 className="font-display text-fluid-h2 leading-[1.02] tracking-tightest2 text-balance">
        {title}
      </h2>
    </div>
  );
}
