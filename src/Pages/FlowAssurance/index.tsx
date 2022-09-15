import React, { useMemo, useState } from 'react';

import { LineChart } from 'Components/Chart';
import RadioButtonList, { RadioButtonValue } from 'Components/RadioButtonList';
import Tab from 'Components/Tab';
import Table from 'Components/Table';

import { FileType } from 'Shared/Types/General';

import { exportData, getFullFilenameWithFilter } from 'Shared/Helpers/file';

import { K_DATA_VISUALIZATION_TYPE_TABS } from 'Shared/Constants/General';

import { K_FLOW_ASSURANCE_DATA_PROPERTY_OPTIONS, mockData } from './constants';
import { FlowAssuranceFilter } from './types';
import { generateChartData, useFlowAssuranceData } from './utils';

const FlowAssurance = () => {
  const [selectedVisualizationTab, setSelectedVisualizatonTab] = useState<number>(0);
  const [filter, setFilter] = useState<FlowAssuranceFilter>({
    page: 1,
    totalPages: 1,
  });

  const { columns, data } = useFlowAssuranceData();
  const [selectedProperty, setSelectedProperty] = useState<RadioButtonValue>('depth');

  const actionChangePage = (page: number) => {
    setFilter((prevFilter: FlowAssuranceFilter) => ({
      ...prevFilter,
      page,
    }));
  };

  const actionChangeTab = (tabIdx: number) => setSelectedVisualizatonTab(tabIdx);

  const actionExportData = (fileType: FileType) => {
    const baseFilename = 'HSE Concentration';
    const filename = getFullFilenameWithFilter(baseFilename);

    const data = mockData; // TODO: fetch data first with API

    exportData(fileType, filename, data);
  };

  const actionChangePropertyShownInChart = (value: RadioButtonValue) => {
    setSelectedProperty(value);
  };

  const { xValues, chartData } = useMemo(
    () => generateChartData(data, selectedProperty as string, 15),
    [data, selectedProperty],
  );

  return (
    <div>
      <Tab
        selectedTab={selectedVisualizationTab}
        tabs={K_DATA_VISUALIZATION_TYPE_TABS}
        actionChangeTab={actionChangeTab}
      />
      {selectedVisualizationTab === 0 && (
        <Table
          actionChangePage={actionChangePage}
          actionExportData={actionExportData}
          columns={columns}
          data={data}
          currentPage={filter.page}
          totalPages={filter.totalPages}
          title="Flow Assurance Table"
        />
      )}
      {selectedVisualizationTab === 1 && (
        <>
          <RadioButtonList
            isHorizontal
            value={selectedProperty}
            options={K_FLOW_ASSURANCE_DATA_PROPERTY_OPTIONS}
            onChangeOptions={actionChangePropertyShownInChart}
          />
          <br />
          <LineChart
            id="flowassurance-line-chart"
            xValues={xValues}
            data={chartData}
            title="Flow Assurance Chart"
          />
        </>
      )}
    </div>
  );
};

export default FlowAssurance;
