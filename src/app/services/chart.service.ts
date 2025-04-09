import { Injectable } from '@angular/core';
import { ChartType, ChartOption } from '../models/chart.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private chartTypes: ChartType[] = [
    {
      id: 'column2d',
      name: 'Column 2D',
      icon: 'bar_chart',
      description: 'Simple column chart for comparing values'
    },
    {
      id: 'pie2d',
      name: 'Pie 2D',
      icon: 'pie_chart',
      description: 'Pie chart for showing proportions'
    },
    {
      id: 'line',
      name: 'Line',
      icon: 'show_chart',
      description: 'Line chart for trending data'
    }
  ];

  getChartTypes(): ChartType[] {
    return this.chartTypes;
  }

  getChartOptions(chartType: string): ChartOption[] {
    const commonOptions: ChartOption[] = [
      { name: 'Caption', key: 'caption', type: 'text', default: 'Chart Title' },
      { name: 'Sub Caption', key: 'subCaption', type: 'text', default: '' },
      { name: 'Theme', key: 'theme', type: 'select', options: ['fusion', 'gammel', 'candy'], default: 'fusion' },
      { name: 'Show Values', key: 'showValues', type: 'boolean', default: true },
      { name: 'Background Color', key: 'bgColor', type: 'color', default: '#ffffff' }
    ];

    // Add chart-specific options based on type
    switch (chartType) {
      case 'column2d':
        return [
          ...commonOptions,
          { name: 'X-Axis Name', key: 'xAxisName', type: 'text', default: 'X Axis' },
          { name: 'Y-Axis Name', key: 'yAxisName', type: 'text', default: 'Y Axis' }
        ];
      case 'pie2d':
        return [
          ...commonOptions,
          { name: 'Enable Smart Labels', key: 'enableSmartLabels', type: 'boolean', default: true },
          { name: 'Use 3D Effects', key: 'use3DLighting', type: 'boolean', default: false }
        ];
      default:
        return commonOptions;
    }
  }
}