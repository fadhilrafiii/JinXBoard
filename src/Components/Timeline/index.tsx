import React, { useMemo } from 'react';

import Card from 'Components/Card';
import { Icon, IconName } from 'Components/Icon';

import { Colors } from 'Shared/Enums';
import { TimelineContent } from 'Shared/Types';

import styles from './index.module.css';

export enum TimelineOrientation {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

interface TimelineProps {
  timelineContent: TimelineContent[];
  orientation: TimelineOrientation;
}

const Timeline = ({ orientation, timelineContent }: TimelineProps) => {
  const timelineStyles = useMemo(() => {
    if (orientation === TimelineOrientation.Vertical)
      return {
        timelineContainer: styles.verticalTimelineContainer,
        connector: styles.verticalConnector,
        oddDescriptionConnector: styles.verticalOddDescriptionConnector,
        evenDescriptionConnector: styles.verticalEvenDescriptionConnector,
        detailTimelineContainer: styles.verticalDetailTimelineContainer,
        oddContainer: styles.oddVerticalContainer,
        evenContainer: styles.evenVerticalContainer,
        oddTimelineNode: styles.oddVerticalTimelineNode,
        evenTimelineNode: styles.evenVerticalTimelineNode,
      };

    return {
      timelineContainer: styles.horizontalTimelineContainer,
      connector: styles.horizontalConnector,
      oddDescriptionConnector: styles.horizontalOddDescriptionConnector,
      evenDescriptionConnector: styles.horizontalEvenDescriptionConnector,
      detailTimelineContainer: styles.horizontalDetailTimelineContainer,
      oddContainer: styles.oddHorizontalContainer,
      evenContainer: styles.evenHorizontalContainer,
      oddTimelineNode: styles.oddHorizontalTimelineNode,
      evenTimelineNode: styles.evenHorizontalTimelineNode,
    };
  }, [orientation]);

  return (
    <div className={timelineStyles.timelineContainer}>
      {timelineContent.map(({ node, title, description, date }: TimelineContent, index: number) => {
        const detailContainerStyles = [timelineStyles.detailTimelineContainer];

        if (index % 2 === 0) detailContainerStyles.push(timelineStyles.oddContainer);
        else detailContainerStyles.push(timelineStyles.evenContainer);

        return (
          <React.Fragment key={index}>
            {index > 0 && <div className={timelineStyles.connector} />}
            <div className={styles.timelineItemContainer}>
              <Card
                className={
                  index % 2 === 0 ? timelineStyles.oddTimelineNode : timelineStyles.evenTimelineNode
                }
              >
                {node in IconName ? (
                  <Icon name={node} fill={Colors.Primary} height={48} width={48} />
                ) : (
                  node
                )}
              </Card>
              <div className={detailContainerStyles.join(' ')}>
                <p>{date}</p>
                <Card className={styles.detailTimeline}>
                  <h5>{title}</h5>
                  <p>{description}</p>
                </Card>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Timeline;
