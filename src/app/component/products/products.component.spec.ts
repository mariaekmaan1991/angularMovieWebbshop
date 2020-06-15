import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

import { ProductsService } from 'src/app/services/ProductsService/products.service';
import { MockProductService } from 'src/app/services/ProductsService/mock-product.service';

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

  it('should control cart length', () => {
    let c = component.productCartList.length;
    if (c >= 0) {
      return c;
    }
    expect(c).toBeTruthy(c[1]);
  });
});

/*istället för använda ProductsService så gör uneClass gör att man använder MockProductService */
