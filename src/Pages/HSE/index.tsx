import React, { useState } from 'react';

import moment from 'moment';

import DateTimePicker from 'Components/DateTimePicker';
import RadioButtonList, { RadioButtonOption, RadioButtonValue } from 'Components/RadioButtonList';
import StrippedBox, { StrippedBoxTheme } from 'Components/StrippedBox';

import { K_FILTER_TYPE_OPTIONS } from './constants';
import { HSEHeaderFilter } from './types';
import { getHSEStatusDescription } from './utils';

import styles from './index.module.css';

const HSE = () => {
  const [filter, setFilter] = useState<HSEHeaderFilter>({
    dataType: K_FILTER_TYPE_OPTIONS[0].value,
    startDate: moment().subtract(7, 'days').toDate(),
    endDate: moment().toDate(),
  });

  const actionChangeFilterOption = (value: RadioButtonValue) => {
    setFilter((prevFilter: HSEHeaderFilter) => ({
      ...prevFilter,
      dataType: value,
    }));
  };

  const actionChangeFilterDateTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFilter((prevFilter: HSEHeaderFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const { dataType, startDate, endDate } = filter;
  console.log(startDate, endDate);

  return (
    <div className={styles.header}>
      <StrippedBox theme={StrippedBoxTheme.Green} className={styles.statusBox}>
        <h3>SAFE</h3>
        <p>Current projection for H2S Concentration is: 25.77</p>
        <span>{getHSEStatusDescription(filter)}</span>
      </StrippedBox>
      <div className={styles.filterBox}>
        <div className={styles.label}>Data Type:</div>
        <RadioButtonList
          isHorizontal
          value={dataType}
          options={K_FILTER_TYPE_OPTIONS as RadioButtonOption[]}
          onChangeOptions={actionChangeFilterOption}
        />
        <div className={styles.filterDate}>
          <DateTimePicker
            actionChangeDateTime={actionChangeFilterDateTime}
            id="startDate"
            format="yyyy-MM-dd HH:mm"
            name="startDate"
            value={startDate}
            placeholder="Select start date..."
          />
          <DateTimePicker
            actionChangeDateTime={actionChangeFilterDateTime}
            id="endDate"
            format="yyyy-MM-dd HH:mm"
            name="endDate"
            value={endDate}
            placeholder="Select end date..."
          />
        </div>
      </div>
    </div>
  );
};

export default HSE;
