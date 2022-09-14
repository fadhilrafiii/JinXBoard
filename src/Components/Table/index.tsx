import React from 'react';

import { Column } from 'react-table';

import Button, { ButtonTheme, ButtonType } from 'Components/Button';

import { FileType } from 'Shared/Types/General';

import MainTable from './MainTable';
import TablePagination from './TablePagination';

import styles from './index.module.css';

interface TableProps {
  actionChangePage?: (page: number) => void;
  actionExportData?: (fileType: FileType) => void;
  columns: Column<object>[];
  currentPage?: number;
  data: object[];
  shouldShowPagination?: boolean;
  title: string;
  totalPages?: number;
}

const Table = ({
  actionChangePage,
  actionExportData,
  columns,
  currentPage = 1,
  data,
  shouldShowPagination = false,
  title,
  totalPages = 1,
}: TableProps) => {
  return (
    <>
      <div className={styles.tableHeader}>
        <h4 className={styles.tableTitle}>{title}</h4>
        <div className={styles.utils}>
          {actionExportData && (
            <Button
              onClick={() => actionExportData('xlsx')}
              theme={ButtonTheme.Primary}
              title="Export"
              type={ButtonType.Outlined}
            />
          )}
        </div>
      </div>
      <div className={styles.tableContainer}>
        <MainTable columns={columns} data={data} />
      </div>
      {shouldShowPagination && actionChangePage && (
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          actionChangePage={actionChangePage}
        />
      )}
    </>
  );
};

export default Table;
