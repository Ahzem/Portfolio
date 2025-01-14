import { useState } from 'react';
import '../../styles/Hero.css';

const Home = () => {
  const [lightOn, setLightOn] = useState(false);

  const toggleLight = () => {
    setLightOn(!lightOn);
  };

  return (
    <>
      <section className="hero">
        <div className="hero__img">
          <img 
            src={`/img/hero/hero-${lightOn ? 'on' : 'off'}.png`} 
            alt="Hero" 
          />
          <div className="hero__text">
            <h2>Ahzem</h2>
            <p>Designer | Developer</p>
          </div>
        </div>
        <div className="switch__system">
          <div className="switch__container">
            <div className={lightOn ? 'on__switch' : 'off__switch'}>
              <img 
                src={lightOn ? '/img/icons/icons8-sun.png' : '/img/icons/icons8-night.png'} 
                alt={lightOn ? 'Light On' : 'Light Off'} 
              />
            </div>
            <div className="switch">
              <label>
                <input 
                  type="checkbox" 
                  checked={lightOn}
                  onChange={toggleLight}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div>
            <div className={lightOn ? 'on__switch__text' : 'off__switch__text'}>
              <p>
                {lightOn 
                  ? "Light's too bright, can't see you!" 
                  : "Hey, can't you see I'm in the dark?"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="social__media">
        <div className="social__media__container">
          <div>
            <a href="https://www.facebook.com/mfm.ahzem" target="_blank" rel="noreferrer">
              <img src="/img/icons/icons8-facebook.png" alt="Facebook" />
              <h3>2.8k</h3>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/_ahzem_/" target="_blank" rel="noreferrer">
              <img src="/img/icons/icons8-instagram.png" alt="Instagram" />
              <h3>600</h3>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ahzem/" target="_blank" rel="noreferrer">
              <img src="/img/icons/icons8-linkedin.png" alt="Linkedin" />
              <h3>4k</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;