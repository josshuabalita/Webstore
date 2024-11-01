import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../../material.module';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule
  ],
  templateUrl: './product-box.component.html', 
})

export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  product: Product | undefined = {
    id: 1,
    title: 'Snickers',
    price: 150,
    category: 'shoes',
    description: 'Description',
    image: "https://via.placeholder.com/150",
  };

  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
