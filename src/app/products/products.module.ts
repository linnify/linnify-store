import { NgModule } from '@angular/core';

import { ProductComponent } from "./containers/products/product.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
