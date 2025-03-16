import React, { useState, useEffect } from 'react';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <nav>
            <div className="nav-container">
                <ul>
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
            </div>
        </nav>
    );
};

export default Navbar;