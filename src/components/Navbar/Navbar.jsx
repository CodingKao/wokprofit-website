// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import {AUDIT_LINK} from "../../config/Links";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // UPDATED SECTIONS
  const sections = [
    "hero",
    "calculator",
    "services",
    "testimonials",
    "about",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = section;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-left">
          <a href="#hero">
            <img src={logo} alt="Wok Profit Logo" className="navbar-logo" />
          </a>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <ul className={`navbar-right ${menuOpen ? "open" : ""}`}>

          <li>
            <a
              href="#hero"
              className={active === "hero" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#calculator"
              className={active === "calculator" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Calculator
            </a>
          </li>

          <li>
            <a
              href="#services"
              className={active === "services" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
          </li>
          
          <li>
            <a
              href="#about"
              className={active === "about" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>

          {/* CTA BUTTON */}
          <li className="cta-btn">
<a
  href={AUDIT_LINK}
  className="btn-primary"
  target="_blank"
  rel="noopener noreferrer"
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
