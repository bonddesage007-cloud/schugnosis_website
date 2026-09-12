import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Building2,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import "../../styles/contact-finale.css";

function Contact({ whatsappLink }) {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="contact-finale"
    >
      <div
        className="contact-finale-atmosphere"
        aria-hidden="true"
      >
        <span className="contact-finale-orbit contact-orbit-one" />
        <span className="contact-finale-orbit contact-orbit-two" />

        <span className="contact-finale-dot contact-dot-one" />
        <span className="contact-finale-dot contact-dot-two" />
        <span className="contact-finale-dot contact-dot-three" />

        <span className="contact-finale-word">
          UGNOSIS
        </span>
      </div>

      <div className="contact-finale-shell">
        <motion.div
          className="contact-finale-intro"
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
          <div className="contact-finale-kicker">
            <Sparkles size={14} />
            Begin With Understanding
          </div>

          <h2>
            What could your institution
            become if everything worked
            together?
          </h2>

          <p>
            Every school has a different story, structure and
            ambition. We would rather begin by understanding
            yours than by trying to fit your institution into
            a predefined box.
          </p>
        </motion.div>

        <div className="contact-finale-conversation">
          <motion.div
            className="contact-conversation-main"
            initial={{
              opacity: 0,
              x: -22,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="contact-conversation-icon">
              <MessageCircle size={23} />
            </div>

            <span>
              Start a conversation
            </span>

            <h3>
              Tell us what your school is trying to solve.
            </h3>

            <p>
              It may be administration, communication,
              student experience, institutional memory,
              safety, intelligence — or something we have
              not considered yet.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-primary-action"
            >
              Talk to UGNOSIS

              <ArrowUpRight size={17} />
            </a>

            <div className="contact-conversation-note">
              <Building2 size={16} />

              <span>
                No obligation. Begin with the institution,
                not the software.
              </span>
            </div>
          </motion.div>

          <motion.div
            className="contact-finale-paths"
            initial={{
              opacity: 0,
              x: 22,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-path"
            >
              <div className="contact-path-icon">
                <MessageCircle size={19} />
              </div>

              <div className="contact-path-copy">
                <span>
                  WhatsApp
                </span>

                <strong>
                  +234 912 625 9753
                </strong>

                <p>
                  The fastest way to begin.
                </p>
              </div>

              <ArrowUpRight size={16} />
            </a>

            <a
              href="mailto:bonditsugnosis@gmail.com"
              className="contact-path"
            >
              <div className="contact-path-icon">
                <Mail size={19} />
              </div>

              <div className="contact-path-copy">
                <span>
                  Email
                </span>

                <strong>
                  bonditsugnosis@gmail.com
                </strong>

                <p>
                  For proposals and detailed enquiries.
                </p>
              </div>

              <ArrowUpRight size={16} />
            </a>

            <a
              href="tel:+2349126259753"
              className="contact-path"
            >
              <div className="contact-path-icon">
                <Phone size={19} />
              </div>

              <div className="contact-path-copy">
                <span>
                  Call
                </span>

                <strong>
                  +234 912 625 9753
                </strong>

                <p>
                  Speak directly with UGNOSIS.
                </p>
              </div>

              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="contact-finale-thought"
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.65,
          }}
        >
          <span>
            Our direction
          </span>

          <blockquote>
            Understand people deeply.
            Create meaningful technologies.
          </blockquote>

          <p>
            That is where UGNOSIS begins.
          </p>
        </motion.div>

        <footer className="ugnosis-footer">
          <div className="ugnosis-footer-brand">
            <strong>
              UGNOSIS
            </strong>

            <span>
              SCHUGNOSIS™
            </span>
          </div>

          <nav
            className="ugnosis-footer-nav"
            aria-label="Footer navigation"
          >
            <a href="#features">
              Platform
            </a>

            <a href="#campus-circle">
              Campus Circle
            </a>

            <a href="#journey">
              Journey
            </a>

            <a href="#philosophy">
              Philosophy
            </a>

            <a href="#ecosystem">
              Ecosystem
            </a>
          </nav>

          <div className="ugnosis-footer-meta">
            <span>
              © {year} UGNOSIS Ltd.
            </span>

            <span>
              Meaningful technology begins with understanding.
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;