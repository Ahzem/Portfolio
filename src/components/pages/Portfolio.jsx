import { useState } from 'react';
import '../../styles/Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('*');

  const portfolioItems = [
    {
      category: 'web',
      image: '/img/portfolio/fusionfeast.png',
      title: 'FusionFeast E-Commerce Platform',
      type: 'Web Site',
      link: 'https://github.com/Ahzem/FusionFeast.git',
      platform: 'github'
    },
    // Add all other portfolio items...
  ];

  return (
    <section className="portfolio_section">
      <div className="portfolio__container">
        <div className="portfolio__filter__div">
          <ul className="portfolio__filter">
            <li 
              className={filter === '*' ? 'active' : ''} 
              onClick={() => setFilter('*')}
            >
              All
            </li>
            <li 
              className={filter === 'console' ? 'active' : ''} 
              onClick={() => setFilter('console')}
            >
              Console
            </li>
            <li 
              className={filter === 'LogoDesigns' ? 'active' : ''} 
              onClick={() => setFilter('LogoDesigns')}
            >
              Logo Designs
            </li>
            <li 
              className={filter === 'web' ? 'active' : ''} 
              onClick={() => setFilter('web')}
            >
              Web Sites
            </li>
            <li 
              className={filter === 'flyers' ? 'active' : ''} 
              onClick={() => setFilter('flyers')}
            >
              Flyers
            </li>
          </ul>
        </div>

        <div className="portfolio__gallery">
          <div className="portfolio__page">
            {portfolioItems
              .filter(item => filter === '*' || item.category === filter)
              .map((item, index) => (
                <div key={index} className={`mix ${item.category}`}>
                  <div className="portfolio__item">
                    <div className="portfolio__item__thumbnail">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="portfolio__item__content">
                      <div className="portfolio__item__text">
                        <h4>{item.title}</h4>
                        <h5>{item.type}</h5>
                      </div>
                      <div className="portfolio__view__link">
                        <a href={item.link} target="_blank" rel="noopener">
                          <img 
                            src={`/img/icons/${item.platform}.png`} 
                            alt={`${item.platform} Icon`} 
                          />
                          <h5>View on {item.platform}</h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;