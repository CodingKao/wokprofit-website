import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Wok Profit</h2>
      <ul>
        <li>Services</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;