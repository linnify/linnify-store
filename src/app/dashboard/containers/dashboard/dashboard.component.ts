import { Component, OnInit } from '@angular/core';
import {Product} from "../../../products/types/product.class";
import {ProductsService} from "../../../products/services/products.service";

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container">
      <div class="header">
        <h1>{{ title }}</h1>
        <h3>Buy our Digital EAU DE PERFUME</h3>
      </div>
      
      <div class="" *ngIf="cartItems">
        <h3> Items in cart: {{cartItems}} </h3>
      </div>

      <app-product 
        [products]="products" 
        (onBuy)="onBuy($event)"
      ></app-product>

    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Welcome to Linnify Store';
  products: Product[];
  cartItems: number = 0;

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onBuy(product: Product) {
    product.interest += 1;
  }
}
