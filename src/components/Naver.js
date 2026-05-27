import React, { useEffect, useState } from 'react';
import './Naver.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 10) {
        setIsVisible(true);
        lastY = currentY;
        return;
      }

      const movingDown = currentY > lastY;
      const delta = Math.abs(currentY - lastY);

      if (delta < 6) {
        return;
      }

      setIsVisible(!movingDown);
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobile = () => setMobileOpen(v => !v);

  return (
    <header className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${mobileOpen ? 'is-open' : ''}`}>
      <button
        className="navbar-toggle"
        aria-expanded={mobileOpen}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        onClick={toggleMobile}
      >
        <span className="sr-only">Menu</span>
        <span className="hamburger" aria-hidden="true" />
      </button>

      <nav className="navbar-nav navbar-nav-left" aria-label="Primary navigation left">
        <ul>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li>
            <a href="#projects" title="Projects section">Projects</a>
          </li>

        </ul>
      </nav>

      <a href="#home" className="navbar-brand" aria-label="Go to home section">
        <span id="title">MONISH</span>
      </a>

      <div className="navbar-right">
        <nav className="navbar-nav navbar-nav-right" aria-label="Main navigation right">
          <ul>
            <li><a href="#about">About</a></li>

            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

   

        <a href="https://linkedin.com/in/monish-kanna-m" className="navbar-cta" target="_blank" rel="noopener noreferrer">
          Connect
        </a>
      </div>
    </header>
  );
};

export default Navbar;
