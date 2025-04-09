import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ChartSelectorComponent } from './components/chart-selector/chart-selector.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [MatIconModule, ChartSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDarkMode = false;

  constructor() {
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.updateTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  private updateTheme(): void {
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
}
