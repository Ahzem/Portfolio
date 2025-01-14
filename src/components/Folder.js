import React from 'react';
import '../css/folder.css';

const Folder = () => {
  return (
    <section className="selection__section">
      <div className="selection__section__container">
        <div className="selection__container__portfolio">
          <a onClick={() => openPortfolio()}>
            <div className="selection__container__icon">
              <img src="../img/icons/icons8-portfolio.png" alt="Portfolio Icon" />
            </div>
            <div className="selection__container__text">
              <h2>Portfolio</h2>
            </div>
          </a>
        </div>
        <div className="selection__container__images">
          <a onClick={() => openGallery()}>
            <div className="selection__container__icon">
              <img src="../img/icons/icons8-picture-filled.png" alt="Image Icon" />
            </div>
            <div className="selection__container__text">
              <h2>Images</h2>
            </div>
          </a>
        </div>
        <div className="selection__container__blogs">
          <a onClick={() => openBlogs()}>
            <div className="selection__container__icon">
              <img src="../img/icons/icons8-news.png" alt="Blog Icon" />
            </div>
            <div className="selection__container__text">
              <h2>Blogs</h2>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Folder;
