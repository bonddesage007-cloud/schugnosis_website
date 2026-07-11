import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";

import { platformFeatures } from "../../data/platformFeatures";

function Features() {
  return (
    <section id="features" className="section">
      <SectionHeading
        eyebrow="The SCHUGNOSIS Platform"
        title="One intelligent platform powering every part of school life."
        description="SCHUGNOSIS is the Educational Operating System developed by UGNOSIS to unify academics, administration, communication, finance, student services and institutional intelligence into one connected ecosystem."
      />

      <div className="feature-grid">
        {platformFeatures.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;