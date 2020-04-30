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
        <img src="{{ product.name }}"/>
        {{ product.name }} {{ product.price }} $
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
      available: true
    },
    {
      id: 2,
      name: 'Linnify Digital Perfume',
      price: 90,
      image: 'https://storage.googleapis.com/company-app-1276d.appspot.com/linnify-store/2.png',
      available: true
    },
    {
      id: 3,
      name: 'Linnify Experience',
      price: 150.4,
      image: 'https://storage.googleapis.com/company-app-1276d.appspot.com/linnify-store/3.png',
      available: false
    },
    {
      id: 4,
      name: 'Linnify Perfume for Men',
      price: 74.4,
      image: 'https://storage.googleapis.com/company-app-1276d.appspot.com/linnify-store/4.png',
      available: true
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
