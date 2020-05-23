import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../types/classes/product.class";
import {BehaviorSubject, Observable} from "rxjs";
import {switchMap, tap} from "rxjs/operators";

@Injectable()
export class ProductsService {

  private products = new BehaviorSubject<Product[]>(null);

  constructor(private httpClient: HttpClient) {
    console.log('Products service init')
  }

  get products$(): Observable<Product[]> {
    return this.products.asObservable();
  }

  getProducts() {
    return this.httpClient.get<Product[]>("http://www.mocky.io/v2/5ec8e9d72f00001744db70cb")
      .pipe(
        tap(products => this.products.next(products)),
        switchMap(products => this.products.asObservable()),
      )
  }

  add(product: Product) {
    // TODO Call the API to save the product;

    const currentProducts = this.products.getValue();
    currentProducts.push(product);
    this.products.next(currentProducts);

  }

  remove(product: Product) {

  }
}
