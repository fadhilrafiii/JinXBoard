import React, { HTMLAttributes, ReactNode } from 'react';

import styles from './index.module.css';

export enum StrippedBoxTheme {
  Green = 'green',
  Yellow = 'yellow',
  Red = 'red',
}

interface StrippedBoxProps extends HTMLAttributes<HTMLDivElement> {
  theme: StrippedBoxTheme;
  children: ReactNode | ReactNode[];
}

const StrippedBox = ({ theme, children, ...props }: StrippedBoxProps) => {
  const classNames = [styles.container, styles[theme], props.className];

  return (
    <div {...props} className={classNames.join(' ')}>
      {children}
    </div>
  );
};

export default StrippedBox;
