import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../types/classes/product.class";

@Component({
  selector: 'app-product-form',
  template: `
    <form [formGroup]="form">

      <input type="text" placeholder="name" [formControl]="nameControl"/>

      <input type="number" placeholder="price" [formControl]="priceControl"/>

      <input type="text" placeholder="image" [formControlName]="'image'"/>

    </form>

    <button [disabled]="form.invalid" (click)="onSubmit()"> Submit</button>
  `,
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;
  // To update a product
  @Input() product: Product;
  @Output() save = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.product ? this.product.name : 'Linnify', [Validators.required]),
      price: new FormControl(this.product ? this.product.price : null, [Validators.required]),
      image: new FormControl('https://frankfurt.apollo.olxcdn.com:443/v1/files/soi4ssyyqt0m3-RO/image;s=1000x700', [Validators.required])
    });


    if (this.product) {
      this.nameControl.setValue(this.product.name);
      this.priceControl.setValue(this.product.price);
      this.imageControl.setValue(this.product.image);
    }

    /**
     * When one of the formControls from the formGroup is changed, this subscription
     * is triggered
     */
    this.form.valueChanges.subscribe(value => {
      console.log('Form Value', value)
    });

    /**
     * When the value of name will be changed, this subscription will be emitted
     */
    this.nameControl.valueChanges.pipe().subscribe(value => {
      console.log('Name value ', value)
    })
  }

  get priceControl() {
    return this.form.get('price') as FormControl
  }

  get nameControl() {
    return this.form.get('name') as FormControl
  }

  get imageControl() {
    return this.form.get('image') as FormControl
  }

  onSubmit() {
    const product = new Product();
    product.price = this.priceControl.value;
    product.name = this.nameControl.value;
    product.image = this.imageControl.value;

    this.save.emit(this.form.value);
  }

}
