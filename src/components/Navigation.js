import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navigation.css';

const Navigation = ({ currentLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonLabels = {
    en: {
      about: "About our project",
      services: "Services",
      events: "Events",
      aboutme: "About me",
      shop: "Shop",
      social: "Follow us",
    },
    ro: {
      about: "Despre Proiect",
      services: "Servicii",
      events: "Evenimente",
      aboutme: "Despre mine",
      shop: "Magazin",
      social: "Urmărește-ne",
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navigation">
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`nav-buttons ${menuOpen ? 'open' : ''}`}>
        <ScrollLink to="about" smooth={true} duration={500} className="nav-button">
          {buttonLabels[currentLanguage].about}
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500} className="nav-button">
          {buttonLabels[currentLanguage].services}
        </ScrollLink>
        <ScrollLink to="events" smooth={true} duration={500} className="nav-button">
          {buttonLabels[currentLanguage].events}
        </ScrollLink>
        <ScrollLink to="aboutme" smooth={true} duration={500} className="nav-button">
          {buttonLabels[currentLanguage].aboutme}
        </ScrollLink>
        <ScrollLink to="shop" smooth={true} duration={500} className="nav-button">
          {buttonLabels[currentLanguage].shop}
        </ScrollLink>
        <ScrollLink to="social" smooth={true} duration={500} className="nav-button">
          {buttonLabels[currentLanguage].social}
        </ScrollLink>
      </div>
    </div>
  );
};

export default Navigation;
