import React, { HTMLAttributes, ReactNode, useCallback } from 'react';

import { Icon, IconName } from 'Components/Icon';

import styles from './index.module.css';

export enum ListType {
  ORDERED = 'ordered',
  UNORDERED = 'unordered',
}

interface ListProps extends HTMLAttributes<HTMLDivElement> {
  listType: ListType;
  bulletIconName?: IconName;
  fontSize?: number;
  bulletIconSize?: number;
  children: ReactNode[];
}

const List = ({
  listType = ListType.UNORDERED,
  bulletIconName = IconName.Bullet,
  bulletIconSize = 16,
  children,
  ...props
}: ListProps) => {
  const renderListBullet = useCallback(
    (index: number) => {
      if (listType === ListType.ORDERED) return <span>{index + 1}.</span>;

      return (
        <div className={styles.iconContainer}>
          <Icon name={bulletIconName} width={bulletIconSize} height={bulletIconSize} />
        </div>
      );
    },
    [bulletIconName, bulletIconSize, listType],
  );

  return (
    <div {...props}>
      {children.map((listItem: ReactNode, index: number) => {
        return (
          <div key={index} className={styles.listItem}>
            {renderListBullet(index)}
            {listItem}
          </div>
        );
      })}
    </div>
  );
};

export default List;
