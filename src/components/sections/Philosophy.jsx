import { motion } from "framer-motion";

import {
  ArrowRight,
  Eye,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "../../styles/philosophy-manifesto.css";

const principles = [
  {
    icon: Eye,
    title: "Understand before building",
    text: "Technology becomes meaningful when it begins with the people, systems and realities it is meant to serve.",
  },
  {
    icon: HeartHandshake,
    title: "Keep people at the centre",
    text: "Students, educators, parents and administrators should feel supported by technology — not overwhelmed by it.",
  },
  {
    icon: ShieldCheck,
    title: "Earn trust",
    text: "Privacy, transparency, reliability and responsible use of intelligence must be part of the architecture from the beginning.",
  },
  {
    icon: Lightbulb,
    title: "Build for understanding",
    text: "The goal is not more dashboards. It is better context, better decisions and institutions that understand themselves more clearly.",
  },
];

function Philosophy() {
  return (
    <section
      id="philosophy"
      className="philosophy-manifesto"
    >
      <div className="philosophy-manifesto-shell">
        <motion.header
          className="philosophy-manifesto-heading"
          initial={{
            opacity: 0,
            y: 24,
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
          <div className="philosophy-manifesto-kicker">
            <Sparkles size={14} />
            The UGNOSIS Philosophy
          </div>

          <h2>
            Understanding comes
            before technology.
          </h2>

          <p>
            UGNOSIS exists to build technology that begins
            with people, learns from institutions and helps
            organisations make sense of the world around them.
          </p>
        </motion.header>

        <div className="philosophy-manifesto-statement">
          <motion.div
            className="philosophy-statement-number"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            01
          </motion.div>

          <motion.div
            className="philosophy-statement-copy"
            initial={{
              opacity: 0,
              y: 20,
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
            <span>
              Our belief
            </span>

            <blockquote>
              We are not building software for schools.
              We are building understanding for institutions.
            </blockquote>

            <p>
              Software can record what happened. Intelligence
              should help people understand why it happened,
              what it means and what should receive attention
              next.
            </p>
          </motion.div>
        </div>

        <div className="philosophy-principles">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                className="philosophy-principle"
                key={principle.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
              >
                <div className="philosophy-principle-top">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon size={20} />
                </div>

                <h3>
                  {principle.title}
                </h3>

                <p>
                  {principle.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="philosophy-human-layer"
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
          <div className="philosophy-human-line">
            <span />
            <strong>
              People
            </strong>
            <span />
          </div>

          <div className="philosophy-human-copy">
            <span>
              What remains constant
            </span>

            <h3>
              Better technology should make the institution
              feel more human, not less.
            </h3>

            <p>
              The teacher still teaches. The parent still
              cares. The administrator still leads. The
              student still learns. SCHUGNOSIS exists to give
              each of them better tools, stronger context and
              more room to focus on what matters.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="philosophy-closing"
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div>
            <span>
              UGNOSIS
            </span>

            <p>
              Understand people deeply.
              Create meaningful technologies.
            </p>
          </div>

          <a href="#ecosystem">
            Explore the ecosystem
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Philosophy;