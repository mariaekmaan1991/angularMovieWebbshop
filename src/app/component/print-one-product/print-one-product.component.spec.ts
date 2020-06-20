import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintOneProductComponent } from './print-one-product.component';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/ProductsService/products.service';
import { MockProductService } from 'src/app/services/ProductsService/mock-product.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('PrintOneProductComponent', () => {
  let component: PrintOneProductComponent;
  let fixture: ComponentFixture<PrintOneProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrintOneProductComponent],
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
    fixture = TestBed.createComponent(PrintOneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send the value to the parent', () => {
    const spy = spyOn(component.outProduct, 'emit');

    component.buttonInfo();

    expect(spy).toHaveBeenCalled();
  });

  it('should send the value to the parent2', () => {
    const spy = spyOn(component.cart, 'emit');

    component.buttonCart();

    expect(spy).toHaveBeenCalled();
  });
});

describe('Print todo with parent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, PrintOneProductComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the correct text', () => {
    expect(fixture.nativeElement.querySelector('h4').innerHTML).toEqual(
      'The Dark Knight'
    );
  });

  it('should render the correct text', () => {
    let divTag = fixture.nativeElement.querySelector('div');

    expect(divTag.getElementsByClassName('productPrice')[0].innerHTML).toEqual(
      '199'
    );
  });

  @Component({
    selector: 'app-host',
    template:
      '<app-print-one-product [product]="pHostC"></app-print-one-product>',
  })
  class HostComponent {
    pHostC: Product = {
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
  }
});
