import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import Order from 'src/app/models/Order';
import { IOrderService } from 'src/app/IServices/IOrderService';

@Injectable({
  providedIn: 'root',
})
export class OrderService implements IOrderService {
  OrderData = new Subject<Order[]>();
  o2;
  n: number;
  //order: Order[] = [];
  constructor(private Http: HttpClient) {}

  getOrderService() {
    this.Http.get(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=18'
    ).subscribe((data: any) => {
      this.OrderData.next(data);
      console.log(data, ' get order');
    });
  }

  createOrder(newOrder: Order) {
    this.Http.post(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders/',
      newOrder,
      { headers: { 'content-type': 'application/json' } }
    ).subscribe((data) => {
      console.log(data, 'resulte');
    });
    console.log(newOrder, 'newOrder');
  }

  getAdmin() {
    this.Http.get(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=18'
    ).subscribe((data: any) => {
      this.OrderData.next(data);
      console.log(data);
    });
  }

  adminRemoveOrder(order) {
    this.Http.delete(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' +
        order.id
    ).subscribe((data: any) => {
      console.log('ta bort', data);
    });
  }
}
