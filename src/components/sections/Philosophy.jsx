import SectionHeading from "../ui/SectionHeading";

function Philosophy() {
  return (
    <section className="philosophy-section">

      <SectionHeading
        eyebrow="Why We Exist"
        title="Technology should help institutions understand themselves."
        description="Schools deserve more than software. They deserve intelligence."
        align="center"
      />

      <div className="philosophy-content">

        <p>
          Every student record.
        </p>

        <p>
          Every classroom.
        </p>

        <p>
          Every assessment.
        </p>

        <p>
          Every parent interaction.
        </p>

        <p>
          Every financial decision.
        </p>

        <p>
          Every administrative process.
        </p>

        <p className="philosophy-highlight">
          Together they form the living picture of an institution.
        </p>

        <p>
          SCHUGNOSIS exists to help schools see that picture clearly.
        </p>

        <p>
          UGNOSIS exists to build the intelligence behind it.
        </p>

      </div>

    </section>
  );
}

export default Philosophy;