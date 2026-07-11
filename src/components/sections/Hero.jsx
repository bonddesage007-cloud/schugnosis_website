import { motion } from "framer-motion";

import {
  ArrowRight,
  Cpu,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  BrainCircuit,
  Building2,
} from "lucide-react";

function Hero({ whatsappLink, screenshots }) {
  return (
    <section id="top" className="hero-section">
      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="eyebrow">
          <Sparkles size={16} />
          The Educational Operating System by UGNOSIS
        </div>

        <h1>
          Reimagining how modern schools learn, operate and grow.
        </h1>

        <p>
          SCHUGNOSIS™ is more than school management software.
          It is an Educational Operating System that brings together
          administration, learning, communication, campus life and
          institutional intelligence into one connected platform.
        </p>

        <div className="hero-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            Request a Demo
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
            Built for Modern Schools
          </span>

          <span>
            <BrainCircuit size={16} />
            Powered by Intelligence
          </span>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="browser-frame hero-frame">
          <div className="browser-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <img
            src={screenshots.dashboard}
            alt="SCHUGNOSIS Educational Operating System"
          />
        </div>

        <div className="floating-card card-one">
          <Cpu size={20} />

          <div>
            <strong>Educational OS</strong>
            <span>One Connected Platform</span>
          </div>
        </div>

        <div className="floating-card card-two">
          <Building2 size={20} />

          <div>
            <strong>Institution Ready</strong>
            <span>Built for Future Schools</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;