import { Component, OnInit } from '@angular/core';
import {Product} from "../../../products/types/product.class";

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container">
      <div class="header">
        <h1>{{ title }}</h1>
        <h3>Buy our Digital EAU DE PERFUME</h3>
      </div>

      <app-product [products]="products" ></app-product>

    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Welcome to Linnify Store';
  products: Product[];

  constructor() {
  }

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Linnify Fragrance',
        price: 49.99,
        image: 'https://storage.googleapis.com/company-app-1276d.appspot.com/linnify-store/1.png',
        available: true,
        interest: 0
      },
      {
        id: 2,
        name: 'Linnify Digital Perfume',
        price: 90,
        image: 'https://storage.googleapis.com/company-app-1276d.appspot.com/linnify-store/2.png',
        available: true,
        interest: 0
      },
      {
        id: 3,
        name: 'Linnify Experience',
        price: 150.4,
        image: 'https://storage.googleapis.com/company-app-1276d.appspot.com/linnify-store/3.png',
        available: false,
        interest: 0
      },
      {
        id: 4,
        name: 'Linnify Perfume for Men',
        price: 74.4,
        image: 'https://storage.googleapis.com/company-app-1276d.appspot.com/linnify-store/4.png',
        available: true,
        interest: 0
      }
    ]
  }

}
