import React from 'react';

import GlassBox from 'Components/GlassBox';
import { Icon } from 'Components/Icon';

import { goalsContent } from './constants';
import styles from './index.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.subtitle}>
        What is <b>AcProGeo</b>?
      </h4>
      <GlassBox className={styles.whatBody}>
        <div className={styles.whatBodyContent}>
          <h5 className={styles.whatBodyTitle}>
            <b>ArcProGeo</b> is the first <b>Geothermal Super App</b> with AI and IOT Solutions.
          </h5>
          <div className={styles.whatBodyGoals}>
            {goalsContent.map(({ iconName, description }, index) => (
              <div key={index} className={styles.whatBodyGoalsItem}>
                <div className={styles.iconContainer}>
                  <Icon name={iconName} width={80} height={80} />
                </div>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassBox>
      <br />
      <br />
      <h4 className={styles.subtitle}>How it solves the problem?</h4>
      <GlassBox className={styles.whatBody}>
        <div className={styles.whatBodyContent}>
          <h5 className={styles.whatBodyTitle}>
            <b>ArcProGeo</b> is the first <b>Geothermal Super App</b> with AI and IOT Solutions.
          </h5>
          <div className={styles.whatBodyGoals}>
            {goalsContent.map(({ iconName, description }, index) => (
              <div key={index} className={styles.whatBodyGoalsItem}>
                <div className={styles.iconContainer}>
                  <Icon name={iconName} width={80} height={80} />
                </div>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassBox>
      <br />
      <br />
      <h4 className={styles.subtitle}>
        Why <b>AcProGeo</b>?
      </h4>
      <GlassBox className={styles.whatBody}>
        <div className={styles.whatBodyContent}>
          <h5 className={styles.whatBodyTitle}>
            <b>ArcProGeo</b> is the first <b>Geothermal Super App</b> with AI and IOT Solutions.
          </h5>
          <div className={styles.whatBodyGoals}>
            {goalsContent.map(({ iconName, description }, index) => (
              <div key={index} className={styles.whatBodyGoalsItem}>
                <div className={styles.iconContainer}>
                  <Icon name={iconName} width={80} height={80} />
                </div>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassBox>
    </div>
  );
};

export default About;
