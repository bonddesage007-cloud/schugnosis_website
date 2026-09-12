import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { faqs } from "../../data/faq";

import "../../styles/faq-knowledge.css";

function FAQ({ whatsappLink }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="faq-knowledge"
    >
      <div className="faq-knowledge-shell">
        <motion.header
          className="faq-knowledge-heading"
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
          <div className="faq-knowledge-kicker">
            <Sparkles size={14} />
            Understanding SCHUGNOSIS
          </div>

          <h2>
            Questions are part
            of understanding.
          </h2>

          <p>
            SCHUGNOSIS introduces a different way of thinking
            about educational technology. Here are some of the
            questions institutions naturally ask when exploring
            that idea.
          </p>
        </motion.header>

        <div className="faq-knowledge-layout">
          <motion.aside
            className="faq-knowledge-aside"
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
              duration: 0.65,
            }}
          >
            <div className="faq-aside-icon">
              <HelpCircle size={23} />
            </div>

            <span>
              A simple principle
            </span>

            <h3>
              Every institution deserves clarity before commitment.
            </h3>

            <p>
              We would rather help a school understand what
              SCHUGNOSIS is, where it fits and whether it is
              useful than overwhelm people with technical language.
            </p>

            <div className="faq-aside-line" />

            <strong>
              Have a question that is not here?
            </strong>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask UGNOSIS
              <ArrowRight size={15} />
            </a>
          </motion.aside>

          <div className="faq-knowledge-list">
            {faqs.map((faq, index) => {
              const isOpen =
                openIndex === index;

              return (
                <motion.article
                  className={`faq-knowledge-item ${
                    isOpen
                      ? "faq-knowledge-item-open"
                      : ""
                  }`}
                  key={faq.q}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay:
                      Math.min(index * 0.04, 0.2),
                  }}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      toggleQuestion(index)
                    }
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-index">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="faq-question-copy">
                      {faq.q}
                    </span>

                    <span className="faq-question-control">
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        className="faq-answer-wrap"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.28,
                          ease: "easeOut",
                        }}
                      >
                        <div className="faq-answer">
                          <p>
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          className="faq-knowledge-closing"
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="faq-closing-icon">
            <MessageCircle size={20} />
          </div>

          <div>
            <span>
              Still curious?
            </span>

            <h3>
              Tell us about your institution.
            </h3>

            <p>
              The best conversations about SCHUGNOSIS begin
              with understanding the school itself.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a conversation
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;