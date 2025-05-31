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
      aboutContent: "Nestled in the town called Galați, near the borders of Eastern Europe and within earshot of the war in Ukraine, our story begins on the banks of the Danube. Somehow in the midst of echoes coming from distant drones, a derelict field lay forgotten, overrun with the debris of a forgotten industry. But where some just saw a grave, we saw potential for renewal. Our journey started with a vision to salvage this neglected space and repurpose it for the community. With a rich history in basketball, we dedicated part of the field to a new half-court, bringing the sport back to life for enthusiasts and newcomers alike. A bit closer to the Danube, we transformed another section into a welcoming BBQ area, encouraging social gatherings and outdoor enjoyment. Here in Galați, we believe in the power of attentive citizenship. Our efforts emphasize ecology, sustainability, and health, fostering a community that thrives on active living and mutual respect for our environment. This space is a testament to what can be achieved when we come together with a shared purpose: to create a healthier, more sustainable future for all.",
      services: "Services",
      servicesContent: "We are a dedicated group of professionals offering top-notch video services (filming and editing). Whether you need captivating footage for your event, social media, or marketing campaigns, we've got you covered. But that's not all! If your party needs an extra touch of excitement, our talented Master of Ceremonies can turn any gathering into an unforgettable experience. Transform your events and marketing with our help. Contact us today through one of our social media outlets to learn more!",
      events: "Events",
      eventsContent: "This summer we are thrilled to announce the launch of our open basketball half court. Join us for the grand reveal and enjoy a day of fun and community spirit! Follow us on social media for the latest updates and announcements.",
      aboutme: "About me",
      aboutmeContent: "Hi, I'm Ionuț Tăbăcaru and I'm the founder of this project. My journey began with a deep passion for nature and a commitment to sustainability. I believe in the transformative energy of direct contact with the natural world and how it can inspire and rejuvenate us. Beyond my love for nature, I am dedicated to creating vibrant communities. I thrive on bringing people together, fostering connections, and emphasizing the importance of education. Through this project, I aim to blend these passions, providing enriching experiences that highlight our shared values and collective creativity. Let's connect and create  extraordinary things together!",
      shop: "Support us",
      shopContent: "Unlock your potential and create a sustainable future with expert consulting and advisory services. Specializing in eco-sustainability, sports performance, and life coaching, we offer personalized strategies to help you achieve your goals and make a positive impact. Whether you're looking to enhance your personal well-being, boost your athletic performance, or implement sustainable practices, we provide the guidance and support you need. Transform your life and the world around you—start your journey to success today! For further details please contact us on any of our social media accounts. You can also support our project with a one-time donation on our IBAN or through Revolut. IBAN EUR (BIC/SWIFT Code: REVOLT21): LT533250040670605509--IBAN RON: RO57BREL0005505362900100; Revolut: https://revolut.me/tabacalkr"},
    ro: {
      welcome: "Bine ați venit la portofoliul meu",
      about: "Despre proiect",
      aboutContent: "Așezați în târgul Galațiului, aproape de granițele Europei de Est și la o aruncătură de băț de războiul din Ucraina, povestea noastră începe pe malurile Dunării. Cumva în mijlocul ecourilor dronelor îndepărtate, un teren abandonat zăcea uitat, împăienjenit de tot felul de resturi ale unei industrii de mult timp uitate. Dar unde alții au văzut o ruină, noi am înțeles că există un potențial al reînnoirii. Călătoria noastră a început cu o viziune de a salva acest spațiu neglijat și de a-l transforma pentru comunitatea locală. Cu o istorie bogată în domeniul baschetului, am dedicat o parte a terenului pentru realizarea unui half-court pentru practicarea baschetului, aducând sportul la viață pentru toți cei entuziaști și nou-veniți deopotrivă. Între teren și Dunăre, am transformat o altă porțiune într-un spațiu BBQ, încurajând întrunirile sociale și distracția în aer liber. Aici, în Galați, credem în puterea cetățeniei participative. Eforturile noastre pun accent pe ecologie și sănătate, promovând o comunitate care prosperă prin viață activă și respect reciproc pentru mediul nostru. Acest spațiu este o mărturie a ceea ce poate fi realizat atunci când ne unim cu un scop comun: crearea unui viitor mai bun și mai sustenabil pentru toți.",
      services: "Servicii",
      servicesContent: "Suntem un grup dedicat de profesioniști care oferă servicii video de top, producție și post-producție (filmare și editare). Indiferent dacă aveți nevoie de imagini captivante pentru evenimente, rețele sociale sau campanii de marketing, noi putem fi acolo pentru voi. Dar asta nu e tot! Dacă petrecerea dvs. are nevoie de un plus de energie, talentatul nostru Maestru de Ceremonii poate transforma orice reuniune într-o experiență de neuitat. Transformați-vă evenimentele și marketingul cu ajutorul nostru. Contactați-ne pe una din paginile noastre de social media pentru a afla mai multe!",
      events: "Evenimente",
      eventsContent: "În această vară suntem încântați să anunțăm lansarea terenului nostru de baschet. Alăturați-vă comunității noastre pentru a afla mai multe despre data deschiderii și bucurați-vă de o zi plină de distracție și spirit comunitar! Urmăriți-ne pe rețelele sociale pentru cele mai recente actualizări și anunțuri. Nu ratați evenimentele interesante pe care le avem pregătite pentru dvs.!",
      aboutme: "Despre mine",
      aboutmeContent: "Salut, sunt Ionuț Tăbăcaru și sunt fondatorul acestui proiect. Călătoria mea a început datorită unei pasiuni profunde pentru natură, laolaltă cu un angajament față de sustenabilitate. Cred în energia transformatoare a contactului direct cu universul naturii și în modul în care acesta ne poate inspira și întineri. Dincolo de această dragostea, sunt pasionat de crearea de comunități. Mă bucur să aduc oamenii împreună, să stimulez conexiunile și să subliniez importanța educației. Prin acest proiect, îmi propun să îmbin aceste pasiuni, oferind experiențe îmbogățitoare care evidențiază valorile noastre comune și creativitatea colectivă. Hai să ne conectăm și să creăm împreună lucruri extraordinare!",
      shop: "Susține-ne",
      shopContent: "Deblocați-vă potențialul și creați un viitor durabil cu servicii de consultanță de specialitate. Aflațik mai multe despre sustenabilitatea ecologică, performanță sportivă și life-coaching, oferim strategii personalizate pentru a vă ajuta să vă atingeți obiectivele și să aveți un impact pozitiv. Indiferent dacă doriți să vă îmbunătățiți starea de spirit, să vă creșteți performanța atletică sau să implementați practici durabile, vă oferim îndrumarea și sprijinul de care aveți nevoie. Transformă-ți viața și lumea din jurul tău — începe-ți călătoria către succes astăzi! Pentru mai multe detalii, vă rugăm să ne contactați pe oricare dintre conturile noastre de socializare. De asemenea, puteți susține proiectul nostru cu o donație unică pe IBAN-ul nostru sau prin Revolut. IBAN EUR (Cod BIC/SWIFT: REVOLT21): LT533250040670605509--IBAN RON: RO57BREL0005505362900100; Revolut: https://revolut.me/tabacalkr"
    }
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
            </div>
          </Zoom>
        </Fade>
      </div>
      <div id="services" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].services}</h1>
            <div className="contentSection">
              <p>{content[language].servicesContent}</p>
            </div>
          </Zoom>
        </Fade>
      </div>
      <div id="events" className="section">
        <Fade>
          <Zoom>
            <h1>{content[language].events}</h1>
            <div className="contentSection">
              <p>{content[language].eventsContent}</p>
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
            <div className="contentSection">
              <p>{content[language].shopContent}</p>
            </div>
          </Zoom>
        </Fade>
      </div>
      
    </Layout>
  );
};

export default IndexPage;
