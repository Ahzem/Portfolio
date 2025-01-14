import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <section className="resume__section">
      <Link to="/menu" className="back-button">
        <img src="/img/icons/icons8-back.png" alt="Back Button" />
      </Link>

      <div className="resume__container">
        <h1>My Resume</h1>
        <object 
          data="/files/My New Resume.pdf" 
          type="application/pdf"
        >
          <p>
            Unable to display PDF file. 
            <a href="/files/My New Resume.pdf">Download</a> instead.
          </p>
        </object>
      </div>
    </section>
  );
};

export default Resume;