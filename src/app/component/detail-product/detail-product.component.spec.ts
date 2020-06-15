import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductComponent } from './detail-product.component';
import { ProductsService } from 'src/app/services/ProductsService/products.service';

import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MockProductService } from 'src/app/services/ProductsService/mock-product.service';

describe('DetailProductComponent', () => {
  let fixture: ComponentFixture<DetailProductComponent>;
  let component: DetailProductComponent;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [DetailProductComponent],
      providers: [
        { provide: ProductsService, useClass: MockProductService },

        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 76 }),
          },
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DetailProductComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        done();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
