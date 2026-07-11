function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div
      className={`section-heading ${
        align === "center"
          ? "heading-center"
          : ""
      }`}
    >
      <span>{eyebrow}</span>

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;