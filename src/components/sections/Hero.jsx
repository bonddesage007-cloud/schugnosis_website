import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

function Hero({ whatsappLink, backgroundMedia }) {
  const [videoReady, setVideoReady] = useState(false);

  const hasImage =
    backgroundMedia?.type === "image" &&
    Boolean(backgroundMedia?.src);

  const hasVideo =
    backgroundMedia?.type === "video" &&
    Boolean(backgroundMedia?.src);

  return (
    <section
      id="top"
      className="hero-section hero-section-calm"
    >
      <div
        className="hero-media-layer"
        aria-hidden="true"
      >
        {hasImage ? (
          <div
            className="hero-background-media hero-media-image"
            style={{
              backgroundImage: `url(${backgroundMedia.src})`,
            }}
          />
        ) : null}

        {hasVideo ? (
          <video
            className={`hero-background-media hero-media-video ${
              videoReady ? "hero-media-video-ready" : ""
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            onCanPlay={() => setVideoReady(true)}
            onPlaying={() => setVideoReady(true)}
            aria-hidden="true"
          >
            <source
              src={backgroundMedia.src}
              type={backgroundMedia.mimeType || "video/mp4"}
            />
          </video>
        ) : null}
      </div>

      <div
        className="hero-overlay"
        aria-hidden="true"
      />

      <div
        className="orb orb-one"
        aria-hidden="true"
      />

      <div
        className="orb orb-two"
        aria-hidden="true"
      />

      <div
        className="hero-soft-grid"
        aria-hidden="true"
      />

      <motion.div
        className="hero-content hero-content-centered"
        initial={{
          opacity: 0,
          y: 28,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
        }}
      >
        <h1>
          A calmer, more intelligent way for schools to learn,
          operate and grow.
        </h1>

        <p>
          SCHUGNOSIS™ is an Educational Operating System built
          to give institutions clarity, structure and peace of
          mind by bringing administration, learning,
          communication, campus life and institutional
          intelligence into one connected platform.
        </p>

        <div className="hero-message">
          Designed for institutions that want order, trust,
          beauty and future-readiness.
        </div>

        <div className="hero-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            Let&apos;s Talk
            <ArrowRight size={18} />
          </a>

          <a
            href="#features"
            className="secondary-btn"
          >
            Explore the Platform
          </a>
        </div>

        <div className="trust-row">
          <span>
            <GraduationCap size={16} />
            Educational Operating System
          </span>

          <span>
            <ShieldCheck size={16} />
            Clarity for Modern Schools
          </span>

          <span>
            <HeartHandshake size={16} />
            Built with Peace of Mind
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;