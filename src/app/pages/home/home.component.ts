import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ProductsHeaderComponent } from "./components/products-header/products-header.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { ProductBoxComponent } from "./components/product-box/product-box.component";
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MaterialModule,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent
],
  templateUrl: './home.component.html',
})

export class HomeComponent {
  constructor(private cartService: CartService) { } 

  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1, 
      id: product.id
    });
  }
}
