import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

import { ProductsService } from 'src/app/services/ProductsService/products.service';
import { MockProductService } from 'src/app/services/ProductsService/mock-product.service';
import { Product } from 'src/app/models/Product';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
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
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should control productCartList length', () => {
    let productCartListInTheBeginning = component.productCartList.length;

    let productItem: Product = {
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
    };
    component.addProductCart(productItem);

    const numberOfproductCartListTheEnd = component.productCartList.length;

    expect(numberOfproductCartListTheEnd).toBeTruthy(
      productCartListInTheBeginning
    );
  });
});

/*istället för använda ProductsService så gör uneClass gör att man använder MockProductService */
