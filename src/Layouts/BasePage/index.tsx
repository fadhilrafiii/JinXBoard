import React, { ReactNode, useMemo } from 'react';

import { useLocation } from 'react-router-dom';
import { mainRoutes, secondaryRoutes } from 'Router/routes';

import Sidebar from 'Components/Sidebar';

import PageSubtitle from 'Shared/Constants/PageSubtitle';
import PageTitle from 'Shared/Constants/PageTitle';

import styles from './index.module.css';

interface BasePageProps {
  children: ReactNode;
}

const BasePage = ({ children }: BasePageProps) => {
  const location = useLocation();

  const [pageTitle, pageSubtitle] = useMemo(() => {
    const path = location.pathname;
    const key: string = path.split('/').pop() || 'home';

    return [
      PageTitle[key as keyof typeof PageTitle],
      PageSubtitle[key as keyof typeof PageSubtitle],
    ];
  }, [location]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar mainRoutes={mainRoutes} secondaryRoutes={secondaryRoutes} />
      </div>
      <div className={styles.pageWrapper}>
        <h3 className={styles.pageTitle}>{pageTitle}</h3>
        <p className={styles.pageSubtitle}>{pageSubtitle}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BasePage;
