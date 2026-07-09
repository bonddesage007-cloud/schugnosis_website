import { motion } from "framer-motion";
import {
  ArrowRight,
  CreditCard,
  Lock,
  MonitorSmartphone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
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
          Premium offline school management for modern Nigerian schools
        </div>

        <h1>
          Schugnosis turns school administration into a beautiful digital
          command center.
        </h1>

        <p>
          Manage students, staff, finance, report cards, receipts, ID cards,
          backups and school records from one elegant offline desktop system.
        </p>

        <div className="hero-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            Book a Demo <ArrowRight size={18} />
          </a>

          <a href="#showcase" className="secondary-btn">
            View Screenshots
          </a>
        </div>

        <div className="trust-row">
          <span>
            <ShieldCheck size={16} /> Offline Ready
          </span>

          <span>
            <Lock size={16} /> Local Backup
          </span>

          <span>
            <MonitorSmartphone size={16} /> Desktop Experience
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
            alt="Schugnosis dashboard"
          />
        </div>

        <div className="floating-card card-one">
          <CreditCard size={18} />

          <div>
            <strong>₦1.82M</strong>
            <span>Tracked revenue</span>
          </div>
        </div>

        <div className="floating-card card-two">
          <ReceiptText size={18} />

          <div>
            <strong>Receipt Ready</strong>
            <span>Auto generated</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;