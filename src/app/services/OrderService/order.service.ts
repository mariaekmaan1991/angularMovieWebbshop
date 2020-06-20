import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import Order from 'src/app/models/Order';
import { IOderService } from 'src/app/IServices/IUserProfileService';

@Injectable({
  providedIn: 'root',
})
export class OrderService implements IOderService {
  OrderData = new Subject<Order[]>();
  order: Order[] = [];
  constructor(private Http: HttpClient) {}

  getOrderService() {
    this.Http.get(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=18'
    ).subscribe((data: any) => {
      this.OrderData.next(data);
      console.log(data);
    });
  }

  createOrder(newOrder: Order) {
    this.Http.post(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?',
      newOrder
    );
  }

  /*getAdmin() {
    this.Http.get(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders+companyId=18'
    ).subscribe((data: any) => {
      this.OrderData.next(data);
      console.log(data);
    });
  }*/
}
