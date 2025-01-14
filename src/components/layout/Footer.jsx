import { useState } from 'react';
import '../../styles/Feedback.css';

const Footer = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://x1quntseq0.execute-api.eu-north-1.amazonaws.com/default/feedbackForm", {
        method: "POST",
        body: JSON.stringify({ message })
      });

      if (response.ok) {
        alert("Feedback sent successfully!");
        setMessage('');
        setShowFeedback(false);
      } else {
        throw new Error('Failed to send feedback');
      }
    } catch (error) {
      alert("Error sending feedback. Please try again.");
    }
  };

  return (
    <section className="feedback__section">
      <div className="feedback__button" title="Feedback">
        <div 
          className="feedback__icon" 
          onClick={() => setShowFeedback(true)}
        >
          <i className="fa fa-comments" aria-hidden="true"></i>
        </div>
        {showFeedback && (
          <div className="feedback__form">
            <form onSubmit={handleSubmit}>
              <div className="form__container">
                <div 
                  className="close__form" 
                  onClick={() => setShowFeedback(false)}
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className="form__header">
                  <h2>Feedback</h2>
                </div>
                <div className="form__body">
                  <div className="form__group">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="no-resize"
                      required
                    />
                  </div>
                  <div className="form__group">
                    <button type="submit">Send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Footer;