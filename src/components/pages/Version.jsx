import { Link } from 'react-router-dom';
import '../../styles/Version.css';

const Version = () => {
  return (
    <section className="version">
      <Link to="/menu" className="back-button">
        <img src="/img/icons/icons8-back.png" alt="Back Button" />
      </Link>

      <div className="version__container">
        <div className="version__content">
          <h1>Version</h1>
          <p>Version 1.1.0</p>
        </div>
        <div className="logo">
          <img src="/img/logo/logo.jpg" alt="Logo" />
        </div>
        <div className="version__content">
          <p>Designed and Developed by Ahzem</p>
        </div>
      </div>
    </section>
  );
};

export default Version;