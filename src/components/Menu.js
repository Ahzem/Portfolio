import React from 'react';
import '../css/menu.css';

const Menu = () => {
  return (
    <section className="menu__section">
      <a href="../html/about.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-about.png" alt="" />
        </div>
        <div className="option__text">
          <h4>About</h4>
        </div>
      </a>
      <a href="../html/experience.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-briefcase.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Experiences</h4>
        </div>
      </a>
      <a href="../index.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-home.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Home</h4>
        </div>
      </a>
      <a href="../html/contact.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-contacts.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Contact</h4>
        </div>
      </a>
      <a href="../html/folder.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-picture.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Gallery</h4>
        </div>
      </a>
      <a href="../html/folder.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-news.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Blogs</h4>
        </div>
      </a>
      <a href="../html/folder.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-portfolio.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Portfolio</h4>
        </div>
      </a>
      <a href="" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-certificates.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Certificates</h4>
        </div>
      </a>
      <a href="../html/version.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-version.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Version</h4>
        </div>
      </a>
      <a data-link="https://www.ahzem.design" className="option share-icon">
        <div className="option__icon">
          <img src="../img/icons/icons8-share.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Share</h4>
        </div>
      </a>
      <a href="../html/about.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-education.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Education</h4>
        </div>
      </a>
      <a href="../html/skills.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-skills.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Skills</h4>
        </div>
      </a>
      <a href="../html/github.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-github.png" alt="" />
        </div>
        <div className="option__text">
          <h4>GitHub States</h4>
        </div>
      </a>
      <a href="" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-volunteer.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Volunteerings</h4>
        </div>
      </a>
      <a href="https://holopin.io/@ahzem" target="_blank" className="option">
        <div className="option__icon">
          <img src="../img/icons/holopin.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Holopin Board</h4>
        </div>
      </a>
      <a href="../html/resume.html" className="option">
        <div className="option__icon">
          <img src="../img/icons/icons8-resume.png" alt="" />
        </div>
        <div className="option__text">
          <h4>Resume</h4>
        </div>
      </a>
    </section>
  );
};

export default Menu;
