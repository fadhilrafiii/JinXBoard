import React from 'react';

import Table from 'Components/Table';

import { FileType } from 'Shared/Types/General';

import { usePowerPlantData } from '../utils';

import styles from '../index.module.css';

interface PowerPlantTableProps {
  actionChangePage: (page: number) => void;
  actionExportData: (fileType: FileType) => void;
  page: number;
  totalPages: number;
}

const PowerPlantTable = ({
  actionChangePage,
  actionExportData,
  page,
  totalPages,
}: PowerPlantTableProps) => {
  const { columns, data } = usePowerPlantData();

  return (
    <div className={styles.hseTable}>
      <Table
        actionChangePage={actionChangePage}
        actionExportData={actionExportData}
        columns={columns}
        data={data}
        currentPage={page}
        title="Power Plant Decibel"
        totalPages={totalPages}
        shouldShowPagination
      />
    </div>
  );
};

export default PowerPlantTable;
