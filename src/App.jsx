import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, BadgeCheck, BookOpen, ChevronLeft, ChevronRight, CreditCard,
  Database, FileText, GraduationCap, HelpCircle, IdCard, Landmark, Lock,
  MessageCircle, MonitorSmartphone, ReceiptText, ShieldCheck, Sparkles, Wrench,
} from "lucide-react";
import "./App.css";
import logo from "./assets/schugnosis-logo.png";

const phoneNumber = "2349126259753";
const whatsappMessage = encodeURIComponent(
  "Hello, I would like to request a demo of Schugnosis School DBMS for my school."
);
const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

const showcaseSlides = [
  { title: "Login Page", image: "/images/screenshots/auth/login-page.png", text: "Premium branded entry into the school system." },
  { title: "First-Time Setup", image: "/images/screenshots/auth/first-time-setup.png", text: "Register school name, logo, theme and license." },
  { title: "Dashboard", image: "/images/screenshots/dashboard/dashboard-main.png", text: "A beautiful command center for school administration." },
  { title: "Finance", image: "/images/screenshots/finance/finance-main.png", text: "Track payments, debtors, cashbook, receipts and statements." },
  { title: "Student Records", image: "/images/screenshots/students/students-list.png", text: "Clean student management with organized search." },
  { title: "Report Cards", image: "/images/screenshots/reports/report-card.png", text: "Printable academic report card with school identity." },
  { title: "ID Cards", image: "/images/screenshots/id-cards/id-card-front-back.png", text: "Stylish front/back student ID card generation." },
  { title: "Backup Settings", image: "/images/screenshots/settings/settings-backup.png", text: "Backup and restore school records confidently." },
];

const screenshots = {
  dashboard: "/images/screenshots/dashboard/dashboard-main.png",
  finance: "/images/screenshots/finance/finance-main.png",
};

const features = [
  { icon: GraduationCap, title: "Student Records", text: "Register, search and manage student data with passport upload and organized class records." },
  { icon: Landmark, title: "Finance & Cashbook", text: "Track fees, income, expenses, daily balances, receipts, debtors and statements." },
  { icon: FileText, title: "Report Cards", text: "Generate beautiful printable report cards with school branding and student passport." },
  { icon: IdCard, title: "Student ID Cards", text: "Create stylish ID cards with school logo, student details, expiry date and back-note." },
  { icon: Database, title: "Offline SQLite System", text: "Works on a single PC without internet, with local database storage and smooth backup." },
  { icon: ShieldCheck, title: "Backup & Restore", text: "Protect school data with local backup and import tools for safer administration." },
];

