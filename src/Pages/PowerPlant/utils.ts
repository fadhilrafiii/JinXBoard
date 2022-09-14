import { useMemo } from 'react';

import { RadioButtonOption, RadioButtonValue } from 'Components/RadioButtonList';

import { K_FILTER_TYPE_OPTIONS, MOCK_DATA } from './constants';

export const usePowerPlantData = () => {
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
        Header: 'Decibel (dB)',
        accessor: 'existing',
      },
    ],
    [],
  );

  return {
    columns,
    data: MOCK_DATA,
  };
};

export const getLabelDataTypeFromValue = (value: RadioButtonValue) =>
  K_FILTER_TYPE_OPTIONS.find(({ value: val }: RadioButtonOption) => val === value)?.label ||
  'Unknown';
