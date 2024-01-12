import React, { useState, useEffect } from 'react';
import './contact.scss';

const REACT_APP_RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    // Initialize reCAPTCHA script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtain the reCAPTCHA token
    const recaptchaToken = await executeRecaptcha();

    // Update form data with reCAPTCHA token
    const data = { ...formData, recaptchaToken };

    try {
      const response = await fetch('http://localhost:5000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Handle the result from the server if needed
      console.log(result.message);

      setMessageSent(true);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const executeRecaptcha = () => {
    return new Promise((resolve) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(REACT_APP_RECAPTCHA_SITE_KEY, { action: 'submit' }).then(resolve);
      });
    });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {/* Add the reCAPTCHA element with the callback attribute */}
          <div
            className="g-recaptcha"
            data-sitekey={REACT_APP_RECAPTCHA_SITE_KEY}
            data-callback="onRecaptchaSubmit"
          ></div>

          <button type="submit">Send</button>
          {messageSent && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
