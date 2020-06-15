import { Injectable } from '@angular/core';
import { IProductService } from 'src/app/IServices/IProductService';
import { Product } from 'src/app/models/Product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockProductService implements IProductService {
  productData = new Subject<Product[]>();
  constructor() {}
  product: Product[] = [
    {
      id: 76,
      name: 'The Dark Knight',
      description:
        'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
      price: 199,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      year: 2008,
      added: '2016-01-05T00:00:00',
      quantity: 1,
      productCategory: [
        { categoryId: 5, category: null },
        { categoryId: 6, category: null },
      ],
    },

    {
      id: 74,
      name: 'Harry Potter',
      description:
        'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
      price: 123,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      year: 2009,
      added: '2016-01-05T00:00:00',
      quantity: 1,
      productCategory: [
        { categoryId: 5, category: null },
        { categoryId: 6, category: null },
      ],
    },
    {
      id: 77,
      name: 'Tårtgeneralen',
      description:
        'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
      price: 129,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      year: 2009,
      added: '2016-01-05T00:00:00',
      quantity: 1,
      productCategory: [
        { categoryId: 5, category: null },
        { categoryId: 6, category: null },
      ],
    },
  ];

  getData(): void {
    this.productData.next(this.product);
  }
}
