/* eslint-disable @typescript-eslint/no-explicit-any */
import Papa from 'papaparse';
import { utils, writeFile } from 'xlsx';

import { FileType } from 'Shared/Types/General';

export const getFullFilenameWithFilter = (baseFilename: string, filter?: Record<string, any>) => {
  if (filter) {
    const filterValues = Object.values(filter);
    const filterValuesString = filterValues.join('-');

    return baseFilename + '-' + filterValuesString;
  }

  return baseFilename;
};

export const exportData = (fileType: FileType, filename: string, data: any) => {
  switch (fileType) {
    case 'csv':
      exportCSV(filename, data);
      break;
    case 'xlsx':
    default:
      exportExcel(filename, data);
      break;
  }
};

export const downloadFile = (objectURL: string, filename: string) => {
  const a = window.document.createElement('a');
  a.href = objectURL;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const exportExcel = (filename: string, data: any) => {
  const workBook = utils.book_new();
  const sheetData = utils.json_to_sheet(data);
  filename = `${filename.slice(0, 26)}.xlsx`;

  utils.book_append_sheet(workBook, sheetData, filename);

  return writeFile(workBook, filename);
};

export const exportCSV = (filename: string, data: any) => {
  const fields = Object.keys(data);
  filename = `${filename}.csv`;

  const csv = Papa.unparse({ data, fields });
  const blob = new Blob([csv]);

  const navigator: MyNavigator = window.navigator;
  if (navigator.msSaveBlob) navigator.msSaveBlob(blob, filename);
  else downloadFile(window.URL.createObjectURL(blob), filename);
};
