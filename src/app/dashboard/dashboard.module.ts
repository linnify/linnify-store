import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardComponent} from "./containers/dashboard/dashboard.component";
import {ProductsModule} from "../products/products.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProductsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
