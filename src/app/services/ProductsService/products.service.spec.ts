import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { ProductsService } from './products.service';

import { MockProductService } from './mock-product.service';
import { ProductsComponent } from 'src/app/component/products/products.component';

describe('ProductsService', () => {
  let service: ProductsService;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        ProductsComponent,
        {
          provide: ProductsService,
          useClass: MockProductService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*
  it('should data be a json object5', () => {
    let hjhjj;
    service.productData.subscribe((data: any) => {
      console.log(data);

     hjhjj= this.productData.next(data)

    });
    expect(hjhjj).toContain( {'id': '76',
     'name': 'The Dark Knight',
     ' description':'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice','price': '199',
     'imageUrl':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
     'year': '2008',
      'added': '2016-01-05T00:00:00',
      'productCategory': [
        { 'categoryId':'5', 'category': 'null' },
        {'categoryId': '6', 'category': 'null '},
      ]
    })
  });*/

  /*
  it('should data be a json object32', () => {
    let hej: Product

    expect(service.getData()).toBe(hej)
  });
*/
});
