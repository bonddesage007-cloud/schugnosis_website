import { motion } from "framer-motion";

import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Database,
  Flag,
  Network,
  Sparkles,
} from "lucide-react";

import "../../styles/journey-timeline.css";

const journeyStages = [
  {
    number: "01",
    phase: "Understand",
    title: "Begin with the institution.",
    text: "Every school has its own people, culture, processes, challenges and ambitions. The journey begins by understanding that reality before introducing technology.",
    icon: Building2,
  },
  {
    number: "02",
    phase: "Connect",
    title: "Bring the moving parts together.",
    text: "Administration, academics, communication, finance and campus life begin to operate inside one connected environment instead of isolated systems.",
    icon: Network,
  },
  {
    number: "03",
    phase: "Remember",
    title: "Build institutional memory.",
    text: "Records, decisions, events, relationships and outcomes become part of a useful institutional history that can support continuity across years and leadership changes.",
    icon: Database,
  },
  {
    number: "04",
    phase: "Understand More",
    title: "Turn information into context.",
    text: "As the institution grows, patterns become clearer. SCHUGNOSIS can increasingly help people understand what is happening, why it matters and where attention may be needed.",
    icon: BrainCircuit,
  },
];

function Journey() {
  return (
    <section
      id="journey"
      className="journey-timeline-section"
    >
      <div className="journey-timeline-shell">
        <motion.header
          className="journey-timeline-heading"
          initial={{
            opacity: 0,
            y: 26,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="journey-timeline-kicker">
            <Sparkles size={14} />
            The SCHUGNOSIS Journey
          </div>

          <h2>
            Intelligence is built
            over time.
          </h2>

          <p>
            We do not believe institutions become intelligent
            by simply installing more software. The journey
            happens gradually — by understanding the school,
            connecting its systems, preserving its memory and
            learning from what happens inside it.
          </p>
        </motion.header>

        <div className="journey-road">
          <div
            className="journey-road-line"
            aria-hidden="true"
          />

          {journeyStages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <motion.article
                className="journey-road-stage"
                key={stage.number}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.09,
                }}
              >
                <div className="journey-road-marker">
                  <span>
                    {stage.number}
                  </span>

                  <div className="journey-road-marker-core">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="journey-road-copy">
                  <span className="journey-road-phase">
                    {stage.phase}
                  </span>

                  <h3>
                    {stage.title}
                  </h3>

                  <p>
                    {stage.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="journey-arrival"
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div
            className="journey-arrival-route"
            aria-hidden="true"
          >
            <span className="journey-arrival-line" />

            <span className="journey-arrival-point">
              <Flag size={15} />
            </span>
          </div>

          <div className="journey-arrival-content">
            <span className="journey-arrival-label">
              Arrival
            </span>

            <h3>
              A school that understands itself better.
            </h3>

            <p>
              More connected. More aware. Better able to
              preserve what it knows and give people the
              context they need to make thoughtful decisions.
            </p>

            <a href="#philosophy">
              Our philosophy
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Journey;