import React, { HTMLAttributes } from 'react';

import styles from './index.module.css';

export enum ButtonTheme {
  Primary = 'primary',
  Secondary = 'secondary',
  Destructive = 'destructive',
}

export enum ButtonType {
  Outlined = 'outlined',
  Filled = 'filled',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  theme: ButtonTheme;
  type: ButtonType;
}

const Button = ({ title, theme, type, ...props }: ButtonProps) => {
  const classNames = [styles.button, styles[theme], styles[type]];

  if (props.className) classNames.push(props.className);

  return (
    <button {...props} className={classNames.join(' ')}>
      {title}
    </button>
  );
};

export default Button;
