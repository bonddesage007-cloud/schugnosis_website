import {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  ArrowDown,
  BrainCircuit,
  Database,
  Network,
  Radar,
  Sparkles,
} from "lucide-react";

import "../../styles/future-horizon.css";

const intelligenceStages = [
  {
    number: "01",
    label: "Connect",
    title: "One institutional picture.",
    text: "Administration, academics, finance, communication and campus life begin to operate as connected parts of the same institution.",
    icon: Network,
  },
  {
    number: "02",
    label: "Remember",
    title: "The institution preserves knowledge.",
    text: "Records, experiences, decisions and outcomes begin forming useful institutional memory instead of disappearing into disconnected systems.",
    icon: Database,
  },
  {
    number: "03",
    label: "Understand",
    title: "Information becomes context.",
    text: "Patterns across the institution can reveal relationships, emerging needs and signals that would otherwise remain difficult to see.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    label: "Adapt",
    title: "Intelligence grows with the school.",
    text: "Over time, the platform can support more contextual and informed decisions while keeping people at the centre of the institution.",
    icon: Radar,
  },
];

function Future() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [shouldLoadVideo, setShouldLoadVideo] =
    useState(false);

  const [videoReady, setVideoReady] =
    useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "500px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (
      !shouldLoadVideo ||
      !videoRef.current
    ) {
      return;
    }

    const video = videoRef.current;

    video.load();

    const playPromise = video.play();

    if (
      playPromise &&
      typeof playPromise.catch === "function"
    ) {
      playPromise.catch(() => {});
    }
  }, [shouldLoadVideo]);

  return (
    <section
      id="future"
      ref={sectionRef}
      className="future-story"
    >
      <div
        className="future-story-media"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          className={`future-story-video ${
            videoReady
              ? "future-story-video-ready"
              : ""
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          onCanPlay={() =>
            setVideoReady(true)
          }
          onPlaying={() =>
            setVideoReady(true)
          }
        >
          {shouldLoadVideo ? (
            <source
              src="/videos/future/ugnosis-future-african-classroom.mp4"
              type="video/mp4"
            />
          ) : null}
        </video>
      </div>

      <div
        className="future-story-overlay"
        aria-hidden="true"
      />

      <div
        className="future-story-texture"
        aria-hidden="true"
      />

      <div className="future-story-shell">
        <motion.header
          className="future-story-intro"
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="future-story-kicker">
            <Sparkles size={14} />

            The Future of SCHUGNOSIS
          </div>

          <h2>
            Software is only
            the beginning.
          </h2>

          <p>
            SCHUGNOSIS is designed to grow beyond digital
            administration into something deeper — an
            institution that can understand its own
            operations, preserve knowledge and become more
            intelligent over time.
          </p>

          <div className="future-story-thought">
            <span>
              The idea
            </span>

            <strong>
              A school should not simply store information.
              It should be able to learn from it.
            </strong>
          </div>
        </motion.header>

        <div className="future-intelligence-path">
          <div className="future-path-intro">
            <span>
              Institutional evolution
            </span>

            <p>
              Not a sudden transformation.
              A gradual journey from connected operations
              toward deeper understanding.
            </p>
          </div>

          <div className="future-stage-grid">
            {intelligenceStages.map(
              (stage, index) => {
                const Icon = stage.icon;

                return (
                  <motion.article
                    className="future-story-stage"
                    key={stage.number}
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
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                  >
                    <div className="future-stage-top">
                      <span>
                        {stage.number}
                      </span>

                      <div>
                        <Icon size={19} />
                      </div>
                    </div>

                    <span className="future-stage-label">
                      {stage.label}
                    </span>

                    <h3>
                      {stage.title}
                    </h3>

                    <p>
                      {stage.text}
                    </p>
                  </motion.article>
                );
              }
            )}
          </div>
        </div>

        <motion.div
          className="future-human-intelligence"
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
          <div className="future-human-number">
            01 — 04
          </div>

          <div>
            <span>
              Intelligence with purpose
            </span>

            <h3>
              Better context for human decisions.
            </h3>

            <p>
              The goal is not technology replacing the
              people who understand their institution.
              It is technology helping those people see
              more clearly, remember more deeply and make
              better-informed decisions.
            </p>
          </div>

          <a href="#journey">
            <span>
              Continue the story
            </span>

            <ArrowDown size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Future;