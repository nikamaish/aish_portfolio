import React, { useState } from 'react';
import "./contact.scss";

// ... (other imports and component code)

const REACT_APP_HCAPTCHA_SITE_KEY = process.env.REACT_APP_HCAPTCHA_SITE_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtain the hCaptcha token
    const hCaptchaToken = window.hcaptcha.getResponse();

    // Update form data with hCaptcha token
    const data = { ...formData, hCaptchaToken };

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

          {/* Add the hCaptcha widget here */}
          <div className="h-captcha" data-sitekey={REACT_APP_HCAPTCHA_SITE_KEY}></div>

          <button type="submit">Send</button>
          {messageSent && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
