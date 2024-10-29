import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MaterialModule } from './material.module';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from "./components/header/header.component";
import { FiltersComponent } from './pages/home/components/filters/filters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,
    HeaderComponent,
    HomeComponent,
    FiltersComponent,
],
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'store';
}
