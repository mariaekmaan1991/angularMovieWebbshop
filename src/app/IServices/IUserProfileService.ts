import { Subject } from 'rxjs';
import Order from '../models/Order';

export class IOderService {
  getOrderService(): void {}
  OrderData = new Subject<Order[]>();
}
