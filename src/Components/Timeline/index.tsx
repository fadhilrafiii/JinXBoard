import React, { useMemo } from 'react';

import GlassBox from 'Components/GlassBox';
import { Icon, IconName } from 'Components/Icon';

import { TimelineContent } from 'Shared/Types';

import { timelineContent } from './constants';

import styles from './index.module.css';

export enum TimelineOrientation {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

interface TimelineProps {
  orientation: TimelineOrientation;
}

const Timeline = ({ orientation }: TimelineProps) => {
  const timelineStyles = useMemo(() => {
    if (orientation === TimelineOrientation.Vertical)
      return {
        timelineContainer: styles.verticalTimelineContainer,
        connector: styles.verticalConnector,
        timelineNodeContainer: styles.verticalTimelineContainer,
        oddDescriptionConnector: styles.verticalOddDescriptionConnector,
        evenDescriptionConnector: styles.verticalEvenDescriptionConnector,
        detailTimelineContainer: styles.verticalDetailTimelineContainer,
      };

    return {
      timelineContainer: styles.horizontalTimelineContainer,
      connector: styles.horizontalConnector,
      timelineNodeContainer: styles.horizontalTimelineContainer,
      oddDescriptionConnector: styles.horizontalOddDescriptionConnector,
      evenDescriptionConnector: styles.horizontalEvenDescriptionConnector,
      detailTimelineContainer: styles.horizontalDetailTimelineContainer,
    };
  }, [orientation]);

  return (
    <div className={timelineStyles.timelineContainer}>
      {timelineContent.map(({ node, title, description, date }: TimelineContent, index: number) => {
        console.log(node, IconName);
        return (
          <React.Fragment key={index}>
            {index > 0 && <div className={timelineStyles.connector} />}
            <div className={timelineStyles.timelineNodeContainer}>
              <GlassBox className={styles.timelineNode}>
                {node in IconName ? <Icon name={node} /> : node}
              </GlassBox>
              {index % 1 === 1 && <div className={timelineStyles.evenDescriptionConnector} />}
              <div className={timelineStyles.detailTimelineContainer}>
                <p>{date}</p>
                <GlassBox className={styles.detailTimeline}>
                  <h5>{title}</h5>
                  <p>{description}</p>
                </GlassBox>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Timeline;
