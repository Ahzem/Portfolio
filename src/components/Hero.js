import React from 'react';
import '../css/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__img">
        <img src="img/hero/hero-off.png" alt="Hero Image" />
        <div className="hero__text">
          <h2>Ahzem</h2>
          <p>Designer | Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
