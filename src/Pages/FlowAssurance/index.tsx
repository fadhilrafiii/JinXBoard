import React from 'react';

import Table from 'Components/Table';

import { useFlowAssuranceData } from './utils';

const FlowAssurance = () => {
  const { columns, data } = useFlowAssuranceData();

  return (
    <div>
      <Table columns={columns} data={data} title="Flow Assurance Data" />
    </div>
  );
};

export default FlowAssurance;
