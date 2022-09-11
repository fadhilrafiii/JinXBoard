import React from 'react';

import { Column } from 'react-table';

import MainTable from './MainTable';

import styles from './index.module.css';

interface TableProps {
  columns: Column<object>[];
  data: object[];
}

const Table = ({ columns, data }: TableProps) => {
  return (
    <div className={styles.tableContainer}>
      <MainTable columns={columns} data={data} />
    </div>
  );
};

export default Table;
