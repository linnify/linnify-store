import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Observable, Subscription} from "rxjs";
import {filter, map, switchMap, tap} from "rxjs/operators";
import {Product} from "../../types/classes/product.class";

@Component({
  selector: 'app-products',
  template: `
    <h3> Our Products </h3>

    <!-- TODO create a product-item component to render the product -->

    <div *ngFor="let product of products$ | async">
      <img src="{{ product.image }}" style="width: 100px;"/>
      {{ product.name }} {{ product.price }} $
    </div>

    <div *ngIf="loading">
      Loading ....
    </div>

    <h3>Total price: {{ total }} $</h3>
    <h4>Number of products {{ numberOfProducts }}</h4>

    <app-product-form
      (save)="onSave($event)"
    ></app-product-form>

  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  total: number = 0;
  loading: boolean = false;
  numberOfProducts: number = 0;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.products$ = this.productsService.getProducts()
      .pipe(
        tap(products => products.forEach(product => this.total += product.price)),
        tap(products => this.numberOfProducts = products.length),
        tap(() => this.loading = false),
        map(products => products.filter(product => product.price >= 100))
      )
  }

  onSave(product: Product) {
    this.productsService.add(product);
  }

  onRemove(product: Product) {
    // TODO remove the product
  }
}
