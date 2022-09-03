import React, { HTMLAttributes, ReactNode } from 'react';

import styles from './index.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverClass?: string;
}

const Card = ({ children, hoverClass, ...props }: CardProps) => {
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

export default Card;
