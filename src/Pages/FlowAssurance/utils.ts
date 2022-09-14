import { useMemo } from 'react';

import moment from 'moment';

import { mockData } from './constants';

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
