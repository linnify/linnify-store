import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PricePipe} from "./pipes";

@NgModule({
  declarations: [
    PricePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    PricePipe
  ]
})
export class SharedModule { }
