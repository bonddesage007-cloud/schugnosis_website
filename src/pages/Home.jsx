import {
  ArrowRight,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import LogoStrip from "../components/sections/LogoStrip";
import Features from "../components/sections/Features";
import Finance from "../components/sections/Finance";
import Showcase from "../components/sections/Showcase";
import Installation from "../components/sections/Installation";
import Offline from "../components/sections/Offline";

function Home({
  whatsappLink,
  screenshots,
  pricingPlans,
  faqs,
}) {
  return (
    <main>
      <Navbar whatsappLink={whatsappLink} />

      <Hero
        whatsappLink={whatsappLink}
        screenshots={screenshots}
      />

      <LogoStrip />

      <Features />

      <Finance screenshots={screenshots} />

      <Showcase />

      <Installation />

      <Offline />

      <section id="pricing" className="pricing-section">
        <div className="section-heading">
          <span>Pricing</span>
          <h2>Choose the package that fits the school’s current stage.</h2>
          <p>Exact pricing depends on school size, setup needs and support requirements.</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div className={`price-card ${plan.featured ? "featured-price" : ""}`} key={plan.name}>
              <span className="package-label">{plan.name}</span>
              <h3>{plan.price}</h3>
              <p>{plan.text}</p>
              <ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href={whatsappLink} target="_blank" className="primary-btn">Ask for Quote</a>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="section-heading">
          <span>Questions Schools Ask</span>
          <h2>Clear answers before the first demo.</h2>
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
          <span>Ready for Demonstration?</span>
          <h2>Let your school feel organized from the first click.</h2>
          <p>Request a live demo and see how Schugnosis can organize records, finance, results, receipts and school administration.</p>
        </div>

        <div className="contact-card">
          <MessageCircle size={28} />
          <h3>Contact UGNOSIS Inc.</h3>
          <p>Phone / WhatsApp: +234 912 625 9753</p>
          <p>Email: bonditsugnosis@gmail.com</p>
          <p>Ask for demo, pricing, installation or school onboarding.</p>
          <a className="primary-btn" href={whatsappLink} target="_blank">Chat on WhatsApp <ArrowRight size={18} /></a>
        </div>
      </section>      

    </main>
  );
}

export default Home;