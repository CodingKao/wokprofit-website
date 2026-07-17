import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  createDemoSession,
  DEMO_EMAIL,
  DEMO_PASSWORD,
} from "../auth/demoAuth";
import "./SignIn.css";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      setError("Use the demo credentials shown below.");
      return;
    }

    setLoading(true);

    // Demo sign-in — routes clients into their Profit OS dashboard
    window.setTimeout(() => {
      createDemoSession();
      setLoading(false);
      history.push("/app");
    }, 600);
  };

  const launchDemo = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    setError("");
    setLoading(true);

    window.setTimeout(() => {
      createDemoSession();
      setLoading(false);
      history.push("/app");
    }, 500);
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <Link to="/" className="signin-logo-wrap">
          <img src={logo} alt="Wok Profit" className="signin-logo" />
        </Link>

        <h1 className="signin-title">Sign in</h1>
        <p className="signin-subtitle">
          Preview the client experience with Thai Garden Kitchen.
        </p>

        <div className="signin-demo-credentials">
          <span className="signin-demo-label">Demo account</span>
          <div>
            <span>Email</span>
            <strong>{DEMO_EMAIL}</strong>
          </div>
          <div>
            <span>Password</span>
            <strong>{DEMO_PASSWORD}</strong>
          </div>
        </div>

        <button
          type="button"
          className="signin-demo-button"
          onClick={launchDemo}
          disabled={loading}
        >
          Explore the Live Demo
        </button>

        <div className="signin-divider">
          <span>or sign in manually</span>
        </div>

        <form className="signin-form" onSubmit={handleSubmit}>
          <label htmlFor="signin-email">Email</label>
          <input
            id="signin-email"
            type="email"
            autoComplete="email"
            placeholder={DEMO_EMAIL}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="signin-password">Password</label>
          <input
            id="signin-password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="signin-error">{error}</p>}

          <button type="submit" className="btn-primary signin-submit" disabled={loading}>
            {loading ? "Opening demo…" : "Sign in to Dashboard"}
          </button>
        </form>

        <p className="signin-footer">
          New client?{" "}
          <a href="/#contact">Contact us</a> to get access.
        </p>

        <Link to="/" className="signin-back">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
