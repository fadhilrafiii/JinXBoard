import React from 'react';

import Card from 'Components/Card';
import { Icon } from 'Components/Icon';

import { ContentWithIcon } from 'Shared/Types/Content';

import { goalsContent } from './constants';

import styles from './index.module.css';

const WhatSection = () => {
  return (
    <>
      <h3 className={styles.subtitle}>
        What is <b className={styles.green}>AcProGeo</b>?
      </h3>
      <div className={styles.whatBodyContent}>
        <h4 className={styles.whatBodyTitle}>
          <b className={styles.green}>ArcProGeo</b> is the first <b>Geothermal Super App</b> with{' '}
          <b>AI</b> and <b>IOT</b> Solutions.
        </h4>
        <h5 className={styles.whatBodySubtitle}>
          ArcProGeo aims to <b>monitor</b> and <b>optimize</b>:
        </h5>
        <div className={styles.whatBodyGoals}>
          {goalsContent.map(({ title, iconName, description }: ContentWithIcon, index: number) => (
            <Card key={index} className={styles.whatBodyGoalsItem}>
              <div className={styles.iconContainer}>
                <Icon name={iconName} width={80} height={80} />
              </div>
              <div>
                <h5 className={styles.whatBodyGoalsItemTitle}>{title}</h5>
                <p className={styles.whatBodyGoalsItemDesc}>{description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatSection;
