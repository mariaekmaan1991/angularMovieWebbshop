import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { ProductsService } from 'src/app/services/ProductsService/products.service';
import { MockProductService } from 'src/app/services/ProductsService/mock-product.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
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
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    // const spy =spyOn(component.)

    expect(component).toBeTruthy();
  });
});

/*
const spy = spyOn(component.outProduct, 'emit');

component.buttonInfo();

expect(spy).toHaveBeenCalled();*/
