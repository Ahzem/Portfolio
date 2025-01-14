import { useState } from 'react';
import '../../styles/Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://t1l3clfutj.execute-api.eu-north-1.amazonaws.com/default/sendContactEmail", {
        method: "POST",
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section className="contact__section">
      <Link to="/menu" className="back-button">
        <img src="/img/icons/icons8-back.png" alt="Back Button" />
      </Link>

      <div className="contact__option">
        <div className="title__section">
          <h3>Get in touch</h3>
        </div>
        
        <div className="contact__option__item">
          <div className="contact__widget__item">
            <div className="contact__widget__item__icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="contact__widget__item__text">
              <h4>Address</h4>
              <p>Mahagalahinna, Heeloya Road, Bandarawela.</p>
            </div>
          </div>

          {/* Add other contact widgets */}
        </div>

        <div className="contact__section">
          <div className="social__section">
            <div className="social__item__title">
              <h3>Follow Me</h3>
            </div>
            <div className="social__item__icon">
              {/* Add social media links */}
            </div>
            <div className="map__section">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.692930264657!2d80.99965493313582!3d6.839755595667008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae465608f45bbd7%3A0xc1da0d33b8b1a112!2sMahagalahinna%2C%20Bandarawela!5e0!3m2!1sen!2slk!4v1707831921036!5m2!1sen!2slk"
                title="Google Maps"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="contact__form__section">
            <form onSubmit={handleSubmit}>
              <div className="contact__form__title">
                <h3>Send a Message</h3>
              </div>
              <div className="contact__form__item">
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="contact__form__item">
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="contact__form__item">
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Your Message"
                  required
                />
              </div>
              <div className="contact__form__item">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;