// src/components/Layout.js

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #e6f7ff;
    font-family: Arial, sans-serif;
  }
  header {
    position: fixed;
    top: 0;
    width: 100%;
    background: linear-gradient(to bottom, #007a99, #66ccff); /* Teal gradient */
    border-bottom: 4px solid #77c7f4; /* Light blue shade on the edge */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 1000;
  }
  header nav {
    display: flex;
    justify-content: space-between; /* Space between for left and right alignment */
    align-items: center;
    padding: 0.5rem;
  }
  .nav-left {
    display: flex;
    align-items: center;
  }
  header nav a, header nav button {
    margin: 0 1rem; /* Add margin to space out the buttons */
    text-decoration: none;
    color: #fff; /* White text color */
    font-weight: bold;
    cursor: pointer;
    background: none;
    border: none;
  }
  header nav img {
    height: 40px; /* Adjust the height as needed */
    cursor: pointer;
  }
`;

const Layout = ({ children, currentLanguage, toggleLanguage }) => (
  <>
    <Helmet>
      <title>My Portfolio</title>
    </Helmet>
    <GlobalStyle />
    <header>
      <nav>
        <div className="nav-left">
          
          <Navigation currentLanguage={currentLanguage} toggleLanguage={toggleLanguage} />
        </div>
        
        <div className="nav-right">
  <span onClick={toggleLanguage} className="language-selector">
    {currentLanguage === 'ro' ? 'EN' : 'RO'}
  </span>
</div>

      </nav>
    </header>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
