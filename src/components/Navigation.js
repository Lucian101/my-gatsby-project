import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'gatsby';
import './Navigation.css';
import logo from '../images/logo.png';
import { FaYoutube, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
 // Import FontAwesome Icons

const Navigation = ({ currentLanguage, toggleLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false); // New state for icon bar

const [socialOpen, setSocialOpen] = useState(false);
const followUsRef = useRef(null);

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
      project: "Proiect",
      
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSocialIcons = () => {
    setShowSocialIcons(!showSocialIcons); // Toggle icon bar
  };

useEffect(() => {
  const handleClickOutside = (event) => {
    if (followUsRef.current && !followUsRef.current.contains(event.target)) {
      setTimeout(() => setSocialOpen(false), 10000);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

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

  

const isHome =
  typeof window !== "undefined" && window.location.pathname === "/";

  const NavButtons = () => (
    <>



      <ScrollLink to="about" smooth={true} duration={500} className="nav-button" onClick={() => setMenuOpen(false)}>
        {buttonLabels[currentLanguage].about}
      </ScrollLink>
      <ScrollLink to="services" smooth={true} duration={500} className="nav-button" onClick={() => setMenuOpen(false)}>
        {buttonLabels[currentLanguage].services}
      </ScrollLink>
      
      <ScrollLink to="aboutme" smooth={true} duration={500} className="nav-button" onClick={() => setMenuOpen(false)}>
        {buttonLabels[currentLanguage].aboutme}
      </ScrollLink>
      <ScrollLink to="shop" smooth={true} duration={500} className="nav-button" onClick={() => setMenuOpen(false)}>
        {buttonLabels[currentLanguage].shop}
      </ScrollLink>

      <div
  className={`nav-button follow-us ${socialOpen ? "active" : ""}`}
  onClick={() => setSocialOpen((prev) => !prev)}
  ref={followUsRef}
>
  {buttonLabels[currentLanguage].social}

  <div className="social-icons-bar"
  
  onClick={(e) => e.stopPropagation()}
  >
    <a href="https://www.youtube.com/@ionutzmedia" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
      <FaYoutube />
    </a>
    <a href="https://www.instagram.com/ionutz.media/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
      <FaInstagram />
    </a>
    <a href="https://www.tiktok.com/@ionutz.media" target="_blank" rel="noopener noreferrer " className="social-icon tiktok">
      <FaTiktok />
    </a>
    <a
      href="https://wa.me/40747452627"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon whatsapp"
    >

      <FaWhatsapp />
    </a>
        </div>
      </div>
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