import React from 'react';

import GlassBox from 'Components/GlassBox';
import { Icon } from 'Components/Icon';

import { Content } from 'Shared/Types/Content';

import { featureContent } from './constants';

import styles from './index.module.css';

const HowSection = () => {
  return (
    <>
      <h4 className={styles.subtitle}>
        How it <b>solves the problem</b>?
      </h4>
      <div className={styles.card}>
        {featureContent.map(({ title, iconName }: Content) => {
          return (
            <GlassBox key={title} className={styles.cardContentItem}>
              <div className={styles.iconContainer}>
                <Icon name={iconName} width={80} height={80} />
              </div>
              <h4 className={styles.cardContentTitle}>{title}</h4>
            </GlassBox>
          );
        })}
      </div>
    </>
  );
};

export default HowSection;
