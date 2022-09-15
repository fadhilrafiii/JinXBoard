import { RadioButtonValue } from 'Components/RadioButtonList';

export type PowerPlantStatusHeaderType = {
  dataType: RadioButtonValue;
  startDate?: Date;
  endDate?: Date;
  page: number;
  totalPages: number;
};

export type PowerPlantDataType = {
  date: string;
  time: string;
  existing: number;
  projection: number;
};
