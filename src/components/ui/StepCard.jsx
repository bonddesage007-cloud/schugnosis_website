import { Wrench } from "lucide-react";

function StepCard({ number, title, text }) {
  return (
    <div className="step-card">
      <span>{number}</span>

      <Wrench size={22} />

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

export default StepCard;