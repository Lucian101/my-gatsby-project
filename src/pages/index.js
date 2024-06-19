// src/pages/index.js

import React, { useState } from 'react';
import Layout from '../components/layout';
import { Fade, Zoom } from 'react-awesome-reveal';
import './index.css'; // Ensure this is the correct path to your CSS file

const IndexPage = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ro' : 'en');
  };

  const content = {
    en: {
      welcome: "Welcome to My Portfolio",
      about: "About our project",
      aboutContent: "Nestled in the medium-sized town of Galați, near the borders of Eastern Europe and within earshot of the war in Ukraine, our story begins on the banks of the Danube. Amidst the echoes of distant drones, a derelict field lay forgotten, overrun with debris. But where others saw ruin, we saw potential for renewal and wellbeing. Our journey started with a vision to salvage this neglected space and repurpose it for the community. With a rich history in basketball, we dedicated part of the field to a new half-court, bringing the sport back to life for enthusiasts and newcomers alike. Closer to the river, we transformed another section into a welcoming BBQ area, encouraging social gatherings and outdoor enjoyment. Here in Galați, we believe in the power of attentive citizenship. Our efforts emphasize ecology, sustainability, and health, fostering a community that thrives on active living and mutual respect for our environment. This space is a testament to what can be achieved when we come together with a shared purpose: to create a healthier, more sustainable future for all..",
      services: "Services",
      servicesContent: "This is the services section of the portfolio.",
      events: "Events",
      eventsContent: "This is the events section of the portfolio.",
      aboutme: "AboutMe",
      aboutmeContent: "This is the aboutme section of the portfolio.",
      shop: "Shop",
      shopContent: "This is the shop section of the portfolio.",
      social: "Follow us",
      socialContent: "This is the newsletter section of the portfolio."
    },
    ro: {
      welcome: "Bine ați venit la portofoliul meu",
      about: "Despre mine",
      aboutContent: "Aceasta este secțiunea despre mine a portofoliului.",
      services: "Servicii",
      servicesContent: "Aceasta este secțiunea de servicii a portofoliului.",
      events: "Evenimente",
      eventsContent: "Aceasta este secțiunea de evenimente a portofoliului.",
      aboutme: "Despre mine",
      aboutmeContent: "Aceasta este secțiunea despre mine a portofoliului.",
      shop: "Magazin",
      shopContent: "Aceasta este secțiunea de magazin a portofoliului.",
      social: "Urmărește-ne",
      socialContent: "Aceasta este secțiunea de buletin informativ a portofoliului."
    }
  };
  

  return (
    <Layout currentLanguage={language} toggleLanguage={toggleLanguage}>
      <div id="video" className="video-section">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
      </div>
      <div id="about" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].about}</h1>
            <p>{content[language].aboutContent}</p>
          </Zoom>
        </Fade>
      </div>
      <div id="services" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].services}</h1>
            <p>This is the services section content.</p>
          </Zoom>
        </Fade>
      </div>
      <div id="events" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].events}</h1>
            <p>This is the events section content.</p>
          </Zoom>
        </Fade>
      </div>
      <div id="aboutme" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].aboutme}</h1>
            <p>This is the about me section content.</p>
          </Zoom>
        </Fade>
      </div>
      <div id="shop" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].shop}</h1>
            <p>This is the shop section content.</p>
          </Zoom>
        </Fade>
      </div>
      <div id="social" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].social}</h1>
            <p>This is the follow us section content.</p>
          </Zoom>
        </Fade>
      </div>
    </Layout>
  );
};

export default IndexPage;
