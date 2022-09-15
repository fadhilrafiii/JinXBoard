import { useMemo } from 'react';

import { Colors } from 'Shared/Enums';

import { generateRandomColor } from 'Shared/Helpers/colors';

import { ChartAnimationEasing } from './types';

export const getMinMaxDatasetsValue = (data: Record<string, number[]>) => {
  const minValues: number[] = [];
  const maxValues: number[] = [];

  Object.values(data).forEach((dataset: number[]) => {
    minValues.push(Math.min(...dataset));
    maxValues.push(Math.max(...dataset));
  });

  return {
    min: Math.min(...minValues),
    max: Math.max(...maxValues),
  };
};

export const generateDataChartColors = (nbOfData: number) => {
  const chartColors = [];

  for (let i = 0; i < nbOfData; i++) {
    if (i === 0) chartColors.push(Colors.Primary);
    else if (i === 1) chartColors.push(Colors.Secondary);
    else chartColors.push(generateRandomColor());
  }

  return chartColors;
};

export const useLineChartData = (
  xValues: string[],
  data: Record<string, number[]>,
  xLabel: string,
  yLabel: string,
) => {
  const dataLabels = Object.keys(data);

  const chartColors = useMemo(
    () => generateDataChartColors(dataLabels.length),
    [dataLabels.length],
  );

  const { min, max } = useMemo(() => getMinMaxDatasetsValue(data), [data]);
  const options = useMemo(
    () => ({
      layout: {
        padding: {
          top: 24,
        },
      },
      responsive: true,
      animation: {
        duration: 700,
        easing: 'easeInCubic' as ChartAnimationEasing,
        delay: 300,
        loop: false,
      },
      plugins: {
        legend: {
          position: 'bottom' as const,
        },
      },
      scales: {
        y: {
          title: { display: true, text: yLabel, font: { size: 16 }, padding: 12 },
          min: min - (Math.ceil((max - min) / 2) || 5),
          max: max + (Math.ceil((max - min) / 2) || 5),
        },
        x: {
          title: { display: true, text: xLabel, font: { size: 16 }, padding: 12 },
        },
      },
    }),
    [max, min, xLabel, yLabel],
  );

  const datasets = useMemo(
    () =>
      dataLabels.map((label: string, index: number) => ({
        label,
        data: data[label],
        borderColor: chartColors[index],
        backgroundColor: chartColors[index],
      })),
    [chartColors, data, dataLabels],
  );

  return {
    options,
    chartData: {
      labels: xValues,
      datasets,
    },
  };
};
