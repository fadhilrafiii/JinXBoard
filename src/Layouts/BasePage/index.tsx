import React, { ReactNode } from 'react';

import Sidebar from 'Components/Sidebar';

interface BasePageProps {
  children: ReactNode;
}

const BasePage = ({ children }: BasePageProps) => {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default BasePage;
