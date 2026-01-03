// src/components/SectionObserver.js

import React from 'react';
import { useInView } from 'react-intersection-observer';
import './SectionObserver.css';

const SectionObserver = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`fade-zoom-in ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default SectionObserver;