const financeCards = ["Fee Structure", "Debtors List", "Receipts", "Cashbook", "Student Statement", "Audit Trail"];

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
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = showcaseSlides[activeSlide];

  function nextSlide() {
    setActiveSlide((current) => (current + 1) % showcaseSlides.length);
  }

  function previousSlide() {
    setActiveSlide((current) => (current - 1 + showcaseSlides.length) % showcaseSlides.length);
  }

  return (
    <main>
      <nav className="navbar">
        <a className="brand premium-brand" href="#top" aria-label="Schugnosis home">
          <span className="brand-logo-shell">
            <img src={logo} alt="Schugnosis Logo" className="brand-logo" />
          </span>
          <span className="brand-copy">
            <strong>Schugnosis</strong>
            <span>School DBMS</span>
          </span>
        </a>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#finance">Finance</a>
          <a href="#showcase">Showcase</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        <a className="nav-cta" href={whatsappLink} target="_blank">
          Request Demo
        </a>
      </nav>

      <section id="top" className="hero-section">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>

        <motion.div className="hero-content" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <div className="eyebrow"><Sparkles size={16} />Premium offline school management for modern Nigerian schools</div>
          <h1>Schugnosis turns school administration into a beautiful digital command center.</h1>
          <p>Manage students, staff, finance, report cards, receipts, ID cards, backups and school records from one elegant offline desktop system.</p>

          <div className="hero-actions">
            <a href={whatsappLink} target="_blank" className="primary-btn">Book a Demo <ArrowRight size={18} /></a>
            <a href="#showcase" className="secondary-btn">View Screenshots</a>
          </div>

          <div className="trust-row">
            <span><ShieldCheck size={16} /> Offline Ready</span>
            <span><Lock size={16} /> Local Backup</span>
            <span><MonitorSmartphone size={16} /> Desktop Experience</span>
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <div className="browser-frame hero-frame">
            <div className="browser-dots"><span></span><span></span><span></span></div>
            <img src={screenshots.dashboard} alt="Schugnosis dashboard" />
          </div>

          <div className="floating-card card-one"><CreditCard size={18} /><div><strong>₦1.82M</strong><span>Tracked revenue</span></div></div>
          <div className="floating-card card-two"><ReceiptText size={18} /><div><strong>Receipt Ready</strong><span>Auto generated</span></div></div>
        </motion.div>
      </section>

      <section className="logo-strip">
        <span>Built for</span>
        <strong>Nursery Schools</strong>
        <strong>Primary Schools</strong>
        <strong>Secondary Schools</strong>
        <strong>Private Institutions</strong>
      </section>

      <section id="features" className="section">
        <div className="section-heading">
          <span>Core Modules</span>
          <h2>Everything a school needs to look organized, serious and modern.</h2>
          <p>Schugnosis is designed for schools that want structure, beauty, speed and reliability without depending on internet connection.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <motion.div className="feature-card" key={feature.title} whileHover={{ y: -8 }}>
              <feature.icon size={26} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="finance" className="finance-section">
        <div className="finance-copy">
          <span>Accountant Friendly</span>
          <h2>A finance module that schools can actually understand.</h2>
          <p>Track expected fees, payments, balances, cashbook entries, receipts, student statements and debtors from one clean finance dashboard.</p>

          <div className="finance-tags">
            {financeCards.map((item) => <span key={item}><BadgeCheck size={15} />{item}</span>)}
          </div>
        </div>

        <div className="finance-display">
          <div className="market-card">
            <div className="market-header"><span>Monthly Revenue</span><strong>Finance Analytics</strong></div>
            <div className="market-bars">
              {[35, 62, 48, 78, 44, 92, 70, 84, 55, 96, 74, 88].map((height, index) => (
                <i key={index} style={{ height: `${height}%` }}></i>
              ))}
            </div>
            <div className="market-stats">
              <div><span>Total Paid</span><strong>₦2,450,000</strong></div>
              <div><span>Outstanding</span><strong>₦320,000</strong></div>
            </div>
          </div>

          <div className="browser-frame small-frame">
            <div className="browser-dots"><span></span><span></span><span></span></div>
            <img src={screenshots.finance} alt="Finance dashboard" />
          </div>
        </div>
      </section>

      <section id="showcase" className="section showcase-section">
        <div className="section-heading showcase-heading">
          <span>Product Showcase</span>
          <h2>Explore Schugnosis in motion.</h2>
          <p>Swipe on mobile or use the desktop arrows to preview the major screens schools will interact with.</p>
        </div>

        <div className="screenshot-slider">
          <button className="slider-arrow slider-arrow-left" onClick={previousSlide} aria-label="Previous screenshot">
            <ChevronLeft size={28} />
          </button>

          <motion.div
            key={currentSlide.title}
            className="slider-stage"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="browser-frame slider-frame">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <img src={currentSlide.image} alt={currentSlide.title} />
            </div>

            <div className="slider-caption">
              <span>{String(activeSlide + 1).padStart(2, "0")} / {String(showcaseSlides.length).padStart(2, "0")}</span>
              <h3>{currentSlide.title}</h3>
              <p>{currentSlide.text}</p>
            </div>
          </motion.div>

          <button className="slider-arrow slider-arrow-right" onClick={nextSlide} aria-label="Next screenshot">
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="slider-dots">
          {showcaseSlides.map((slide, index) => (
            <button
              key={slide.title}
              className={index === activeSlide ? "active-dot" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Open ${slide.title}`}
            ></button>
          ))}
        </div>
      </section>

      <section className="installation-section">
        <div className="section-heading">
          <span>How Installation Works</span>
          <h2>Simple setup. Clear training. Immediate school use.</h2>
        </div>

        <div className="install-steps">
          <Step number="01" title="School Demo" text="We show the proprietor or administrator how Schugnosis works using real school scenarios." />
          <Step number="02" title="Installation" text="The software is installed on the selected school computer and configured for the school." />
          <Step number="03" title="Brand Setup" text="School name, logo, theme color, license and first admin account are created." />
          <Step number="04" title="Staff Training" text="Admin/accountant learns student records, finance, reports, ID cards and backup." />
        </div>
      </section>

      <section className="offline-section">
        <div>
          <span>Why Schools Trust It</span>
          <h2>Built for real Nigerian school conditions.</h2>
          <p>Schugnosis Lite runs on a single school computer, stores records locally and continues working even when internet is unavailable.</p>
        </div>

        <div className="offline-grid">
          <div><Database /><strong>SQLite Local Database</strong><p>Records stay on the school computer.</p></div>
          <div><ShieldCheck /><strong>Backup Protection</strong><p>Export data to flash drive or external storage.</p></div>
          <div><BookOpen /><strong>Easy Staff Adoption</strong><p>Simple screens for admin, accountant and records officers.</p></div>
        </div>
      </section>

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

function Step({ number, title, text }) {
  return (
    <div className="step-card">
      <span>{number}</span>
      <Wrench size={22} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;