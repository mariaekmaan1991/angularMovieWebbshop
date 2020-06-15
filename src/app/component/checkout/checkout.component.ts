import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

import { OrderService } from 'src/app/services/OrderService/order.service';
import Order, { OrderRow } from 'src/app/models/Order';

import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  productCart = new Subject<Product[]>();
  orderCart = new Subject<Order[]>();
  ProductCart: Product[];
  totalAmount: number;
  totalPrice: number;
  addedBy: string;
  productId: number;

  cartlocalStorage: Product[] = [];
  productListItem: Product[] = [];

  orderList: Order[] = [];

  constructor(private oService: OrderService, private fb: FormBuilder) {}

  userProfile = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      zip: [''],
      city: [''],
    }),
  });

  ngOnInit(): void {
    this.cartlocalStorage = JSON.parse(localStorage.getItem('key'));

    this.oService.OrderData.subscribe((data: Order[]) => {
      console.log(data);
      this.orderList = data;
    });
    this.oService.getOrderService();
    this.counter();
  }

  createOder() {
    let detailsProducts = this.cartlocalStorage.map((m) => {
      let i = new OrderRow();
      i.productId = m.id;
      i.amount = m.quantity;
      i.totalPrice = m.price;

      return i;
    });

    console.log(detailsProducts);
    let dateNow: string = Date();
    let neworder = new Order();
    neworder.id;
    neworder.created = dateNow;
    neworder.totalPrice = this.totalPrice;
    neworder.orderRows = detailsProducts;
    neworder.createdBy = this.addedBy;
    console.log(neworder);
    this.oService.createOrder(neworder);
  }

  counter() {
    this.totalAmount = 0;
    this.totalPrice = 0;
    for (let i: number = 0; i < this.cartlocalStorage.length; i++) {
      this.totalAmount += this.cartlocalStorage[i].quantity;
      this.totalPrice =
        this.cartlocalStorage[i].quantity * this.cartlocalStorage[i].price;

      console.log(this.totalAmount, this.productId, this.totalPrice);
    }
  }

  saveUserProfile() {
    let saveProfile = this.userProfile.value;
    let orderName: string = saveProfile.firstName;
    let orderlastName: string = saveProfile.lastName;
    this.addedBy = orderName + ' ' + orderlastName;
    console.log(this.addedBy);
  }

  get firstName() {
    return this.userProfile.get('firstName');
  }

  get lastName() {
    return this.userProfile.get('lastName');
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
  }

  localStorageClear() {
    localStorage.setItem('key', JSON.stringify(this.cartlocalStorage || []));
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
