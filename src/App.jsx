import "./App.css";
import Home from "./pages/Home";

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

      
    </main>
  );
}


export default App;