// src/components/Footer/Footer.jsx

import React from "react";
import "./Footer.css";

import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaGithub 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Mini Navigation */}
      <nav className="footer-nav">
        <a href="#hero">Home</a>
        <a href="#services">Services</a>
        <a href="#calculator">Calculator</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Wok Profit Tips (SEO-friendly resource section) */}
      <nav className="footer-resources">
        <a href="/tips">Wok Profit Tips</a>
      </nav>

      {/* Social Icons */}
      <div className="footer-social">
        <a 
          href="https://www.facebook.com/people/Wok-Profit/61589262172260/" 
          target="_blank" 
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        <a 
          href="https://www.linkedin.com/in/kao-saelor/" 
          target="_blank" 
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a 
          href="https://github.com/CodingKao" 
          target="_blank" 
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      {/* Back to Top */}
      <a href="#hero" className="footer-top">Back to Top ↑</a>

      {/* Tagline */}
      <p className="footer-tagline">
        Helping Asian restaurant owners take control of their numbers and keep more of their hard-earned profit.
      </p>

      {/* Copyright */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Wok Profit. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;