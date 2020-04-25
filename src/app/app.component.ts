import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="header">
        <h1>{{ title }}</h1>
        <h3>Buy our Digital EAU DE PERFUME</h3>
      </div>

      <h3> Our Products </h3>

      <div *ngFor="let product of products">
        <img [src]="product.image" style="width: 100%; align-self: center;" class="image">
        <div style="width: 200px; float: left;" class="products" [ngClass]="{'available': product.available, 'not-available': !product.available}">
          {{ product.name }}
        </div>
        <div style="width: 200px; float: left;" class="products" [ngClass]="{'available': product.available, 'not-available': !product.available}">
          {{ product.price | pricey: 10 }}
        </div>
        <div style="width: 50px; float: left;" class="products" [ngClass]="{'available': product.available, 'not-available': !product.available}" >
          {{ product.numberOfBuys }}
        </div>

        <button *ngIf="product.available" (click)="onBuyPressed(product)" style="float: left;">Buy</button>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Welcome to Linnify Store';

  products = [
    {
      id: 1,
      name: 'Linnify Fragrance',
      price: 49.99,
      image: 'https://storage.googleapis.com/company-app-1276d.appspot.com/linnify-store/1.png',
      available: true,
      numberOfBuys: 0
    },
    {
      id: 2,
      name: 'Linnify Digital Perfume',
      price: 90,
      image: 'https://storage.googleapis.com/company-app-1276d.appspot.com/linnify-store/2.png',
      available: true,
      numberOfBuys: 0
    },
    {
      id: 3,
      name: 'Linnify Experience',
      price: 150.4,
      image: 'https://storage.googleapis.com/company-app-1276d.appspot.com/linnify-store/3.png',
      available: false,
      numberOfBuys: 0
    },
    {
      id: 4,
      name: 'Linnify Perfume for Men',
      price: 74.4,
      image: 'https://storage.googleapis.com/company-app-1276d.appspot.com/linnify-store/4.png',
      available: true,
      numberOfBuys: 0
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onBuyPressed(product) {
    product.numberOfBuys += 1;
  }
}
