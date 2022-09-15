import React, { useMemo } from 'react';

import { LineChart } from 'Components/Chart';

import { PowerPlantDataType } from '../types';
import { generateChartData } from '../utils';

interface PowerPlantChartProps {
  data: PowerPlantDataType[];
}

const PowerPlantChart = ({ data }: PowerPlantChartProps) => {
  const { xValues, chartData } = useMemo(() => generateChartData(data, 10), [data]);

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
