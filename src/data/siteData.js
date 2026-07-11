export const phoneNumber = "2349126259753";
const whatsappMessage = encodeURIComponent(
  "Hello, I would like to request a demo of Schugnosis School DBMS for my school."
);
export const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;


export const screenshots = {
  dashboard: "/images/screenshots/dashboard/dashboard-main.png",
  finance: "/images/screenshots/finance/finance-main.png",
};


export const pricingPlans = [
  { name: "Starter Installation", price: "For small schools", text: "Best for schools that want student records, report cards, finance and basic backup.", items: ["Single-PC setup", "Student records", "Fees and receipts", "Report cards", "Basic training"] },
  { name: "Premium Installation", price: "Most recommended", text: "Best for schools that want full branding, ID cards, finance reports and stronger setup support.", items: ["Everything in Starter", "ID card generator", "Cashbook and debtors", "Statement of account", "Priority setup"], featured: true },
  { name: "Annual Support", price: "Peace of mind", text: "For schools that want continued support, updates, backup checks and staff guidance.", items: ["Remote support", "Update assistance", "Backup guidance", "Staff refresher", "Technical checks"] },
];

export const faqs = [
  {
    q: "What exactly is SCHUGNOSIS?",
    a: "SCHUGNOSIS is an Educational Operating System developed by UGNOSIS. Rather than being just another school management application, it provides a unified platform that helps schools understand, manage and continuously improve every aspect of institutional life.",
  },

  {
    q: "How is SCHUGNOSIS different from traditional school management software?",
    a: "Traditional software focuses on storing records. SCHUGNOSIS focuses on understanding institutions. Every module—from academics and administration to finance and communication—works together to provide meaningful insight for better decision-making.",
  },

  {
    q: "Will SCHUGNOSIS include Artificial Intelligence?",
    a: "Yes. AI is part of the long-term vision. Future releases will introduce intelligent assistants, predictive insights, personalised academic support and institutional intelligence while keeping school data secure and under the school's control.",
  },

  {
    q: "Can SCHUGNOSIS grow with our institution?",
    a: "Absolutely. Schools can begin with core operational modules and gradually expand into communication, student safety, multi-campus management, AI-powered services and advanced institutional intelligence as their needs evolve.",
  },

  {
    q: "Why was SCHUGNOSIS created?",
    a: "SCHUGNOSIS exists because schools deserve more than software. They deserve technology that helps them understand their students, staff, operations and decisions, enabling them to build stronger learning environments and better educational outcomes.",
  },
];