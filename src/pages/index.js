import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/layout';
import { Fade, Zoom } from 'react-awesome-reveal';
import './index.css'; // Ensure this is the correct path to your CSS file
import './styles.css';
 
const IndexPage = () => {
  const [language, setLanguage] = useState('en');
  const videoRef = useRef(null);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ro' : 'en');
  };

  const textSequence = [
    { text: 'If you can make someone laugh you can make him do anything.', duration: 3000 },
    { text: 'Everyone has a plan till they get punched in the mouth.', duration: 3000 },
    { text: 'It\'s only after we\'ve lost everything that we\'re free to do anything.', duration: 3000 },
    { text: 'I\'m not a product of my circumstances. I\'m a product of my decisions.', duration: 3000 },
    { text: 'Good things come to those who wait, but better things come to those who go out and get them.', duration: 3000 },
    { text: 'If you want something you`ve never had, you must be willing to do something you`ve never done.', duration: 3000 },
    { text: 'I never lose. Either I win or I learn.', duration: 3000 },
    { text: 'Be yourself; everyone else is already taken.', duration: 3000 }
  ];

  const [overlayText, setOverlayText] = useState(textSequence[0].text);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOverlayText(prevText => {
        const currentIndex = textSequence.findIndex(item => item.text === prevText);
        const nextIndex = (currentIndex + 1) % textSequence.length;
        return textSequence[nextIndex].text;
      });
    }, 3000);  // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, [textSequence]);

  useEffect(() => {
    // Load the YouTube IFrame Player API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player)
    // after the API code downloads.
    window.onYouTubeIframeAPIReady = function () {
      videoRef.current = new window.YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'dNs4ANbcl_o', // Replace with your YouTube video ID
        playerVars: {
          'autoplay': 1,
          'controls': 0,
          'loop': 1,
          'playlist': 'dNs4ANbcl_o' // Necessary for loop to work
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };

    function onPlayerReady(event) {
      event.target.mute();
      setIsMuted(true);
      event.target.playVideo();
    }

    function onPlayerStateChange(event) {
      if (event.data === window.YT.PlayerState.ENDED) {
        event.target.playVideo();
      }
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.unMute();
      } else {
        videoRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const content = {
    en: {
  welcome: "Welcome to My Portfolio",
  about: "About our project",
  aboutContent:
    "On the banks of the Danube in Galați, we reclaim neglected land by cleaning debris, managing invasive vegetation, and turning forgotten spaces into places for people and nature. The project began with a basketball half-court and a simple BBQ area for the community. Today, the focus continues through R.A.W. Bushcraft—Romanian Amateur Wilderness—where we build with sticks and found materials and work toward creating a birdwatch and wildlife observation place.",

  rawButton: "Explore R.A.W. Bushcraft",
  ecomText: "This project is also supported through a separate e-commerce branch.",
  emagButton: "Visit our eMAG store",

  services: "Services",
  servicesCards: [
    {
      title: "Community Regeneration",
      items: [
        "Cleaning land",
        "Removing parasite vegetation",
        "Repurposing spaces",
        "Sports & social areas",
      ],
    },
    {
      title: "Media & Documentation",
      items: ["Video storytelling", "YouTube-first content", "Education through real action"],
    },
    {
      title: "Wilderness & Ecology",
      items: ["Stick-built structures", "Found materials", "Birdwatch habitat creation"],
    },
  ],

  events: "Events",
  eventsContent:
    "This summer we are thrilled to announce the launch of our open basketball half court. Join us for the grand reveal and enjoy a day of fun and community spirit! Follow us on social media for the latest updates and announcements.",

  aboutme: "About me",
  aboutmeContent:
    "Hi, I'm Ionuț Tăbăcaru and I'm the founder of this project. My journey began with a deep passion for nature and a commitment to sustainability. I believe in the transformative energy of direct contact with the natural world and how it can inspire and rejuvenate us. Beyond my love for nature, I am dedicated to creating vibrant communities. I thrive on bringing people together, fostering connections, and emphasizing the importance of education. Through this project, I aim to blend these passions, providing enriching experiences that highlight our shared values and collective creativity. Let's connect and create extraordinary things together!",

  shop: "Support us",
  supportCards: [
    {
      title: "Consulting & Guidance",
      items: [
        "Eco-sustainability consulting",
        "Sports performance guidance",
        "Life coaching & planning",
        "Project-based advisory",
      ],
    },
    {
      title: "Direct Support & Donations",
      items: ["One-time donations", "Material & equipment support", "Tools for field work", "Infrastructure development"],
    },
    {
      title: "Community & Partnerships",
      items: ["Local collaborations", "Volunteer involvement", "Educational initiatives", "Long-term partnerships"],
    },
  ],
  supportButton: "Support the project",
},

    ro: {
  welcome: "Bine ați venit la portofoliul meu",
  about: "Despre proiect",
  aboutContent:
    "Pe malurile Dunării, în Galați, recuperăm terenuri neglijate prin curățarea deșeurilor, gestionarea vegetației invazive și transformarea spațiilor uitate în locuri pentru oameni și natură. Proiectul a început cu un half-court de baschet și o zonă BBQ simplă, pentru comunitate. Astăzi, direcția continuă prin R.A.W. Bushcraft — Romanian Amateur Wilderness — unde construim cu bețe și materiale găsite și lucrăm la amenajarea unui loc de birdwatching și observare a faunei.",

  rawButton: "Descoperă R.A.W. Bushcraft",
  ecomText: "Acest proiect este susținut și printr-o ramură separată de e-commerce.",
  emagButton: "Vezi magazinul nostru eMAG",

  services: "Servicii",
  servicesCards: [
    {
      title: "Regenerare comunitară",
      items: [
        "Curățarea terenului",
        "Îndepărtarea vegetației invazive/parazite",
        "Reamenajarea spațiilor",
        "Zone sportive și sociale",
      ],
    },
    {
      title: "Media & documentare",
      items: ["Povestea prin video", "Conținut cu prioritate pentru YouTube", "Educație prin acțiune reală"],
    },
    {
      title: "Natură & ecologie",
      items: ["Structuri construite din bețe", "Materiale găsite/recuperate", "Amenajarea unui habitat pentru birdwatching"],
    },
  ],

  events: "Evenimente",
  eventsContent:
    "În această vară suntem încântați să anunțăm lansarea terenului nostru de baschet...",

  aboutme: "Despre mine",
  aboutmeContent:
    "Salut, sunt Ionuț Tăbăcaru și sunt fondatorul acestui proiect. Călătoria mea a început datorită unei pasiuni profunde pentru natură, laolaltă cu un angajament față de sustenabilitate. Cred în energia transformatoare a contactului direct cu universul naturii și în modul în care acesta ne poate inspira și întineri. Dincolo de această dragostea, sunt pasionat de crearea de comunități. Mă bucur să aduc oamenii împreună, să stimulez conexiunile și să subliniez importanța educației. Prin acest proiect, îmi propun să îmbin aceste pasiuni, oferind experiențe îmbogățitoare care evidențiază valorile noastre comune și creativitatea colectivă. Hai să ne conectăm și să creăm împreună lucruri extraordinare!",

  shop: "Susține-ne",
  supportCards: [
    {
      title: "Consultanță & îndrumare",
      items: ["Consultanță în eco-sustenabilitate", "Îndrumare pentru performanță sportivă", "Life coaching & planificare", "Consultanță pe proiect"],
    },
    {
      title: "Sprijin direct & donații",
      items: ["Donații punctuale", "Sprijin cu materiale & echipamente", "Unelte pentru munca din teren", "Dezvoltare de infrastructură"],
    },
    {
      title: "Comunitate & parteneriate",
      items: ["Colaborări locale", "Implicarea voluntarilor", "Inițiative educaționale", "Parteneriate pe termen lung"],
    },
  ],
  supportButton: "Susține proiectul",
},

  };

  return (
    <Layout currentLanguage={language} toggleLanguage={toggleLanguage}>
      <div id="home"></div>
      <div id="video" className="video-section">
        <div className="video-container">
          <div id="player" className="background-video"></div>
          <div className="overlay-text" key={overlayText}>
            {overlayText}
          </div>
          <button onClick={toggleMute} className="mute-toggle">
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </div>
      <div id="about" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].about}</h1>
            <div className="contentSection">
              <p>{content[language].aboutContent}</p>

<div style={{ marginTop: "1.25rem" }}>
  <a
    href="https://linktr.ee/rawbushcraft"
    target="_blank"
    rel="noopener noreferrer"
    className="nav-button"
    style={{ display: "inline-block" }}
  >
    {content[language].rawButton}
  </a>
</div>
<div style={{ marginTop: "1.5rem", opacity: 0.9 }}>
  <p style={{ marginBottom: "0.75rem" }}>
    {content[language].ecomText}

  </p>

  <a
    href="https://www.emag.ro/cscrmqn/226207/v?ref=see_vendor_page"
    target="_blank"
    rel="noopener noreferrer"
    className="nav-button"
    style={{ display: "inline-block" }}
  >
    {content[language].emagButton}

  </a>
  
</div>



            </div>
          </Zoom>
        </Fade>
      </div>
      <div id="services" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].services}</h1>
            <div className="contentSection services-grid">
  {content[language].servicesCards.map((card) => (
    <div className="service-card" key={card.title}>
      <h3>{card.title}</h3>
      <ul>
        {card.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

          </Zoom>
        </Fade>
      </div>
      
      <div id="aboutme" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].aboutme}</h1>
            <div className="contentSection">
              <p>{content[language].aboutmeContent}</p>
            </div>
          </Zoom>
        </Fade>
      </div>



      <div id="shop" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].shop}</h1>
            <div className="contentSection services-grid">
  {content[language].supportCards.map((card) => (
    <div className="service-card" key={card.title}>
      <h3>{card.title}</h3>
      <ul>
        {card.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

<div style={{ marginTop: "2rem" }}>
  <a
    href="https://revolut.me/tabacalkr"
    target="_blank"
    rel="noopener noreferrer"
    className="nav-button"
    style={{ display: "inline-block" }}
  >
    {content[language].supportButton}

  </a>
</div>

          </Zoom>
        </Fade>
      </div>
      
    </Layout>
  );
};

export default IndexPage;
