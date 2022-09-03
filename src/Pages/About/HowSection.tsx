import React from 'react';

import Card from 'Components/Card';
import { Icon } from 'Components/Icon';

import { ContentWithIcon } from 'Shared/Types/Content';

import { featureContent } from './constants';

import styles from './index.module.css';

const HowSection = () => {
  return (
    <>
      <h3 className={styles.subtitle}>
        How <b className={styles.green}>AcProGeo</b> solves the problem?
      </h3>
      <div className={styles.card}>
        {featureContent.map(({ title, iconName }: ContentWithIcon) => {
          return (
            <Card key={title} className={styles.cardContentItem}>
              <div className={styles.iconContainer}>
                <Icon name={iconName} width={80} height={80} />
              </div>
              <h4 className={styles.cardContentTitle}>{title}</h4>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default HowSection;
