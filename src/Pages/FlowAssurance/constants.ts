/* eslint-disable camelcase */
export const K_FILTER_TYPE_OPTIONS = [
  { label: 'Existing Data', value: 'existing' },
  { label: 'Projection Data', value: 'projection' },
];

export const K_FLOW_ASSURANCE_DATA_PROPERTY_OPTIONS = [
  { label: 'Depth', value: 'depth' },
  { label: 'Pressure', value: 'pressure' },
  { label: 'Temperature', value: 'temperature' },
  { label: 'Flowrate', value: 'flowrate' },
  { label: 'Liquid Fraction', value: 'liquid_fraction' },
  { label: 'Steam Fraction', value: 'steam_fraction' },
  { label: 'NCG Fraction', value: 'ncg_fraction' },
];

export const mockData = Array(24)
  .fill(0)
  .map((val: number, index: number) => {
    const digit = index.toString().length;
    const date = `2022/09/${digit === 1 ? `0${index}` : index}`;

    const ncg = Math.random() * Math.random() * Math.random() * Math.random();
    const restFraction = 1 - ncg;
    const liquidFraction = Math.random();

    return {
      depth: 0,
      date,
      pressure: 22.8 + Math.pow(-1, index % 2) * 5 * Math.random(),
      temperature: 39.8 + Math.pow(-1, index % 2) * 5 * Math.random(),
      enthalpy: 0,
      flowrate: 1 + Math.pow(-1, index % 2) * 0.2 * Math.random(),
      liquid_fraction: liquidFraction,
      steam_fraction: restFraction - liquidFraction,
      ncg_fraction: ncg,
    };
  });
