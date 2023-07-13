export interface PieChart {
  name: string;
  value: number;
  extra: {
    id: number;
  };
}

export interface LineChart {
  name: string;
  series: {
    name: string;
    value: string;
  }[];
}
