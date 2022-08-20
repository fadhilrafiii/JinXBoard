import React, { HTMLAttributes, ReactNode } from 'react';

import styles from './index.module.css';

interface GlassBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverClass?: string;
}

const GlassBox = ({ children, hoverClass, ...props }: GlassBoxProps) => {
  const { className } = props;

  const containerStyles = [styles.container];

  if (className) containerStyles.push(className);
  if (hoverClass) containerStyles.push(hoverClass);

  return (
    <div {...props} className={containerStyles.join(' ')}>
      {children}
    </div>
  );
};

export default GlassBox;
