import logo from "../../assets/schugnosis-logo.png";

function Navbar({ whatsappLink }) {
  return (
    <nav className="navbar">
      <a className="brand premium-brand" href="#top" aria-label="Schugnosis home">
        <span className="brand-logo-shell">
          <img
            src={logo}
            alt="Schugnosis Logo"
            className="brand-logo"
          />
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

      <a
        className="nav-cta"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Request Demo
      </a>
    </nav>
  );
}

export default Navbar;