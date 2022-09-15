import React, { useMemo } from 'react';

import { LineChart } from 'Components/Chart';

import { PowerPlantDataType } from '../types';
import { generateChartData } from '../utils';

interface PowerPlantChartProps {
  data: PowerPlantDataType[];
  shownData?: number;
}

const PowerPlantChart = ({ data, shownData = 24 }: PowerPlantChartProps) => {
  const { xValues, chartData } = useMemo(
    () => generateChartData(data, shownData),
    [data, shownData],
  );

  return (
    <LineChart
      id="powerplant-line-chart"
      xValues={xValues}
      data={chartData}
      title="Power Plant Decibel Chart"
    />
  );
};

export default PowerPlantChart;
