import React, { useState } from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  font-size: 2rem;
`;

const Section = styled.section`
  padding: 5rem 1rem;
  background: linear-gradient(to bottom, #007a99, #66ccff); /* Teal gradient */
  border-bottom: 4px solid #b3ecff; /* Light blue shade on the edge */
  color: #fff; /* White text color */
  text-align: center;
`;

const IndexPage = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ro' : 'en');
  };
  const content = {
    en: {
      welcome: "Welcome to My Portfolio",
      about: "About Me",
      aboutContent: "This is the about section of the portfolio.",
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
      <VideoContainer id="home">
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <VideoOverlay>{content[language].welcome}</VideoOverlay>
      </VideoContainer>
      <Section id="about">
        <h1>{content[language].about}</h1>
        <p>{content[language].aboutContent}</p>
      </Section>
      <Section id="services">
        <h1>{content[language].services}</h1>
        <p>{content[language].servicesContent}</p>
      </Section>
      <Section id="events">
        <h1>{content[language].events}</h1>
        <p>{content[language].eventsContent}</p>
      </Section>
      <Section id="aboutme">
        <h1>{content[language].aboutme}</h1>
        <p>{content[language].aboutmeContent}</p>
      </Section>
      <Section id="shop">
        <h1>{content[language].shop}</h1>
        <p>{content[language].shopContent}</p>
      </Section>
      <Section id="social">
        <h1>{content[language].social}</h1>
        <p>{content[language].socialContent}</p>
      </Section>
    </Layout>
  );
};

export default IndexPage;
