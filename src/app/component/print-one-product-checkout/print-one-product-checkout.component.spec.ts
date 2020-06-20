import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintOneProductCheckoutComponent } from './print-one-product-checkout.component';
import { MockProductService } from 'src/app/services/ProductsService/mock-product.service';
import { ProductsService } from 'src/app/services/ProductsService/products.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { OrderService } from 'src/app/services/OrderService/order.service';
import { MockOrderService } from 'src/app/services/OrderService/mock-order.service';

describe('PrintOneProductCheckoutComponent', () => {
  let component: PrintOneProductCheckoutComponent;
  let fixture: ComponentFixture<PrintOneProductCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrintOneProductCheckoutComponent],
      providers: [
        { provide: OrderService, useClass: MockOrderService },

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
    fixture = TestBed.createComponent(PrintOneProductCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should spy on remove2', () => {
    const spy = spyOn(component.remove2, 'emit');
    component.remove();

    expect(spy).toHaveBeenCalled();
  });
});
