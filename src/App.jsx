import {
  ArrowRight,
  HelpCircle,
  MessageCircle,
  ReceiptText,
} from "lucide-react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import LogoStrip from "./components/sections/LogoStrip";
import Features from "./components/sections/Features";
import Finance from "./components/sections/Finance";
import Showcase from "./components/sections/Showcase";
import Installation from "./components/sections/Installation";
import Offline from "./components/sections/Offline";

const phoneNumber = "2349126259753";
const whatsappMessage = encodeURIComponent(
  "Hello, I would like to request a demo of Schugnosis School DBMS for my school."
);
const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;


const screenshots = {
  dashboard: "/images/screenshots/dashboard/dashboard-main.png",
  finance: "/images/screenshots/finance/finance-main.png",
};


const pricingPlans = [
  { name: "Starter Installation", price: "For small schools", text: "Best for schools that want student records, report cards, finance and basic backup.", items: ["Single-PC setup", "Student records", "Fees and receipts", "Report cards", "Basic training"] },
  { name: "Premium Installation", price: "Most recommended", text: "Best for schools that want full branding, ID cards, finance reports and stronger setup support.", items: ["Everything in Starter", "ID card generator", "Cashbook and debtors", "Statement of account", "Priority setup"], featured: true },
  { name: "Annual Support", price: "Peace of mind", text: "For schools that want continued support, updates, backup checks and staff guidance.", items: ["Remote support", "Update assistance", "Backup guidance", "Staff refresher", "Technical checks"] },
];

const faqs = [
  { q: "Can Schugnosis work without internet?", a: "Yes. Schugnosis Lite is designed as an offline desktop system for single-PC school administration." },
  { q: "Where is the school data stored?", a: "The database is stored locally on the school computer, with backup options for flash drive or external storage." },
  { q: "Can it print report cards, receipts and ID cards?", a: "Yes. Schugnosis supports printable report cards, payment receipts, student statements and ID cards." },
  { q: "Can the school backup its records?", a: "Yes. The Settings section includes backup and import options to protect school records." },
  { q: "Can it be upgraded later?", a: "Yes. Schugnosis Lite can later grow into a multi-user or server-based version when the school is ready." },
];

function App() {
  
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


export default App;