import {Component, OnInit} from "@angular/core";
import {ProductsService} from "./services/products.service";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <div class="header">
        <h1>{{ title }}</h1>
        <h3>Buy our Digital EAU DE PERFUME</h3>
      </div>

      <app-products></app-products>

    </div>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit{
  title = "Welcome to Linnify Store";

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.productsService.getProducts()
  }
}
