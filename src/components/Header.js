import React from 'react';
import '../css/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav__option">
        <nav className="header__nav__menu">
          <ul>
            <li>
              <a href="#">
                <div className="icon-container-active">
                  <img src="../img/icons/icons8-about-filled.png" alt="Empty Icon" />
                </div>
              </a>
            </li>
            <li>
              <a href="../html/experience.html">
                <div className="icon-container">
                  <img src="../img/icons/icons8-briefcase.png" alt="Empty Icon" />
                </div>
              </a>
            </li>
            <li>
              <a href="../index.html">
                <div className="icon-container">
                  <img src="../img/icons/icons8-home.png" alt="Filled Icon" />
                </div>
              </a>
            </li>
            <li>
              <a href="../html/folder.html">
                <div className="icon-container">
                  <img src="../img/icons/icons8-folder.png" alt="Empty Icon" />
                </div>
              </a>
            </li>
            <li>
              <a href="../html/menu.html">
                <div className="icon-container">
                  <img src="../img/icons/icons8-menu.png" alt="Empty Icon" />
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
