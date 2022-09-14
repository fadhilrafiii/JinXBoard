import { RadioButtonValue } from 'Components/RadioButtonList';

export type HSEHeaderFilter = {
  dataType: RadioButtonValue;
  startDate?: Date;
  endDate?: Date;
};
