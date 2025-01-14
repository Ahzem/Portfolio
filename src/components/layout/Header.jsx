import { Link, useLocation } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__nav__option">
        <nav className="header__nav__menu">
          <ul>
            <li>
              <Link to="/about">
                <div className={`icon-container${location.pathname === '/about' ? '-active' : ''}`}>
                  <img 
                    src={`/img/icons/icons8-about${location.pathname === '/about' ? '-filled' : ''}.png`} 
                    alt="About Icon" 
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/experience">
                <div className={`icon-container${location.pathname === '/experience' ? '-active' : ''}`}>
                  <img 
                    src={`/img/icons/icons8-briefcase${location.pathname === '/experience' ? '-filled' : ''}.png`} 
                    alt="Experience Icon" 
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className={`icon-container${location.pathname === '/' ? '-active' : ''}`}>
                  <img 
                    src={`/img/icons/icons8-home${location.pathname === '/' ? '-filled' : ''}.png`} 
                    alt="Home Icon" 
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/folder">
                <div className={`icon-container${location.pathname === '/folder' ? '-active' : ''}`}>
                  <img 
                    src={`/img/icons/icons8-folder${location.pathname === '/folder' ? '-filled' : ''}.png`} 
                    alt="Portfolio Icon" 
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <div className={`icon-container${location.pathname === '/menu' ? '-active' : ''}`}>
                  <img 
                    src={`/img/icons/icons8-menu${location.pathname === '/menu' ? '-filled' : ''}.png`} 
                    alt="Menu Icon" 
                  />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;