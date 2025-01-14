import { useState } from 'react';
import '../../styles/Portfolio.css';
import Portfolio from './Portfolio';
import Gallery from './Gallery';

const Folder = () => {
  const [activeSection, setActiveSection] = useState('portfolio');

  return (
    <>
      <section className="selection__section">
        <div className="selection__section__container">
          <div 
            className={`selection__container__portfolio ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={() => setActiveSection('portfolio')}
          >
            <a>
              <div className="selection__container__icon">
                <img src="/img/icons/icons8-portfolio.png" alt="Portfolio Icon" />
              </div>
              <div className="selection__container__text">
                <h2>Portfolio</h2>
              </div>
            </a>
          </div>

          <div 
            className={`selection__container__images ${activeSection === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveSection('gallery')}
          >
            <a>
              <div className="selection__container__icon">
                <img src="/img/icons/icons8-picture-filled.png" alt="Image Icon" />
              </div>
              <div className="selection__container__text">
                <h2>Images</h2>
              </div>
            </a>
          </div>

          <div 
            className={`selection__container__blogs ${activeSection === 'blogs' ? 'active' : ''}`}
            onClick={() => setActiveSection('blogs')}
          >
            <a>
              <div className="selection__container__icon">
                <img src="/img/icons/icons8-news.png" alt="Blog Icon" />
              </div>
              <div className="selection__container__text">
                <h2>Blogs</h2>
              </div>
            </a>
          </div>
        </div>
      </section>

      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'gallery' && <Gallery />}
      {activeSection === 'blogs' && <Blogs />}

      <section className="feedback__section">
        <div className="feedback__button" title="Feedback">
          <div className="feedback__icon" onClick={() => setFeedbackOpen(true)}>
            <i className="fa fa-comments" aria-hidden="true"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Folder;