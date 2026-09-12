import { motion } from "framer-motion";

import {
  ArrowRight,
  Brain,
  Cpu,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Network,
  School,
  ShieldCheck,
  Users,
  WifiOff,
} from "lucide-react";

import "../../styles/foundation.css";

function Foundation() {
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
    <section
      id="foundation"
      className="foundation-chapter"
    >
      <div
        className="foundation-doodle-field"
        aria-hidden="true"
      >
        <Brain className="foundation-doodle doodle-brain" />
        <GraduationCap className="foundation-doodle doodle-graduation" />
        <Network className="foundation-doodle doodle-network" />
        <School className="foundation-doodle doodle-school" />
        <MessageCircle className="foundation-doodle doodle-message" />
        <ShieldCheck className="foundation-doodle doodle-shield" />
        <Lightbulb className="foundation-doodle doodle-lightbulb" />

        <span className="foundation-node node-one" />
        <span className="foundation-node node-two" />
        <span className="foundation-node node-three" />
        <span className="foundation-node node-four" />

        <span className="foundation-line line-one" />
        <span className="foundation-line line-two" />
        <span className="foundation-line line-three" />
      </div>

      <div className="foundation-shell">
        <motion.header
          className="foundation-intro"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="foundation-kicker">
            The UGNOSIS Foundation
          </span>

          <h2>
            Before technology can improve a school,
            it must understand it.
          </h2>

          <p>
            UGNOSIS was founded on a simple idea:
            meaningful technology should begin with
            understanding people, institutions and the
            environments in which they live, learn and work.
          </p>
        </motion.header>

        <div className="foundation-belief-grid">
          <motion.article
            className="foundation-belief-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="foundation-card-topline">
              <span>01</span>
              <Brain size={25} />
            </div>

            <h3>Understanding First</h3>

            <p>
              The name UGNOSIS combines
              <strong> “U”</strong> — meaning
              <em> you</em> — with
              <em> Gnosis</em>, meaning knowledge and
              deep understanding. We begin with the people
              before we begin with the technology.
            </p>
          </motion.article>

          <motion.article
            className="foundation-belief-card foundation-belief-featured"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
          >
            <div className="foundation-card-topline">
              <span>02</span>
              <GraduationCap size={25} />
            </div>

            <h3>Technology with Purpose</h3>

            <p>
              SCHUGNOSIS™ was created not simply to
              digitise administration, but to understand
              how schools operate, how educators teach,
              how students learn and where institutions
              can become stronger.
            </p>
          </motion.article>

          <motion.article
            className="foundation-belief-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
              delay: 0.16,
            }}
          >
            <div className="foundation-card-topline">
              <span>03</span>
              <Lightbulb size={25} />
            </div>

            <h3>Built Beyond Today</h3>

            <p>
              Every UGNOSIS platform is designed to grow
              from useful software into institutional
              intelligence — helping organisations make
              better decisions while preserving the human
              experience at the centre.
            </p>
          </motion.article>
        </div>

        <div className="foundation-era">
          <motion.div
            className="foundation-era-copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className="foundation-kicker">
              Education is changing
            </span>

            <h2>
              The next era of education will be connected,
              human and intelligent.
            </h2>

            <p>
              Schools are being asked to do far more than
              manage classrooms and examinations. They must
              engage families, support educators, protect
              students and understand the institution as a
              living system.
            </p>

            <p>
              The schools that thrive will not simply use
              more technology. They will use technology
              that understands the people it serves.
            </p>

            <a
              href="#features"
              className="foundation-explore-link"
            >
              See how SCHUGNOSIS connects the institution
              <ArrowRight size={17} />
            </a>
          </motion.div>

          <div className="foundation-signals">
            <motion.article
              className="foundation-signal"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="foundation-signal-icon">
                <GraduationCap size={25} />
              </div>

              <div>
                <span>Students</span>

                <h3>Learning is becoming personal.</h3>

                <p>
                  Every learner deserves support that can
                  respond to their pace, strengths,
                  challenges and aspirations.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="foundation-signal"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: 0.08,
              }}
            >
              <div className="foundation-signal-icon">
                <Users size={25} />
              </div>

              <div>
                <span>Educators</span>

                <h3>Teachers need more time to teach.</h3>

                <p>
                  Intelligent tools should reduce repetitive
                  administration and return attention to
                  teaching, guidance and mentorship.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="foundation-signal"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: 0.16,
              }}
            >
              <div className="foundation-signal-icon">
                <School size={25} />
              </div>

              <div>
                <span>Institutions</span>

                <h3>Schools need one connected picture.</h3>

                <p>
                  Administration, finance, academics,
                  communication and student life should not
                  exist as disconnected digital islands.
                </p>
              </div>
            </motion.article>
          </div>
        </div>

        <div className="foundation-principles">
          <div className="foundation-principles-copy">
            <span>Built into the foundation</span>

            <p>
              The principles that shape every UGNOSIS
              technology.
            </p>
          </div>

          <div className="foundation-principle-row">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="foundation-principle"
                  key={item.text}
                >
                  <Icon size={17} />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Foundation;