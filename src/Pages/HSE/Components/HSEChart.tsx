import React, { useMemo } from 'react';

import { LineChart } from 'Components/Chart';

import { HSEDataType } from '../types';
import { generateChartData } from '../utils';

interface HSEChartProps {
  data: HSEDataType[];
  shownData?: number;
}

const HSEChart = ({ data, shownData = 20 }: HSEChartProps) => {
  const { xValues, chartData } = useMemo(
    () => generateChartData(data, shownData),
    [data, shownData],
  );

  return (
    <LineChart
      id="hse-line-chart"
      xValues={xValues}
      data={chartData}
      title="HSE Concentration Chart"
    />
  );
};

export default HSEChart;
