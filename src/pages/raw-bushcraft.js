import React, { useState } from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const RawBushcraftPage = () => {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => setLanguage(language === 'en' ? 'ro' : 'en');

  return (
    <Layout currentLanguage={language} toggleLanguage={toggleLanguage}>
      <main style={{ paddingTop: '120px', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1>R.A.W. Bushcraft</h1>
        <p><strong>R.A.W.</strong> stands for <strong>Romanian Amateur Wilderness</strong>.</p>

        <h2>What it is</h2>
        <p>
          R.A.W. Bushcraft is the active media and field project where we document hands-on work:
          building with sticks and found materials, cleaning neglected environments, and restoring balance
          without damaging the ecosystem.
        </p>

        <h2>Current focus</h2>
        <p>
          Right now, the main goal is to create a <strong>birdwatch and wildlife observation place</strong>.
          That means opening and maintaining the area by removing parasite/invasive vegetation where needed,
          keeping the place clean, and shaping small low-impact structures that support observation and learning.
        </p>

        <h2>Watch & follow</h2>
        <p>
          The YouTube channel is the main active platform at the moment.
        </p>

        <p style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          

          <a
            href="https://www.instagram.com/raw.bushcraft/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button"
            style={{ display: 'inline-block' }}
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@r.a.w..bushcraft"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button"
            style={{ display: 'inline-block' }}
          >
            TikTok
          </a>

<a
            href="https://www.youtube.com/@R.A.W.Bushcraft"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button"
            style={{ display: 'inline-block' }}
          >
            YouTube
          </a>

          <a
            href="https://x.com/RAW_Bushcraft"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button"
            style={{ display: 'inline-block' }}
          >
            X
          </a>

          <Link
            to="/"
            className="nav-button"
            style={{ display: 'inline-block' }}
          >
            Back to Home
          </Link>
        </p>
      </main>
    </Layout>
  );
};

export default RawBushcraftPage;