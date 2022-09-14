import React, { useState } from 'react';

import moment from 'moment';

import { RadioButtonValue } from 'Components/RadioButtonList';

import { FileType } from 'Shared/Types/General';

import { exportData, getFullFilenameWithFilter } from 'Shared/Helpers/file';

import PowerPlantStatusHeader from './Components/PowerPlantStatusHeader';
import PowerPlantTable from './Components/PowerPlantTable';
import { K_FILTER_TYPE_OPTIONS, MOCK_DATA } from './constants';
import { PowerPlantStatusHeaderType } from './types';

const PowerPlant = () => {
  const [filter, setFilter] = useState<PowerPlantStatusHeaderType>({
    dataType: K_FILTER_TYPE_OPTIONS[0].value,
    startDate: moment().subtract(7, 'days').toDate(),
    endDate: moment().toDate(),
    page: 1,
    totalPages: 1,
  });

  const actionChangeFilterType = (value: RadioButtonValue) => {
    setFilter((prevFilter: PowerPlantStatusHeaderType) => ({
      ...prevFilter,
      dataType: value,
    }));
  };

  const actionChangeFilterDateTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const complementDate: keyof PowerPlantStatusHeaderType =
      name === 'startDate' ? 'endDate' : 'startDate';

    let shouldUnsetComplementData = false;
    if (
      (name === 'startDate' && moment(value).isAfter(moment(filter.endDate))) ||
      (name === 'endDate' && moment(value).isBefore(moment(filter.startDate)))
    )
      shouldUnsetComplementData = true;

    setFilter((prevFilter: PowerPlantStatusHeaderType) => ({
      ...prevFilter,
      [complementDate]: shouldUnsetComplementData ? undefined : prevFilter[complementDate],
      [name]: value,
    }));
  };

  const actionChangePage = (page: number) => {
    setFilter((prevFilter: PowerPlantStatusHeaderType) => ({
      ...prevFilter,
      page,
    }));
  };

  const actionExportData = (fileType: FileType) => {
    const { startDate, endDate } = filter;
    const baseFilename = 'Power Plant Decibel';
    const filename = getFullFilenameWithFilter(baseFilename, { startDate, endDate });

    const data = MOCK_DATA; // TODO: fetch data first with API

    exportData(fileType, filename, data);
  };

  return (
    <>
      <PowerPlantStatusHeader
        filter={filter}
        actionChangeFilterDateTime={actionChangeFilterDateTime}
        actionChangeFilterType={actionChangeFilterType}
      />
      <br />
      <br />
      <PowerPlantTable
        actionChangePage={actionChangePage}
        actionExportData={actionExportData}
        page={filter.page}
        totalPages={filter.totalPages}
      />
    </>
  );
};

export default PowerPlant;
