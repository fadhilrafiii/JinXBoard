import React from 'react';

import moment from 'moment';

import DateTimePicker from 'Components/DateTimePicker';
import RadioButtonList, { RadioButtonOption, RadioButtonValue } from 'Components/RadioButtonList';
import StrippedBox, { StrippedBoxTheme } from 'Components/StrippedBox';

import { K_FILTER_TYPE_OPTIONS } from '../constants';
import { PowerPlantStatusHeaderType } from '../types';
import { getLabelDataTypeFromValue } from '../utils';

import styles from '../index.module.css';

interface PowerPlantStatusHeaderProps {
  actionChangeFilterDateTime: (e: React.ChangeEvent<HTMLInputElement>) => void;
  actionChangeFilterType: (value: RadioButtonValue) => void;
  filter: PowerPlantStatusHeaderType;
}

const PowerPlantStatusHeader = ({
  actionChangeFilterDateTime,
  actionChangeFilterType,
  filter,
}: PowerPlantStatusHeaderProps) => {
  const { dataType, startDate, endDate } = filter;

  return (
    <div className={styles.header}>
      <StrippedBox theme={StrippedBoxTheme.Green} className={styles.statusBox}>
        <h3>SAFE</h3>
        <p>Current projection for Power Plant Decibel is: 20.22</p>
        <span>
          Showing status for{' '}
          <span className="green-text bold">{getLabelDataTypeFromValue(dataType)}</span> from{' '}
          <span className="green-text bold">{moment(startDate).format('MMM DD YYYY HH:mm')}</span>{' '}
          to <span className="green-text bold">{moment(endDate).format('MMM DD YYYY HH:mm')}</span>
        </span>
      </StrippedBox>
      <div className={styles.filterBox}>
        <div className={styles.label}>Data Type:</div>
        <RadioButtonList
          isHorizontal
          value={dataType}
          options={K_FILTER_TYPE_OPTIONS as RadioButtonOption[]}
          onChangeOptions={actionChangeFilterType}
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

export default PowerPlantStatusHeader;
