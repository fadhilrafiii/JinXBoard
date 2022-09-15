export const K_FILTER_TYPE_OPTIONS = [
  { label: 'Existing Data', value: 'existing' },
  { label: 'Projection Data', value: 'projection' },
];

// eslint-disable-next-line no-unused-vars
export const MOCK_DATA = Array(24)
  .fill(0)
  .map((_: number, index: number) => {
    const digit = index.toString().length;
    const time = `${digit === 1 ? `0${index}` : index}:00:00`;

    return {
      date: '2022/05/02',
      time: time,
      existing: 22 + Math.pow(-1, index % 2) * 5 * Math.random(),
      projection: 22.5 + Math.pow(-1, index % 2) * 5 * Math.random(),
    };
  });
