import React from 'react';

import { Cell, Column, ColumnInstance, HeaderGroup, Row, useTable } from 'react-table';

import styles from './index.module.css';

interface MainTableProps {
  columns: Column<object>[];
  data: object[];
}

const MainTable = ({ columns, data }: MainTableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} cellSpacing={0} className={styles.table}>
      <thead className={styles.thead}>
        {headerGroups.map((headerGroup: HeaderGroup, index: number) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={index}
            className={index === 1 ? styles.subHeader : styles.tr}
          >
            {headerGroup.headers.map((column: ColumnInstance, index: number) => (
              <th {...column.getHeaderProps()} key={index} className={styles.th}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className={styles.tbody}>
        {rows.map((row: Row, index: number) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell: Cell, index: number) => {
                return (
                  <td {...cell.getCellProps()} key={index} className={styles.td}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MainTable;
