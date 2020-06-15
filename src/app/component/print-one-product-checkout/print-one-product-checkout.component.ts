import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-print-one-product-checkout',
  templateUrl: './print-one-product-checkout.component.html',
  styleUrls: ['./print-one-product-checkout.component.scss'],
})
export class PrintOneProductCheckoutComponent implements OnInit {
  @Input() singelproduct: Product;
  @Output() remove2 = new EventEmitter<Product>();

  ngOnInit(): void {}

  remove() {
    this.remove2.emit(this.singelproduct);
  }
}
