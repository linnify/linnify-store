import {Injectable} from "@angular/core";
import {Product} from "../types/product.class";

@Injectable()
export class ProductsService {
  cartItems: Product[];

  constructor() {}

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  removeFromCart(product: Product) {
    this.cartItems.pop();
  }

  getCartItems() {
    return this.cartItems;
  }

  getProducts() {
    return [
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
