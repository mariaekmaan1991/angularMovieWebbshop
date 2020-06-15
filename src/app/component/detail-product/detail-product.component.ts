import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/ProductsService/products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
  id: number;
  productList: Product;
  setCartLocalStorage: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductsService
  ) {}

  ngOnInit(): void {
    localStorage.setItem('key', JSON.stringify(this.setCartLocalStorage || []));
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });

    this.service.productData.subscribe((data: Product[]) => {
      console.log(data);

      this.productList = data.find((p: Product) => p.id == this.id);
      console.log(this.productList);
    });

    this.service.getData();
  }

  buttonBuy(e) {
    localStorage.setItem('key', JSON.stringify(this.setCartLocalStorage || []));
    console.log(e);
    this.setCartLocalStorage.push(e);
  }
}
