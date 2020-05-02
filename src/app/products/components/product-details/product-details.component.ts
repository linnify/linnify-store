import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../types/product.class";

@Component({
  selector: 'app-product-details',
  template: `
    <div class="card">
      <div>
        <img class="image" [src]="product.image">
      </div>
      
      <div>
        <div >
          {{product.name}} - {{product.price | price: 10}} $
        </div>
        <div
          [ngClass]="{
                'available': product.available,
                'notAvailable': !product.available
              }"
        >
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  product: Product;

  constructor() { }

  ngOnInit(): void {
  }
}
