import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../../material.module';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    MaterialModule,
  ],
  templateUrl: 'products-header.component.html',
})

export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}
