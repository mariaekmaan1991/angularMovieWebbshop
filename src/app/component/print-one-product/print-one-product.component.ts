import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-print-one-product',
  templateUrl: './print-one-product.component.html',
  styleUrls: ['./print-one-product.component.scss'],
})
export class PrintOneProductComponent implements OnInit {
  @Input() product: Product;
  @Output() outProduct = new EventEmitter<Product>();
  @Output() cart = new EventEmitter<Product>();

  constructor() {}

  buttonInfo() {
    this.outProduct.emit(this.product);
  }

  buttonCart() {
    this.cart.emit(this.product);
  }
  ngOnInit(): void {}
}
