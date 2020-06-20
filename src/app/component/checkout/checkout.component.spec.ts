import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { ProductsService } from 'src/app/services/ProductsService/products.service';
import { MockProductService } from 'src/app/services/ProductsService/mock-product.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MockOrderService } from 'src/app/services/OrderService/mock-order.service';
import { OrderService } from 'src/app/services/OrderService/order.service';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let fb: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [CheckoutComponent],
      providers: [
        {
          provide: OrderService,
          useClass: MockOrderService,
        },

        {
          provide: ActivatedRoute,
          FormBuilder,
          useValue: fb,
          params: of({ id: 76 }),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    component.userProfile = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        zip: ['', Validators.required],
        city: ['', Validators.required],
      }),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should create', () => {
    const MockOrderService = {
      getOrderService: () => {
        return { subscribe: () => {} };
      },
    };
    spyOn(MockOrderService, 'getOrderService').and.returnValue({
      subscribe: () => {},
    });
    expect(component).toBeTruthy();
  });*/

  it('should create a form using formbuilder', () => {
    expect(component.userProfile instanceof FormGroup).toBeTruthy();
  });
});

//https://stackoverflow.com/questions/43796727/cannot-read-property-subscribe-of-angular-test-mock

/*
const spy = spyOn(component.outProduct, 'emit');

component.buttonInfo();

expect(spy).toHaveBeenCalled();*/
