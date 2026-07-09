import StepCard from "../ui/StepCard";
import { installationSteps } from "../../data/installation";

function Installation() {
  return (
    <section className="installation-section">
      <div className="section-heading">
        <span>How Installation Works</span>

        <h2>
          Simple setup. Clear training. Immediate school use.
        </h2>
      </div>

      <div className="install-steps">
        {installationSteps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            text={step.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Installation;