import {
  ArrowRight,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import WhoWeAre from "../components/sections/WhoWeAre";
import LogoStrip from "../components/sections/LogoStrip";
import Features from "../components/sections/Features";
import CampusCircle from "../components/sections/CampusCircle";
import FutureEducation from "../components/sections/FutureEducation";
import Future from "../components/sections/Future";
import WhyUgnosis from "../components/sections/WhyUgnosis";
import Ecosystem from "../components/sections/Ecosystem";
import Journey from "../components/sections/Journey";
import Philosophy from "../components/sections/Philosophy";

import {
    whatsappLink,
    screenshots,
    pricingPlans,
} from "../data/siteData";

import { faqs } from "../data/faq";


function Home() {
  return (
    <main>
      <Navbar whatsappLink={whatsappLink} />

      <Hero
        whatsappLink={whatsappLink}
        screenshots={screenshots}
      />

      <WhoWeAre />

      <FutureEducation />

      <LogoStrip />

      <Features />

      <CampusCircle />

      <Future />

      <Journey />

      <Philosophy />

      <WhyUgnosis />

      <Ecosystem />


      <section id="faq" className="faq-section">
        <div className="section-heading">
          <span>Frequently Asked Questions</span>
          <h2>
            Understanding SCHUGNOSIS.
          </h2>
          <p>
          Discover how the Educational Operating System is helping schools move beyond digital record keeping toward intelligent institutional management.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq) => (
            <div className="faq-card" key={faq.q}>
              <HelpCircle size={22} />
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="faq-card faq-cta">
          <MessageCircle size={24} />

          <h3>Still have questions?</h3>

          <p>
            Every school is different, and every conversation starts with understanding.
            Let's discuss your institution, your goals and how SCHUGNOSIS can support
            your journey.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            Let's Talk
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <span>Begin Your Transformation</span>

          <h2>
          Build a more intelligent institution with SCHUGNOSIS.
          </h2>

          <p>
          Whether you're modernising administration, improving communication,
          strengthening student services or preparing for the future of
          educational intelligence, our team is ready to help you begin.
          </p>
        </div>

        <div className="contact-card">
          <MessageCircle size={28} />
          <h3>Talk to UGNOSIS</h3>
          <p>
          Every institution has its own story. We'd love to learn about yours and
          explore how SCHUGNOSIS can support your vision.
          </p>
          <p>Phone / WhatsApp: +234 912 625 9753</p>
          <p>Email: bonditsugnosis@gmail.com</p>
          <p>Let's start the conversation.</p>
          <a className="primary-btn" href={whatsappLink} target="_blank">Let's Talk <ArrowRight size={18} /></a>
        </div>
      </section>      

    </main>
  );
}

export default Home;