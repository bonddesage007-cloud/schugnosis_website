import SectionHeading from "../ui/SectionHeading";
import { journeyTimeline } from "../../data/journeyTimeline";

function Journey() {
  return (
    <section id="journey" className="journey-section">

      <SectionHeading
        eyebrow="UGNOSIS Journey"
        title="Building the Future of Institutional Intelligence."
        description="Every technology we build is one step toward a much larger mission—helping institutions understand themselves better, make better decisions and serve people more intelligently."
        align="center"
      />

      <div className="journey-grid">
        {journeyTimeline.map((item) => (
          <article
            className="journey-card"
            key={item.title}
          >
            <span className="journey-phase">
              {item.year}
            </span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="journey-ending">
        <p>
          This is only the beginning. Every generation of UGNOSIS products
          builds upon the last, moving from digital management to intelligent
          institutions.
        </p>
      </div>

    </section>
  );
}

export default Journey;