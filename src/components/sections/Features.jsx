import { motion } from "framer-motion";

import {
  Activity,
  ArrowUpRight,
  Network,
  Orbit,
  Sparkles,
} from "lucide-react";

import { platformFeatures } from "../../data/platformFeatures";

import "../../styles/platform-showcase.css";

function Features() {
  const operatingModules = platformFeatures.slice(0, 6);
  const evolutionModules = platformFeatures.slice(6, 9);

  return (
    <section
      id="features"
      className="platform-showcase"
    >
      <div className="platform-showcase-shell">
        <motion.header
          className="platform-showcase-header"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="platform-showcase-kicker">
            <span className="platform-live-dot" />

            The SCHUGNOSIS Platform
          </div>

          <h2>
            One institution.
            <br />
            One connected intelligence layer.
          </h2>

          <p>
            SCHUGNOSIS brings the moving parts of a school
            into one operating environment — allowing
            people, processes, communication and
            institutional intelligence to work together
            instead of existing as disconnected systems.
          </p>
        </motion.header>

        <motion.div
          className="platform-system-canvas"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div
            className="platform-network-background"
            aria-hidden="true"
          >
            <span className="network-orbit orbit-one" />
            <span className="network-orbit orbit-two" />
            <span className="network-orbit orbit-three" />

            <span className="network-point point-one" />
            <span className="network-point point-two" />
            <span className="network-point point-three" />
            <span className="network-point point-four" />
            <span className="network-point point-five" />
            <span className="network-point point-six" />
          </div>

          <div className="platform-system-map">
            {operatingModules.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className={`platform-node platform-node-${
                    index + 1
                  }`}
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                >
                  <div className="platform-node-top">
                    <div className="platform-node-icon">
                      <Icon size={21} />
                    </div>

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>
                </motion.article>
              );
            })}

            <motion.div
              className="platform-core"
              initial={{
                opacity: 0,
                scale: 0.88,
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
                duration: 0.8,
                delay: 0.18,
              }}
            >
              <div className="platform-core-glow" />

              <div className="platform-core-ring platform-core-ring-one" />

              <div className="platform-core-ring platform-core-ring-two" />

              <div className="platform-core-inner">
                <div className="platform-core-symbol">
                  <Network size={27} />
                </div>

                <span>
                  Educational
                  <br />
                  Operating System
                </span>

                <h3>
                  SCHUGNOSIS
                </h3>

                <p>
                  The intelligence layer connecting the
                  institution.
                </p>

                <div className="platform-core-status">
                  <Activity size={13} />
                  Connected
                </div>
              </div>
            </motion.div>
          </div>

          <div className="platform-flow-caption">
            <Orbit size={17} />

            <span>
              Every interaction strengthens the institution&apos;s
              connected picture.
            </span>
          </div>
        </motion.div>

        <div className="platform-evolution">
          <div className="platform-evolution-copy">
            <span>
              Beyond management software
            </span>

            <h3>
              Designed to become more valuable as the
              institution grows.
            </h3>

            <p>
              SCHUGNOSIS is not built as a finished box.
              Its architecture is designed to evolve from
              digital operations into deeper institutional
              intelligence.
            </p>
          </div>

          <div className="platform-evolution-grid">
            {evolutionModules.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="platform-evolution-card"
                  key={feature.title}
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
                    delay: index * 0.08,
                  }}
                >
                  <div className="platform-evolution-card-top">
                    <Icon size={20} />

                    <Sparkles size={14} />
                  </div>

                  <h4>
                    {feature.title}
                  </h4>

                  <p>
                    {feature.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="platform-closing-line">
          <div>
            <span>
              One school.
            </span>

            <span>
              One connected picture.
            </span>

            <span>
              Better decisions.
            </span>
          </div>

          <a href="#campus-circle">
            Discover Campus Circle

            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;