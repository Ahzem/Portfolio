import { Link } from 'react-router-dom';
import '../../styles/Menu.css';

const Menu = () => {
  const menuItems = [
    {
      icon: '/img/icons/icons8-about.png',
      text: 'About',
      link: '/about'
    },
    {
      icon: '/img/icons/icons8-briefcase.png', 
      text: 'Experiences',
      link: '/experience'
    },
    {
      icon: '/img/icons/icons8-home.png',
      text: 'Home',
      link: '/'
    },
    {
      icon: '/img/icons/icons8-contacts.png',
      text: 'Contact',
      link: '/contact'
    },
    {
      icon: '/img/icons/icons8-picture.png',
      text: 'Gallery',
      link: '/gallery'
    },
    {
      icon: '/img/icons/icons8-portfolio.png',
      text: 'Portfolio',
      link: '/portfolio'
    },
    {
      icon: '/img/icons/icons8-skills.png',
      text: 'Skills',
      link: '/skills'
    },
    {
      icon: '/img/icons/icons8-certificates.png',
      text: 'Certificates',
      link: '/certificates'
    },
    {
      icon: '/img/icons/icons8-version.png',
      text: 'Version',
      link: '/version'
    },
    {
      icon: '/img/icons/icons8-resume.png',
      text: 'Resume',
      link: '/resume' 
    }
  ];

  return (
    <section className="menu__section">
      {menuItems.map((item, index) => (
        <Link key={index} to={item.link} className="option">
          <div className="option__icon">
            <img src={item.icon} alt={item.text} />
          </div>
          <div className="option__text">
            <h4>{item.text}</h4>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Menu;