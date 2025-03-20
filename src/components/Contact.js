import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!'); // add backend logic here
  };

  return (
    <div className={`contact-container ${isVisible ? 'fade-in' : ''}`}>
      <h2>Contact Me</h2>
      <p className="description">
        I'd love to connect! Feel free to reach out via email or check out my social profiles below.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/joseph-fortunato-17249b265/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/JFortunato20" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
