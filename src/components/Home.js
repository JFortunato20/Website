import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Fade In Animation for Name */}
      <h2>Joseph Fortunato</h2>

      {/* Components displayed horizontally with Fade-in effect */}
      <div className="components">
        <div className="component-item fade-in">
          <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>
            <h3>Projects</h3>
          </Link>
        </div>
        <div className="component-item fade-in">
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="component-item fade-in">
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
            <h3>About</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
