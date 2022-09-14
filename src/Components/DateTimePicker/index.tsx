import React from 'react';

import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

import styles from './index.module.css';

interface DateTimePickerProps {
  actionChangeDateTime: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  format: string;
  minDate?: Date;
  maxDate?: Date;
  name: string;
  placeholder?: string;
  step?: number;
  value?: Date;
}

const DateTimePicker = ({
  actionChangeDateTime,
  id = 'jinxboard-datetimepicker',
  format,
  name,
  minDate,
  maxDate,
  placeholder = 'Select a date and time',
  step = 5,
  value,
}: DateTimePickerProps) => {
  return (
    <div className={styles.datetimePickerContainer}>
      <DateTimePickerComponent
        className={styles.datetimePicker}
        id={id}
        format={format}
        min={minDate}
        max={maxDate}
        name={name}
        onChange={actionChangeDateTime}
        placeholder={placeholder}
        step={step}
        value={value}
      />
    </div>
  );
};

export default DateTimePicker;
