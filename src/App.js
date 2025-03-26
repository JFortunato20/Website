import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

const MENU_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
  { path: '/about', label: 'About' },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`app ${isOpen ? 'menu-open' : ''}`}>
      {/* Conditionally render hamburger menu */}
      {location.pathname !== '/' && (
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}

      {/* Sidebar Menu */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {MENU_ITEMS.filter(item => item.path !== location.pathname).map(item => (
            <li key={item.path}>
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router basename="/Website"> {/* Match the repository name */}
      <App />
    </Router>
  );
}

export default AppWrapper;
