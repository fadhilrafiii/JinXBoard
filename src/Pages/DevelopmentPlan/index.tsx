import React from 'react';

import Timeline, { TimelineOrientation } from 'Components/Timeline';

import { timelineContent } from './constants';

import styles from './index.module.css';

const DevelopmentPlan = () => {
  return (
    <div className={styles.container}>
      <Timeline orientation={TimelineOrientation.Vertical} timelineContent={timelineContent} />
    </div>
  );
};

export default DevelopmentPlan;
