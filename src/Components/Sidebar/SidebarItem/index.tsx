import React from 'react';

import { Icon } from 'Components/Icon';

import styles from './index.module.css';

interface SidebarItemProps {
  iconName?: string;
  label: string;
  path: string;
  isActive: boolean;
  isWrapped: boolean;
  onClickMenu: (path: string) => void;
}

const SidebarItem = ({
  iconName,
  label,
  path,
  onClickMenu,
  isActive,
  isWrapped,
}: SidebarItemProps) => {
  const containerStyles = [styles.container];
  if (isActive) containerStyles.push(styles.containerActive);

  return (
    <div onClick={() => onClickMenu(path)} className={containerStyles.join(' ')}>
      {iconName && <Icon name={iconName} />}
      {!isWrapped && <span className={styles.menuLabel}>{label}</span>}
    </div>
  );
};

export default SidebarItem;
