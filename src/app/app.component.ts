import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MaterialModule } from './material.module';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from "./components/header/header.component";
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './services/cart.service';
import { Cart } from './models/cart.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,
    HeaderComponent,
    HomeComponent,
    FiltersComponent,
    CartComponent
],
  template: `
  <app-header [cart]="cart"></app-header>
  <router-outlet></router-outlet>
  `,
  styles: [],
  providers: [CartService],
})
export class AppComponent implements OnInit{
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }

}
