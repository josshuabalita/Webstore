import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './cart.component.html',
})

export class CartComponent {
  cart: Cart = {
    items: [{
      product: 'https://via.placeholder.com/150',
      name: 'snickers',
      price: 150,
      quantity: 1,
      id: 1,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'snickers',
      price: 150,
      quantity: 4,
      id: 2,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'snickers',
      price: 150,
      quantity: 2,
      id: 3,
    }]
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(private cartService: CartService) { } 

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);  
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);  
  }

}
