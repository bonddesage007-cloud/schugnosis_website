import {
  Brain,
  ShieldCheck,
  Cpu,
  WifiOff,
  HeartHandshake,
} from "lucide-react";

function LogoStrip() {
  const principles = [
    {
      icon: HeartHandshake,
      text: "Understanding First",
    },
    {
      icon: Brain,
      text: "Human-Centred Design",
    },
    {
      icon: WifiOff,
      text: "Offline First",
    },
    {
      icon: Cpu,
      text: "AI Ready",
    },
    {
      icon: ShieldCheck,
      text: "Privacy by Design",
    },
  ];

  return (
    <section className="principles-strip">
      {principles.map((item) => {
        const Icon = item.icon;

        return (
          <div
            className="principle-item"
            key={item.text}
          >
            <Icon size={18} />
            <span>{item.text}</span>
          </div>
        );
      })}
    </section>
  );
}

export default LogoStrip;