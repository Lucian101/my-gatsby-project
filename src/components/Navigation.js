import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navigation.css';
import logo from '../images/logo.png';

const Navigation = ({ currentLanguage, toggleLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonLabels = {
    en: {
      about: "About",
      services: "Services",
      events: "Events",
      aboutme: "About me",
      shop: "Support us",
      social: "Follow us",
    },
    ro: {
      about: "Despre",
      services: "Servicii",
      events: "Evenimente",
      aboutme: "Despre mine",
      shop: "Susține-ne",
      social: "Urmărește-ne",
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const NavButtons = () => (
    <>
      <ScrollLink to="about" smooth={true} duration={500} className="nav-button" onClick={() => setMenuOpen(false)}>
        {buttonLabels[currentLanguage].about}
      </ScrollLink>
      <ScrollLink to="services" smooth={true} duration={500} className="nav-button" onClick={() => setMenuOpen(false)}>
        {buttonLabels[currentLanguage].services}
      </ScrollLink>
      <ScrollLink to="events" smooth={true} duration={500} className="nav-button" onClick={() => setMenuOpen(false)}>
        {buttonLabels[currentLanguage].events}
      </ScrollLink>
      <ScrollLink to="aboutme" smooth={true} duration={500} className="nav-button" onClick={() => setMenuOpen(false)}>
        {buttonLabels[currentLanguage].aboutme}
      </ScrollLink>
      <ScrollLink to="shop" smooth={true} duration={500} className="nav-button" onClick={() => setMenuOpen(false)}>
        {buttonLabels[currentLanguage].shop}
      </ScrollLink>
      <ScrollLink to="social" smooth={true} duration={500} className="nav-button" onClick={() => setMenuOpen(false)}>
        {buttonLabels[currentLanguage].social}
      </ScrollLink>
    </>
  );

  return (
    <>
      <div className="navigation">
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ScrollLink to="home" smooth={true} duration={500} className={`logo-link ${menuOpen ? 'shifted' : ''}`}>
          <img src={logo} alt="Logo" className="logo" />
        </ScrollLink>
        <div className={`nav-buttons ${menuOpen ? 'open' : ''}`}>
          <NavButtons />
        </div>
      </div>
      <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <NavButtons />
      </div>
    </>
  );
};

export default Navigation;