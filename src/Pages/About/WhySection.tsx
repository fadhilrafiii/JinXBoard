import React from 'react';

import GlassBox from 'Components/GlassBox';
import { Icon, IconName } from 'Components/Icon';
import List, { ListType } from 'Components/List';

import { ContentWithIconAndList } from 'Shared/Types/Content';

import { valueContent } from './constants';

import styles from './index.module.css';

const WhySection = () => {
  return (
    <>
      <h4 className={styles.subtitle}>
        Why <b>AcProGeo</b>?
      </h4>
      <div className={styles.card}>
        {valueContent.map(({ title, descriptionList, iconName }: ContentWithIconAndList) => {
          return (
            <GlassBox key={title} className={styles.cardContentItem}>
              <div className={styles.iconContainer}>
                <Icon name={iconName} width={80} height={80} />
              </div>
              <h5 className={styles.cardContentTitle}>{title}</h5>
              <List
                listType={ListType.UNORDERED}
                bulletIconName={IconName.Check}
                className={styles.cardDescriptionList}
              >
                {descriptionList.map((desc: string, index: number) => (
                  <div key={index}>{desc}</div>
                ))}
              </List>
            </GlassBox>
          );
        })}
      </div>
    </>
  );
};

export default WhySection;
