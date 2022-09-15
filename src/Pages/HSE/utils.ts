import { useMemo } from 'react';

import moment from 'moment';

import { RadioButtonOption, RadioButtonValue } from 'Components/RadioButtonList';

import { K_FILTER_TYPE_OPTIONS, MOCK_DATA } from './constants';
import { HSEDataType } from './types';

export const useHSEData = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Time',
        accessor: 'time',
      },
      {
        Header: 'Exst Concentration (M)',
        accessor: 'existing',
      },
      {
        Header: 'Proj Concentration (M)',
        accessor: 'projection',
      },
    ],
    [],
  );

  return {
    columns,
    data: MOCK_DATA as HSEDataType[],
  };
};

export const getLabelDataTypeFromValue = (value: RadioButtonValue) =>
  K_FILTER_TYPE_OPTIONS.find(({ value: val }: RadioButtonOption) => val === value)?.label ||
  'Unknown';

export const generateChartData = (data: HSEDataType[], maxDataShown: number) => {
  const stepIndexData = Math.ceil(data.length / maxDataShown);
  const xValues = [];
  const chartData: { Existing: number[]; Projection: number[] } = {
    Existing: [],
    Projection: [],
  };

  for (let idx = 0; idx < data.length; idx += stepIndexData) {
    xValues.push(moment(data[idx].date + ' ' + data[idx].time).format('YYYY/MM/DD HH:mm'));
    chartData.Existing.push(data[idx].existing);
    chartData.Projection.push(data[idx].projection);
  }

  return {
    xValues,
    chartData,
  };
};
