// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { AUDIT_LINK } from "../../config/Links";

const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "calculator", label: "Calculator" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "hero";
      NAV_SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">

        {/* LOGO */}
        <a href="/#hero" className="navbar-logo-wrap" onClick={closeMenu}>
          <img src={logo} alt="Wok Profit Logo" className="navbar-logo" />
        </a>

        {/* MOBILE TOGGLE */}
        <button
          className={`navbar-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV LINKS */}
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {NAV_SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`/#${id}`}
                className={active === id ? "active-link" : ""}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}

          {/* CTA */}
          <li className="navbar-cta">
            <a
              href={AUDIT_LINK}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Get My Free Profit Audit
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
