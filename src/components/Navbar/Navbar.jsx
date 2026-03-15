import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = ["hero", "services", "pricing", "analytics", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
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
      <div className="navbar-left">
        <img src="/logo.png" alt="Wok Profit Logo" className="navbar-logo" />
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#hero" className={active === "hero" ? "active-link" : ""} onClick={() => setMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#services" className={active === "services" ? "active-link" : ""} onClick={() => setMenuOpen(false)}>Services</a>
        </li>
        <li>
          <a href="#pricing" className={active === "pricing" ? "active-link" : ""} onClick={() => setMenuOpen(false)}>Pricing</a>
        </li>
        <li>
          <a href="#analytics" className={active === "analytics" ? "active-link" : ""} onClick={() => setMenuOpen(false)}>Analytics</a>
        </li>
        <li>
          <a href="#contact" className={active === "contact" ? "active-link" : ""} onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
        {/* CTA Button */}
        <li className="cta-btn">
          <a href="#contact">Book Free Audit</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;