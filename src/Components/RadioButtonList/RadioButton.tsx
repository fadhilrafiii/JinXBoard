import React from 'react';

import { RadioButtonOption, RadioButtonValue } from './types';

import styles from './index.module.css';

interface RadioButtonProps {
  isSelected: boolean;
  onChangeOptions: (value: RadioButtonValue) => void;
  option: RadioButtonOption;
}

const RadioButton = ({ isSelected, option, onChangeOptions }: RadioButtonProps) => {
  return (
    <div
      className={styles.radioContainer}
      role="presentation"
      onClick={() => onChangeOptions(option.value)}
    >
      <div className={styles.radio}>{isSelected && <div className={styles.radioSelected} />}</div>
      <div>{option.label}</div>
    </div>
  );
};

export default RadioButton;
