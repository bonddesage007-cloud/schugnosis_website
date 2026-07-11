import {
  GraduationCap,
  ShieldCheck,
  Building2,
  Map,
  BrainCircuit,
  Network,
  ArrowDown,
} from "lucide-react";

const products = [
  {
    icon: GraduationCap,
    title: "SCHUGNOSIS",
    subtitle: "Digital School Management",
  },
  {
    icon: ShieldCheck,
    title: "SafeTrace",
    subtitle: "Student Accountability",
  },
  {
    icon: Building2,
    title: "REGNOSIS",
    subtitle: "Registry & Records",
  },
  {
    icon: Map,
    title: "UCIO",
    subtitle: "Urban Civic Intelligence",
  },
];

function Ecosystem() {
  return (
    <section className="ecosystem-section">

      <div className="future-heading">

        <span className="section-label">
          THE UGNOSIS ECOSYSTEM
        </span>

        <h2>
          One vision. Multiple intelligent platforms.
        </h2>

        <p>
          Every UGNOSIS solution solves a different institutional challenge,
          but they are designed to work together as one connected ecosystem of
          intelligence, data and decision support.
        </p>

      </div>

      <div className="ecosystem-center">

        <div className="ecosystem-core">

          <Network size={46} />

          <h3>UGNOSIS</h3>

          <p>Institutional Intelligence Platform</p>

        </div>

        <ArrowDown className="eco-arrow"/>

      </div>

      <div className="ecosystem-grid">

        {products.map((item) => {

          const Icon = item.icon;

          return (

            <article
              className="ecosystem-card"
              key={item.title}
            >

              <Icon size={34} />

              <h3>{item.title}</h3>

              <p>{item.subtitle}</p>

            </article>

          );

        })}

      </div>

      <div className="ecosystem-future">

        <BrainCircuit size={34}/>

        <div>

          <h3>Future Intelligence Layer</h3>

          <p>

            AI Assistants • Analytics • Predictive Insights • Decision
            Intelligence • Digital Twins • National Intelligence

          </p>

        </div>

      </div>

    </section>
  );
}

export default Ecosystem;