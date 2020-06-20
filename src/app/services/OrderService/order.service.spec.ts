import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { OrderService } from './order.service';
import { CheckoutComponent } from 'src/app/component/checkout/checkout.component';
import { MockOrderService } from './mock-order.service';

describe('OrderService', () => {
  let service: OrderService;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      providers: [
        CheckoutComponent,
        {
          provide: OrderService,
          useClass: MockOrderService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
