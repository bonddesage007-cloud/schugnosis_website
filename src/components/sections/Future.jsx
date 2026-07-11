import {
  BrainCircuit,
  Building2,
  ShieldCheck,
  GraduationCap,
  Users,
  Sparkles,
} from "lucide-react";

function Future() {
  const ecosystem = [
    {
      icon: Building2,
      title: "Institutional Intelligence™",
      text:
        "A unified digital administration platform connecting academics, finance, records, operations and decision making into one intelligent ecosystem.",
    },
    {
      icon: ShieldCheck,
      title: "UGNOSIS SafeTrace™",
      text:
        "A child accountability and safety platform that helps schools know where every child is throughout the school day while keeping parents informed.",
    },
    {
      icon: BrainCircuit,
      title: "MiGnosis Mentor™",
      text:
        "An AI-powered academic assistant designed to support teachers, students and administrators with personalised educational intelligence.",
    },
    {
      icon: Users,
      title: "SCHUGNOSIS Connect™",
      text:
        "A modern communication experience bringing parents, teachers and school leadership together through one connected platform.",
    },
    {
      icon: GraduationCap,
      title: "Campus Circle™",
      text:
        "A future digital campus experience where learning, student activities and collaboration exist in one intelligent environment.",
    },
    {
      icon: Sparkles,
      title: "Founding Partner Programme",
      text:
        "Schools joining our early journey help shape the future of educational technology while gaining priority access to upcoming innovations.",
    },
  ];

  return (
    <section className="future-section">

      <div className="future-heading">

        <span className="section-label">
          BUILDING THE DIGITAL FUTURE
        </span>

        <h2>
          We believe schools deserve more than software.
        </h2>

        <p>
          At UGNOSIS, we are building an ecosystem where administration,
          learning, finance, communication, safety and artificial intelligence
          work together seamlessly. Schugnosis is only the beginning of a much
          larger vision for educational institutions.
        </p>

      </div>

      <div className="future-grid">

        {ecosystem.map((item) => {

          const Icon = item.icon;

          return (

            <article
              className="future-card"
              key={item.title}
            >
              <Icon size={34} />

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </article>

          );

        })}

      </div>

    </section>
  );
}

export default Future;