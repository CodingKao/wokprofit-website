// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { AUDIT_LINK } from "../../config/Links";

const NAV_SECTIONS = ["hero", "calculator", "services", "about", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "hero";
      NAV_SECTIONS.forEach((id) => {
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
        <a href="#hero" className="navbar-logo-wrap" onClick={closeMenu}>
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
          {NAV_SECTIONS.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={active === section ? "active-link" : ""}
                onClick={closeMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
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
