import React, { useState } from 'react';

import moment from 'moment';

import { RadioButtonValue } from 'Components/RadioButtonList';

import { FileType } from 'Shared/Types/General';

import { exportData, getFullFilenameWithFilter } from 'Shared/Helpers/file';

import HSEStatusHeader from './Components/HSEStatusHeader';
import HSETable from './Components/HSETable';
import { K_FILTER_TYPE_OPTIONS, MOCK_DATA } from './constants';
import { HSEHeaderFilter } from './types';

const HSE = () => {
  const [filter, setFilter] = useState<HSEHeaderFilter>({
    dataType: K_FILTER_TYPE_OPTIONS[0].value,
    startDate: moment().subtract(7, 'days').toDate(),
    endDate: moment().toDate(),
    page: 1,
    totalPages: 20,
  });

  const actionChangeFilterType = (value: RadioButtonValue) => {
    setFilter((prevFilter: HSEHeaderFilter) => ({
      ...prevFilter,
      dataType: value,
    }));
  };

  const actionChangeFilterDateTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFilter((prevFilter: HSEHeaderFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const actionChangePage = (page: number) => {
    setFilter((prevFilter: HSEHeaderFilter) => ({
      ...prevFilter,
      page,
    }));
  };

  const actionExportData = (fileType: FileType) => {
    const { startDate, endDate } = filter;
    const baseFilename = 'HSE Concentration';
    const filename = getFullFilenameWithFilter(baseFilename, { startDate, endDate });

    const data = MOCK_DATA; // TODO: fetch data first with API

    exportData(fileType, filename, data);
  };

  return (
    <>
      <HSEStatusHeader
        filter={filter}
        actionChangeFilterDateTime={actionChangeFilterDateTime}
        actionChangeFilterType={actionChangeFilterType}
      />
      <br />
      <br />
      <HSETable
        actionChangePage={actionChangePage}
        actionExportData={actionExportData}
        page={filter.page}
        totalPages={filter.totalPages}
      />
    </>
  );
};

export default HSE;
