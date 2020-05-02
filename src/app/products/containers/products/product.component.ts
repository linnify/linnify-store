import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../types/product.class";

@Component({
  selector: 'app-product',
  template: `
    <h3> Our Products </h3>

    <div class="overview" *ngFor="let product of products">
      <app-product-details [product]="product"></app-product-details>
      
      <div>
        <button class="buyButton" *ngIf="product.available" (click)="onProductBuy(product)" > BUY NOW</button>
        <div class="interest" *ngIf="product.interest > 2">
          {{product.interest}} people already purchased this product!
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  products: Product[];

  constructor() { }

  ngOnInit(): void {
  }

  onProductBuy(product: any) {
    product.interest += 1;
  }
}
