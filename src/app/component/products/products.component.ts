import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/ProductsService/products.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList2: Product[] = [];
  productCartList: Product[] = [];
  totalAmount: number = 0;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.productData.subscribe((data: Product[]) => {
      console.log(data);
      this.productList2 = data;
    });

    this.productsService.getData();
  }

  selectProduct(p: Product) {
    // console.log(p);
  }

  addProductCart(p: Product) {
    p.quantity = 1;
    let productCart = new Product();
    productCart.name = p.name;
    productCart.id = p.id;
    productCart.price = p.price;
    productCart.quantity = p.quantity;
    productCart.imageUrl = p.imageUrl;

    this.productCartList.push(productCart);

    this.counterProducts();
    console.log(this.productCartList.length, 'length');
  }

  counterProducts() {
    localStorage.setItem('key', JSON.stringify(this.productCartList || []));
    this.totalAmount = 0;
    for (let i: number = 0; i < this.productCartList.length; i++) {
      this.totalAmount += this.productCartList[i].quantity;
    }
  }
}
