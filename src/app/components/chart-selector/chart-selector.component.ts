import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ChartService } from '../../services/chart.service';
import { ChartType } from '../../models/chart.model';
import { ChartConfigDialogComponent } from '../chart-config-dialog/chart-config-dialog.component';

@Component({
  selector: 'app-chart-selector',
  standalone: true,
  imports: [
    MatDialogModule,
    MatIconModule
],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      @for (chart of chartTypes; track chart.id) {
        <div
          class="p-4 border rounded-lg hover:shadow-lg cursor-pointer transition-all dark:border-gray-700"
          (click)="openConfigDialog(chart)">
          <mat-icon class="text-4xl mb-2">{{chart.icon}}</mat-icon>
          <h3 class="text-xl font-semibold">{{chart.name}}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{chart.description}}</p>
        </div>
      }
    </div>
  `
})
export class ChartSelectorComponent {
  chartTypes: ChartType[] = [];

  constructor(
    private chartService: ChartService,
    private dialog: MatDialog
  ) {
    this.chartTypes = this.chartService.getChartTypes();
  }

  openConfigDialog(chart: ChartType): void {
    this.dialog.open(ChartConfigDialogComponent, {
      width: '80vw',
      maxWidth: '1200px',
      data: chart,
      panelClass: 'mat-dialog-container'
    });
  }
}
