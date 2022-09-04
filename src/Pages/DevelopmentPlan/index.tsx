import React from 'react';

import useWindowDimensions from 'Shared/Hooks/useWindowDimensions';

// import Card from 'Components/Card';
import Timeline, { TimelineOrientation } from 'Components/Timeline';

import { MEDIUM_WINDOW_SIZE } from 'Shared/Constants/General';

import { timelineContent } from './constants';

import styles from './index.module.css';

const DevelopmentPlan = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.container}>
      <Timeline
        orientation={
          width > MEDIUM_WINDOW_SIZE ? TimelineOrientation.Horizontal : TimelineOrientation.Vertical
        }
        timelineContent={timelineContent}
      />
    </div>
  );
};

export default DevelopmentPlan;
