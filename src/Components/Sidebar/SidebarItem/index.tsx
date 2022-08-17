import React from 'react';

import { Link } from 'react-router-dom';

import { Icon } from 'Components/Icon';

import styles from './index.module.css';

interface SidebarItemProps {
  iconName?: string;
  label: string;
  path: string;
  isActive: boolean;
  isWrapped: boolean;
}

const SidebarItem = ({ iconName, label, path, isActive, isWrapped }: SidebarItemProps) => {
  const containerStyles = [styles.container];
  if (isActive) containerStyles.push(styles.containerActive);

  return (
    <Link to={path} title={label} className={containerStyles.join(' ')}>
      {iconName && <Icon name={iconName} />}
      {!isWrapped && <span className={styles.menuLabel}>{label}</span>}
    </Link>
  );
};

export default SidebarItem;
