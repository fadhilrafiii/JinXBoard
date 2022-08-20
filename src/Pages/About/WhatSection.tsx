import React from 'react';

import { goalsContent } from './constants';

import GlassBox from 'Components/GlassBox';
import { Icon } from 'Components/Icon';

import { Content } from 'Shared/Types/Content';

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
            {goalsContent.map(({ title, iconName, description }: Content, index: number) => (
              <React.Fragment key={index}>
                <div className={styles.whatBodyGoalsItem}>
                  <div className={styles.iconContainer}>
                    <Icon name={iconName} width={80} height={80} />
                  </div>
                  <div>
                    <h5 className={styles.whatBodyGoalsItemTitle}>{title}</h5>
                    <p>{description}</p>
                  </div>
                </div>
                {index < goalsContent.length - 1 && <div className={styles.verticalDivider} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </GlassBox>
    </>
  );
};

export default WhatSection;