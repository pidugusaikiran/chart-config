import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// import { FusionChartsModule } from "angular-fusioncharts";

// // Import FusionCharts library and chart modules
// import * as FusionCharts from "fusioncharts";
// import * as charts from "fusioncharts/fusioncharts.charts";
// import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// // Pass the fusioncharts library and chart modules
// const fc = FusionCharts.default || FusionCharts;
// fc.options = {
//   creditLabel: false
// };

// FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
