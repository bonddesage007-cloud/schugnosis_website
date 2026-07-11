import SectionHeading from "../ui/SectionHeading";

function Philosophy() {
  return (
    <section id="philosophy" className="philosophy-section">

      <SectionHeading
        eyebrow="The UGNOSIS Philosophy"
        title="Understanding comes before technology."
        description="UGNOSIS believes the best technology begins with understanding people, institutions and the decisions they make every day."
        align="center"
      />

      <div className="philosophy-content">

        <p>
          Before software...
        </p>

        <p>
          Before artificial intelligence...
        </p>

        <p>
          Before automation...
        </p>

        <p>
          There must first be understanding.
        </p>

        <p className="philosophy-highlight">
          Every student.
          Every teacher.
          Every classroom.
          Every assessment.
          Every conversation.
          Every decision.
        </p>

        <p>
          Together they reveal the living story of an institution.
        </p>

        <p>
          SCHUGNOSIS exists to help schools understand that story,
          organize it and use it to make better decisions every day.
        </p>

        <p>
          UGNOSIS exists because we believe understanding is the
          foundation upon which meaningful technology is built.
        </p>

      </div>

    </section>
  );
}

export default Philosophy;