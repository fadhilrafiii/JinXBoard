import React from 'react';

import HowSection from './HowSection';
import WhatSection from './WhatSection';
import WhySection from './WhySection';

import styles from './index.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <WhatSection />
      <br />
      <br />
      <WhySection />
      <br />
      <br />
      <HowSection />
    </div>
  );
};

export default About;
