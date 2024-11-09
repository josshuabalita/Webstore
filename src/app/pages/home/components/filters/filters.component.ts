import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { StoreService } from '../../../../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule
  ],
  templateUrl: 'filters.component.html',
})

export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();

  categoriesSubscription: Subscription | undefined;
  categories: Array<string> | undefined; 

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories()
      .subscribe((response) => {
        this.categories = response});
  }

  onShowCategory(category : string): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
      if(this.categoriesSubscription) {
        this.categoriesSubscription.unsubscribe();
      }
  }

}
