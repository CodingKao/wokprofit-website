/**
 * @file Slider.jsx
 * @description Hero section for Wok Profit with business introduction and CTA.
 */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Slider = () => {
  return (
    <section id="intro">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col md={8}>
            <h1>Increase Your Restaurant’s Profitability</h1>

            <p>
              Wok Profit helps restaurant owners gain financial clarity,
              optimize operations, and improve profit margins. We provide
              actionable insights into revenue, food costs, labor, and menu
              performance so you can run a more efficient and profitable
              business.
            </p>

            <p>
              Whether you need better financial visibility, operational
              insights, or menu profitability analysis, Wok Profit gives you
              the tools and guidance to make smarter business decisions.
            </p>

            <a className="btn-primary" href="#services">
              Explore Our Services
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Slider;