/**
 * @file Homepage.jsx
 * @description Homepage component including hero section and company introduction.
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Slider from '../components/Slider';
import Design7 from '../assets/images/design-7.webp';

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Royal Delights | Premium Quality Dry Fruit</title>
        <meta
          name="description"
          content="Royal Delights is the brand of rich quality Pistachio, Cashew, Almond, Walnuts, and Black Raisin."
        />
      </Helmet>

      {/* Hero / Intro Section */}
      <Slider />

      {/* About Section */}
      <section id="about" className="section-bg">
        <Container className="overflow-hidden text-center">
          <h2 className="cormorant-garamond">About Royal Delights</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            temporibus? Tenetur, architecto blanditiis. Soluta enim reiciendis
            modi harum earum aperiam quae aliquid sunt explicabo voluptatum
            quidem perferendis, consequatur perspiciatis sapiente ratione sequi
            a, debitis dicta ex tempora neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            temporibus? Tenetur, architecto blanditiis. Soluta enim reiciendis
            modi harum.
          </p>
        </Container>
      </section>

      {/* Decorative Design Element */}
      <img
        src={Design7}
        alt="Decorative pattern"
        className="design-7 d-none d-sm-block"
      />
    </div>
  );
};

export default Homepage;