import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Contacts = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p className="description">I'd love to connect! Feel free to reach out via email or check out my social profiles below.</p>
      
      <p></p>
      <p></p>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/joseph-fortunato-17249b265" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/JFortunato20" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
