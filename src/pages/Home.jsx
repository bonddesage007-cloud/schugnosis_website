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
    faqs,
} from "../data/siteData";


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
          <span>Questions Schools Ask</span>
          <h2>Everything you need to know before adopting SCHUGNOSIS.</h2>
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
          Book a personalised consultation with our team to discover how
          SCHUGNOSIS can transform your institution.
          </p>
          <p>Phone / WhatsApp: +234 912 625 9753</p>
          <p>Email: bonditsugnosis@gmail.com</p>
          <p>Schedule a Consultation</p>
          <a className="primary-btn" href={whatsappLink} target="_blank">Chat on WhatsApp <ArrowRight size={18} /></a>
        </div>
      </section>      

    </main>
  );
}

export default Home;