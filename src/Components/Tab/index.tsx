import React from 'react';

import styles from './index.module.css';

interface TabProps {
  selectedTab: number;
  tabs: string[];
  actionChangeTab: (tabIdx: number) => void;
}

const Tab = ({ selectedTab, tabs, actionChangeTab }: TabProps) => {
  return (
    <div className={styles.tabContainer}>
      {tabs.map((tab: string, index: number) => {
        const classNames = [styles.tab];
        if (index === selectedTab) classNames.push(styles.selectedTab);
        return (
          <div key={tab} className={classNames.join(' ')} onClick={() => actionChangeTab(index)}>
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export default Tab;
