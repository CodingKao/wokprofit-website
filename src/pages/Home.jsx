import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Pricing from "../components/Pricing/Pricing";
import Analytics from "../components/Analytics/Analytics";
import Cta from "../components/Cta/Cta";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Analytics />
      <Pricing />
      <Cta />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;