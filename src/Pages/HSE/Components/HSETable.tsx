import React from 'react';

import Table from 'Components/Table';

import { FileType } from 'Shared/Types/General';

import { useHSEData } from '../utils';

import styles from '../index.module.css';

interface HSETableProps {
  actionChangePage: (page: number) => void;
  actionExportData: (fileType: FileType) => void;
  page: number;
  totalPages: number;
}

const HSETable = ({ actionChangePage, actionExportData, page, totalPages }: HSETableProps) => {
  const { columns, data } = useHSEData();

  return (
    <div className={styles.hseTable}>
      <Table
        actionChangePage={actionChangePage}
        actionExportData={actionExportData}
        columns={columns}
        data={data}
        currentPage={page}
        title="HSE Concentration"
        totalPages={totalPages}
        shouldShowPagination
      />
    </div>
  );
};

export default HSETable;
