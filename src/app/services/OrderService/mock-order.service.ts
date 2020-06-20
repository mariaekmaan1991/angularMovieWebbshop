import { Injectable } from '@angular/core';
import { IOrderService } from 'src/app/IServices/IOrderService';
import { Subject } from 'rxjs';
import Order, { OrderRow } from 'src/app/models/Order';

@Injectable({
  providedIn: 'root',
})
export class MockOrderService implements IOrderService {
  constructor() {}
  createOrder(newOrder: Order): void {
    throw new Error('Method not implemented.');
  }
  adminRemoveOrder(order: any): void {
    throw new Error('Method not implemented.');
  }

  OrderData: Subject<Order[]> = new Subject<Order[]>();

  orderDate = new Date();
  private order: Order[] = [
    {
      id: 2792,
      companyId: 0,
      created: this.orderDate,
      createdBy: null,
      paymentMethod: null,
      totalPrice: 199,
      status: 0,
      orderRows: [],
    },
  ];

  getAdmin(): void {
    this.OrderData.next(this.order);
  }

  getOrderService(): void {}
}
