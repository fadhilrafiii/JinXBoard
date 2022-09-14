import React from 'react';

import Table from 'Components/Table';

import { FileType } from 'Shared/Types/General';

import { exportData } from 'Shared/Helpers/file';

import { mockData } from './constants';
import { useFlowAssuranceData } from './utils';

const FlowAssurance = () => {
  const { columns, data } = useFlowAssuranceData();

  const actionExportData = (fileType: FileType) => {
    const filename = 'Flow Assurance Data';

    const data = mockData; // TODO: fetch data first with API

    exportData(fileType, filename, data);
  };

  return (
    <div>
      <Table
        actionExportData={actionExportData}
        columns={columns}
        data={data}
        title="Flow Assurance Data"
      />
    </div>
  );
};

export default FlowAssurance;
