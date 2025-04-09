import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ChartService } from '../../services/chart.service';
import { ChartType, ChartOption } from '../../models/chart.model';
import { ChartPreviewComponent } from '../chart-preview/chart-preview.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-chart-config-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartPreviewComponent,
    JsonPipe,
  ],
  template: `
    <div class="p-6">
      <h2 mat-dialog-title class="text-2xl font-bold mb-4">
        Configure {{ data.name }}
      </h2>

      <mat-dialog-content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="config-form">
            <form [formGroup]="configForm" class="space-y-4">
              @for (option of chartOptions; track option.key) {
              <div class="form-field">
                <mat-form-field class="w-full">
                  @switch (option.type) { @case ('text') {
                  <!-- <ng-container> -->
                  <ng-container matLabel>{{ option.name }}</ng-container>
                  <input matInput [formControlName]="option.key" />
                  <!-- </ng-container> -->
                  } @case ('number') {
                  <!-- <ng-container> -->
                  <ng-container matLabel>{{ option.name }}</ng-container>
                  <input
                    matInput
                    type="number"
                    [formControlName]="option.key"
                  />
                  <!-- </ng-container> -->
                  } @case ('color') {
                  <!-- <ng-container> -->
                  <ng-container matLabel>{{ option.name }}</ng-container>
                  <input matInput type="color" [formControlName]="option.key" />
                  <!-- </ng-container> -->
                  } @case ('boolean') {
                  <!-- <ng-container> -->
                  <mat-checkbox [formControlName]="option.key">
                    {{ option.name }}
                  </mat-checkbox>
                  <!-- </ng-container> -->
                  } @case ('select') {
                  <!-- <ng-container> -->
                  <ng-container matLabel>{{ option.name }}</ng-container>
                  <mat-select [formControlName]="option.key">
                    @for (opt of option.options; track opt) {
                    <mat-option [value]="opt">{{ opt }}</mat-option>
                    }
                  </mat-select>
                  <!-- </ng-container> -->
                  } }
                </mat-form-field>
              </div>
              }
            </form>
          </div>

          <div class="preview-section">
            <h3 class="text-xl font-semibold mb-4">Preview</h3>
            <app-chart-preview [chartType]="data.id" [config]="previewConfig">
            </app-chart-preview>

            <div class="mt-4">
              <h4 class="text-lg font-semibold mb-2">Generated JSON</h4>
              <pre
                class="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto"
              >
                {{ previewConfig | json }}
              </pre
              >
              <button
                mat-raised-button
                color="primary"
                class="mt-4"
                (click)="downloadJSON()"
              >
                Download JSON
              </button>
            </div>
          </div>
        </div>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-button (click)="close()">Cancel</button>
        <button mat-raised-button color="primary" (click)="save()">
          Apply Configuration
        </button>
      </mat-dialog-actions>
    </div>
  `,
})
export class ChartConfigDialogComponent {
  configForm!: FormGroup;
  chartOptions: ChartOption[] = [];
  previewConfig: any = {};

  constructor(
    private fb: FormBuilder,
    private chartService: ChartService,
    private dialogRef: MatDialogRef<ChartConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChartType
  ) {
    this.chartOptions = this.chartService.getChartOptions(data.id);
    this.initForm();
  }

  private initForm(): void {
    const group: any = {};
    this.chartOptions.forEach((option) => {
      group[option.key] = [option.default];
    });
    this.configForm = this.fb.group(group);

    this.configForm.valueChanges.subscribe((values) => {
      this.updatePreviewConfig(values);
    });

    this.updatePreviewConfig(this.configForm.value);
  }

  private updatePreviewConfig(values: any): void {
    this.previewConfig = {
      type: this.data.id,
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        chart: {
          ...values,
        },
        data: [
          { label: 'Sample A', value: '290' },
          { label: 'Sample B', value: '260' },
          { label: 'Sample C', value: '180' },
        ],
      },
    };
  }

  downloadJSON(): void {
    const dataStr = JSON.stringify(this.previewConfig, null, 2);
    const dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `chart-config-${this.data.id}.json`);
    linkElement.click();
  }

  save(): void {
    this.dialogRef.close(this.previewConfig);
  }

  close(): void {
    this.dialogRef.close();
  }
}
