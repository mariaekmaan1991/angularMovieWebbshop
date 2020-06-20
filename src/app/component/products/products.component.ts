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
  product: Product;
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
    let productToCart = new Product();
    productToCart.name = p.name;
    productToCart.id = p.id;
    productToCart.productCategory = p.productCategory;
    productToCart.year = p.year;
    productToCart.description = p.description;
    productToCart.price = p.price;
    productToCart.quantity = p.quantity;
    productToCart.imageUrl = p.imageUrl;

    this.productCartList.push(productToCart);

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

/* fel i test
just nu blir detail och och produkter två olika listor i checkout hur
jag upplever att den inte upptater order som visar på admin
och att den tar inte bort helt på order när man tycker på ta bort
*/
