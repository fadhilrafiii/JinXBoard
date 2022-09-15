import { useMemo } from 'react';

import moment from 'moment';

import { mockData } from './constants';
import { FlowAssuranceDataProperty, FlowAssuranceDataType } from './types';

export const useFlowAssuranceData = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Depth (Point)',
        accessor: 'depth',
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: ({ value }: { value: string }) =>
          moment(value, 'YYYYMMDD', true).format('YYYY-MM-DD'),
      },
      {
        Header: 'Pressure (Bar)',
        accessor: 'pressure',
      },
      {
        Header: 'Temperature (C)',
        accessor: 'temperature',
      },
      {
        Header: 'Enthalpy (kJ/kg)',
        accessor: 'enthalpy',
      },
      {
        Header: 'Flowrate (m/s)',
        accessor: 'flowrate',
      },
      {
        Header: 'Liquid Fraction',
        accessor: 'liquid_fraction',
      },
      {
        Header: 'Steam Fraction',
        accessor: 'steam_fraction',
      },
      {
        Header: 'NCG Fraction',
        accessor: 'ncg_fraction',
      },
    ],
    [],
  );

  return {
    columns,
    data: mockData,
  };
};

export const generateChartData = (
  data: FlowAssuranceDataType[],
  property: string,
  maxDataShown: number,
) => {
  const stepIndexData = Math.ceil(data.length / maxDataShown);
  const xValues = [];
  const values = [];

  for (let idx = 0; idx < data.length; idx += stepIndexData) {
    xValues.push(moment(data[idx].date).format('YYYY/MM/DD'));
    values.push(data[idx][property as FlowAssuranceDataProperty]);
  }

  const chartData = {
    [property]: values,
  };

  return {
    xValues,
    chartData,
  };
};
