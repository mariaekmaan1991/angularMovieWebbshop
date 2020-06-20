import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

import { OrderService } from 'src/app/services/OrderService/order.service';

import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { Subject } from 'rxjs';
import Order, { OrderRow } from 'src/app/models/Order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  productCart = new Subject<Product[]>();
  ProductCart: Product[];
  totalAmount: number;
  totalPrice: number;
  UserEmail: string;
  products;
  detailsProducts;
  cartlocalStorage: Product[] = [];
  orderRows: Order[] = [];
  orderList: Order[] = [];

  constructor(private serviceOrder: OrderService, private fb: FormBuilder) {}

  userProfile = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
    }),
  });

  ngOnInit(): void {
    this.cartlocalStorage = JSON.parse(localStorage.getItem('key'));

    this.serviceOrder.OrderData.subscribe((data: Order[]) => {
      console.log(data);
      this.orderList = data;
    });
    this.serviceOrder.getOrderService();
    this.counter();
  }

  userButtonOrder() {
    //  let orderDate: number = new Date();
    const orderDate = new Date();
    let card: string = 'card';

    let newOrder: Order = {
      id: 0,
      companyId: 18,
      created: orderDate,
      createdBy: this.UserEmail,
      orderRows: [],
      paymentMethod: card,
      totalPrice: this.totalPrice,
      status: 2,
    };

    let detailsProducts = this.cartlocalStorage.map((m) => {
      let p = new OrderRow();

      p.productId = m.id;
      // p.product = null;
      p.amount = m.quantity;
      //p.orderId = m.id;
      //p.id = 9;

      return p;
    });
    console.log(detailsProducts, 'lista');

    detailsProducts.forEach((detailsProducts) => {
      newOrder.orderRows.push(detailsProducts);
    });

    console.log(newOrder, ' newOrder');
    this.serviceOrder.createOrder(newOrder);
    this.counter();
  }

  counter() {
    this.totalAmount = 0;
    this.totalPrice = 0;
    for (let i: number = 0; i < this.cartlocalStorage.length; i++) {
      this.totalAmount += this.cartlocalStorage[i].quantity;
      this.totalPrice +=
        this.cartlocalStorage[i].quantity * this.cartlocalStorage[i].price;
    }
    console.log(this.totalAmount, 'total', this.totalPrice);
  }

  saveButtonProfile() {
    let saveProfile = this.userProfile.value;
    this.UserEmail = saveProfile.email;

    console.log(this.UserEmail, saveProfile);
  }

  get firstName() {
    return this.userProfile.get('firstName');
  }

  get lastName() {
    return this.userProfile.get('lastName');
  }

  get email() {
    return this.userProfile.get('email');
  }
  get street() {
    return this.userProfile.get('street');
  }

  get zip() {
    return this.userProfile.get('street').get('zip');
  }

  removeCart(e: Product) {
    localStorage.setItem('key', JSON.stringify(this.cartlocalStorage || []));
    console.log(e);
    let indexNumber: number = this.cartlocalStorage.indexOf(e);
    this.cartlocalStorage.splice(indexNumber, 1);
    this.counter();
  }

  localStorageClear() {
    localStorage.setItem('key', JSON.stringify(this.cartlocalStorage));
    localStorage.clear();
  }
}

/* let productsApi: Product[] = data.map((m) => {
        const movie = new Product();
        movie.id = m.id;
        movie.name = m.name;
        movie.description = m.description;
        movie.imageUrl = m.imageUrl;
        movie.year = m.year;
        movie.price = m.price;
        movie.quantity = m.quantity;

        return movie;



/* compare(api) {
   let p: Product;
   for (let i = 0; i < this.cartlocalStorage.length; i++) {
     p = this.cartlocalStorage[i];
     if (p != api) {
       this.productCartList.push(p);
     }
   }

   return this.productCartList;
 }*/
/* let productsApi: Product[] = data.map((m) => {
        const movie = new Product();
        movie.id = m.id;
        movie.name = m.name;
        movie.description = m.description;
        movie.imageUrl = m.imageUrl;
        movie.year = m.year;
        movie.price = m.price;
        movie.quantity = m.quantity;

        return movie;



  caounter() {
    let p: Product;
    for (let i = 0; i < this.cartlocalStorage.length; i++) {
      p = this.cartlocalStorage[i];
    }
  }*/
