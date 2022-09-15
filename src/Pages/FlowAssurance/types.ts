export type FlowAssuranceFilter = {
  page: number;
  totalPages: number;
};

export type FlowAssuranceDataType = {
  depth: number;
  date: string;
  pressure: number;
  temperature: number;
  flowrate: number;
  liquid_fraction: number;
  steam_fraction: number;
  ncg_fraction: number;
};

export type FlowAssuranceDataProperty =
  | 'depth'
  | 'pressure'
  | 'temperature'
  | 'flowrate'
  | 'liquid_fraction'
  | 'steam_fraction'
  | 'ncg_fraction';
