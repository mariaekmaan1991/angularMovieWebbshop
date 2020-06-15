import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product } from '../../models/Product';
import { IProductService } from '../../IServices/IProductService';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements IProductService {
  productData = new Subject<Product[]>();

  constructor(private Http: HttpClient) {}

  getData(): void {
    this.Http.get(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
    ).subscribe((data: any) => {
      console.log(data);
      /* let productsApi: Product[] = data.map((m) => {
        const movie = new Product();
        movie.id = m.id;
        movie.name = m.name;
        movie.description = m.description;
        movie.imageUrl = m.imageUrl;
        movie.year = m.year;
        movie.price = m.price;
        movie.quantity = m.quantity;

        return movie;
      });*/
      this.productData.next(data);
    });
  }
}
