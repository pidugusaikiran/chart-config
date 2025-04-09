export interface ChartType {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface ChartConfig {
  type: string;
  width: string;
  height: string;
  dataFormat: string;
  dataSource: {
    chart: any;
    data?: any[];
  };
}

export interface ChartOption {
  name: string;
  key: string;
  type: 'text' | 'number' | 'color' | 'boolean' | 'select';
  options?: string[];
  default?: any;
}