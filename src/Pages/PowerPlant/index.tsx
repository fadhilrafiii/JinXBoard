import React, { useState } from 'react';

import moment from 'moment';

import { RadioButtonValue } from 'Components/RadioButtonList';
import Tab from 'Components/Tab';

import { FileType } from 'Shared/Types/General';

import { exportData, getFullFilenameWithFilter } from 'Shared/Helpers/file';

import { K_DATA_VISUALIZATION_TYPE_TABS } from 'Shared/Constants/General';

import PowerPlantChart from './Components/PowerPlantChart';
import PowerPlantStatusHeader from './Components/PowerPlantStatusHeader';
import PowerPlantTable from './Components/PowerPlantTable';
import { K_FILTER_TYPE_OPTIONS, MOCK_DATA } from './constants';
import { PowerPlantStatusHeaderType } from './types';
import { usePowerPlantData } from './utils';

const PowerPlant = () => {
  const { columns, data } = usePowerPlantData();
  const [selectedVisualizationTab, setSelectedVisualizatonTab] = useState<number>(0);
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

  const actionChangeTab = (tabIdx: number) => setSelectedVisualizatonTab(tabIdx);

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
      <Tab
        selectedTab={selectedVisualizationTab}
        tabs={K_DATA_VISUALIZATION_TYPE_TABS}
        actionChangeTab={actionChangeTab}
      />
      {selectedVisualizationTab === 0 && (
        <PowerPlantTable
          actionChangePage={actionChangePage}
          actionExportData={actionExportData}
          columns={columns}
          data={data}
          page={filter.page}
          totalPages={filter.totalPages}
        />
      )}
      {selectedVisualizationTab === 1 && <PowerPlantChart data={data} />}
    </>
  );
};

export default PowerPlant;
