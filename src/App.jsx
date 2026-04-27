// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Problem from "./components/Problem/Problem";
import Value from "./components/Value/Value";
import ProfitCalculator from "./components/ProfitCalculator/ProfitCalculator";
import Services from "./components/Services/Services";
import Analytics from "./components/Analytics/Analytics";
import Whyus from "./components/Whyus/Whyus";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
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
      <Value />
      <ProfitCalculator />
      <Services />
      <Analytics />
      <Whyus />
      <Testimonials />
      <About />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;