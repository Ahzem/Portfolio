import React, { useState } from 'react';
import '../css/feedback.css';

const Feedback = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your feedback submission logic here
    console.log('Feedback submitted:', message);
    setMessage('');
  };

  return (
    <section className="feedback__section">
      <div className="feedback__button" title="Feedback">
        <div className="feedback__icon" onClick={() => document.querySelector('.feedback__form').style.display = 'block'}>
          <i className="fa fa-comments" aria-hidden="true"></i>
        </div>
        <div className="feedback__form">
          <form onSubmit={handleSubmit}>
            <div className="form__container">
              <div className="close__form" onClick={() => document.querySelector('.feedback__form').style.display = 'none'}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
              <div className="form__header">
                <h2>Feedback</h2>
              </div>
              <div className="form__body">
                <div className="form__group">
                  <textarea
                    id="message"
                    name="message"
                    className="no-resize"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="form__group">
                  <button type="submit">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
