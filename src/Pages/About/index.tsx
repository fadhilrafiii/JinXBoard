import React from 'react';

import HowSection from './HowSection';
import OurDevelopers from './OurDevelopers';
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
      <br />
      <br />
      <br />
      <br />
      <OurDevelopers />
    </div>
  );
};

export default About;
