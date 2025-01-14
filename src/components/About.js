import React from 'react';
import '../css/about.css';

const About = () => {
  return (
    <section className="info__section">
      <div className="info__container__pic">
        <div className="info__container__pic__item--large">
          <img src="../img/about/about-1.jpg" alt="" />
        </div>
        <div className="info__container__pic__item--small">
          <div><img src="../img/about/about-3.jpg" alt="" /></div>
          <div><img src="../img/about/about-2.jpg" alt="" /></div>
        </div>
      </div>
      <div className="info__container">
        <div className="info__container__text">
          <div className="info__container__text__title">
            <h2>About Me</h2>
          </div>
          <div className="info__container__text__content">
            <p>Hello! I'm Ahzem, a student of Information Technology at the Institute of Technology, University of Moratuwa. 
              Hailing from the beautiful town of Bandarawela, Sri Lanka, I'm on a quest to become a unique individual.
              Join me as I delve into the realms of design and development, embracing the learning process with a smile.</p>
          </div>
          <div className="info__container__sub__content">
            <div className="services__item">
              <div className="services__item__icon">
                <img src="../img/icons/designer.png" alt="" />
              </div>
              <h4>Designer</h4>
              <p>Exploring the art of design, I create visually appealing concepts while on a journey of learning and growth.</p>
            </div>
          </div>
          <div className="info__container__sub__content">
            <div className="services__item">
              <div className="services__item__icon">
                <img src="../img/icons/developer.png" alt="" />
              </div>
              <h4>Developer</h4>
              <p>Navigating the world of code, I'm passionate about bringing ideas to life through technology, constantly learning and evolving.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
