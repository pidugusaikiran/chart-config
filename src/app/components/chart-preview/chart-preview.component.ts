import { Component, Input, OnChanges } from '@angular/core';
// import FusionCharts from 'fusioncharts';
// import * as Charts from 'fusioncharts/fusioncharts.charts';
// import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ChartConfig } from '../../models/chart.model';
// import { FusionChartsModule } from 'angular-fusioncharts';

// import * as FusionCharts from 'fusioncharts';
// import * as Charts from 'fusioncharts/fusioncharts.charts';
// import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// // Initialize FusionCharts Module
// const fc = FusionCharts.default || FusionCharts;
// FusionChartsModule.fcRoot(fc, Charts, FusionTheme);

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
Charts(FusionCharts);


@Component({
  selector: 'app-chart-preview',
  standalone: true,
  imports: [],
  template: `
    <div class="chart-container" id="testing-chart"></div>
    <!-- @if(!isChartLoading) { -->
    <!-- <fusioncharts
      [width]="config.width"
      [height]="config.height"
      [type]="config.type"
      [dataFormat]="config.dataFormat"
      [dataSource]="config.dataSource"
    ></fusioncharts> -->
    <!-- } -->
  `
})
export class ChartPreviewComponent {
  @Input() chartType!: string;
  @Input() config!: ChartConfig;
  isChartLoading = false;

  chartId = `chart-${Math.random().toString(36).substr(2, 9)}`;
  chart: any;

  ngOnChanges(): void {
    this.isChartLoading = true;
    if (this.config && this.chartType) {
      this.renderChart();
      // setTimeout(() => {
      //   this.isChartLoading = false;
      // }, 300);
    }
  }

  private renderChart(): void {
    if (this.chart) {
      this.chart.dispose();
    }

    this.chartId = this.chartId;

    const chartConfig: any = {
      ...this.config,
      type: this.chartType,
      // width: '100%',
      // height: '100%',
      // dataFormat: 'json',
      renderAt: 'testing-chart', // this.chartId
    };

    try {
      this.chart = new FusionCharts(chartConfig);
      this.chart.render();
    } catch (error) {
      console.error('Error rendering chart:', error);
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
