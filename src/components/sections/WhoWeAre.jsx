import { Brain, Lightbulb, GraduationCap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

function WhoWeAre() {
  return (
    <section className="section">

      <SectionHeading
        eyebrow="About UGNOSIS"
        title="Every great technology begins with understanding."
        description="UGNOSIS was founded on a simple belief: before technology can solve problems, it must first understand the people, institutions and communities it is built to serve."
      />

      <div className="who-grid">

        <div className="who-card">

          <Brain size={36} />

          <h3>Understanding First</h3>

          <p>
            The name <strong>UGNOSIS</strong> combines
            <strong> "U"</strong> — meaning <em>You</em> —
            with <em>Gnosis</em>, meaning knowledge and deep understanding.
            Every platform we create begins by understanding people before
            designing technology for them.
          </p>

        </div>

        <div className="who-card">

          <GraduationCap size={36} />

          <h3>Technology with Purpose</h3>

          <p>
            SCHUGNOSIS™ is our first Educational Operating System.
            It was created not simply to digitise school administration,
            but to understand how schools work, how educators teach,
            how students learn and how institutions can continually improve.
          </p>

        </div>

        <div className="who-card">

          <Lightbulb size={36} />

          <h3>Our Long-Term Vision</h3>

          <p>
            Every UGNOSIS platform is built upon the same philosophy:
            understand first, then build technology that enables better
            decisions, stronger institutions and more meaningful human
            experiences.
          </p>

        </div>

      </div>

    </section>
  );
}

export default WhoWeAre;