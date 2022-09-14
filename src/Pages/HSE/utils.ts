import moment from 'moment';

import { HSEHeaderFilter } from './types';

export const getHSEStatusDescription = (filterStatus: HSEHeaderFilter) => {
  const { dataType, startDate, endDate } = filterStatus;

  return `Showing status for ${dataType} from ${moment(startDate).format(
    'MMM DD YYYY HH:mm',
  )} to ${moment(endDate).format('MMM DD YYYY HH:mm')}`;
};
