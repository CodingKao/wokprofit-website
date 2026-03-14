// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import Analytics from "./components/Analytics/Analytics";
import Cta from "./components/Cta/Cta";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./styles/global.css"; // global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Analytics />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;