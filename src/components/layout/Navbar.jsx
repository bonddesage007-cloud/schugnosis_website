import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import logo from "../../assets/schugnosis-logo.png";

function Navbar({ whatsappLink }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <nav className="navbar">
        <a
          href="#top"
          className="brand"
          onClick={closeMenu}
          aria-label="SCHUGNOSIS home"
        >
          <span className="brand-logo-shell">
            <img
              src={logo}
              alt="SCHUGNOSIS"
              className="brand-logo"
            />
          </span>

          <span className="brand-copy">
            <span className="brand-name">SCHUGNOSIS</span>
          </span>
        </a>

        <div className="nav-links">
          <a href="#features">Platform</a>
          <a href="#campus-circle">Campus Circle</a>
          <a href="#journey">Journey</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-navigation ${menuOpen ? "mobile-navigation-open" : ""}`}>
        <div className="mobile-navigation-inner">
          <a href="#features" onClick={closeMenu}>
            <span>01</span>
            Platform
          </a>

          <a href="#campus-circle" onClick={closeMenu}>
            <span>02</span>
            Campus Circle
          </a>

          <a href="#journey" onClick={closeMenu}>
            <span>03</span>
            Journey
          </a>

          <a href="#philosophy" onClick={closeMenu}>
            <span>04</span>
            Philosophy
          </a>

          <a href="#contact" onClick={closeMenu}>
            <span>05</span>
            Contact
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-navigation-cta"
            onClick={closeMenu}
          >
            Start a Conversation
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;