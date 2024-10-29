import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule
  ],
  templateUrl: 'filters.component.html',
})

export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['shoes', 'sports'];

  onShowCategory(category : string): void {
    this.showCategory.emit(category);
  }
}
