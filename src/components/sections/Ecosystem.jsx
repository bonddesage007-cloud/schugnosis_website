import { motion } from "framer-motion";

import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  GraduationCap,
  Landmark,
  Link2,
  Orbit,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "../../styles/ecosystem-constellation.css";

const ecosystemRows = [
  {
    number: "01",
    theme: "Learn",
    thought:
      "Education becomes more meaningful when operations, community and learning belong to the same institutional picture.",
    left: {
      name: "SCHUGNOSIS",
      tag: "Educational Operating System",
      description:
        "The operating environment connecting administration, academics, communication and institutional intelligence.",
      icon: GraduationCap,
    },
    right: {
      name: "Campus Circle™",
      tag: "Community Layer",
      description:
        "A living institutional community connecting students, educators, families and alumni beyond the classroom.",
      icon: Link2,
    },
  },

  {
    number: "02",
    theme: "Protect",
    thought:
      "Intelligence should help institutions care for people more responsibly, not merely manage information about them.",
    left: {
      name: "UGNOSIS SafeTrace™",
      tag: "Protection Intelligence",
      description:
        "Child accountability and protection intelligence designed to strengthen safety across educational environments.",
      icon: ShieldCheck,
    },
    right: {
      name: "MiGnosis Mentor™",
      tag: "Guidance Intelligence",
      description:
        "A mentorship and guidance layer designed to help institutions support students with deeper context.",
      icon: BookOpenCheck,
    },
  },

  {
    number: "03",
    theme: "Understand",
    thought:
      "As systems become connected, the institution gains a deeper ability to understand relationships, patterns and context.",
    left: {
      name: "UCIO",
      tag: "Civic Intelligence",
      description:
        "Extending evidence, spatial thinking and institutional intelligence into planning, governance and civic systems.",
      icon: Landmark,
    },
    right: {
      name: "UGNOSIS X",
      tag: "Intelligence Layer",
      description:
        "The wider intelligence direction where connected systems can evolve into deeper institutional understanding.",
      icon: BrainCircuit,
    },
  },
];

function ProductCard({
  product,
  side,
  delay,
}) {
  const Icon = product.icon;

  return (
    <motion.article
      className={`ecosystem-spine-product ecosystem-spine-product-${side}`}
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
        amount: 0.25,
      }}
      transition={{
        duration: 0.55,
        delay,
      }}
    >
      <div className="ecosystem-product-icon">
        <Icon size={20} />
      </div>

      <div className="ecosystem-product-copy">
        <span>
          {product.tag}
        </span>

        <h4>
          {product.name}
        </h4>

        <p>
          {product.description}
        </p>
      </div>
    </motion.article>
  );
}

function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="ecosystem-spine"
    >
      <div
        className="ecosystem-spine-atmosphere"
        aria-hidden="true"
      >
        <span className="ecosystem-atmosphere-dot dot-one" />
        <span className="ecosystem-atmosphere-dot dot-two" />
        <span className="ecosystem-atmosphere-dot dot-three" />
        <span className="ecosystem-atmosphere-dot dot-four" />
      </div>

      <div className="ecosystem-spine-shell">
        <motion.header
          className="ecosystem-spine-heading"
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
          <div className="ecosystem-spine-kicker">
            <Sparkles size={14} />
            The UGNOSIS Ecosystem
          </div>

          <h2>
            Different technologies.
            <br />
            One intelligence philosophy.
          </h2>

          <p>
            UGNOSIS is not a collection of unrelated products.
            Each technology addresses a different part of the
            institutional experience, while following the same
            direction: understand deeply, connect meaningfully
            and build technology around real human systems.
          </p>
        </motion.header>

        <div className="ecosystem-spine-map">
          <div
            className="ecosystem-spine-line"
            aria-hidden="true"
          />

          <motion.div
            className="ecosystem-spine-core"
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <div className="ecosystem-spine-core-icon">
              <Orbit size={23} />
            </div>

            <div>
              <span>
                UGNOSIS
              </span>

              <strong>
                Understand people deeply.
                <br />
                Create meaningful technologies.
              </strong>
            </div>
          </motion.div>

          <div className="ecosystem-spine-rows">
            {ecosystemRows.map(
              (row, index) => (
                <section
                  className="ecosystem-spine-row"
                  key={row.number}
                >
                  <ProductCard
                    product={row.left}
                    side="left"
                    delay={index * 0.08}
                  />

                  <motion.div
                    className="ecosystem-spine-theme"
                    initial={{
                      opacity: 0,
                      scale: 0.92,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + index * 0.08,
                    }}
                  >
                    <span className="ecosystem-theme-number">
                      {row.number}
                    </span>

                    <div className="ecosystem-theme-node">
                      <span>
                        {row.theme}
                      </span>
                    </div>

                    <p>
                      {row.thought}
                    </p>
                  </motion.div>

                  <ProductCard
                    product={row.right}
                    side="right"
                    delay={0.12 + index * 0.08}
                  />
                </section>
              )
            )}
          </div>
        </div>

        <motion.div
          className="ecosystem-spine-message"
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
            duration: 0.65,
          }}
        >
          <div className="ecosystem-message-mark">
            <Orbit size={20} />
          </div>

          <div>
            <span>
              The larger picture
            </span>

            <h3>
              The ecosystem becomes more valuable when the
              relationships between its systems become visible.
            </h3>

            <p>
              Education can inform mentorship. Community can
              strengthen safety. Institutional knowledge can
              support better planning. Each product remains
              useful on its own, but UGNOSIS is designed around
              the possibility that their intelligence can
              eventually relate.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="ecosystem-spine-ending"
          initial={{
            opacity: 0,
            y: 16,
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
            duration: 0.55,
          }}
        >
          <div>
            <span>
              UGNOSIS
            </span>

            <p>
              Learn. Protect. Understand.
            </p>
          </div>

          <a href="#faq">
            Continue
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Ecosystem;