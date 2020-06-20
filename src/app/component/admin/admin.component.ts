import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import Order from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';
import { OrderService } from 'src/app/services/OrderService/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  //OrderData = new Subject<Order[]>();
  order: Order;

  OrderList: Order[] = [];
  constructor(private serviceOrder: OrderService) {}

  ngOnInit(): void {
    this.serviceOrder.OrderData.subscribe((data: Order[]) => {
      console.log(data);
      this.OrderList = data;
    });

    this.serviceOrder.getAdmin();
  }

  adminRemoveOrder(order: Order) {
    this.serviceOrder.adminRemoveOrder(order);
    let indexNumber: number = this.OrderList.indexOf(order);
    let removeItem = this.OrderList.splice(indexNumber, 1);
    console.log(removeItem);
  }
}
