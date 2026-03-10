/**
 * @file Slider.jsx
 * @description Hero section with introductory content and CTA button.
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Slider = () => {
  return (
    <section id="intro">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col md={7}>
            <h1>Premium Quality Dry Fruit</h1>
            <p>
              We “Royal Delights” are Wholesalers, Traders, and Exporters of
              high-quality assortments of Pistachios, Cashew Nuts, Almonds,
              Walnuts, Black Raisins, Dry Figs, Dry Apricots, etc.
            </p>
            <a className="btn-primary" href="#">
              Explore Products
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Slider;