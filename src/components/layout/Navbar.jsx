import logo from "../../assets/schugnosis-logo.png";

function Navbar({ whatsappLink }) {
  return (
    <nav className="navbar">

      <a
        href="#top"
        className="brand premium-brand"
      >
        <span className="brand-logo-shell">
          <img
            src={logo}
            alt="SCHUGNOSIS"
            className="brand-logo"
          />
        </span>

        <span className="brand-copy">
          <strong>SCHUGNOSIS</strong>
          <span>Educational Operating System</span>
        </span>
      </a>

      <div className="nav-links">
        <a href="#features">Platform</a>

        <a href="#future">
          Future
        </a>

        <a href="#journey">
          Journey
        </a>

        <a href="#philosophy">
          Philosophy
        </a>

        <a href="#contact">
          Contact
        </a>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
      >
        Let's Talk
      </a>

    </nav>
  );
}

export default Navbar;