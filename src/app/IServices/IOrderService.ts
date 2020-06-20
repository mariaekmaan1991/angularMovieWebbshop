import { Subject } from 'rxjs';
import Order from '../models/Order';

export class IOrderService {
  getOrderService(): void {}

  OrderData = new Subject<Order[]>();
  getAdmin(): void {}

  createOrder(newOrder: Order) {}

  adminRemoveOrder(order) {}
}
