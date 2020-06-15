import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundComponent } from './notfound.component';
import { ProductsService } from 'src/app/services/ProductsService/products.service';
import { MockProductService } from 'src/app/services/ProductsService/mock-product.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotfoundComponent],
      providers: [
        { provide: ProductsService, useClass: MockProductService },

        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 76 }),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
