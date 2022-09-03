import React from 'react';

// import Card from 'Components/Card';
import Timeline, { TimelineOrientation } from 'Components/Timeline';

const DevelopmentPlan = () => {
  return (
    <div>
      This is Development Plan Page! <Timeline orientation={TimelineOrientation.Horizontal} />
    </div>
  );
};

export default DevelopmentPlan;
