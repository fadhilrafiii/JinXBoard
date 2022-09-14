import React from 'react';

import { LeftArrowIcon } from 'Components/Icon/Icons';

import { Colors } from 'Shared/Enums';

import styles from './index.module.css';

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  actionChangePage: (page: number) => void;
}

const TablePagination = ({ currentPage, totalPages, actionChangePage }: TablePaginationProps) => {
  const actionInputPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const page = parseInt(value);

    if (isNaN(page) || page < 1 || page > totalPages) actionChangePage(currentPage);
    else actionChangePage(page);
  };

  const shouldDisablePreviousButton = currentPage === 1;
  const shouldDisableNextButton = currentPage === totalPages;

  return (
    <div className={styles.pagination}>
      <button
        className={styles.previousButton}
        disabled={shouldDisablePreviousButton}
        onClick={() => actionChangePage(currentPage - 1)}
      >
        <LeftArrowIcon width={20} height={20} fill={Colors.Secondary} />
      </button>
      <div className={styles.pageIndicator}>
        <span>Page</span>
        <input value={currentPage} type="number" pattern="[0-9]{0,5}" onChange={actionInputPage} />
        <span>{`of ${totalPages}`}</span>
      </div>
      <button
        className={styles.nextButton}
        disabled={shouldDisableNextButton}
        onClick={() => actionChangePage(currentPage + 1)}
      >
        <LeftArrowIcon width={20} height={20} fill={Colors.Secondary} />
      </button>
    </div>
  );
};

export default TablePagination;
