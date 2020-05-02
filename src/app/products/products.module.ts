import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from "./containers/products/product.component";
import {PricePipe} from "../shared";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    PricePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
