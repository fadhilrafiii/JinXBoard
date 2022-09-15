import React from 'react';

import Table from 'Components/Table';

import { FileType } from 'Shared/Types/General';

import { PowerPlantDataType } from '../types';

import styles from '../index.module.css';

interface PowerPlantTableProps {
  actionChangePage: (page: number) => void;
  actionExportData: (fileType: FileType) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
  data: PowerPlantDataType[];
  page: number;
  totalPages: number;
}

const PowerPlantTable = ({
  actionChangePage,
  actionExportData,
  columns,
  data,
  page,
  totalPages,
}: PowerPlantTableProps) => {
  return (
    <div className={styles.hseTable}>
      <Table
        actionChangePage={actionChangePage}
        actionExportData={actionExportData}
        columns={columns}
        data={data}
        currentPage={page}
        title="Power Plant Decibel Table"
        totalPages={totalPages}
        shouldShowPagination
      />
    </div>
  );
};

export default PowerPlantTable;
