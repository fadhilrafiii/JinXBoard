import React, { HTMLAttributes, ReactNode } from 'react';

import styles from './index.module.css';

interface GlassBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const GlassBox = ({ children, ...props }: GlassBoxProps) => {
  const { className, style } = props;

  const containerStyles = [styles.container];

  if (className) containerStyles.push(className);

  return (
    <div className={containerStyles.join(' ')} style={styles}>
      {children}
    </div>
  );
};

export default GlassBox;
