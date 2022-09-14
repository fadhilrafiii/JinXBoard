import { RadioButtonValue } from 'Components/RadioButtonList';

export type PowerPlantStatusHeaderType = {
  dataType: RadioButtonValue;
  startDate?: Date;
  endDate?: Date;
  page: number;
  totalPages: number;
};
