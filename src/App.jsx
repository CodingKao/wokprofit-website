// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

import Onboarding from "./pages/Onboarding";
import OnboardingSuccess from "./pages/OnboardingSuccess";

import "./styles/global.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Value />
      <ProfitCalculator />
      <Services />
      <Analytics />
      <Testimonials />
      <About />
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
        {/* Homepage */}
        <Route exact path="/" component={Home} />

        {/* Onboarding Pages */}
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/onboarding/success" component={OnboardingSuccess} />
      </Switch>
    </Router>
  );
}

export default App;
