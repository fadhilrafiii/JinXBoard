import React from 'react';

// import Card from 'Components/Card';
import Timeline, { TimelineOrientation } from 'Components/Timeline';

import { timelineContent } from './constants';

import styles from './index.module.css';

const DevelopmentPlan = () => {
  return (
    <div className={styles.container}>
      <Timeline orientation={TimelineOrientation.Horizontal} timelineContent={timelineContent} />
    </div>
  );
};

export default DevelopmentPlan;
