import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MaterialModule } from './material.module';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from "./components/header/header.component";
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './services/cart.service';
import { Cart } from './models/cart.model';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,
    HeaderComponent,
    HomeComponent,
    FiltersComponent,
    CartComponent,
    HttpClientModule
],
  template: `
  <app-header [cart]="cart"></app-header>
  <router-outlet></router-outlet>
  `,
  styles: [],
  providers: [CartService, StoreService],
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
