import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

const Navigation = ({ currentLanguage, toggleLanguage }) => {
  const scrollToSection = (sectionId) => {
    scroll.scrollTo({
      id: sectionId,
      duration: 500, // Adjust duration for scrolling speed (milliseconds)
      smooth: true,
    });
  };

  const buttonLabels = {
    en: {
      about: "About",
      services: "Projects",
      events: "About",
      aboutme: "Projects",
      shop: "About",
      newsletter: "Projects",
      // Add other button labels here
    },
    ro: {
      about: "Despre Proiect",
      services: "Proiecte",
      events: "About",
      aboutme: "Projects",
      shop: "About",
      newsletter: "Projects",
      // Add other button labels here
    }
  };

  return (
    <nav className="navigation">
    
    
          <ScrollLink to="about" smooth={true} duration={500}>
            {currentLanguage === 'ro' ? 'Despre Proiect' : 'About the Project'}
          </ScrollLink>
      
          <ScrollLink to="services" smooth={true} duration={500}>
            {currentLanguage === 'ro' ? 'Servicii' : 'Services'}
          </ScrollLink>
      
          <ScrollLink to="events" smooth={true} duration={500}>
            {currentLanguage === 'ro' ? 'Evenimente' : 'Events'}
          </ScrollLink>
     
          <ScrollLink to="aboutme" smooth={true} duration={500}>
            {currentLanguage === 'ro' ? 'Despre Mine' : 'About Me'}
          </ScrollLink>
       
          <ScrollLink to="shop" smooth={true} duration={500}>
            {currentLanguage === 'ro' ? 'Magazin' : 'Shop'}
          </ScrollLink>
     
          <ScrollLink to="newsletter" smooth={true} duration={500}>
            {currentLanguage === 'ro' ? 'Buletin informativ' : 'Newsletter'}
          </ScrollLink>
       
          <span
            onClick={toggleLanguage}
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            {currentLanguage === 'ro' ? 'EN' : 'RO'}
          </span>
        
        
    </nav>
  );
};

export default Navigation;
