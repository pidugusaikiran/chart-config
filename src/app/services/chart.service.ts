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
      id: 'column3d',
      name: 'Column 3D',
      icon: 'view_in_ar',
      description: '3D column chart for enhanced visualization'
    },
    {
      id: 'pie2d',
      name: 'Pie 2D',
      icon: 'pie_chart',
      description: 'Pie chart for showing proportions'
    },
    {
      id: 'pie3d',
      name: 'Pie 3D',
      icon: 'pie_chart',
      description: '3D pie chart with depth effect'
    },
    {
      id: 'line',
      name: 'Line',
      icon: 'show_chart',
      description: 'Line chart for trending data'
    },
    {
      id: 'area2d',
      name: 'Area 2D',
      icon: 'area_chart',
      description: 'Area chart for cumulative data'
    },
    {
      id: 'bar2d',
      name: 'Bar 2D',
      icon: 'align_horizontal_left',
      description: 'Horizontal bar chart'
    },
    {
      id: 'doughnut2d',
      name: 'Doughnut 2D',
      icon: 'donut_large',
      description: 'Doughnut chart for proportional data'
    },
    {
      id: 'spline',
      name: 'Spline',
      icon: 'timeline',
      description: 'Smooth curved line chart'
    }
  ];

  getChartTypes(): ChartType[] {
    return this.chartTypes;
  }

  getChartOptions(chartType: string): any[] {
    const commonOptions: any[] = [
      { name: 'Caption', key: 'caption', type: 'text', default: 'Chart Title' },
      { name: 'Sub Caption', key: 'subCaption', type: 'text', default: '' },
      { name: 'Theme', key: 'theme', type: 'select', options: ['fusion', 'gammel', 'candy', 'carbon', 'ocean'], default: 'fusion' },
      { name: 'Show Values', key: 'showValues', type: 'boolean', default: true },
      { name: 'Background Color', key: 'bgColor', type: 'color', default: '#ffffff' },
      { name: 'Show Border', key: 'showBorder', type: 'boolean', default: false },
      { name: 'Show Hover Effect', key: 'showHoverEffect', type: 'boolean', default: true },
      { name: 'Export Enabled', key: 'exportEnabled', type: 'boolean', default: true },
      { name: 'Number Suffix', key: 'numberSuffix', type: 'text', default: '' },
      { name: 'Number Prefix', key: 'numberPrefix', type: 'text', default: '' },
      { name: 'Show Legend', key: 'showLegend', type: 'boolean', default: true },
      { name: 'Legend Position', key: 'legendPosition', type: 'select', options: ['right', 'bottom', 'top'], default: 'right' },
      {
        name: 'Annotations',
        key: 'annotations',
        type: 'group',
        options: [
          { name: 'Show Annotations', key: 'showAnnotations', type: 'boolean', default: false },
          { name: 'Annotation Alpha', key: 'annotationAlpha', type: 'number', default: 100, min: 0, max: 100 },
          { name: 'Annotation Color', key: 'annotationColor', type: 'color', default: '#333333' }
        ]
      }
    ];

    switch (chartType) {
      case 'column2d':
      case 'column3d':
      case 'bar2d':
        return [
          ...commonOptions,
          { name: 'X-Axis Name', key: 'xAxisName', type: 'text', default: 'X Axis' },
          { name: 'Y-Axis Name', key: 'yAxisName', type: 'text', default: 'Y Axis' },
          { name: 'Plot Gradient Color', key: 'plotGradientColor', type: 'color', default: '' },
          { name: 'Use Rounded Edges', key: 'useRoundEdges', type: 'boolean', default: true },
          { name: 'Plot Border Color', key: 'plotBorderColor', type: 'color', default: '#666666' }
        ];
      case 'pie2d':
      case 'pie3d':
      case 'doughnut2d':
        return [
          ...commonOptions,
          { name: 'Enable Smart Labels', key: 'enableSmartLabels', type: 'boolean', default: true },
          { name: 'Use 3D Effects', key: 'use3DLighting', type: 'boolean', default: false },
          { name: 'Start Angle', key: 'startingAngle', type: 'number', default: 0, min: 0, max: 360 },
          { name: 'Enable Rotation', key: 'enableRotation', type: 'boolean', default: true },
          { name: 'Slice Color', key: 'sliceColor', type: 'color', default: '' }
        ];
      case 'line':
      case 'spline':
      case 'area2d':
        return [
          ...commonOptions,
          { name: 'X-Axis Name', key: 'xAxisName', type: 'text', default: 'X Axis' },
          { name: 'Y-Axis Name', key: 'yAxisName', type: 'text', default: 'Y Axis' },
          { name: 'Line Thickness', key: 'lineThickness', type: 'number', default: 2, min: 1, max: 10 },
          { name: 'Line Color', key: 'lineColor', type: 'color', default: '#008ee4' },
          { name: 'Draw Anchors', key: 'drawAnchors', type: 'boolean', default: true },
          { name: 'Anchor Radius', key: 'anchorRadius', type: 'number', default: 3, min: 1, max: 10 }
        ];
      default:
        return commonOptions;
    }
  }
}