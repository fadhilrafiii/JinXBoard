import React from 'react';

import Card from 'Components/Card';
import { Icon, IconName } from 'Components/Icon';
import List, { ListType } from 'Components/List';

import { ContentWithIconAndList } from 'Shared/Types';

import { valueContent } from './constants';

import styles from './index.module.css';

const WhySection = () => {
  return (
    <>
      <h3 className={styles.subtitle}>
        Why <b className={styles.green}>AcProGeo</b>?
      </h3>
      <div className={styles.card}>
        {valueContent.map(({ title, descriptionList, iconName }: ContentWithIconAndList) => {
          return (
            <Card key={title} className={styles.cardContentItem}>
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
                  <div className={styles.cardDescriptionListItem} key={index}>
                    {desc}
                  </div>
                ))}
              </List>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default WhySection;
