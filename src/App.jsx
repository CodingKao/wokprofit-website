// src/App.jsx
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Problem from "./components/Problem/Problem";
import ProfitCalculator from "./components/ProfitCalculator/ProfitCalculator";
import Analytics from "./components/Analytics/Analytics";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Cta from "./components/Cta/Cta";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Onboarding from "./pages/Onboarding";
import OnboardingSuccess from "./pages/OnboardingSuccess";

import "./styles/global.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <ProfitCalculator />
      <Analytics />
      <About />
      <Services />
      <Testimonials />
      <Cta />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/onboarding/success" component={OnboardingSuccess} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
