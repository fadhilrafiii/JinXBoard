import React from 'react';

import Table from 'Components/Table';

import { FileType } from 'Shared/Types/General';

import { HSEDataType } from '../types';

import styles from '../index.module.css';

interface HSETableProps {
  actionChangePage: (page: number) => void;
  actionExportData: (fileType: FileType) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
  data: HSEDataType[];
  page: number;
  totalPages: number;
}

const HSETable = ({
  actionChangePage,
  actionExportData,
  columns,
  data,
  page,
  totalPages,
}: HSETableProps) => {
  return (
    <div className={styles.hseTable}>
      <Table
        actionChangePage={actionChangePage}
        actionExportData={actionExportData}
        columns={columns}
        data={data}
        currentPage={page}
        title="HSE Concentration Table"
        totalPages={totalPages}
        shouldShowPagination
      />
    </div>
  );
};

export default HSETable;
