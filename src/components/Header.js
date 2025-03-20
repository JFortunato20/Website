import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Joseph Fortunato</h1>
      <nav>
        <ul> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
