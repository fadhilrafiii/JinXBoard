import React from 'react';

import RadioButton from './RadioButton';
import { RadioButtonOption, RadioButtonValue } from './types';

import styles from './index.module.css';

interface RadioButtonListProps {
  isHorizontal?: boolean;
  options: RadioButtonOption[];
  onChangeOptions: (value: RadioButtonValue) => void;
  value: RadioButtonValue;
}

const RadioButtonList = ({
  isHorizontal = false,
  options,
  onChangeOptions,
  value,
}: RadioButtonListProps) => {
  const classNames = [styles.container];

  if (isHorizontal) classNames.push(styles.horizontal);

  return (
    <div className={classNames.join(' ')}>
      {options.map((option: RadioButtonOption) => (
        <RadioButton
          key={option.value}
          isSelected={option.value === value}
          option={option}
          onChangeOptions={onChangeOptions}
        />
      ))}
    </div>
  );
};

export default RadioButtonList;
