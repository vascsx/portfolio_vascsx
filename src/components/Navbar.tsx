import React, { useState, useEffect } from 'react';
import { Brightness4, Brightness7, Menu, Close } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav>
      <div className="nav-container">
        <ul className="nav-links desktop">
          <li><a href="#resume">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="button">
          <input
            type="checkbox"
            id="toggle"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div className="display">
            <label htmlFor="toggle">
              <div className={`circle ${darkMode ? 'dark' : ''}`}>
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </div>
            </label>
          </div>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <Menu fontSize="large" />
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="menu-content"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.4 }}
            >
              <Close className="close-icon" onClick={() => setMenuOpen(false)} />
              <ul>
                <li><a href="#resume" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
