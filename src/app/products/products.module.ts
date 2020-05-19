import { NgModule } from '@angular/core';

import { ProductComponent } from "./components/products/product.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {SharedModule} from "../shared/shared.module";
import {ProductsService} from "./services/products.service";

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
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
