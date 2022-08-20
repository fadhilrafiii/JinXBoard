import React from 'react';

import GlassBox from 'Components/GlassBox';
import { Icon } from 'Components/Icon';

import { ContentWithIcon } from 'Shared/Types/Content';

import { goalsContent } from './constants';

import styles from './index.module.css';

const WhatSection = () => {
  return (
    <>
      <h4 className={styles.subtitle}>
        What is <b>AcProGeo</b>?
      </h4>
      <GlassBox className={styles.whatBody}>
        <div className={styles.whatBodyContent}>
          <h5 className={styles.whatBodyTitle}>
            <b>ArcProGeo</b> is the first <b>Geothermal Super App</b> with AI and IOT Solutions.
          </h5>
          <h6 className={styles.whatBodySubtitle}>
            ArcProGeo aims to <b>monitor</b> and <b>optimize</b>:
          </h6>
          <div className={styles.whatBodyGoals}>
            {goalsContent.map(
              ({ title, iconName, description }: ContentWithIcon, index: number) => (
                <div key={index} className={styles.whatBodyGoalsItem}>
                  <div className={styles.iconContainer}>
                    <Icon name={iconName} width={80} height={80} />
                  </div>
                  <div>
                    <h5 className={styles.whatBodyGoalsItemTitle}>{title}</h5>
                    <p>{description}</p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </GlassBox>
    </>
  );
};

export default WhatSection;
