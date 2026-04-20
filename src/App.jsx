// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Problem from "./components/Problem/Problem";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
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
      <Problem />
      <Services />
      {/* <Testimonials /> */}
      <About />
      <Analytics />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;