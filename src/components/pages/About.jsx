import { useState } from 'react';
import '../../styles/About.css';

const About = () => {
  const [activeSection, setActiveSection] = useState('info');

  return (
    <section className="about">
      <div className="selection__section">
        <div className="selection__section__container">
          <div 
            className={`selection__container__info ${activeSection === 'info' ? 'active' : ''}`}
            style={{ backgroundColor: activeSection === 'info' ? '#007BA2' : '#007ca200' }}
            onClick={() => setActiveSection('info')}
          >
            <a>
              <div className="selection__container__icon">
                <img src="/img/icons/icons8-info.png" alt="Info Icon" />
              </div>
              <div className="selection__container__text">
                <h2>About</h2>
              </div>
            </a>
          </div>
          <div 
            className={`selection__container__education ${activeSection === 'education' ? 'active' : ''}`}
            style={{ backgroundColor: activeSection === 'education' ? '#007BA2' : '#007ca200' }}
            onClick={() => setActiveSection('education')}
          >
            <a>
              <div className="selection__container__icon">
                <img src="/img/icons/icons8-education.png" alt="Education Icon" />
              </div>
              <div className="selection__container__text">
                <h2>Education</h2>
              </div>
            </a>
          </div>
        </div>
      </div>

      {activeSection === 'info' && (
        <section className="info__section">
          <div className="info__container__pic">
            <div className="info__container__pic__item--large">
              <img src="/img/about/about-1.jpg" alt="About" />
            </div>
            <div className="info__container__pic__item--small">
              <div><img src="/img/about/about-3.jpg" alt="About" /></div>
              <div><img src="/img/about/about-2.jpg" alt="About" /></div>
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
                    <img src="/img/icons/designer.png" alt="Designer" />
                  </div>
                  <h4>Designer</h4>
                  <p>Exploring the art of design, I create visually appealing concepts while on a journey of learning and growth.</p>
                </div>
              </div>
              <div className="info__container__sub__content">
                <div className="services__item">
                  <div className="services__item__icon">
                    <img src="/img/icons/developer.png" alt="Developer" />
                  </div>
                  <h4>Developer</h4>
                  <p>Navigating the world of code, I'm passionate about bringing ideas to life through technology, constantly learning and evolving.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'education' && (
        <section className="education__section">
          <div className="education__container">
            {/* Add education timeline components here */}
            {/* Example for one timeline item: */}
            <div className="timeline__container right">
              <div className="education__pic__item">
                <img src="/img/logo/coursera-logo.png" alt="Coursera" />
              </div>
              <div className="education__text__item">
                <div className="education__content">
                  <div className="education__content__title">
                    <h3>Google UX Design Professional | Coursera | 2023-Present</h3>
                  </div>
                </div>
                <div>
                  <p>I'm currently learning through the Google UX Design Professional Certificate course on Coursera. 
                     I'm gaining valuable skills in user empathy, problem-solving, and UX research.</p>
                </div>
              </div>
            </div>
            <div class="timeline__container left">

                <div class="education__text__item">
                    <div class="education__content">
                        <div class="education__content__title">
                            <h3>Information Technology | Institute of Technology University of Moratuwa | 2022-Present</h3>
                        </div>
                    </div>
                    <div>
                        <p>
                            I am currently pursuing a diploma in IT at the Institute of Technology, University of Moratuwa. 
                            This comprehensive program spans two academic years, comprising four semesters of dedicated learning. 
                            Additionally, the curriculum includes a valuable one-year internship, spanning two semesters, 
                            providing practical experience to complement my academic knowledge.
                        </p>
                    </div>
                </div>
                <div class="education__pic__item">
                    <img src="../img/logo/uom-logo.png" alt="" />
                </div>
            </div>
            <div class="timeline__container right">
                <div class="education__pic__item">
                    <img src="../img/logo/minhath-logo.png" alt="" />
                </div>
                <div class="education__text__item">
                    <div class="education__content">
                        <div class="education__content__title">
                            <h3>Physical Science | MR/Minhath National School | 2018-2020</h3>
                        </div>
                    </div>
                    <div>
                        <p>
                            After successfully completing my Ordinary Level, 
                            I transitioned to Minhath National school to delve deeper into my academic journey. 
                            Focusing on the physical science stream in grades 12 and 13, I continued to expand my knowledge and skills, 
                            laying the foundation for my future endeavors.
                        </p>
                    </div>
                </div>
            </div>
            <div class="timeline__container left">
                <div class="education__text__item">
                    <div class="education__content">
                        <div class="education__content__title">
                            <h3>Primary, Lower & Upper Secondary | BD/Al-Yaseen Muslim Vidyalaya | 2006-2010</h3>
                        </div>
                    </div>
                    <div>
                        <p>
                            I spent my formative years, from grade 1 to grade 11, at AlYaseen School. 
                            Here, I not only acquired knowledge but also excelled in my studies, passing the Ordinary Level exam. 
                            Notably, I achieved success in the Grade 5 scholarship exam, showcasing my commitment to academic excellence.
                        </p>
                    </div>
                </div>
                <div class="education__pic__item">
                    <img src="../img/logo/alyaseen-logo.png" alt="" />
                </div>
            </div>

          </div>
        </section>
      )}
    </section>
  );
};

export default About;