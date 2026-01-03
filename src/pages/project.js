import React, { useState } from 'react';
import Layout from '../components/layout'; // IMPORTANT: match index.js exactly

const ProjectPage = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ro' : 'en');
  };

  return (
    <Layout currentLanguage={language} toggleLanguage={toggleLanguage}>
      <main style={{ paddingTop: '120px', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1>About Our Project</h1>

        <p>
          Nestled in the town called Galați, near the borders of Eastern Europe and within
          earshot of the war in Ukraine, our story begins on the banks of the Danube.
        </p>

        <p>
          In the midst of echoes coming from distant drones, a derelict field lay forgotten,
          overrun with the debris of a forgotten industry. Where some saw a grave, we saw
          potential for renewal.
        </p>

        <p>
          Our journey started with a vision to salvage this neglected space and repurpose
          it for the community. With a rich history in basketball, part of the field was
          dedicated to a new half-court, bringing the sport back to life.
        </p>

        <p>
          Closer to the Danube, another section was transformed into a welcoming BBQ area,
          encouraging social gatherings and outdoor enjoyment.
        </p>

        <p>
          Our efforts emphasize ecology, sustainability, and health — fostering a community
          that thrives on active living and respect for the environment.
        </p>

        <p>
          This space is a testament to what can be achieved when people come together with
          a shared purpose: creating a healthier, more sustainable future.
        </p>
      </main>
    </Layout>
  );
};

export default ProjectPage;